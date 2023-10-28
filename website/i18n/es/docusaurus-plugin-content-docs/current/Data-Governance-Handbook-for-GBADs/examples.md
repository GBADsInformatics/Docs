---
sidebar_position: 11
---
Ejemplos
========

```{admonition} Se necesita descripción de esta sección
Proporcione un escenario y metadatos para cada tipo de datos descritos en la sección Propiedad de los datos.
```

Escenario 1: Metadatos para datos corporativos
----------------------------------------

Metadatos para datos de la FAO que ya están disponibles a través del portal GBADs. Los metadatos son para
Animales Vivos > Etiopía > Poblaciones > Pollos > 1961 - 2018.

Estos metadatos hacen las siguientes suposiciones:
- La fecha de creación es cuando la FAO revisó sus metodologías de dominio de datos agrícolas.
- [Referencia](http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf)

```

"@contexto": {
//Cada término de metadatos iría aquí, con una referencia (URL)
//al contexto o descripción del término
//Todavía estamos decidiendo estándares y creando los nuestros propios (que pueden ser
//registered), por lo que esto se deja prácticamente en blanco, por ahora.
"cobertura espacial": "https://www.geonames.org/countries/",
"cobertura temporal": "https://www.iso.org/iso-8601-fecha-y-hora-formato.html"

},
"@id": "http://www.fao.org/faostat/en/#data/QA",
"@type":"https://schema.org/Dataset",
"URI": "http://www.fao.org/faostat/en/#data/QA",
"title": "Pollos de la FAO, animales vivos",
"accessRights":"Abrir",
"acumulación":{
"accrualMethod":"préstamo",
"accrualPeriodicity":"Anual",
},
"creador": {
"@type": "creadorCorporativo",
"URL":"http://www.fao.org/",
},
"cobertura": {
"coberturatemporal": "1961/2018",
"spatialCoverage": "ET"
},
"fecha": {
"creado": "2016",
"fecha de envío": "2020-10-09",
"modificado": "2020-03-04"
},
"description":"Número de pollos vivos en Etiopía de 1961 a 2020, calculado y registrado por la FAO.",
"distribución": "descarga directa",
"relación":{
"formato": "csv, json"
},
"sujeto": {
"Clasificación de sujetos":"",
"subjectKeywords": "Pollo, FAO, animales vivos",
"subjectThesaraus":"http://aims.fao.org/vest-registry/vocabularies/agrovoc"
},
"Idioma: inglés",
"licencia":"http://www.fao.org/tenure/resources/results/details/en/c/CA7570EN/#querystring=JmVuZHN0cmluZz0x",
"procedencia":[
"http://fenixservices.fao.org/faostat/static/documents/QA/QA_Update_History.pdf",
"http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf"
],
"editor":"http://www.fao.org/faostat/",
"fuente":"http://www.fao.org/faostat/en/#data/QA",
"metodología":"http://fenixservices.fao.org/faostat/static/documents/QA/QL_methodology_e.pdf",
"metadataInformation":"http://www.fao.org/faostat/en/#data/QA",
"vocabularyEncodingScheme": "http://aims.fao.org/vest-registry/vocabularies/agrovoc"


```

Escenario 2: Metadatos para datos modificados
--------------------------------------

En los casos en los que los datos sin procesar se modificaron de alguna manera, como mediante el modelado, los metadatos deben reflejar que los datos son
creado a través de transformaciones de algún tipo. También se debe proporcionar la información de procedencia de los datos brutos.
incluidos enlaces o referencias a programas informáticos que crearon los datos. También se deben citar las publicaciones relacionadas.
o referenciado. Tenga en cuenta que GBADs aún no tiene datos para este escenario y estos metadatos están fabricados para
mejorar la comprensión de la estrategia de gobernanza de datos y metadatos.

```{admonición} Para agregar
Metadatos
```

Escenario 3: Metadatos de contribuyentes indígenas
-------------------------------------------------

En este escenario, los datos son aportados por pueblos o comunidades indígenas y los metadatos reflejarán los datos y
restricciones de privacidad que se deben utilizar para cumplir con CARE.

```{admonición} Para agregar
Metadatos
```


