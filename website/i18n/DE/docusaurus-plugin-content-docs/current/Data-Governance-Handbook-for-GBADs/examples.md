---
sidebar_position: 12
---
Beispiele
========

```{Ermahnung} Beschreibung dieses Abschnitts erforderlich
Geben Sie ein Szenario und Metadaten für jeden Datentyp an, der im Abschnitt Dateneigentum beschrieben wird
```

Szenario 1: Metadaten für Unternehmensdaten
----------------------------------------

Metadaten für FAO-Daten, die bereits über das GBADs-Portal verfügbar sind. Metadaten sind für
Lebende Tiere > Äthiopien > Bestände > Hühner > 1961 - 2018.

Diese Metadaten gehen von folgenden Annahmen aus:
- Das Erstellungsdatum ist der Zeitpunkt, an dem die FAO ihre Methodologien für landwirtschaftliche Datenbereiche überarbeitet hat
- [Referenz](http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf)

```

"@context": {
//Hier würde jeder Metadatenbegriff mit einer Referenz (URL) stehen
// zum Kontext oder Beschreibung des Begriffs
//Wir entscheiden immer noch über Standards und erstellen unsere eigenen (was sein kann
//registriert), daher bleibt dies vorerst weitgehend leer.
"spatialCoverage": "https://www.geonames.org/countries/",
"temporalCoverage": "https://www.iso.org/iso-8601-date-and-time-format.html"

},
"@id": "http://www.fao.org/faostat/en/#data/QA",
"@type":"https://schema.org/Dataset",
"URI": "http://www.fao.org/faostat/en/#data/QA",
"title": "FAO-Huhn, lebende Tiere",
"accessRights":"Öffnen",
"Abgrenzung":{
"accrualMethod":"Darlehen",
"accrualPeriodicity":"Jährlich",
},
"Schöpfer": {
"@type": "creatorCorporate",
"URL": "http://www.fao.org/",
},
"Abdeckung": {
"temporalCoverage":"1961/2018",
"spatialCoverage":"ET"
},
"Datum": {
"erstellt": "2016",
"dateSubmitted":"2020-10-09",
"geändert": "2020-03-04"
},
"description":"Anzahl lebender Hühner in Äthiopien von 1961 bis 2020, berechnet und erfasst von der FAO.",
"distribution":"directDownload",
"Beziehung":{
"format": "csv, json"
},
"Thema": {
"subjectClassification":"",
"subjectKeywords": "Huhn, FAO, lebende Tiere",
"subjectThesaraus":"http://aims.fao.org/vest-registry/vocabularies/agrovoc"
},
"Sprache Englisch",
"license":"http://www.fao.org/tenure/resources/results/details/en/c/CA7570EN/#querystring=JmVuZHN0cmluZz0x",
"Herkunft":[
"http://fenixservices.fao.org/faostat/static/documents/QA/QA_Update_History.pdf",
"http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf"
],
"publisher":"http://www.fao.org/faostat/",
"source":"http://www.fao.org/faostat/en/#data/QA",
"methodology":"http://fenixservices.fao.org/faostat/static/documents/QA/QL_methodology_e.pdf",
"metadataInformation":"http://www.fao.org/faostat/en/#data/QA",
"vocabularyEncodingScheme": "http://aims.fao.org/vest-registry/vocabularies/agrovoc"


```

Szenario 2: Metadaten für geänderte Daten
--------------------------------------

In den Fällen, in denen Rohdaten in irgendeiner Weise modifiziert wurden, beispielsweise durch Modellierung, müssen Metadaten widerspiegeln, dass die Daten geändert wurden
durch irgendeine Art von Transformation entstanden. Auch die Herkunftsangaben der Rohdaten sind anzugeben
einschließlich Links oder Verweise auf Computerprogramme, die die Daten erstellt haben. Weiterführende Publikationen sind ebenfalls zu zitieren
oder referenziert. Bitte beachten Sie, dass GBADs noch keine Daten für dieses Szenario hat und diese Metadaten fabriziert sind
Verbesserung des Verständnisses der Metadaten- und Data-Governance-Strategie.

```{Ermahnung} Zu ergänzen
Metadaten
```

Szenario 3: Metadaten von indigenen Mitwirkenden
-------------------------------------------------

In diesem Szenario werden die Daten von indigenen Völkern oder Gemeinschaften beigetragen und die Metadaten spiegeln die Daten wider und
Datenschutzbeschränkungen, die zur Einhaltung von CARE verwendet werden sollten.

```{Ermahnung} Zu ergänzen
Metadaten
```


