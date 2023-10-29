---
sidebar_position: 6
---

# Metadaten

Metadaten sind „Daten über Daten“.

Metadaten werden zum Speichern von Informationen über Datenbestände verwendet, die in der GBADs-Wissensmaschine gespeichert sind. Wir streben danach, dass Metadaten FAIR sind (auffindbar, zugänglich, interoperabel und wiederverwendbar).

Darüber hinaus erfassen wir Metadaten zu den Prozessen bei der Datenaufnahme in die Knowledge Engine, um sicherzustellen, dass die gesamte Datenherkunft verfolgt wird.





<!-- Technische Datenstandards sind ein wichtiges Element der Data-Governance-Strategie, da sie sicherstellen, dass Daten auffindbar sind
und interoperabel sind und dass Vergleiche und Zuordnungen zwischen verschiedenen Datenquellen erstellt werden können.

Standards für Daten, einschließlich Metadatenbegriffe, Attribute, Struktur und standardisierte Namenskonventionen, ermöglichen Daten
katalogisiert werden und Erkenntnisse aus Datenbeständen gewonnen werden. Standardmäßige, klar definierte Namenskonventionen ermöglichen dies beispielsweise
abzufragende Daten. Wir sind in der Lage, den Überblick darüber zu behalten, welche Arten von Daten wir haben und in welchen Bereichen weitere Daten erforderlich sind. Mit
Mithilfe von Standardvokabularen zwischen Datenquellen können Zuordnungen zwischen Quellen erstellt werden, die es uns ermöglichen, die Beziehung zu verstehen
zwischen Datenquellen und geben Aufschluss über die Qualität und Vertrauenswürdigkeit dieser Datenquellen.

Technische Datenstandards gibt es in den folgenden Kategorien: (Meta-)Datenstruktur, (Meta-)Dateninhalt (Vokabular)
und Meta(daten)format. ->

## Metadatenschema

„Ein Metadatenschema ist eine Reihe von Regeln darüber, welche Arten von Subjekt-Prädikat-Objekt-Aussagen man machen darf und wie man sie machen darf.“ - Jeffery Pomerantz

Eine Subjekt-Prädikat-Objekt-Anweisung besteht aus:
* Betreff = die beschriebene Sache
* Objekt = das Ding, das das Subjekt beschreibt
* Prädikat = Beziehung zwischen Subjekt und Objekt

Zum Beispiel:
* Betreff = FAOSTAT QCL-Datensatz
* Objekt = FAO
* Prädikat = Schöpfer

In dieser Subjekt-Prädikat-Objekt-Anweisung ist die FAO der Ersteller des FAOSTAT-QCL-Datensatzes.

Basierend auf diesem Modell können wir ein Metadatenschema erstellen, das die Prädikate (auch Elemente genannt) definiert, die wir zur Beschreibung einer Ressource verwenden möchten. Metadatenvokabulare wie [Dublin Core](https://www.dublincore.org/), [schema.org](https://schema.org/), [PROV-DM](https://www.w3 .org/TR/prov-dm/) und [DCAT](https://www.w3.org/TR/vocab-dcat-2/) stellen Metadatenelemente bereit, die zur Beschreibung von Daten verwendet werden können. Wenn es um Metadaten geht, gibt es kein Patentrezept, das für alle passt. Es gibt mehrere Standard-Metadatenelementsätze, denn was Sie in die Metadaten aufnehmen, hängt von Ihrem Anwendungsfall ab.

Wir haben Metadatenelemente von schema.org und PROV-DM ausgewählt, um Daten zu beschreiben und die Datenherkunft in der Knowledge Engine zu verfolgen (siehe Abbildung unten).

![Metadatenmodell](./images/metadata Model.drawio.png)

## Codierungsschema

Jedes Metadatenelement sollte Anweisungen zu den erwarteten Werten enthalten, die für jedes Element erwartet werden. Beispielsweise gibt es viele verschiedene Möglichkeiten, ein Datum anzugeben: 01.04.23 könnte den 4. Januar 2023 oder den 1. April 2023 bedeuten. Daher sollten alle Werte für jedes Element, das ein Datum angibt, [ISO-8601](https: //www.iso.org/iso-8601-date-and-time-format.html), um sicherzustellen, dass alle Datumsangaben standardmäßig formatiert sind.

Das Codierungsschema für jedes im metadataModel verwendete Metadatenelement finden Sie unten:

| Element | Kodierungsschema | Erwarteter Typ |
| ------- | --------------- | --------------- |
| [Name](https://schema.org/name) | Freitext | str |
| [codeRepository](https://schema.org/codeRepository) | Link zum GitHub-Repo | str |
| [runtimePlatform](https://schema.org/runtimePlatform) | Name der Programmiersprache oder Plattform, die zur Laufzeit verwendet wird (kontrolliertes Vokabular erforderlich) | str |
| [dateCreated](https://schema.org/dateCreated) |[ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html) | Datum/Uhrzeit |
| [startTime](https://schema.org/startTime) |[ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html)| Datum/Uhrzeit |
| [endTime](https://schema.org/endTime) |[ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html)| Datum/Uhrzeit |
| prov:typ | Kontrolliertes Vokabular, das für den Anwendungsfall erstellt werden soll (*d. h. ingestionEvent, dataCleaning usw.)| str |
| [Beschreibung](https://schema.org/description) | Freitext | str|
| [URL](https://schema.org/url) | URL | str |
| [Bezeichner](https://schema.org/identifier) ​​| URL, DOI oder URI | str |
| [Lizenz](https://schema.org/license) | URL | str |
| [temporalCoverage](https://schema.org/temporalCoverage) |[ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html) | Datum/Uhrzeit |
| [Ersteller](https://schema.org/creator) | Freitext | str |
| [inDefinedTermSet](https://schema.org/inDefinedTermSet) | URL | str |
| [termCode](https://schema.org/termCode) | Code aus definiertem Ausdruckssatz | str |
| [Ort](https://schema.org/Place) | [GeoNames](https://www.geonames.org/)| str |
| [contentSize](https://schema.org/contentSize) | Dateigröße in Megabyte | schweben |
| [Dateiformat](https://schema.org/fileFormat) | Datei Format. Einer von: csv, json, dbtable usw. (kontrolliertes Vokabular erforderlich) | str |
| [contentUrl](https://schema.org/contentUrl) | URL | URL |
| [UploadDate](https://schema.org/uploadDate) | [ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html) | Datum/Uhrzeit |

---

Entscheidung erforderlich:

Derzeit werden Schlüsselwörter für Metadaten durch Extrahieren von Begriffen (wie Arten) aus Datensätzen erstellt.

Es muss ein kontrolliertes Vokabular erstellt werden, mit dem Schlüsselwörter verknüpft werden können. Wir haben damit begonnen, indem wir alle Artenklassifikationen und -definitionen aus Datenquellen gesammelt haben. Synonyme wurden jedoch noch nicht identifiziert.

---

<!-- Metadateninhalt


Zur Annotation von Metadatenbegriffen werden Standardvokabulare verwendet (siehe Anhang D). Beispielsweise sind alle in den Metadaten gemeldeten Daten ...

Metadatenbedingungen


Metadatenbegriffe werden aus dem angepasst
- [Anwendungsprofil des Internationalen Systems für Agrarwissenschaft und -technologie (AGRIS) (AP)](http://www.fao.org/3/ae909e/ae909e05.htm#P460_23819)
- [Dublin Core Metadata Initiative (DCMI)](https://dublincore.org/pecifications/dublin-core)
- [Agricultural Metadata Element Set (AgMES)](https://fairsharing.org/FAIRsharing.vd694s)
– Dieser Standard ist veraltet, obwohl die FAO ihn immer noch zitiert.

Ein Index der Metadatenstandards finden Sie im [Katalog für Metadatenstandards](https://rdamsc.bath.ac.uk/scheme-index).

GBADs werden die Bedingungen weiter erweitern und verfeinern, um spezifische Anforderungen an die Verwaltung und Herkunft der von oder gesammelten Daten zu erfüllen
Die Abwicklung erfolgt über das Datenportalsystem des GBAD.
## Metadatenstruktur

Metadatenschemata werden im Format [JSON-LD](https://json-ld.org/) gespeichert. JSON-LD ist ein strukturiertes Datenformat, das die Implementierung verknüpfter Daten unterstützt. Das [strukturierte Metadaten-Tool](https://search.google.com/structured-data/testing-tool/) von Google wird verwendet, um zu testen, ob die ausgegebenen Metadaten gültig sind.

Es gibt drei Haupttypen von Metadaten, die jeweils einem bestimmten Zweck im Lebenszyklus der Daten dienen (Riley, 2017) (Tabelle 1).

Beschreibende Metadaten umfassen Informationen über die Datenquelle, die zum Suchen und Verstehen einer Ressource verwendet wird. Dazu gehören Informationen über den Kontext der Daten, ggf. auch Angaben zur Herkunft. Beschreibende Metadaten stellen Informationen bereit, die es ermöglichen, dass die Daten auffindbar und interoperabel sind.

Administrative Metadaten umfassen zwei Teilmengen von Metadaten: technische Metadaten und Rechtemetadaten. Riley (2017) beschreibt administrative Metadaten als Metadaten, die für die Verwaltung einer bestimmten Datenressource verwendet werden. Rechtemetadaten liefern Informationen über die Lizenz- und Urheberrechtsinformationen einer bestimmten Quelle, während technische Metadaten Informationen über den Dateityp und die Größe der Daten liefern. Strukturelle Metadaten beschreiben die Beziehungen zwischen Teilen von Ressourcen und anderen. Dazu können Informationen über die Anordnung oder Anzeige von Daten, hierarchische Beziehungen oder die Reihenfolge von Datenobjekten gehören. Für den Kontext von GBADs sind strukturelle Metadaten auch wichtig, um Informationen über die Zugänglichkeit privater Datenquellen zu speichern.

Tabelle 1: Arten von Metadaten und Definitionen. Tabelle nach Riley, 2017.
| Art der Metadaten | Definition | Beispieleigenschaften | Hauptverwendungen |
| --------------- | ---------- | ------------------- | ------------ |
| Beschreibende Metadaten | Zum Finden und Verstehen einer Ressource; für Datenqualität. | Titel, Autor, Thema, Genre, Veröffentlichungsdatum | Auffindbarkeit, Anzeige, Interoperabilität |
| - Administrative Metadaten - Technische Metadaten - Rechtemetadaten | - Zum Dekodieren und Rendern von Dateien - Langfristige Verwaltung von Dateien - An Inhalte gebundene geistige Eigentumsrechte | Technische Daten: Dateityp, Dateigröße, Erstellungsdatum/-uhrzeit. Rechte: Urheberrechtsstatus, Lizenzbedingungen, Rechteinhaber | Interoperabilität, Verwaltung digitaler Objekte, Aufbewahrung |
| Strukturelle Metadaten | Beziehungen von Teilen von Ressourcen zueinander. | Reihenfolge, Platz in der Hierarchie | Navigation |

Metadaten können je nach Kontext der Quelle unterschiedliche Begriffe enthalten. Tabelle 2 enthält eine Liste aller möglichen Begriffe, die Metadaten enthalten
könnte ebenso wie ihre URIs enthalten. Wenn ein Metadatenbegriff verwendet wird, muss der URI dieses Begriffs im Abschnitt „@ context“ berücksichtigt werden
des JSON-LD-Skripts. Dadurch kann die Definition des Begriffs auf eine standardisierte Definition zurückgeführt werden.

Jeder Datenbestand im System muss mindestens mit den folgenden Begriffen beschrieben werden (der erste Satz von Begriffen vor der Leerzeile in Tabelle 2): URI,
accessRights, accrualMethod, Mitwirkender, Abdeckung, Datum, dateSubmitted, Beschreibung, Format, Identifikator, Sprache, Mediator, Herkunft, räumlich,
zeitlich, Titel, Typ, Betreff Thesaurus, Betreff Klassifikation.

Wenn Daten durch GBADs geändert werden oder aus der Ausgabe eines Modells stammen, muss dies in den Metadaten vermerkt werden. In diesen Fällen gilt Folgendes
Es können folgende Begriffe verwendet werden: modifiziert, alternativ, ersetzt, isPartof, isFormat, hasFormat, hasPart, isRequiredBy, isVersionOf, hasVersion, Provenienz,
erfordert. Beispielsweise in dem Szenario, dass GBADs einen Datenbestand erworben hat, der von einem Vokabular in einen anderen Metadatenbegriff geändert wurde
isVersionOf, Provenance, Requires und Modified würden verwendet, um die Änderungen widerzuspiegeln. ->

<!-- Tabelle 2: Alle möglichen Metadatenbegriffe und entsprechenden URIs.

„json

„@context“: {
„URI“: „“,
„accessRights“: „http://purl.org/dc/terms/accessRights“,
„accrualMethod“: „http://purl.org/dc/terms/accrualMethod“,
„Mitwirkender“: „http://purl.org/dc/terms/contributor“,
„coverage“: „http://purl.org/dc/terms/coverage“,
„date“: „http://purl.org/dc/terms/date“,
„dateSubmitted“: „http://purl.org/dc/terms/dateSubmitted“,
„description“: „http://purl.org/dc/terms/description“,
„format“: „http://purl.org/dc/terms/format“,
„identifier“: „http://purl.org/dc/terms/identifier“,
„Sprache“: „http://purl.org/dc/terms/sprache“,
„Mediator“: „http://purl.org/dc/terms/mediator“,
„provenance“: „http://purl.org/dc/terms/provenance“,
„rights“: „http://purl.org/dc/terms/rights“,
„spatial“: „http://purl.org/dc/terms/spatial“,
„temporal“: „http://purl.org/dc/terms/temporal“,
„title“: „http://purl.org/dc/terms/title“,
„type“: „http://purl.org/dc/terms/type“,
„subjectThesaurus“: „http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectThesaurus“,
„subjectClassification“: „http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectClassification“,

„accrualPeriodicity“: „http://purl.org/dc/terms/accrualPeriodicity“,
„accrualPolicy“: „http://purl.org/dc/terms/accrualPolicy“,
„alternative“: „http://purl.org/dc/terms/alternative“,
„audience“: „http://purl.org/dc/terms/audience“,
„available“: „http://purl.org/dc/terms/available“,
„bibliographicCitation“: „http://purl.org/dc/terms/bibliographicCitation“,
„conformsTo“: „http://purl.org/dc/terms/conformsTo“,
„created“: „http://purl.org/dc/terms/created“,
„creator“: „http://purl.org/dc/terms/creator“,
„dateAccepted“: „http://purl.org/dc/terms/dateAccepted“,
„dateCopyrighted“: „http://purl.org/dc/terms/dateCopyrighted“,
„extent“: „http://purl.org/dc/terms/extent“,
„hasFormat“: „http://purl.org/dc/terms/hasFormat“,
„isFormatOf“: „http://purl.org/dc/terms/isFormatOf“,
„hasPart“: „http://purl.org/dc/terms/hasPart“,
„isPartOf“: „http://purl.org/dc/terms/isPartOf“,
„hasVersion“: „http://purl.org/dc/terms/hasVersion“,
„isVersionOf“: „http://purl.org/dc/terms/isVersionOf“,
„isReferencedBy“: „http://purl.org/dc/terms/isReferencedBy“,
„replaces“: „http://purl.org/dc/terms/replaces“,
„isReplacedBy“: „http://purl.org/dc/terms/isReplacedBy“,
„requires“: „http://purl.org/dc/terms/requires“,
„isRequiredBy“: „http://purl.org/dc/terms/isRequiredBy“,
„license“: „http://purl.org/dc/terms/license“,
„modified“: „http://purl.org/dc/terms/modified“,
„references“: „http://purl.org/dc/terms/references“,
„rightsHolder“: „http://purl.org/dc/terms/rightsHolder“,
„Quelle“: „http://purl.org/dc/terms/source“,
„subject“: „http://purl.org/dc/terms/subject“,
„tableOfContents“: „http://purl.org/dc/terms/tableOfContents“

``` ->

<!-- Reichhaltige Metadaten mit Begriffen, die den Prozess beschreiben, wie die Originaldaten erhalten, aufgezeichnet und gesammelt wurden, bieten Kontext -->
<!-- über die Datenqualität und welche Datenquellen mit anderen kombiniert werden können. Tabelle 3 enthält Metadatenbegriffe, die angepasst wurden
aus den GATHER-Richtlinien. Wenn ein Datenlieferant eine Datenquelle bereitstellt, muss er zur Bereitstellung ein Formular ausfüllen
Kontext zu den bereitgestellten Daten. Die Antworten auf dem Formular generieren die beschreibenden Metadaten für diese Datenquelle. Der
Begriffe, die zur Beschreibung von Datenbeständen verwendet werden, hängen von der Art der Datenquelle ab; Beispielsweise nicht alle Datenquellen
enthält Informationen über Krankheiten.

Je mehr Metadaten erstellt werden, desto kontrollierte Vokabulare werden für jeden Begriff erstellt oder angepasst. ->

<!-- Tabelle 3: Metadatenbegriffe und -definitionen, angepasst an die GATHER-Richtlinien

| Begriff | Definition |
| :--- | ---------: |
| Arten | Artenklassifikation des Organismus |
| Krankheit | Wenn Sie auf gemeldeten Krankheiten basieren, geben Sie Krankheiten an, die in die Studie einbezogen wurden |
| Einschlusskriterien | Demografische, klinische oder geografische Inklusion |
| Ausschlusskriterien | Demografischer, klinischer oder geografischer Ausschluss |
| dataCollectionMethod | Wie wurden die Daten erhoben? Umfrage? Feldstudie? |
| ageRange | Alter der Studienteilnehmer. |
| Sex | Geben Sie die Geschlechter der enthaltenen Arten an. |
| Beispielgröße | Stichprobengröße |
| Messmethode | Wie das Ergebnis des Interesses gemessen wurde. |
| Diagnosekriterien | Wie die Krankheit diagnostiziert wurde. |
| definiertBias | Identifizieren und beschreiben Sie alle Kategorien von Eingabedaten, die potenziell wichtige Verzerrungen aufweisen. |
| Dateiformat | Format der Datendatei (csv, json usw.) |
| Analysemethode | Wie das interessierende Ergebnis analysiert wurde – sollte gegebenenfalls auch einen Link zu GitHub bereitstellen |
| Studiendesign | Informationen zum Forschungsdesign. Begriffe wie Kohortenstudie, randomisierte Studie, Kosten-Nutzen-Analyse, deskriptive Studie, diagnostische Studie usw. werden erwartet. |
| | | ->

## Vokabeln und Ontologien

Auf bereits vorhandene Vokabulare und Ontologien wird zugegriffen, diese verfeinert, verglichen und erweitert, um eine zu erstellen
kontrollierter Wortschatz für GBADs. Für jede Datenquelle wird auf die Semantik zugegriffen, um die Übereinstimmung der Wörter sicherzustellen
Wird verwendet, um Daten zu beschreiben, die zwischen Datenquellen konsistent sind.

- Es werden Vokabeln für Datenquellen ermittelt, die keine Vokabelstandards zitieren, und es werden Wörter erstellt
im Vergleich zu bereits existierenden Datenstandards wie AGROVOC (kontrolliertes Vokabular der FAO)
- Die gesammelten Vokabeln werden für alle Datenquellen verglichen, um zu sehen, wie die Beschreibungen der Begriffe miteinander verglichen werden.
- Ziel ist es, einen Standard für GBADs bereitzustellen, der die Interoperabilität und Qualität der Daten erhöht und letztendlich dazu führt
überlegene Modelle und Schätzungen
- Auch kontrollierte Vokabulare führen zu besseren Systemen und ermöglichen die Automatisierung von Aufgaben

Agroportal ist ein Ontologie-Mapping-Tool, das es GBADs ermöglicht, geeignete Ontologien und Zuordnungen zwischen ihnen zu bestimmen
Standardisierte Vokabeln im Zusammenhang mit dem Agrarsektor.
- Wir erkennen auch an, dass wir von Datenlieferanten nicht erwarten können, dass sie ihr Vokabular ändern, um dem der GBADs zu folgen
(Und wenn wir danach fragen würden, könnte es Leute davon abhalten, Daten beizutragen). Dies unterstreicht die Bedeutung des Wortschatzes
Zuordnungen.

## Speicherung und Verwaltung von Metadaten

> „Alles Wissen liegt in Zusammenhängen“

> -- [David Rumelhart](https://en.wikipedia.org/wiki/David_Rumelhart)

GBADs Informatics verwendet [neo4j](https://neo4j.com/), ein Graphdatenbank-Managementsystem, um Metadaten und Informationen über am Projekt beteiligte Personen und Gruppen zu verwalten und zu speichern. Wie Sie in diesem Abschnitt erfahren werden, handelt es sich bei einer Diagrammdatenbank um einen Datenbanktyp, der die Idee von Verbindungen zwischen Entitäten als Methode nutzt, um Erkenntnisse und neues Wissen aus ansonsten unzusammenhängenden Daten abzuleiten.

### Was ist eine Graphdatenbank?

Eine Diagrammdatenbank ist eine Art Datenbank, die Daten unter Verwendung von Beziehungen zwischen Hauptideen oder -einheiten speichert. Die Beziehungen zwischen verschiedenen Entitäten weisen eine Verbundenheit auf, sodass mehr Erkenntnisse gewonnen werden können als bei einer herkömmlichen relationalen Datenbank. Da Daten in Bezug auf Struktur, Herkunft, Governance, Sicherheit und Semantik hochkomplex und mehrdimensional sind, nutzt GBADs Graphdatenbanken für die Verwaltung von Stammmetadaten und die Datenkatalogisierung. Indem wir die dynamische Natur der Diagrammdatenbank nutzen und unser **Diagrammmodell** so strukturieren, dass ein besseres Verständnis der vielen Dimensionen von Daten ermöglicht wird, können wir sowohl visualisieren als auch verstehen, wie Daten außerhalb und innerhalb unserer Organisation fließen. Graphdatenbanken ermöglichen es uns auch, die Struktur hinzuzufügen und zu ändern, wenn sich die Struktur der Informationen über Daten ändert. Dies wird deutlicher, wenn wir das vorläufige GBADs-Grafikdatenmodell vorstellen.

---

Traditionell werden Daten in einer Reihe von Tabellen organisiert. Jede der Tabellen verfügt über Spalten, und einige Tabellen verfügen über gemeinsame Spalten. Mit diesen gemeinsamen Spalten können Sie Verknüpfungen zwischen Tabellen angeben, was zu einer neuen Tabelle führt.

Der größte Vorteil relationaler Datenbanken ist die Möglichkeit, gemeinsame Tabellen zu verknüpfen, um Erkenntnisse abzuleiten. Andererseits erfordern relationale Datenbanken starre Schemata, die von Datenbankentwicklern verlangen, ihre Daten so zu strukturieren, dass sie zum Schema passen. Dies geht mit der Annahme einher, dass wir bereits wissen, wie alle unsere Daten aussehen, was bei der Forschung nicht immer der Fall ist.

---


### Teile einer Graphdatenbank

Diagrammdatenbanken bestehen aus **Knoten** (Entitäten) und **Kanten** (Beziehungen). Knoten können Eigenschaften und Beschriftungen haben, während Kanten als Verbindung oder Beziehung zwischen Knoten dienen.

Ein Diagrammmodell ist ein Modell dafür, welche Arten von Knoten Sie darstellen und wie sie verbunden sind (welche Beziehungen Sie haben werden).

![Grafikmodell](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210719_GBADs_GraphModel.png)

<!---## GBADs-Graphdatenbank-Anwendungsfälle--->

<!---GBADs nutzt Graphdatenbanken für zwei Hauptzwecke:
1. Master-Metadatenverwaltung
2. Managementinformationssystem (MIS) --->

## Graphdatenbank und Metadaten-API

**Wird aktualisiert, wenn die API gestartet wird**
