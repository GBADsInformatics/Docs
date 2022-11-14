---
sidebar_position: 3
---
Technische Datennormen
========================

Technische Datenstandards sind ein wichtiges Element der Data-Governance-Strategie, da sie sicherstellen, dass Daten auffindbar sind
und interoperabel sind und dass Vergleiche und Zuordnungen zwischen verschiedenen Datenquellen erstellt werden können.

Standards für Daten, einschließlich Metadatenbegriffe, Attribute, Struktur und standardisierte Benennungskonventionen, ermöglichen Daten
katalogisiert und Erkenntnisse aus Datenbeständen gewonnen werden. Standardmäßige, gut definierte Namenskonventionen ermöglichen beispielsweise
abzufragende Daten. Wir können nachvollziehen, welche Arten von Daten wir haben und in welchen Bereichen mehr Daten benötigt werden. Mit
Standardvokabulare zwischen Datenquellen, es können Zuordnungen zwischen Quellen erstellt werden, die es uns ermöglichen, die Beziehung zu verstehen
zwischen Datenquellen und geben Einblick in die Qualität und Vertrauenswürdigkeit dieser Datenquellen.

Technische Datenstandards existieren in jeder der folgenden Kategorien: (Meta-)Datenstruktur, (Meta-)Dateninhalt (Vokabulare)
und Meta(daten)-Format.

Metadaten-Inhalt
----------------

Um Metadatenbegriffe zu kommentieren, werden Standardvokabulare verwendet (siehe Anhang D). Beispielsweise sind alle in den Metadaten gemeldeten Daten ...

Metadaten-Begriffe
--------------

Metadatenbegriffe werden aus dem angepasst
- [Internationales System für Agrarwissenschaft und -technologie (AGRIS) Anwendungsprofil (AP)](http://www.fao.org/3/ae909e/ae909e05.htm#P460_23819)
- [Dublin Core Metadata Initiative (DCMI)](https://dublincore.org/specifications/dublin-core)
- [Agricultural Metadata Element Set (AgMES)](https://fairsharing.org/FAIRsharing.vd694s)
- Dieser Standard ist veraltet, obwohl die FAO ihn immer noch zitiert.

Ein Index der Metadatenstandards ist im [Metadata Standards Catalog](https://rdamsc.bath.ac.uk/scheme-index) zu finden.

GBADs werden die Bedingungen weiter erweitern und verfeinern, um spezifische Anforderungen an die Verwaltung und Herkunft der von oder gesammelten Daten zu erfüllen
über das Datenportalsystem GBADs abgewickelt.

Metadatenstruktur
------------------

Metadatenschemata werden im Format [JSON-LD](https://json-ld.org/) gespeichert. JSON-LD ist ein strukturiertes Datenformat, das die
Implementierung von verknüpften Daten. Das [strukturierte Metadaten-Tool] von Google (https://search.google.com/structured-data/testing-tool/) wird sein
die als Metadaten verwendet werden, werden durch unseren Datenlebenszyklus erstellt, überarbeitet und bearbeitet.

Es gibt 3 Haupttypen von Metadaten, die jeweils einem bestimmten Zweck im Lebenszyklus der Daten dienen (Riley, 2017) (Tabelle 1). Beschreibend
Metadaten umfassen Informationen über die Datenquelle, die zum Suchen und Verstehen einer Ressource verwendet wird. Dazu gehören Informationen über die
Kontext der Daten, ggf. einschließlich Angaben zur Herkunft. Beschreibende Metadaten liefern Informationen, die es ermöglichen
damit die Daten auffindbar und interoperabel sind. Administrative Metadaten umfassen zwei Teilmengen von Metadaten: technische Metadaten und Rechte-Metadaten.
Riley (2017) beschreibt administrative Metadaten als Metadaten, die für die Verwaltung einer bestimmten Datenressource verwendet werden. Rechte-Metadaten
bietet Informationen über die Lizenz- und Urheberrechtsinformationen einer bestimmten Quelle, während technische Metadaten Informationen über enthalten
den Dateityp und die Größe der Daten. Strukturelle Metadaten beschreiben die Beziehungen zwischen Teilen von Ressourcen zu anderen. Das könnte
B. Informationen darüber, wie Daten angeordnet oder angezeigt werden, hierarchische Beziehungen oder die Reihenfolge von Datenobjekten. Zu den Kontexten
von GBADs sind strukturelle Metadaten auch wichtig, um Informationen über die Zugänglichkeit privater Datenquellen zu speichern. Dies wird diskutiert
im Abschnitt [FIXME ADD SECTION] des Handbuchs.

Tabelle 1: Arten von Metadaten und Definitionen. Tisch adaptiert von Riley, 2017.
| Art der Metadaten | Bestimmung | Beispieleigenschaften | Hauptverwendungen |
| :--------------- | ---------- | ------------------ | ------------ |
| Beschreibende Metadaten | Zum Finden und Verstehen einer Ressource; für Datenqualität. | Titel, Autor, Thema, Genre, Erscheinungsdatum | Auffindbarkeit, Anzeige, Interoperabilität |
| - Administrative Metadaten - Technische Metadaten - Rechte-Metadaten | - Zum Decodieren und Wiedergeben von Dateien - Langfristige Verwaltung von Dateien - Rechte an geistigem Eigentum, die mit Inhalten verbunden sind | Technisch: Dateityp, Dateigröße, Erstellungsdatum/-zeit Rechte: Urheberrechtsstatus, Lizenzbedingungen, Rechteinhaber | Interoperabilität, Verwaltung digitaler Objekte, Erhaltung |
| Strukturelle Metadaten | Beziehungen von Teilen von Ressourcen zueinander. | Reihenfolge, Rang in der Hierarchie | Navigation |
| | | | |

Metadaten können je nach Kontext der Quelle unterschiedliche Begriffe enthalten. Tabelle 2 enthält eine Liste aller möglichen Begriffe, die Metadaten enthalten
sowie deren URIs enthalten könnten. Wenn ein Metadatenbegriff verwendet wird, muss der URI dieses Begriffs im Abschnitt „@context“ berücksichtigt werden
des JSON-LD-Skripts. Dadurch kann die Definition des Begriffs auf eine standardisierte Definition zurückgeführt werden.

Jedes Datenobjekt im System muss mindestens mit den folgenden Begriffen beschrieben werden (der erste Begriffssatz vor der leeren Zeile in Tabelle 2): URI,
accessRights, accrualMethod, Contributor, Coverage, Date, DateSubmitted, Description, Format, Identifier, Language, Mediator, Provenance, Spatial,
temporal, title, type, subjectThesaurus, subjectClassification.

Wenn Daten durch GBADs modifiziert werden oder aus der Ausgabe eines Modells stammen, muss dies in den Metadaten akkreditiert werden. In diesen Fällen gilt Folgendes
Begriffe können verwendet werden: modifiziert, alternativ, ersetzt, isPartof, isFormat, hasFormat, hasPart, isRequiredBy, isVersionOf, hasVersion, Herkunft,
erfordert. Beispielsweise in dem Szenario, in dem GBADs ein Datenobjekt erworben hat, das von einem Vokabular in einen anderen Metadatenbegriff geändert wurde
„isVersionOf“, „provenance“, „requires“ und „modified“ würden verwendet, um die Änderungen widerzuspiegeln.

Tabelle 2: Alle möglichen Metadatenbegriffe und entsprechende URIs.

```json

"@context": {
"URI": "",
"accessRights": "http://purl.org/dc/terms/accessRights",
"accrualMethod": "http://purl.org/dc/terms/accrualMethod",
"Beitragender": "http://purl.org/dc/terms/Beitragender",
"Abdeckung": "http://purl.org/dc/terms/coverage",
"date": "http://purl.org/dc/terms/date",
"dateSubmitted": "http://purl.org/dc/terms/dateSubmitted",
"Beschreibung": "http://purl.org/dc/terms/description",
"format": "http://purl.org/dc/terms/format",
"Bezeichner": "http://purl.org/dc/terms/identifier",
"Sprache": "http://purl.org/dc/terms/Sprache",
"mediator": "http://purl.org/dc/terms/mediator",
"herkunft": "http://purl.org/dc/terms/herkunft",
"Rechte": "http://purl.org/dc/terms/rights",
"spatial": "http://purl.org/dc/terms/spatial",
"temporal": "http://purl.org/dc/terms/temporal",
"title": "http://purl.org/dc/terms/title",
"Typ": "http://purl.org/dc/terms/type",
"subjectThesaurus": "http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectThesaurus",
"subjectClassification": "http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectClassification",

"accrualPeriodicity": "http://purl.org/dc/terms/accrualPeriodicity",
"accrualPolicy": "http://purl.org/dc/terms/accrualPolicy",
"alternativ": "http://purl.org/dc/terms/alternative",
"audience": "http://purl.org/dc/terms/audience",
"verfügbar": "http://purl.org/dc/terms/verfügbar",
"bibliographicCitation": "http://purl.org/dc/terms/bibliographicCitation",
"conformsTo": "http://purl.org/dc/terms/conformsTo",
"erstellt": "http://purl.org/dc/terms/erstellt",
"Schöpfer": "http://purl.org/dc/terms/Schöpfer",
"dateAccepted": "http://purl.org/dc/terms/dateAccepted",
"dateCopyrighted": "http://purl.org/dc/terms/dateCopyrighted",
"umfang": "http://purl.org/dc/terms/umfang",
"hasFormat": "http://purl.org/dc/terms/hasFormat",
"isFormatOf": "http://purl.org/dc/terms/isFormatOf",
"hasPart": "http://purl.org/dc/terms/hasPart",
"isPartOf": "http://purl.org/dc/terms/isPartOf",
"hasVersion": "http://purl.org/dc/terms/hasVersion",
"isVersionOf": "http://purl.org/dc/terms/isVersionOf",
"isReferencedBy": "http://purl.org/dc/terms/isReferencedBy",
"replaces": "http://purl.org/dc/terms/replaces",
"isReplacedBy": "http://purl.org/dc/terms/isReplacedBy",
"requires": "http://purl.org/dc/terms/requires",
"isRequiredBy": "http://purl.org/dc/terms/isRequiredBy",
"Lizenz": "http://purl.org/dc/terms/license",
"modified": "http://purl.org/dc/terms/modified",
"Referenzen": "http://purl.org/dc/terms/references",
"rightsHolder": "http://purl.org/dc/terms/rightsHolder",
"Quelle": "http://purl.org/dc/terms/source",
"Betreff": "http://purl.org/dc/terms/subject",
"tableOfContents": "http://purl.org/dc/terms/tableOfContents"

```

Umfassende Metadaten mit Begriffen, die den Prozess beschreiben, wie die Originaldaten erhalten, aufgezeichnet und gesammelt wurden, bieten Kontext
über die Datenqualität und welche Datenquellen mit anderen kombiniert werden können. Tabelle 3 enthält angepasste Metadatenbegriffe
aus den GATHER-Richtlinien. Wenn ein Datenlieferant eine Datenquelle bereitstellt, muss er ein Formular zur Bereitstellung ausfüllen
Kontext zu den bereitgestellten Daten. Die Antworten auf dem Formular generieren die beschreibenden Metadaten für diese Datenquelle. Das
Begriffe, die zur Beschreibung von Datenbeständen verwendet werden, hängen von der Art der Datenquelle ab; beispielsweise nicht alle Datenquellen
enthält Informationen über Krankheiten.

Wenn mehr Metadaten erstellt werden, werden kontrollierte Vokabulare erstellt oder für jeden Begriff angepasst.

Tabelle 3: Begriffe und Definitionen von Metadaten, angepasst an die GATHER-Richtlinien

| Begriff | Bestimmung |
| :--- | ---------: |
| Arten | Artklassifikation des Organismus |
| Krankheit | Falls basierend auf der gemeldeten Krankheit, geben Sie Krankheiten an, die in die Studie eingeschlossen wurden |
| Inklusionskriterien | Demografische, klinische oder geografische Inklusion |
| Ausschlusskriterien | Demografische, klinische oder geografische Ausgrenzung |
| dataCollectionMethod | Wie wurden Daten erhoben? Umfrage? Feldstudie? |
| Altersbereich | Alter der Studienfächer. |
| Sex | Geben Sie das/die Geschlecht(er) der eingeschlossenen Arten an. |
| Beispielgröße | Stichprobengröße |
| Messmethode | Wie das Ergebnis von Interesse gemessen wurde. |
| diagnostische Kriterien | Wie die Krankheit diagnostiziert wurde. |
| definiertBias | Identifizieren und beschreiben Sie alle Kategorien von Eingabedaten, die potenziell wichtige Verzerrungen aufweisen. |
| Dateiformat | Format der Datendatei (csv, json etc.) |
| AnalyseMethode | Wie das Ergebnis von Interesse analysiert wurde – sollte gegebenenfalls auch einen Link zu GitHub bereitstellen |
| StudieDesign | Informationen zum Forschungsdesign. Begriffe wie Kohortenstudie, randomisierte Studie, Kosten-Nutzen-Analyse, deskriptive Studie, diagnostische Studie etc. werden erwartet. |
| | |

