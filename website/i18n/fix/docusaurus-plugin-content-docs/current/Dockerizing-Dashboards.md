---
id: Dockerizing-Dashboards

title: Leitfaden zur Dockerisierung von Dashboards
author: "William Fitzjohn"
sidebar_position: 12
---

Autor: [@WilliamFitzjohn](https://github.com/WilliamFitzjohn) – Kontaktieren Sie mich für Unterstützung.<br/>
Dies ist eine Anleitung, die die Schritte beschreibt, die zum Erstellen eines Docker-Images aus einem Plotly-Dashboard ausgeführt werden, das über Flask ausgeführt wird.

## Inhaltsverzeichnis
1. [Voraussetzungen](#voraussetzungen)
1. [Codevorbereitung](#code-vorbereitung)
1. [Die Docker-Datei](#the-dockerfile)
1. [Vertrauliche Dateien](#confidential-files)
1. [Das Image aufbauen](#building-the-image)
1. [Dashboard ausführen](#running-the-dashboard)
1. [Dashboard veröffentlichen](#publishing-the-dashboard)

## Voraussetzungen
In diesem Leitfaden wird davon ausgegangen, dass Sie bereits ein Plotly-Dashboard eingerichtet haben.<br/>
Auf Ihrem System sollte auch Docker installiert sein.

## Codevorbereitung
1. Stellen Sie sicher, dass Ihre „requirements.txt“ alle erforderlichen Python-Module enthält, die zum Ausführen Ihres Dashboards erforderlich sind.
2. In der Entwicklung haben Sie möglicherweise etwas wie „Python wsgi.py“ oder „Python Dashboard.py“ verwendet, um Ihr Dashboard auszuführen. Für die vorübergehende Ausführung ist das in Ordnung, aber in der Produktion möchten wir einen Produktions-Flask-Server verwenden, um die App auszuführen. Wir werden Waitress für unseren Server verwenden. Dazu müssen Sie der Datei eine Funktion hinzufügen, die Ihr Dashboard startet (wsgi.py oder example_dashboard.py), die Ihre Dash-App zurückgibt:
- Wenn Sie eine normale **Dash**-App erstellen, sollte dies funktionieren:
„Python
def returnApp():
Rückgabe-App
„
– Wenn Sie eine **DashProxy**-App erstellen, sollte dies funktionieren:
„Python
def returnApp():
Geben Sie app.server zurück
„

## Die Docker-Datei
Fügen Sie Ihrem Projektverzeichnis eine neue Datei mit dem Namen „Dockerfile“ hinzu. Diese Datei wird von Docker verwendet, um Ihr Docker-Image zu erstellen. Diese Datei muss einige wichtige Funktionen aufweisen:
1. Das Basis-Image: Um dies zu vereinfachen, verwenden wir ein Image mit vorinstalliertem Python.
2. Die Python-Voraussetzungen: Wir installieren alle Python-Module, die Ihr Dashboard benötigt.
3. Die Dashboard-Dateien: Anschließend kopieren wir die Dateien in das Docker-Image.
4. Der App-Aufruf: Wir teilen Docker mit, wie er das Dashboard im Container starten soll.

Hier ist ein Beispiel dafür, wie die Docker-Datei aussehen sollte:
„Docker-Datei
# Basisbild – habe ein paar andere ausprobiert, dieses war das einfachste und stabilste
# Sie können die Python-Version hier ändern, wenn Sie Probleme haben. Sie können finden
# weitere Basisbilder online.
VON python:3.10.0-slim-buster

# Erstellen Sie im Image ein Basisverzeichnis, in dem Sie arbeiten möchten
ARBEITSVERZEICHNIS /app/dash

## Für einige Python-Module (psycopg2 und andere) müssen Sie Programme vorinstallieren
## bis apt. Machen Sie das hier mit einem Befehl wie:
# APT-Update ausführen && \
# apt install -y PAKETE HIER EINFÜGEN && \
# rm -rf /var/lib/apt/lists/*

# Kopieren Sie die Anforderungsdatei in das Image und installieren Sie dann die Python-Anforderungen
KOPIEREN Sie „requirements.txt“.
FÜHREN Sie pip install -r require.txt aus

# Kopieren Sie die restlichen Dashboard-Dateien in das Bild
KOPIEREN . /app/dash

# Angabe des Dashboard-Befehls durch Kellnerin
# Behalten Sie 80 bei: Dies wird nur im Docker-Container angezeigt. Später
# Sie können dies jedem Port außerhalb des Containers zuordnen. Ändern Sie „wsgi“ in
# Name der Datei, die Sie zuvor in #code-preparation.2 bearbeitet haben
CMD [„waitress-serve“, „--host=0.0.0.0“, „--port=80“, „--call“, „wsgi:returnApp“]
„

## Vertrauliche Dateien
Einige Dateien wie „.env“-Dateien sollten nicht auf GitHub veröffentlicht werden, daher fügen Sie Ihrem Repo einen .gitignore hinzu. Das gleiche Konzept gilt für die Veröffentlichung von Docker-Images mithilfe einer .dockerignore-Datei.

Fügen Sie Ihrem Repository eine „.dockerignore“-Datei hinzu, die die Namen vertraulicher Dateien enthält, die nicht in Ihr Docker-Image aufgenommen werden sollen.

Wir benötigen weiterhin unsere vertraulichen Dateien (wie „.env“) im Container, um den Server auszuführen, aber wir lassen den Benutzer diese vertraulichen Dateien später hinzufügen, wenn er den Container startet.

## Das Image aufbauen
Da wir nun unsere „Docker-Datei“ mit Anweisungen zum Erstellen eines Images haben, können wir einen Befehl ausführen, um unser Image zu erstellen.<br/>
`docker build -t gbadsinformatics/dashboardname-dash .`<br/>
Führen Sie diesen Befehl im selben Verzeichnis wie Ihre „Docker-Datei“ aus. Dadurch wird Docker angewiesen, unser Image zu erstellen und ihm einen Benutzernamen/Tag zu geben: „gbadsinformatics/dashboardname-dash“. Dieser Schritt kann mühsam sein, wenn Buildfehler auftreten. Möglicherweise müssen Sie mit Ihrer „requirements.txt“ herumspielen, um kompatible Python-Module zu erhalten, oder passende Paketabhängigkeiten zu Ihrer „Dockerfile“ hinzufügen. Beheben Sie die Probleme im Laufe der Zeit. Dies ist normalerweise der schwierigste Schritt.

## Ausführen des Dashboards
Da Sie nun endlich ein Image ohne Build-Fehler haben, können Sie es testen. Sie müssen einen Befehl erstellen, um Ihr Image auszuführen, der etwa so aussieht:<br/>
`docker run -d -p 9090:80 gbadsinformatics/dashboardname-dash`
- „-d“ weist Docker an, den Container getrennt auszuführen
- „-p 9090:80“ weist Docker an, Port 80 im Container an 9090 auf dem Host-Computer weiterzuleiten.<br/>
Hier können Sie 9090 in einen beliebigen Port ändern, auf dem Sie das Dashboard ausführen möchten. Ändern Sie nicht 80.
- „gbadsinformatics/dashboardname-dash“ sollte der Name Ihres Docker-Images sein.

Möglicherweise möchten Sie dem Benutzer erlauben, [vertrauliche Dateien] (#confidential-files) wie „.env“ hinzuzufügen. Sie können dies in Docker mit dem Tag „-v“ tun:<br/>
`docker run -d -p 9090:80 -v /local/path/to/.env:/app/.env gbadsinformatics/dashboardname-dash`
- Der Benutzer ändert „/local/path/to/.env“ in den vollständigen Pfad der vertraulichen Datei auf seinem Computer.
- Sie ändern „/app/.env“ dahingehend, dass die vertrauliche Datei im Container abgelegt werden muss.

Sobald Ihr Container betriebsbereit ist, sollten Sie in Ihrem Webbrowser zu Ihrem angegebenen Port gehen und das Dashboard sehen können. Wenn Sie auf Probleme stoßen, finden Sie hier einige hilfreiche Befehle:
- `docker ps --all`<br/>
Hier werden gestoppte Docker-Container angezeigt.
- „Docker-Protokolle XXXX“<br/>
Hier werden die Protokolle eines Containers mit der ID XXXX angezeigt. Sie verwenden die Ausgabe von Docker PS, um eine Container-ID zu erhalten.
- „docker exec -it XXXX /bin/bash“<br/>
Dadurch wird eine Hülle im Container geöffnet, sodass Sie Fehler im Container beheben können.<br/>
**Allerdings** sind Änderungen, die innerhalb eines laufenden Containers vorgenommen werden, temporär und werden nicht im Bild widergespiegelt.

## Veröffentlichung des Dashboards
Sobald Sie ein funktionierendes Image haben, können Sie es über die Befehlszeile auf DockerHub veröffentlichen.
1. Erstellen Sie ein DockerHub-Repository mit dem Namen „dashboardname-dash“ mit Ihrem Dashboard-Namen im GBADsInformatics DockerHub-Konto.
2. Gehen Sie zurück zur Befehlszeile und melden Sie sich bei DockerHub an:<br/>
„Docker-Login“.
3. Schieben Sie das Bild an DockerHub:<br/>
`docker push gbadsinformatics/dashboardname-dash`

Sie sollten nun versuchen, einen Container mit dem öffentlichen Image auszuführen, um zu überprüfen, ob er ordnungsgemäß funktioniert. Sie können auch versuchen, GitHub-Aktionen zu verwenden, um das Image automatisch zu erstellen, wenn Sie es in Ihr GitHub-Repository übertragen. Auf diese Weise müssen Sie diese Schritte nie wieder durchführen!
