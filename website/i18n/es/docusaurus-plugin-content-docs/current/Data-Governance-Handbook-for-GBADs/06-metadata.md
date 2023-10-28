---
sidebar_position: 6
---

# Metadatos

Los metadatos son "datos sobre datos".

Los metadatos se utilizan para almacenar información sobre los activos de datos que se almacenan en el motor de conocimiento de GBAD. Nos esforzamos para que los metadatos sean JUSTOS (encontrables, accesibles, interoperables y reutilizables).

Además, recopilamos metadatos sobre los procesos de ingesta de datos en Knowledge Engine para garantizar que se realice un seguimiento de todo el linaje de datos.





<!-- Los estándares de datos técnicos son un elemento importante de la estrategia de gobernanza de datos, ya que garantizan que los datos sean Localizables
e Interoperable y que se puedan establecer comparaciones y mapeos entre diferentes fuentes de datos.

Los estándares para datos, incluidos términos de metadatos, atributos, estructura y convenciones de nomenclatura estandarizadas, permiten que los datos
catalogar y extraer conocimientos sobre los activos de datos. Por ejemplo, las convenciones de nomenclatura estándar y bien definidas permiten
datos a consultar. Podemos realizar un seguimiento de qué tipos de datos tenemos y en qué áreas se requieren más datos. Con
Se pueden crear vocabularios estándar entre fuentes de datos, asignaciones entre fuentes, lo que nos permite comprender la relación.
entre fuentes de datos y proporcionar información sobre la calidad y confiabilidad de estas fuentes de datos.

Existen estándares de datos técnicos en cada una de las siguientes categorías: (meta)estructura de datos, contenido de (meta)datos (vocabularios)
y formato de meta(datos). -->

## Esquema de metadatos

"Un esquema de metadatos es un conjunto de reglas sobre qué tipo de declaraciones sujeto-predicado-objeto se permite hacer y cómo se permite hacerlas". -Jeffery Pomerantz

Una declaración sujeto-predicado-objeto consta de:
* Asunto = lo que se describe
* Objeto = la cosa que describe el tema
* Predicado = relación entre el sujeto y el objeto

Por ejemplo:
* Asunto = conjunto de datos QCL de FAOSTAT
* Objeto = FAO
* Predicado = creador

En esta declaración de sujeto-predicado-objeto, la FAO es la creadora del conjunto de datos QCL de FAOSTAT.

Con base en este modelo, podemos crear un esquema de metadatos que defina los predicados (también llamados elementos) que nos gustaría usar para describir un recurso. Vocabularios de metadatos como [Dublin Core](https://www.dublincore.org/), [schema.org](https://schema.org/), [PROV-DM](https://www.w3 .org/TR/prov-dm/) y [DCAT](https://www.w3.org/TR/vocab-dcat-2/), proporcionan elementos de metadatos que se pueden utilizar para describir datos. No existe una solución única cuando se trata de metadatos. Existen varios conjuntos de elementos de metadatos estándar porque lo que incluirá en los metadatos depende de cuál sea su caso de uso.

Hemos seleccionado elementos de metadatos de esquema.org y PROV-DM para describir datos y rastrear el linaje de datos en el motor de conocimiento (consulte la figura a continuación).

![Modelo de metadatos](./images/metadata Model.drawio.png)

## Esquema de codificación

Cada elemento de metadatos debe tener instrucciones sobre los valores esperados para cada elemento. Por ejemplo, hay muchas formas diferentes de especificar una fecha: 04/01/23 podría significar 4 de enero de 2023 o 1 de abril de 2023. Por lo tanto, cualquier valor para cualquier elemento que especifique una fecha debe usar [ISO-8601](https: //www.iso.org/iso-8601-date-and-time-format.html) para garantizar que todas las fechas tengan el formato estándar.

El esquema de codificación para cada elemento de metadatos utilizado en metadataModel se encuentra a continuación:

| Elemento | Esquema de codificación | Tipo esperado |
| ------- | --------------- | --------------- |
| [nombre](https://schema.org/nombre) | texto libre | cadena |
| [codeRepository](https://schema.org/codeRepository) | enlace al repositorio de GitHub | cadena |
| [Plataforma de tiempo de ejecución](https://schema.org/runtimePlatform) | nombre del lenguaje de programación o plataforma utilizada en tiempo de ejecución (necesita vocabulario controlado) | cadena |
| [fecha de creación](https://schema.org/dateCreated) |[ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html) | fechahora |
| [hora de inicio](https://schema.org/startTime) |[ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html)| fechahora |
| [hora final](https://schema.org/endTime) |[ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html)| fechahora |
| prov:tipo | Vocabulario controlado que se creará para el caso de uso (*es decir* ingestionEvent, dataCleaning, etc.)| cadena |
| [descripción](https://schema.org/description) | texto libre | cadena|
| [url](https://schema.org/url) | URL | cadena |
| [identificador](https://schema.org/identifier) ​​| URL, doi o uri | cadena |
| [licencia](https://schema.org/license) | URL | cadena |
| [Cobertura temporal](https://schema.org/coberturatemporal) |[ISO-8601](https://www.iso.org/iso-8601-date-and-time-format.html) | fechahora |
| [creador](https://schema.org/creator) | texto libre | cadena |
| [inDefinedTermSet](https://schema.org/inDefinedTermSet) | URL | cadena |
| [Código de término](https://schema.org/termCode) | código del conjunto de términos definido | cadena |
| [Lugar](https://schema.org/Lugar) | [GeoNames](https://www.geonames.org/)| cadena |
| [Tamaño del contenido](https://schema.org/contentSize) | Tamaño del archivo en megabytes | flotador |
| [formato de archivo](https://schema.org/fileFormat) | Formato de archivo. Uno de: csv, json, dbtable, etc. (se requiere vocabulario controlado) | cadena |
| [URL del contenido](https://schema.org/contentUrl) | URL | URL |
| [fecha de carga](https://schema.org/uploadDate) | [ISO-8601](https://www.iso.org/iso-8601-fecha-y-hora-formato.html) | fechahora |

---

Decisión necesaria:

Actualmente, las palabras clave para metadatos se crean extrayendo términos (como especies) de conjuntos de datos.

Es necesario crear un vocabulario controlado al que vincular las palabras clave. Hemos comenzado a hacer esto recopilando todas las clasificaciones y definiciones de especies de fuentes de datos; sin embargo, aún no se han identificado sinónimos.

---

<!-- Contenido de metadatos


Para anotar términos de metadatos, se emplean vocabularios estándar (ver Apéndice D). Por ejemplo, todas las fechas reportadas en los metadatos son...

Términos de metadatos


Los términos de metadatos están adaptados del
- [Perfil de solicitud (AP) del Sistema Internacional de Ciencia y Tecnología Agrícolas (AGRIS)] (http://www.fao.org/3/ae909e/ae909e05.htm#P460_23819)
- [Iniciativa de metadatos básicos de Dublín (DCMI)](https://dublincore.org/specifications/dublin-core)
- [Conjunto de elementos de metadatos agrícolas (AgMES)](https://fairsharing.org/FAIRsharing.vd694s)
- Esta norma ha quedado obsoleta aunque la FAO todavía la cita.

Puede encontrar un índice de estándares de metadatos en el [Catálogo de estándares de metadatos] (https://rdamsc.bath.ac.uk/scheme-index).

Los GBAD ampliarán y perfeccionarán aún más los términos para satisfacer necesidades específicas de gobernanza y procedencia de los datos recopilados por o
manejado por el sistema del portal de datos GBADs.
## Estructura de metadatos

Los esquemas de metadatos se almacenarán en formato [JSON-LD](https://json-ld.org/). JSON-LD es un formato de datos estructurados que admite la implementación de datos vinculados. La [herramienta de metadatos estructurados] de Google (https://search.google.com/structured-data/testing-tool/) se utiliza para probar si los metadatos de salida son válidos.

Hay 3 tipos principales de metadatos, cada uno de los cuales tiene un propósito específico en el ciclo de vida de los datos (Riley, 2017) (Tabla 1).

Los metadatos descriptivos incluyen información sobre la fuente de datos utilizada para encontrar y comprender un recurso. Esto incluye información sobre el contexto de los datos, incluida información sobre la procedencia, si corresponde. Los metadatos descriptivos proporcionan información que permitirá que los datos sean localizables e interoperables.

Los metadatos administrativos incluyen dos subconjuntos de metadatos: metadatos técnicos y de derechos. Riley (2017) describe los metadatos administrativos como metadatos que se utilizan para la gestión de un recurso de datos determinado. Los metadatos de derechos proporcionan información sobre la licencia y los derechos de autor de una fuente determinada, mientras que los metadatos técnicos proporcionan información sobre el tipo de archivo y el tamaño de los datos. Los metadatos estructurales describen las relaciones entre partes de recursos y otras. Esto podría incluir información sobre cómo se organizan o ven los datos, relaciones jerárquicas o la secuencia de objetos de datos. Para los contextos de GBAD, los metadatos estructurales también son importantes para almacenar información sobre la accesibilidad de fuentes de datos privadas.

Tabla 1: Tipos de metadatos y definiciones. Tabla adaptada de Riley, 2017.
| Tipo de metadatos | Definición | Propiedades de ejemplo | Usos primarios |
| --------------- | ---------- | ------------------ | ------------ |
| Metadatos descriptivos | Para encontrar y comprender un recurso; para la calidad de los datos. | Título, Autor, Materia, Género, Fecha de publicación | Localización, visualización, interoperabilidad |
| - Metadatos administrativos - Metadatos técnicos - Metadatos de derechos | - Para decodificar y renderizar archivos - Gestión de archivos a largo plazo - Derechos de propiedad intelectual adjuntos al contenido | Técnico: tipo de archivo, tamaño de archivo, fecha/hora de creación Derechos: estado de copyright, términos de licencia, titular de derechos | Interoperabilidad, Gestión de objetos digitales, Preservación |
| Metadatos estructurales | Relaciones de partes de recursos entre sí. | Secuencia, Lugar en jerarquía | Navegación |

Los metadatos pueden incluir diferentes términos según el contexto de la fuente. La Tabla 2 tiene una lista de todos los términos posibles que los metadatos
podría incluir, así como sus URI. Cuando se utiliza un término de metadatos, el URI de ese término debe contabilizarse en la sección `@ context`
del script JSON-LD. Esto permite rastrear la definición del término hasta una definición estandarizada.

Cada activo de datos en el sistema debe describirse como mínimo con los siguientes términos (el primer conjunto de términos antes de la línea en blanco en la Tabla 2): URI,
derechos de acceso, método de acumulación, colaborador, cobertura, fecha, fecha de envío, descripción, formato, identificador, idioma, mediador, procedencia, espacial,
temporal, título, tipo, materia Tesauro, clasificación de materias.

Cuando los datos sean modificados por GBAD o provengan de la salida de un modelo, esto deberá acreditarse en los metadatos. En estos casos, lo siguiente
Se pueden utilizar términos: modificado, alternativo, reemplaza, isPartof, isFormat, hasFormat, hasPart, isRequiredBy, isVersionOf, hasVersion, procedencia,
requiere. Por ejemplo, en el escenario en el que GBAD ha adquirido un activo de datos que se cambió de un vocabulario a otro, términos de metadatos.
isVersionOf, procedencia, requisitos y modificado se utilizarían para reflejar los cambios. -->

<!-- Tabla 2: Todos los términos de metadatos posibles y sus respectivos URI.

```json

"@contexto": {
"URI": "",
"accessRights": "http://purl.org/dc/terms/accessRights",
"accrualMethod": "http://purl.org/dc/terms/accrualMethod",
"colaborador": "http://purl.org/dc/terms/contributor",
"cobertura": "http://purl.org/dc/terms/coverage",
"fecha": "http://purl.org/dc/terms/date",
"dateSubmitted": "http://purl.org/dc/terms/dateSubmitted",
"descripción": "http://purl.org/dc/terms/description",
"formato": "http://purl.org/dc/terms/format",
"identificador": "http://purl.org/dc/terms/identifier",
"idioma": "http://purl.org/dc/terms/language",
"mediador": "http://purl.org/dc/terms/mediator",
"procedencia": "http://purl.org/dc/terms/provenancia",
"derechos": "http://purl.org/dc/terms/rights",
"espacial": "http://purl.org/dc/terms/spatial",
"temporal": "http://purl.org/dc/terms/temporal",
"título": "http://purl.org/dc/terms/title",
"tipo": "http://purl.org/dc/terms/type",
"subjectThesaurus": "http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectThesaurus",
"subjectClassification": "http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectClassification",

"accrualPeriodicity": "http://purl.org/dc/terms/accrualPeriodicity",
"accrualPolicy": "http://purl.org/dc/terms/accrualPolicy",
"alternativa": "http://purl.org/dc/terms/alternative",
"audiencia": "http://purl.org/dc/terms/audience",
"disponible": "http://purl.org/dc/terms/available",
"Citabibliográfica": "http://purl.org/dc/terms/bibliographicCitation",
"conformsTo": "http://purl.org/dc/terms/conformsTo",
"creado": "http://purl.org/dc/terms/creado",
"creador": "http://purl.org/dc/terms/creator",
"dateAccepted": "http://purl.org/dc/terms/dateAccepted",
"dateCopyrighted": "http://purl.org/dc/terms/dateCopyrighted",
"extensión": "http://purl.org/dc/terms/extent",
"hasFormat": "http://purl.org/dc/terms/hasFormat",
"isFormatOf": "http://purl.org/dc/terms/isFormatOf",
"hasPart": "http://purl.org/dc/terms/hasPart",
"isPartOf": "http://purl.org/dc/terms/isPartOf",
"hasVersion": "http://purl.org/dc/terms/hasVersion",
"isVersionOf": "http://purl.org/dc/terms/isVersionOf",
"isReferencedBy": "http://purl.org/dc/terms/isReferencedBy",
"reemplaza": "http://purl.org/dc/terms/replaces",
"isReplacedBy": "http://purl.org/dc/terms/isReplacedBy",
"requiere": "http://purl.org/dc/terms/requires",
"isRequiredBy": "http://purl.org/dc/terms/isRequiredBy",
"licencia": "http://purl.org/dc/terms/license",
"modificado": "http://purl.org/dc/terms/modificado",
"referencias": "http://purl.org/dc/terms/references",
"rightsHolder": "http://purl.org/dc/terms/rightsHolder",
"fuente": "http://purl.org/dc/terms/source",
"asunto": "http://purl.org/dc/terms/subject",
"tableOfContents": "http://purl.org/dc/terms/tableOfContents"

``` -->

<!-- Metadatos enriquecidos con términos que describen el proceso de cómo se obtuvieron, registraron y recopilaron los datos originales proporcionan contexto -->
<!-- sobre la calidad de los datos y qué fuentes de datos se pueden combinar con otras. La Tabla 3 proporciona términos de metadatos que fueron adaptados
de las pautas de GATHER. Cuando un contribuyente de datos proporciona una fuente de datos, se le pedirá que complete un formulario para proporcionar
contexto sobre los datos proporcionados. Las respuestas del formulario generarán los metadatos descriptivos para esa fuente de datos. El
Los términos que se utilizan para describir los activos de datos dependerán de la naturaleza de la fuente de datos; por ejemplo, no todas las fuentes de datos
contendrá información sobre la enfermedad.

A medida que se creen más metadatos, se crearán o adaptarán vocabularios controlados para cada término. -->

<!-- Tabla 3: Términos y definiciones de metadatos adaptados de las directrices GATHER

| Término | Definición |
| :--- | ---------: |
| especies | Clasificación de especies de organismos |
| enfermedad | Si se basa en la enfermedad notificada, proporcione las enfermedades que se incluyeron en el estudio.
| criterios de inclusión | Inclusión demográfica, clínica o geográfica |
| criterios de exclusión | Exclusión demográfica, clínica o geográfica |
| método de colección de datos | ¿Cómo se recopilaron los datos? ¿Encuesta? ¿Estudio de campo? |
| rango de edad | Edad de los sujetos de estudio. |
| sexo | Proporcione el sexo(s) de las especies incluidas. |
| tamaño de muestra | Tamaño de la muestra |
| método de medición | Cómo se midió el resultado de interés. |
| criterios diagnósticos | Cómo se diagnosticó la enfermedad. |
| sesgo definido | Identifique y describa cualquier categoría de datos de entrada que tenga sesgos potencialmente importantes. |
| formato de archivo | Formato del archivo de datos (csv, json, etc.) |
| método de análisis | Cómo se analizó el resultado de interés: también debe proporcionar un enlace a GitHub, si corresponde |
| estudioDiseño | Información sobre el diseño de la investigación. Se esperan términos como estudio de cohorte, ensayo aleatorio, análisis de costo-beneficio, estudio descriptivo, estudio de diagnóstico, etc. |
| | | -->

## Vocabularios y Ontologías

Se accederá a vocabularios y ontologías preexistentes, se perfeccionarán, compararán y ampliarán para crear un
Vocabulario controlado para GBAD. Se accederá a la semántica de cada fuente de datos para garantizar que las palabras
utilizados para describir los datos son consistentes entre las fuentes de datos.

- Se obtendrán vocabularios para fuentes de datos que no citan estándares de vocabulario y se
en comparación con estándares de datos preexistentes como AGROVOC (vocabulario controlado de la FAO)
- Los vocabularios recopilados se compararán para todas las fuentes de datos, para ver cómo se comparan las descripciones de los términos entre sí.
- El objetivo es proporcionar un estándar para GBAD, aumentando la interoperabilidad y la calidad de los datos, lo que en última instancia conduce a
modelos y estimaciones superiores
- También los vocabularios controlados conducen a mejores sistemas y permiten la automatización de tareas.

Agroportal es una herramienta de mapeo de ontologías que permitirá a los GBAD determinar ontologías adecuadas y mapear entre
vocabularios estandarizados relacionados con el sector agrícola.
- También reconocemos que no podemos esperar que los contribuyentes de datos cambien su vocabulario para seguir el de los GBAD.
(y si preguntamos, puede disuadir a las personas de aportar datos). Esto subraya la importancia del vocabulario.
mapeos.

## Almacenamiento y gestión de metadatos

> "Todo el conocimiento está en las conexiones"

> -- [David Rumelhart](https://en.wikipedia.org/wiki/David_Rumelhart)

GBADs Informatics utiliza [neo4j](https://neo4j.com/), un sistema de gestión de bases de datos gráficas, para gestionar y almacenar metadatos e información sobre personas y grupos involucrados en el proyecto. Como aprenderá en esta sección, una base de datos de gráficos es un tipo de base de datos que aprovecha la idea de conexiones entre entidades como un método para derivar ideas y nuevos conocimientos a partir de datos que de otro modo estarían desconectados.

### ¿Qué es una base de datos gráfica?

Una base de datos de gráficos es un tipo de base de datos que almacena datos utilizando relaciones entre ideas o entidades principales. Las relaciones entre diferentes entidades muestran conectividad, lo que permite obtener más información que una base de datos relacional tradicional. Debido a que los datos son muy complejos y multidimensionales en términos de estructura, procedencia, gobernanza, seguridad y semántica, GBAD utiliza bases de datos de gráficos para la gestión de metadatos maestros y la catalogación de datos. Al aprovechar la naturaleza dinámica de la base de datos de gráficos y estructurar nuestro **modelo de gráficos** de una manera que permita una mejor comprensión de las muchas dimensiones de los datos, podemos visualizar y comprender cómo fluyen los datos fuera y dentro de nuestra organización. Las bases de datos de gráficos también nos permiten agregar y cambiar la estructura a medida que cambia la estructura de la información sobre los datos. Esto quedará más claro a medida que presentemos el modelo de datos del gráfico GBAD preliminar.

---

Tradicionalmente, los datos se organizan en una serie de tablas. Cada una de las tablas tiene columnas y algunas tablas tienen columnas comunes. Con estas columnas comunes puede especificar uniones entre tablas, lo que da como resultado una nueva tabla.

La mayor ventaja de las bases de datos relacionales es la capacidad de unir tablas comunes para obtener información. Por otro lado, las bases de datos relacionales requieren esquemas rígidos que requieren que los ingenieros de bases de datos estructuren sus datos para que se ajusten al esquema. Esto viene con el supuesto de que sabemos cómo son todos nuestros datos, lo que no siempre es el caso para la investigación.

---


### Partes de una base de datos gráfica

Las bases de datos de gráficos se componen de **nodos** (entidades) y **aristas** (relaciones). Los nodos pueden tener propiedades y etiquetas, mientras que los bordes sirven como conexión o relación entre nodos.

Un modelo gráfico es un modelo de qué tipos de nodos estás representando y cómo están conectados (qué relaciones tendrás).

![Modelo gráfico](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210719_GBADs_GraphModel.png)

<!---## Casos de uso de la base de datos de gráficos GBADs--->

<!---GBADs utiliza bases de datos de gráficos para 2 propósitos principales:
1. Gestión de metadatos maestros
2. Sistema de información de gestión (MIS) --->

## Base de datos gráfica y API de metadatos

**Se actualizará cuando se lance la API**
