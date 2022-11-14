---
sidebar_position: 3
---
Estándares de datos técnicos
========================

Los estándares de datos técnicos son un elemento importante de la estrategia de gobierno de datos, ya que garantizan que los datos se puedan encontrar.
e Interoperable y que se puedan establecer comparaciones y mapeos entre diferentes fuentes de datos.

Los estándares para los datos, incluidos los términos de los metadatos, los atributos, la estructura y las convenciones de nomenclatura estandarizadas, permiten que los datos
catalogarse y obtener información sobre los activos de datos. Por ejemplo, las convenciones de nomenclatura estándar y bien definidas permiten
datos a consultar. Podemos realizar un seguimiento de qué tipos de datos tenemos y en qué áreas se requieren más datos. Con
vocabularios estándar entre fuentes de datos, se pueden crear asignaciones entre fuentes, lo que nos permite comprender la relación
entre las fuentes de datos y proporcionar información sobre la calidad y confiabilidad de estas fuentes de datos.

Los estándares de datos técnicos existen en cada una de las siguientes categorías: estructura de (meta)datos, contenido de (meta)datos (vocabularios)
y formato de meta(datos).

Contenido de metadatos
----------------

Para anotar los términos de los metadatos, se emplean vocabularios estándar (consulte el Apéndice D). Por ejemplo, todas las fechas reportadas en los metadatos son...

Términos de metadatos
--------------

Los términos de metadatos están adaptados del
- [Perfil de aplicación (AP) del Sistema Internacional de Ciencia y Tecnología Agrícolas (AGRIS)](http://www.fao.org/3/ae909e/ae909e05.htm#P460_23819)
- [Iniciativa de metadatos de Dublin Core (DCMI)](https://dublincore.org/specifications/dublin-core)
- [Conjunto de elementos de metadatos agrícolas (AgMES)] (https://fairsharing.org/FAIRsharing.vd694s)
- Este estándar ha quedado en desuso aunque la FAO todavía lo cita.

Se puede encontrar un índice de estándares de metadatos en el [Catálogo de estándares de metadatos] (https://rdamsc.bath.ac.uk/scheme-index).

Los GBAD ampliarán y refinarán aún más los términos para satisfacer las necesidades específicas de gobernanza y procedencia de los datos recopilados por o
manejado por el sistema de portal de datos GBADs.

Estructura de metadatos
------------------

Los esquemas de metadatos se almacenarán en formato [JSON-LD](https://json-ld.org/). JSON-LD es un formato de datos estructurados que admite la
implementación de datos enlazados. La [herramienta de metadatos estructurados] de Google (https://search.google.com/structured-data/testing-tool/) será
utilizados como metadatos se crean, revisan y editan a lo largo de nuestro ciclo de vida de datos.

Hay 3 tipos principales de metadatos, cada uno con un propósito específico en el ciclo de vida de los datos (Riley, 2017) (Tabla 1). Descriptivo
Los metadatos incluyen información sobre la fuente de datos utilizada para encontrar y comprender un recurso. Esto incluye información sobre el
contexto de los datos, incluida la información sobre la procedencia, si procede. Los metadatos descriptivos proporcionan información que permitirá
para que los datos sean localizables e interoperables. Los metadatos administrativos incluyen dos subconjuntos de metadatos: metadatos técnicos y de derechos.
Riley (2017) describe los metadatos administrativos como metadatos que se utilizan para la gestión de un recurso de datos determinado. Metadatos de derechos
proporciona información sobre la licencia y la información de derechos de autor de una fuente determinada, mientras que los metadatos técnicos proporcionan información sobre
el tipo de archivo y el tamaño de los datos. Los metadatos estructurales describen las relaciones entre partes de recursos y otras. Esto podría
incluyen información sobre cómo se organizan o visualizan los datos, las relaciones jerárquicas o la secuencia de los objetos de datos. Para los contextos
de GBAD, los metadatos estructurales también son importantes para almacenar información sobre la accesibilidad de las fuentes de datos privados. esto se discute
en la sección [FIXME ADD SECTION] del Manual.

Tabla 1: Tipos de metadatos y definiciones. Mesa adaptada de Riley, 2017.
| Tipo de metadatos | Definición | Propiedades de ejemplo | Usos principales |
| :--------------- | ---------- | ------------------ | ------------ |
| Metadatos descriptivos | Para encontrar y comprender un recurso; para la calidad de los datos. | Título, autor, tema, género, fecha de publicación | Localización, Visualización, Interoperabilidad |
| - Metadatos administrativos - Metadatos técnicos - Metadatos de derechos | - Para decodificar y renderizar archivos - Gestión a largo plazo de archivos - Derechos de propiedad intelectual adjuntos al contenido | Técnico: tipo de archivo, tamaño del archivo, fecha/hora de creación Derechos: Estado de los derechos de autor, Términos de la licencia, Titular de los derechos | Interoperabilidad, Gestión de objetos digitales, Preservación |
| Metadatos estructurales | Relaciones de partes de recursos entre sí. | Secuencia, Lugar en jerarquía | Navegación |
| | | | |

Los metadatos pueden incluir diferentes términos según el contexto de la fuente. La Tabla 2 tiene una lista de todos los términos posibles que los metadatos
podría incluir, así como sus URI. Cuando se utiliza un término de metadatos, el URI de ese término debe tenerse en cuenta en la sección `@contexto`
del script JSON-LD. Esto permite que la definición del término se remonte a una definición estandarizada.

Cada activo de datos en el sistema debe estar descrito como mínimo con los siguientes términos (el primer conjunto de términos antes de la línea en blanco en la Tabla 2): URI,
accessRights, accrualMethod, contribuidor, cobertura, fecha, fecha de envío, descripción, formato, identificador, idioma, mediador, procedencia, espacial,
temporal, título, tipo, subjectThesaurus, subjectClassification.

Cuando los datos sean modificados por GBADs o sean de la salida de un modelo, esto deberá acreditarse en los metadatos. En estos casos, lo siguiente
se pueden usar términos: modificado, alternativo, reemplaza, es parte de, es formato, tiene formato, tiene parte, es requerido por, es versión de, tiene versión, procedencia,
requiere Por ejemplo, en el caso de que GBADs haya adquirido un activo de datos que se cambió de un vocabulario a otro término de metadatos
isVersionOf, procedence, require y modified se utilizarían para reflejar los cambios.

Tabla 2: Todos los términos de metadatos posibles y URI respectivos.

```json

"@contexto": {
"URI": "",
"derechos de acceso": "http://purl.org/dc/terms/derechos de acceso",
"accrualMethod": "http://purl.org/dc/terms/accrualMethod",
"colaborador": "http://purl.org/dc/terms/contributor",
"cobertura": "http://purl.org/dc/terms/coverage",
"fecha": "http://purl.org/dc/terms/date",
"dateSubmitted": "http://purl.org/dc/terms/dateSubmitted",
"descripción": "http://purl.org/dc/terms/description",
"formato": "http://purl.org/dc/terms/formato",
"identificador": "http://purl.org/dc/terms/identificador",
"idioma": "http://purl.org/dc/terms/language",
"mediador": "http://purl.org/dc/terms/mediador",
"procedencia": "http://purl.org/dc/terms/provenance",
"derechos": "http://purl.org/dc/terms/rights",
"espacial": "http://purl.org/dc/terms/espacial",
"temporal": "http://purl.org/dc/terms/temporal",
"título": "http://purl.org/dc/terms/title",
"tipo": "http://purl.org/dc/terms/tipo",
"subjectThesaurus": "http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectThesaurus",
"subjectClassification": "http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectClassification",

"accrualPeriodicity": "http://purl.org/dc/terms/accrualPeriodicity",
"accrualPolicy": "http://purl.org/dc/terms/accrualPolicy",
"alternativa": "http://purl.org/dc/terms/alternativa",
"audiencia": "http://purl.org/dc/terms/audience",
"disponible": "http://purl.org/dc/terms/disponible",
"bibliographicCitation": "http://purl.org/dc/terms/bibliographicCitation",
"conforme a": "http://purl.org/dc/terms/conformsTo",
"creado": "http://purl.org/dc/terms/created",
"creador": "http://purl.org/dc/terms/creator",
"dateAccepted": "http://purl.org/dc/terms/dateAccepted",
"dateCopyrighted": "http://purl.org/dc/terms/dateCopyrighted",
"extensión": "http://purl.org/dc/terms/extensión",
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

```

Los metadatos enriquecidos con términos que describen el proceso de cómo se obtuvieron, registraron y recopilaron los datos originales proporcionan contexto
sobre la calidad de los datos y qué fuentes de datos se pueden combinar con otras. La Tabla 3 proporciona términos de metadatos que fueron adaptados
de las directrices GATHER. Cuando un contribuyente de datos proporciona una fuente de datos, se le pedirá que complete un formulario para proporcionar
contexto sobre los datos proporcionados. Las respuestas en el formulario generarán los metadatos descriptivos para esa fuente de datos. los
los términos que se utilizan para describir los activos de datos dependerán de la naturaleza de la fuente de datos; por ejemplo, no todas las fuentes de datos
contendrá información sobre la enfermedad.

A medida que se creen más metadatos, se crearán o adaptarán vocabularios controlados para cada término.

Tabla 3: Términos y definiciones de metadatos adaptados de las directrices GATHER

| Término | Definición |
| :--- | ---------: |
| especies | Clasificación de especies del organismo |
| enfermedad | Si se basa en la enfermedad notificada, indique las enfermedades que se incluyeron en el estudio |
| criterios de inclusión | Inclusión demográfica, clínica o geográfica |
| criterios de exclusión | Exclusión demográfica, clínica o geográfica |
| método de recolección de datos | ¿Cómo se recopilaron los datos? ¿Encuesta? ¿Estudio de campo? |
| rango de edad | Edad de los sujetos de estudio. |
| sexo | Indique el sexo de las especies incluidas. |
| tamaño de muestra | Tamaño de la muestra |
| método de medición | Cómo se midió el resultado de interés. |
| criterios de diagnóstico | Cómo se diagnosticó la enfermedad. |
| sesgo definido | Identifique y describa cualquier categoría de datos de entrada que tenga sesgos potencialmente importantes. |
| formato de archivo | Formato del archivo de datos (csv, json, etc.) |
| método de análisis | Cómo se analizó el resultado de interés: también debe proporcionar un enlace a GitHub, si corresponde |
| estudioDiseño | Información sobre el diseño de la investigación. Se esperan términos como estudio de cohorte, ensayo aleatorizado, análisis de costo-beneficio, estudio descriptivo, estudio de diagnóstico, etc. |
| | |

