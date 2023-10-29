---
sidebar_position: 5
---

# Datenqualität

Die Qualität der von GBADs verwendeten Daten wird gemäß [Datenziel 4](#Data-Goal-4) bewertet und kommuniziert. Unsere Definition von Datenqualität basiert auf den 6 Dimensionen der Datenqualität.

Die Datenqualität ist für GBADs wichtig, da die Qualität der Daten einen direkten Einfluss auf die Qualität der Modelle und die von den Modellen erzeugten Ergebnisse hat. Daher müssen die Eingabedaten auf ihre Qualität hin bewertet werden und die Qualität dieser Daten muss den Modellierern und Nutzern der GBAD-Daten und -Modelle mitgeteilt werden. Obwohl wir keinen direkten Einfluss auf die Qualität der Eingabedaten haben, können wir über unser Vertrauen in die Daten und potenzielle Qualitätsprobleme berichten, die sich auf die Sicherheit der Schätzungen auswirken können.

Ebenso müssen wir sicherstellen, dass die von Modellen und Schätzungen erzeugten Ausgabedaten von hoher Qualität sind, um sicherzustellen, dass sie sicher für die Entscheidungsfindung verwendet werden können und Benutzer den GBAD-Ausgaben vertrauen können.

---

Die Datenqualität fällt in die Verantwortung der Arbeitsgruppen 2 und 3 – weitere Einzelheiten zu den Datenverantwortungen finden Sie im [Data Governance Operating Model](https://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/dataGovOperatingModel).

---

## Datenqualität definieren

Es gibt keine einheitliche Definition der Datenqualität; Die Definition der Datenqualität hängt vom Kontext ab, in dem Daten verwendet werden. Es wurden viele Dimensionen der Datenqualität vorgeschlagen, allerdings hängen die Dimensionen, die für den Anwendungsfall einer Organisation relevant sind, wiederum vom Nutzungskontext ab.

*In diesem Abschnitt skizzieren wir die Dimensionen der Datenqualität, die für GBADs relevant sind, sowie die Prozesse, Metriken und Tools, die zur Bewertung der Qualität der verwendeten und produzierten Daten verwendet werden.*

<!-- ### Dimensionen der Datenqualität

*Genauigkeit*

*Interne Konsistenz*

Interne Konsistenz ist definiert als

*Äußere Konsistenz*

Externe Konsistenz ist definiert als -->
## Datenqualitätsanalyse

### Interne und externe Datenkonsistenz

Die Feststellung, ob Daten zwischen und innerhalb von Datenquellen konsistent sind, ist ein wichtiger Indikator für die Datenqualität. Stimmen beispielsweise Daten aus verschiedenen Quellen, die die „gleiche“ Metrik melden, numerisch überein?

Ian McKechnie hat eine Methode zur Analyse der internen und externen Konsistenz zwischen Datenquellen entwickelt, um festzustellen, ob in den gemeldeten Daten Unsicherheiten bestehen.

Jede Datenquelle (WOAH, FAOSTAT, nationale und UN-Volkszählung) wurde wie folgt analysiert:
* Identifizierte Ausreißer: Das gesamte jährliche Wachstum wird auf einer Normalkurve aufgetragen, um festzustellen, ob es Datenpunkte außerhalb der dritten Standardabweichung gibt
* Ermittelter Interquartilbereich (IQR) für den Wachstumsbereich jeder Quelle
* Nachträgliche 5-Jahres-Bevölkerungsdurchschnitte aus allen Datenquellen und Vergleich dieser Durchschnittswerte, um festzustellen, ob es Inkonsistenzen im Trend gab.

Die erstellte Methodik wird gefestigt und die Ergebnisse werden in einem Manuskript (derzeit in Überarbeitung) berichtet. Die Hauptergebnisse deuten darauf hin, dass es bei den meisten Arten und Ländern Inkonsistenzen zwischen den Datenquellen gibt; Einzelheiten werden im Manuskript angegeben.

## Tools zur Unterstützung der Datenqualitätsanalyse

### Datenvisualisierungs-Dashboard für die Qualitätsanalyse

Daten von internationalen Organisationen wie FAOSTAT ergänzen ihre Daten mit prognostizierten, unterstellten und inoffiziellen Werten, wenn keine offiziellen Daten verfügbar sind. Joshua Davidson hat ein Dashboard erstellt, das die Analyse von Längsschnittdaten von FAOSTAT wie folgt unterstützt:

Gegeben eine Art und ein Land:

* Visualisieren Sie potenziell fehlerhafte Daten aufgrund unterstellter oder inoffizieller Daten
* Gibt den Prozentsatz der inoffiziellen Werte an
* Visualisieren Sie Längstrends, um unerwartete oder schnelle Veränderungen in der Bevölkerung von Jahr zu Jahr zu erkennen

Das Tool befindet sich noch in der Entwicklung; Zu den zukünftigen Entwicklungsideen gehören:
* Filterung nach einer „Qualitätsstufe“. Stellen Sie beispielsweise Daten bereit, die über einem bestimmten inoffiziellen Prozentsatz liegen, oder die die Steigung der Trendlinie im Zeitverlauf berücksichtigen, um mögliche Fehler automatisch zu identifizieren.


### Andere Werkzeuge

GBADs Informatics arbeitet an einer Reihe von Datenqualitätstools. Diese Tools umfassen folgende Aufgaben:

* Daten-„Geschichten“, die Daten aus den Viehbestandsberichten der äthiopischen Zentralstatistikbehörde auf nationaler und regionaler Ebene visualisieren und kommentieren

* Analyse von Datenquellen wie FAOSTAT und WOAH im Hinblick auf interne und externe Verträglichkeit (Visualisierungen, Messungen und Metriken)

* Ontologie und SHACL zur Datenvalidierung und Bewertung der Datenqualität in Bezug auf die Artenkategorien in den WOAH-Populationsdaten (Software-Demonstration dieser Fähigkeit soll im 1. Quartal 2023 verfügbar sein)

Während es Sache der Organisation oder des Datenlieferanten ist, ihre Daten an der Quelle zu korrigieren, verfügen wir über Verfahren zur Kommunikation der Ergebnisse von Qualitätsbewertungen.


