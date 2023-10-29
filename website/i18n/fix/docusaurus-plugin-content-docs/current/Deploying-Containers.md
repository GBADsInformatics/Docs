---
id: Deploying-Containers

title: "Bereitstellen von Containern in AWS ECS"
author: "William Fitzjohn"
date: "24/06/2023"
---
# Bereitstellung von Docker-Containern auf AWS ECS Fargate

Diese Dokumentation bietet eine Schritt-für-Schritt-Anleitung zum Erstellen einer Aufgabendefinition und eines Dienstes, zum Anhängen an einen Application Load Balancer (ALB) zum Veröffentlichen im Internet.

## Inhaltsverzeichnis
- [Bereitstellung von Docker-Containern auf AWS ECS Fargate](#bereitstellung-von-docker-containern-auf-aws-ecs-fargate)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [Überblick](#überblick)
  - [Voraussetzungen](#voraussetzungen)
  - [Erstellen Sie eine Aufgabendefinition](#erstellen-sie-eine-aufgabendefinition)
  - [Erstellen Sie einen ECS-Dienst](#erstellen-sie-einen-ecs-dienst)
  - [Korrigieren Sie Ihre Gesundheitschecks](#korrigieren-sie-ihre-gesundheitschecks)
  - [Überprüfen Sie Ihre Anwendung](#überprüfen-sie-ihre-anwendung)


## Überblick
Hier ist ein Diagramm, das die Architektur erklärt, der wir folgen werden:
<div style={{ width: '100%' }}>
<iframe src="https://drive.google.com/file/d/18n2dxTfz5svM3HqqrfcEQ2qbEsvkI2oM/preview" width="100%" height="500px"></iframe>
</div>

Sie können sehen, dass unsere Docker-Container über die Aufgabendefinition in AWS gezogen und in einen Service umgewandelt werden. Damit die Nutzer unsere Dienste erreichen, müssen wir lediglich eine neue Zielgruppe zu unserem bestehenden Load Balancer hinzufügen.

## Voraussetzungen<a name="prerequisites"></a>
Bevor Sie mit diesen Schritten fortfahren, stellen Sie sicher, dass Sie über Folgendes verfügen:

– Ein AWS-Konto mit den erforderlichen Berechtigungen zum Erstellen von ECS-Ressourcen, zum Hinzufügen von Zielgruppen und zum Ändern von Lastausgleichsdiensten.
- Habe einen Docker-Container aus unserem vorherigen Leitfaden erstellt und ihn auf DockerHub veröffentlicht.

## Erstellen Sie eine Aufgabendefinition<a name="create-a-task-definition"></a>
1. Navigieren Sie in AWS zu Amazon Elastic Container Service > Aufgabendefinition > Neue Aufgabendefinition erstellen
2. Aufgabenname: Wählen Sie etwas Beschreibendes wie „metadata-api-task“ oder „population-dash-task“.
3. Container: Erstellen Sie eine Containerdefinition
1. Containername: Bsp. „Metadaten-API-Container“.
2. Bild-URI: Ihr DockerHub-Bild-URI, z. `gbadsinformatics/meta-api:latest`
3. Portzuordnung: Fügen Sie hier Ihre exponierten Ports hinzu, z. TCP auf Port 80 (http)\
Stellen Sie sicher, dass Sie http; Unser Load Balancer fügt später https für Sie hinzu.
4. Umgebungsvariablen: Dies sind die Variablen, auf die in Docker-Containern verwiesen wird. Für Dashboards verwenden wir „DASH_BASE_URL“, um den URL-Pfad für das Dashboard festzulegen, z. B. „/dashboards/population“. Auf diese Variablen muss in Ihrem Code verwiesen werden. Es wird nicht automatisch funktionieren. Andere Anwendungen, die wir haben, verwenden Umgebungsvariablen, um geheime Anmeldeinformationen zu übergeben.
4. Umgebung konfigurieren: Ressourcen
1. Ändern Sie die Ressourcen: Normalerweise legen wir jeden Container auf 1 vCPU und 2 GiB Arbeitsspeicher fest
2. Aufgabenrolle: auf „ecsTaskExecutionRole“ setzen
3. Behalten Sie die Speicherung und Protokollierung als Standard bei
5. Überprüfen und erstellen Sie abschließend Ihre Aufgabendefinition.

## Erstellen Sie einen ECS-Dienst<a name="create-an-ecs-service"></a>
1. Gehen Sie zurück zum Cluster und klicken Sie auf „Neuen Dienst erstellen“.
2. Bereitstellungskonfiguration:
1. Stellen Sie sicher, dass Sie einen Dienst ausgewählt haben.
2. Wählen Sie Familie und wählen Sie Ihre neue Aufgabendefinition.
3. Dienstname: z. B. „metadata-api-service“.
3. Vernetzung:
1. Stellen Sie sicher, dass die Standard-VPC ausgewählt ist und alle drei Subnetze ausgewählt sind.
2. Wählen Sie eine Sicherheitsgruppe
- „Standard“ entfernen
- „GBADs-Dashboard-LB-SecurityGroup“ hinzufügen (Trotz des Namens wird dies für alle Container verwendet, nicht nur für Dashboards)
4. Lastausgleich:
1. Wählen Sie „Vorhandenen Load Balancer verwenden“.
2. Wählen Sie „Dashboards-ALB“ (dies wird für alle Container verwendet, nicht nur für Dashboards)
3. Wählen Sie „Vorhandenen Listener verwenden“.
4. Wählen Sie „443: HTTPS“ – hier wird https für Sie hinzugefügt
5. Wählen Sie „Neue Zielgruppe erstellen“.
6. Name der Zielgruppe: etwa „metadata-api-target-group“.
7. Pfadmuster: Ändern Sie dies in die Basis-URL Ihrer Anwendung **, fügen Sie jedoch ein „\*“ hinzu**. \
Beispiel: „/dashboards/population*“, dies leitet den gesamten Datenverkehr mit diesem Muster an unseren neuen Container weiter.
8. Bewertungsreihenfolge: Scrollen Sie durch die vorhandenen Regeln und wählen Sie die nächste Nummer in der Reihenfolge aus.\
Manchmal haben wir Anwendungen mit überlappenden Mustern wie „/dashboards/population“ und „/dashboards/population-v2“. Dabei ist es wichtig, dass die längste URL in der Bewertungsreihenfolge priorisiert wird (längere URLs benötigen eine niedrigere Nummer). Möglicherweise müssen Sie einige Regeln ändern, um Platz zu schaffen.
9. Health Check Path: Dieser Pfad wird verwendet, um den Status Ihrer Bewerbung zu überprüfen. Dies ist normalerweise die Basis-URL Ihrer Anwendung oder die Dokumentationsseite einer API. Wie „/dashboards/population“ oder „/api/docs“.
10. Klicken Sie auf Erstellen.

## Korrigieren Sie Ihre Gesundheitschecks<a name="health-checks"></a>
Bevor wir Ihren Dienst überprüfen, müssen wir unsere neue Zielgruppe ändern, um mehr HTTP-Rückgabecodes zu akzeptieren.
1. Gehen Sie zu EC2 > Zielgruppen > Ihre-neue-Zielgruppe > Gesundheitschecks > Bearbeiten
2. Öffnen Sie die erweiterten Gesundheitsprüfungseinstellungen
3. Ändern Sie die Erfolgscodes in „200-399“.
4. Änderungen speichern

## Überprüfen Sie Ihre Anwendung<a name="check-deployment"></a>
Sie können jetzt zu „www.gbadske.org/[Ihre Basis-URL hier]“ wie „www.gbadske.org/dashboards/population“ gehen, um den Status Ihrer Bewerbung zu überprüfen.
