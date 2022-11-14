---
sidebar_position: 12
---
Ejemplos
========

```{admonición} Se necesita una descripción de esta sección
Proporcione un escenario y metadatos para cada tipo de datos descritos en la sección Propiedad de los datos
```

Escenario 1: Metadatos para datos corporativos
----------------------------------------

Metadatos para datos de la FAO que ya están disponibles a través del portal GBADs. Los metadatos son para
Animales vivos > Etiopía > Stocks > Pollos > 1961 - 2018.

Estos metadatos hacen las siguientes suposiciones:
- La fecha de creación es cuando la FAO revisó sus metodologías de dominio de datos agrícolas
- [Referencia](http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf)

```

"@contexto": {
//Cada término de metadatos iría aquí, con una referencia (URL)
// al contexto, o descripción del término
//Todavía estamos decidiendo los estándares y creando los nuestros propios (que pueden ser
//registrado), por lo que esto se deja en gran parte en blanco, por ahora.
"cobertura espacial":"https://www.geonames.org/countries/",
"cobertura temporal":"https://www.iso.org/iso-8601-formato-de-fecha-y-hora.html"

},
"@id": "http://www.fao.org/faostat/en/#data/QA",
"@type":"https://schema.org/Conjunto de datos",
"URI": "http://www.fao.org/faostat/en/#data/QA",
"título": "Pollo de la FAO, animales vivos",
"derechosdeacceso":"Abrir",
"acumulación":{
"accrualMethod":"préstamo",
"accrualPeriodicity":"Anual",
},
"creador": {
"@type": "creadorCorporativo",
"URL":"http://www.fao.org/",
},
"cobertura": {
"cobertura temporal":"1961/2018",
"cobertura espacial":"ET"
},
"fecha": {
"creado":"2016",
"fechaEnviado":"2020-10-09",
"modificado": "2020-03-04"
},
"description":"Número de pollos vivos en Etiopía desde 1961 hasta 2020, calculado y registrado por la FAO.",
"distribución":"descargadirecta",
"relación":{
"formato":"csv, json"
},
"tema": {
"clasificación del tema": "",
"subjectKeywords": "Pollo, FAO, Animales vivos",
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
"metadataInformación":"http://www.fao.org/faostat/en/#data/QA",
"vocabularyEncodingScheme": "http://aims.fao.org/vest-registry/vocabularies/agrovoc"


```

Escenario 2: metadatos para datos modificados
---------------------------------------------

En los casos en que los datos sin procesar se modificaron de alguna manera, como a través del modelado, los metadatos deben reflejar que los datos son
creado a través de transformaciones de algún tipo. También se debe proporcionar la información de procedencia de los datos sin procesar.
incluyendo enlaces o referencias a programas de computadora que crearon los datos. También se deben citar las publicaciones relacionadas.
o referenciado. Tenga en cuenta que GBADs aún no tiene datos para este escenario y estos metadatos se fabrican para
mejorar la comprensión de los metadatos y la estrategia de gobernanza de datos.

```{advertencia} para agregar
metadatos
```

Escenario 3: metadatos de contribuyentes indígenas
-------------------------------------------------

En este escenario los datos son aportados por Pueblos Indígenas o comunidades y los metadatos reflejarán los datos y
restricciones de privacidad que deben utilizarse para cumplir con CARE.

```{advertencia} para agregar
metadatos
```


