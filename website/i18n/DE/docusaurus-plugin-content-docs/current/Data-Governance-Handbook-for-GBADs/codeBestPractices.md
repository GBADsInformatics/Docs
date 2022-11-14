---
sidebar_position: 10
---
# Best Practices für die Codierung

GBADs-Mitglieder verwenden am häufigsten R und Python, um Daten zu codieren, zu bereinigen und zu organisieren und ihre Modelle zu erstellen. Best Practices für Codierungskonventionen sorgen dafür, dass Code lesbar und wiederverwendbar ist. Dies sind die Best Practices, die GBADs Informatics und Modellierer vorschlagen, um sicherzustellen, dass wir Code verstehen und verwenden können.


<!---

James und Gemma – dieser Bereich ist in der Markdown-Datei auskommentiert. Wenn Sie im Text „Ermahnung“ sehen, bedeutet das nur, dass ein kleines Nicht-Kästchen auftaucht!

· Kommentar mit Name des Erstellers, Datum (im ISO 8601-Format? z. B. 20210729), was das Skript enthält (z. B. Hauptkomponentenanalyse)?

· Bibliotheken geladen im R-Skript

· Arbeitsverzeichnis festlegen?

· Daten sollten am Ende des Bereinigungsprozesses „aufgeräumt“ sein (siehe Data Governance Handbook oder R für Data Science)

· Organisieren Sie Daten von links nach rechts mit kategorialen Variablen und dann kontinuierlichen Variablen. Variablen sollten wo relevant gruppiert werden (z. B. Besatzdichte bei der Durchforstung, Gewicht bei der Durchforstung, Datum der Durchforstung usw.)?

· Entfernen Sie irrelevante Spalten aus dem Datensatz (z. B. Längengrad und Breitengrad)

· Code gut dokumentiert

· Standard-Dateinamenskonvention verwenden (z. B. 20210617_FAO_ProductionPrices_Poultry_Ethiopia_metadata.csv, NICHT FAO-Produktionspreise – heruntergeladen von Kassy am 25. April.csv)

· Snake zum Benennen von Objekten in R (z. B. Majority_Parent_Flock_Old)

· Objekte sollten aussagekräftige Namen haben


--->

## Best Practices für die R-Codierung

### 1. Namenskonventionen

**Dateibenennung**

Für den Dateinamen und für alle in Ihrem Code definierten Variablen und Funktionen werden Standardnamenskonventionen verwendet.

Dateinamen sollten dem Format „dateOfCreation_meaningfulCodeName.R“ folgen.

Wenn mein Code beispielsweise Nutztierdaten bereinigt und neu formatiert, könnte ich mein Skript „20210703_faoLivestockProductionDataCleaning.R“ nennen

**Variablenbenennung**

Verwenden Sie `snake_case` zum Benennen von Variablen und Funktionen in Ihrem Code. Die Verwendung einer standardisierten Namenskonvention verbessert die Lesbarkeit und Interpretierbarkeit des Codes.

<!--Namenskonventionen sollten auch beim Deklarieren von Variablen oder Erstellen von Funktionen verwendet werden. Während es mehrere gängige Namenskonventionen gibt, darunter beispielsweise camelCase, PascalCase und snake_case, ist die vereinbarte Konvention für GBADs die Verwendung von snake_case. -->

Verwenden Sie bei der Benennung von Variablen und Funktionen aussagekräftige Namen. Der Name des Objekts sollte seinen Nutzen oder seine Eigenschaften widerspiegeln. Wenn Sie beispielsweise einen Tierproduktionsdatenrahmen einlesen:

```
livestock_df <- read_csv('path/to/my/important/file.csv')
```

```{Ermahnung} Seien Sie vorsichtig, wenn Sie das Arbeitsverzeichnis festlegen
Denken Sie daran, dass, wenn Sie `setwd()` verwenden, um das Arbeitsverzeichnis für Ihr Projekt oder Skript festzulegen, das Arbeitsverzeichnis für Ihren Computer unterschiedlich ist und die Reproduzierbarkeit Ihres Codes verringern kann.
```

### 2. Organisieren Sie das Format Ihres Codes

Beginnen Sie Ihr Skript mit dem Namen des Erstellers, dem Datum der letzten Bearbeitung des Skripts (in ISO 8601) und einer kurzen Beschreibung des Zwecks des Skripts.

```
####################################
# Schöpfer: Kassy Raymond
# E-Mail: kraymond@uoguelph.ca
# Datum der letzten Bearbeitung: 20210803

# Dieses Programm enthält Code, der eine Hauptkomponentenanalyse (PCA) durchführt
# zu Viehproduktionsdaten aus Äthiopien. Die Daten, die dabei verwendet wurden
# Das Programm stammt aus dem FAOSTAT-Produktionsdatensatz und wurde am heruntergeladen
# 2021-08-03. Die Ausgabedaten dieses Skripts werden in einem Modell verwendet, das
# berechnet Biomasse.

####################################
```

Dokumentieren Sie Ihren Code mit Kommentaren, damit der Leser Ihres Codes (oder Sie in Zukunft) jeden Schritt verfolgen können, den Sie in Ihrem Skript ausgeführt haben.

Laden Sie alle Bibliotheken zu Beginn Ihres Programms ein. In R könnte das so aussehen:

```
## 0 - Alle Bibliotheken laden

Bibliothek (aufräumen)
Bibliothek (ggplot2)
Bibliothek (Stricker)
Bibliothek (Leser)
Bibliothek (forcats)
Bibliothek (dplyr)
```

Segmentieren Sie Ihren Code nach Möglichkeit in Abschnitte. Dies hilft bei der Reproduzierbarkeit und macht den Code besser lesbar.

```
## 0 - Alle Bibliotheken laden

Bibliothek (aufräumen)
Bibliothek (ggplot2)
Bibliothek (Stricker)
Bibliothek (Leser)
Bibliothek (forcats)
Bibliothek (dplyr)

## 1 - Quelldateien

data_path <- 'path/to/my/important/file.csv'
livestock_df <- read_csv(data_path)

## 2 - Datenreinigung

# Löschen Sie nicht benötigte Spalten

# Auf NAs prüfen

# Untersuchen Sie Daten und suchen Sie nach Ausreißern oder Fehlern in den Daten

## 3 - Modellierung

```

### 3. Datenbereinigung

#### 3.1 Löschen Sie nicht benötigte Spalten frühzeitig in Ihrem Code

Wenn Sie eine Spalte nicht in der weiteren Analyse verwenden, löschen Sie sie in der Datenbereinigungs- und Explorationsphase Ihres Skripts. Dies verbessert die Interpretierbarkeit Ihres Codes und erhöht die Verarbeitungsgeschwindigkeit Ihres Programms.

#### 3.2 Erinnern Sie sich an die Datenherkunft

Es ist wichtig, dass die von Modellen erstellten Schätzungen, Modelle, Grafiken und Ausgangsdatensätze reproduzierbar sind. Daher ist es wichtig, den verwendeten Originaldatensatz einzubeziehen oder bei Verwendung von APIs die Möglichkeit, auf den Originaldatensatz zurückzuverfolgen.

Wenn Sie Ihre Daten heruntergeladen haben, stellen Sie sicher, dass Sie eine Kopie des ursprünglichen Datensatzes speichern und diesen in Ihrem Arbeitsablauf **nicht überschreiben**.

Wenn zum Abrufen der Daten ein API-Aufruf durchgeführt wurde, stellen Sie sicher, dass der Datumsstempel dieses Aufrufs im Namen Ihres Ausgabe-Datasets, Ihrer Modelle oder Grafiken, die erstellt werden, bereitgestellt wird. Sie können auch wieder wählen, eine Kopie des ursprünglichen Datensatzes zu speichern.

#### 3.3 Stellen Sie sicher, dass die Daten am Ende der Datenbereinigungsphase in einem „aufgeräumten“ Format vorliegen

Siehe auch [Organizing Data in Spreadsheets](http://www.gbadske.org/Documentation/DataGovernanceHandbook/dataBestPractices.html) in diesem Handbuch und [R for Data Science](https://r4ds.had.co.nz/ ) von Hadley Wickham.

#### 3.4 Daten organisieren

Organisieren Sie Daten von links nach rechts mit kategorialen Variablen und dann kontinuierlichen Variablen. Variablen sollten wo relevant gruppiert werden (z. B. Besatzdichte bei der Durchforstung, Gewicht bei der Durchforstung, Datum der Durchforstung usw.)

### 4. Weitere Empfehlungen

- Testen Sie RStudio für Ihre IDE!


