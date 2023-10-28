---
sidebar_position: 11
---
Beispiele
========

„{admonition} Beschreibung dieses Abschnitts erforderlich
Stellen Sie ein Szenario und Metadaten für jeden Datentyp bereit, der im Abschnitt „Dateneigentum“ beschrieben wird
„

Szenario 1: Metadaten für Unternehmensdaten
----------------------------------------

Metadaten für FAO-Daten, die bereits über das GBADs-Portal verfügbar sind. Metadaten sind für
Lebende Tiere > Äthiopien > Bestände > Hühner > 1961 - 2018.

Diese Metadaten gehen von folgenden Annahmen aus:
- Das Erstellungsdatum ist der Zeitpunkt, an dem die FAO ihre Methoden für den Agrardatenbereich überarbeitet hat
- [Referenz](http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf)

„

„@context“: {
//Jeder Metadatenbegriff würde hierher kommen, mit einer Referenz (URL)
//zum Kontext oder zur Beschreibung des Begriffs
//Wir entscheiden immer noch über Standards und erstellen unsere eigenen (was möglich ist).
//registered), daher bleibt dies vorerst weitgehend leer.
„spatialCoverage“: „https://www.geonames.org/countries/“,
„temporalCoverage“: „https://www.iso.org/iso-8601-date-and-time-format.html“

},
„@id“: „http://www.fao.org/faostat/en/#data/QA“,
„@type“: „https://schema.org/Dataset“,
„URI“: „http://www.fao.org/faostat/en/#data/QA“,
„title“: „FAO Huhn, lebende Tiere“,
„accessRights“: „Öffnen“,
„Abgrenzung“:{
„accrualMethod“: „Darlehen“,
„accrualPeriodicity“: „Jährlich“,
},
„Ersteller“: {
„@type“: „creatorCorporate“,
„URL“: „http://www.fao.org/“,
},
„Abdeckung“: {
„temporalCoverage“: „1961/2018“,
„spatialCoverage“: „ET“
},
"Datum": {
„created“: „2016“,
„dateSubmitted“: „2020-10-09“,
„geändert“: „04.03.2020“
},
„description“: „Anzahl lebender Hühner in Äthiopien von 1961 bis 2020, berechnet und erfasst von der FAO.“,
„distribution“: „directDownload“,
"Beziehung":{
„format“: „csv, json“
},
"Thema": {
„subject Classification“: „,
„subjectKeywords“: „Huhn, FAO, lebende Tiere“,
„subjectThesaraus“: „http://aims.fao.org/vest-registry/vocabularies/agrovoc“
},
"Sprache Englisch",
„license“: „http://www.fao.org/tenure/resources/results/details/en/c/CA7570EN/#querystring=JmVuZHN0cmluZz0x“,
"Herkunft":[
„http://fenixservices.fao.org/faostat/static/documents/QA/QA_Update_History.pdf“,
„http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf“
],
„publisher“: „http://www.fao.org/faostat/“,
„Quelle“: „http://www.fao.org/faostat/en/#data/QA“,
„methodology“: „http://fenixservices.fao.org/faostat/static/documents/QA/QL_methodology_e.pdf“,
„metadataInformation“: „http://www.fao.org/faostat/en/#data/QA“,
„vocabularyEncodingScheme“: „http://aims.fao.org/vest-registry/vocabularies/agrovoc“


„

Szenario 2: Metadaten für geänderte Daten
--------------------------------------

In den Fällen, in denen Rohdaten auf irgendeine Weise geändert wurden, beispielsweise durch Modellierung, müssen Metadaten dies widerspiegeln
durch Transformationen irgendeiner Art entstanden. Auch die Herkunftsangaben der Rohdaten müssen angegeben werden
einschließlich Links oder Verweise auf Computerprogramme, die die Daten erstellt haben. Auch verwandte Publikationen müssen zitiert werden
oder referenziert. Bitte beachten Sie, dass GBADs noch keine Daten für dieses Szenario hat und diese Metadaten erfunden sind
Verbesserung des Verständnisses der Metadaten- und Data-Governance-Strategie.

„{admonition} Wird hinzugefügt.“
Metadaten
„

Szenario 3: Metadaten von indigenen Mitwirkenden
-------------------------------------------------

In diesem Szenario werden die Daten von indigenen Völkern oder Gemeinschaften beigesteuert und die Metadaten spiegeln die Daten wider
Datenschutzbeschränkungen, die zur Einhaltung von CARE verwendet werden sollten.

„{admonition} Wird hinzugefügt.“
Metadaten
„


