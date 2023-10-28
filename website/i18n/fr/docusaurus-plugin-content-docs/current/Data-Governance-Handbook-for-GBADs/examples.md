---
sidebar_position: 11
---
Exemples
========

```{avertissement} Description de cette section nécessaire
Fournissez un scénario et des métadonnées pour chaque type de données décrit dans la section Propriété des données
```

Scénario 1 : Métadonnées pour les données d'entreprise
---------------------------------------------

Métadonnées des données de la FAO déjà disponibles sur le portail GBADs. Les métadonnées sont destinées
Animaux vivants > Ethiopie > Chevaux > Poulets > 1961 - 2018.

Ces métadonnées font les hypothèses suivantes :
- La date de création correspond à la date à laquelle la FAO a révisé ses méthodologies de domaine de données agricoles.
- [Référence](http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf)

```

"@contexte": {
//Chaque terme de métadonnées serait placé ici, avec une référence (URL)
//au contexte ou à la description du terme
//Nous sommes encore en train de décider des normes et de créer les nôtres (qui peuvent être
//enregistré), ce champ reste donc largement vide pour l'instant.
"spatialCoverage": "https://www.geonames.org/countries/",
"temporalCoverage": "https://www.iso.org/iso-8601-date-and-time-format.html"

},
"@id": "http://www.fao.org/faostat/en/#data/QA",
"@type": "https://schema.org/Dataset",
"URI": "http://www.fao.org/faostat/en/#data/QA",
"title": "Poulet FAO, animaux vivants",
"accessRights": "Ouvrir",
"accumulation":{
"accrualMethod": "prêt",
"accrualPeriodicity": "Annuel",
},
"créateur": {
"@type": "creatorCorporate",
"URL": "http://www.fao.org/",
},
"couverture": {
"temporalCoverage": "1961/2018",
"spatialCoverage": "ET"
},
"date": {
"créé": "2016",
"dateSoumis": "2020-10-09",
"modifié": "04/03/2020"
},
"description": "Nombre de poulets vivants en Ethiopie de 1961 à 2020, tel que calculé et enregistré par la FAO.",
"distribution": "directTéléchargement",
"relation":{
"format": "csv, json"
},
"sujet": {
"Classification du sujet": "",
"subjectKeywords": "Poulet, FAO, Animaux vivants",
"subjectThesaraus": "http://aims.fao.org/vest-registry/vocabularies/agrovoc"
},
"Langue: français",
"licence": "http://www.fao.org/tenure/resources/results/details/en/c/CA7570EN/#querystring=JmVuZHN0cmluZz0x",
"provenance":[
"http://fenixservices.fao.org/faostat/static/documents/QA/QA_Update_History.pdf",
"http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf"
],
"éditeur": "http://www.fao.org/faostat/",
"source": "http://www.fao.org/faostat/en/#data/QA",
"méthodologie": "http://fenixservices.fao.org/faostat/static/documents/QA/QL_methodology_e.pdf",
"metadataInformation": "http://www.fao.org/faostat/en/#data/QA",
"vocabularyEncodingScheme": "http://aims.fao.org/vest-registry/vocabularies/agrovoc"


```

Scénario 2 : Métadonnées pour les données modifiées
--------------------------------------

Dans les cas où les données brutes ont été modifiées d'une manière ou d'une autre, par exemple par modélisation, les métadonnées doivent refléter le fait que les données sont
créé par des transformations quelconques. Les informations sur la provenance des données brutes doivent également être fournies
y compris des liens ou des références à des programmes informatiques qui ont créé les données. Les publications connexes doivent également être citées
ou référencé. Veuillez noter que GBADs ne dispose pas encore de données pour ce scénario et que ces métadonnées sont fabriquées pour
améliorer la compréhension de la stratégie de gouvernance des métadonnées et des données.

```{avertissement} à ajouter
Métadonnées
```

Scénario 3 : Métadonnées provenant de contributeurs autochtones
-------------------------------------------------

Dans ce scénario, les données proviennent des peuples ou des communautés autochtones et les métadonnées refléteront les données et
restrictions de confidentialité qui doivent être utilisées pour se conformer à CARE.

```{avertissement} à ajouter
Métadonnées
```


