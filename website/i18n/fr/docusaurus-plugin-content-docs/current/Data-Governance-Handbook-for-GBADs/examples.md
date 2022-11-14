---
sidebar_position: 12
---
Exemples
========

```{avertissement} Description de cette section nécessaire
Fournissez un scénario et des métadonnées pour chaque type de données décrites dans la section Propriété des données
```

Scénario 1 : Métadonnées pour les données d'entreprise
----------------------------------------

Métadonnées pour les données de la FAO qui sont déjà disponibles via le portail GBADs. Les métadonnées sont pour
Animaux Vivants > Ethiopie > Stocks > Poulets > 1961 - 2018.

Ces métadonnées font les hypothèses suivantes :
- La date de création correspond à la révision par la FAO de ses méthodologies de domaine de données agricoles
- [Référence](http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf)

```

"@le contexte": {
//Chaque terme de métadonnées irait ici, avec une référence (URL)
//au contexte ou à la description du terme
//Nous sommes toujours en train de décider des normes et de créer les nôtres (qui peuvent être
//registered), donc ceci est laissé en grande partie vide, pour l'instant.
"couverture spatiale":"https://www.geonames.org/countries/",
"couverture temporelle":"https://www.iso.org/iso-8601-date-and-time-format.html"

},
"@id": "http://www.fao.org/faostat/en/#data/QA",
"@type":"https://schema.org/Dataset",
"URI": "http://www.fao.org/faostat/en/#data/QA",
"title": "FAO poulet, animaux vivants",
"accessRights":"Ouvrir",
"accumulation":{
"accrualMethod":"prêt",
"accrualPeriodicity":"Annuel",
},
"créateur": {
"@type": "créateurEntreprise",
"URL":"http://www.fao.org/",
},
"couverture": {
"couverture temporelle":"1961/2018",
"spatialCoverage":"ET"
},
"Date": {
"créé":"2016",
"dateSubmitted":"2020-10-09",
"modifié": "2020-03-04"
},
"description":"Nombre de poulets vivants en Éthiopie de 1961 à 2020, tel que calculé et enregistré par la FAO.",
"distribution":"téléchargement direct",
"relation":{
"format":"csv, json"
},
"matière": {
"subjectClassification":"",
"subjectKeywords": "Poulet, FAO, Animaux vivants",
"subjectThesaraus":"http://aims.fao.org/vest-registry/vocabularies/agrovoc"
},
"Langue: français",
"licence":"http://www.fao.org/tenure/resources/results/details/en/c/CA7570EN/#querystring=JmVuZHN0cmluZz0x",
"provenance":[
"http://fenixservices.fao.org/faostat/static/documents/QA/QA_Update_History.pdf",
"http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf"
],
"éditeur":"http://www.fao.org/faostat/",
"source":"http://www.fao.org/faostat/en/#data/QA",
"methodology":"http://fenixservices.fao.org/faostat/static/documents/QA/QL_methodology_e.pdf",
"metadataInformation":"http://www.fao.org/faostat/en/#data/QA",
"vocabularyEncodingScheme": "http://aims.fao.org/vest-registry/vocabularies/agrovoc"


```

Scénario 2 : Métadonnées pour les données modifiées
--------------------------------------------

Dans les cas où les données brutes ont été modifiées d'une manière ou d'une autre, comme par la modélisation, les métadonnées doivent refléter que les données sont
créé par des transformations quelconques. Les informations de provenance des données brutes doivent également être fournies
y compris des liens ou des références aux programmes informatiques qui ont créé les données. Les publications connexes doivent également être citées
ou référencé. Veuillez noter que GBADs ne dispose pas encore de données pour ce scénario et que ces métadonnées sont fabriquées pour
améliorer la compréhension de la stratégie de gouvernance des métadonnées et des données.

```{avertissement} à ajouter
Métadonnées
```

Scénario 3 : Métadonnées des contributeurs autochtones
-------------------------------------------------

Dans ce scénario, les données sont fournies par les peuples ou les communautés autochtones et les métadonnées refléteront les données et
restrictions de confidentialité qui doivent être utilisées pour se conformer à CARE.

```{avertissement} à ajouter
Métadonnées
```


