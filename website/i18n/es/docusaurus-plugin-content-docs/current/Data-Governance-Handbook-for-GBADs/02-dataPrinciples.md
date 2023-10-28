---
sidebar_position: 2
---

# Principios de datos

Como programa, tenemos principios de datos básicos en los que se basa nuestro [modelo operativo de gobernanza de datos] (https://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/dataGovOperatingModel).

Nuestros principios fundamentales incluyen:

1. Adherirnos a los principios rectores FAIR(S)[^1],[^2] lo mejor que podamos
2. Sea un intermediario de datos "confiable" y una fuente de datos federada
3. Considere los principios de CARE al utilizar datos de grupos marginados y datos privados.
4. Garantizar que todos los procesos que utilizan datos (incluida la limpieza de datos, el modelado, el reformateo, etc.) sean replicables y reproducibles.

---

En este capítulo del manual describimos los principios que pretendemos seguir en nuestro marco de gobernanza de datos y una descripción general de los procesos involucrados en cada uno.

Otros capítulos del manual proporcionarán más detalles sobre los procesos, herramientas tecnológicas y responsabilidades humanas involucradas en cada uno de los principios, y harán referencia a estos principios al describir los procesos involucrados en cada uno de nuestros objetivos de datos.

---

## 1. Principios FAIR y cultura de datos

Hemos adoptado los principios rectores FAIR(S)[^1],[^2] para garantizar que los datos, los metadatos y los procesos de modelado sean **F**indable, **A**ccessibile, **I**nteroperabile. , **R**utilizable y **S**seguro.

<!-- Para proporcionar y crear datos que puedan utilizarse en su máximo potencial, GBADs se esfuerza por proporcionar datos y metadatos que sean **F**indable, **A**accesibles, **I**nterooperables, ** R**eutilizable y **S**seguro (JUSTO(S)). -->


---

**Acerca de la FERIA:**

Los '[Principios rectores de FAIR para la gestión y administración de datos científicos](https://www.nature.com/articles/sdata201618)' se publicaron en *Scientific Data* en 2016. Desde su publicación, el artículo ha sido citado más de 4500 tiempos y ha habido esfuerzos para implementar y aceptar los principios FAIR en diferentes dominios. Esto incluye la [Iniciativa GO FAIR](https://www.go-fair.org/go-fair-initiative/go-fair-offices/), que proporciona recursos a grupos que intentan hacer que sus datos sean FAIR.

---

<!--GBADs se esfuerza por proporcionar (meta)datos que se adhieran a los principios FAIR(S) y CARE y adoptará una versión modificada de la declaración y lista de verificación GATHER para crear metadatos más granulares, cuando corresponda.

Al utilizar y aprovechar estándares preexistentes, crearemos un sistema interoperable que otros investigadores podrán comprender y aprovechar. -->



La idea de datos "FAIR" se creó en 2014/15 para guiar la reutilización, usabilidad, descubrimiento e interoperabilidad de los datos de investigación. El acrónimo "FAIR" significa Localización, Accesibilidad, Interoperabilidad y Reutilización de los activos de datos, incluidos los datos en sí y los metadatos que se utilizan para describirlos (consulte el Apéndice A para obtener un desglose de cada principio FAIR). Desde entonces, la idea de los datos FAIR ha crecido y se ha utilizado, adaptado y desarrollado ampliamente.
En 2020, la informática de GBAD propuso datos 'FAIR(S)' para agregar un elemento de seguridad a los principios rectores de FAIR.

Si bien se creó inicialmente para la reutilización de datos de investigación, la idea de FAIR ha crecido y puede aplicarse a fuentes de datos abiertas y privadas. Los GBAD adaptarán los datos FAIR como concepto de sistema. El ecosistema de datos FAIR (Figura 1) se utilizará como estructura esquelética de nuestro ecosistema de datos. Este documento actuará como un Plan de gestión de datos donde cada componente del ecosistema de datos FAIR se abordará y discutirá en términos de estructurar los objetos de datos FAIR y definir el uso de los datos que fluyen a través de nuestro sistema.

![fairDataObj](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/fairDataObj.png)

Un error popular en la adopción de los principios de intercambio FAIR es que FAIR sugiere que los datos deberían ser "Abiertos" por defecto; sin embargo, FAIR en realidad sugiere que los datos deben ser “lo más abiertos posible y tan cerrados como sea necesario” [Jones et al, 2018]. Para los GBAD, esto significa complementar los principios FAIR con CARE, lo que se analiza con más profundidad más adelante en este documento. Un componente clave en esto será identificar diferentes tipos de usuarios y contribuyentes de datos.

Garantizar que los metadatos estén en un formato estándar permitirá que los GBAD cumplan con FAIR y servirá como columna vertebral de nuestro sistema, alimentando la capacidad de buscar y encontrar recursos basados ​​en términos estandarizados. Por lo tanto, se hará hincapié en definiciones y atributos de metadatos bien definidos.

![cloudReg](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/cloudOfRegistries.png)

GBADs se esfuerza no solo por adaptar FAIR en el sistema, sino también por crear una cultura con nuestra empresa que inspire el uso de FAIR en los datos de investigación de los académicos involucrados en el gran proyecto GBADs. Creemos que este cambio permitirá un mejor uso y reutilización de los datos, permitiendo la colaboración y una mejor asignación de recursos.

## 2. Un intermediario de datos "confiable"

Hay muchas formas de facilitar técnicamente el intercambio de datos, como descargas de archivos, API, etc. Esta sección explica los principios detrás de ser un intermediario de datos "confiable" y una fuente de datos federada.

### Mecanismos para el intercambio responsable de datos

**Los mecanismos tecnológicos en el intercambio de datos de GBAD se basan en la capacidad de crear una arquitectura de visualización de datos que se adapta a los derechos de privacidad y seguridad de los diferentes tipos de usuarios.**
Específicamente, esto se basa en la capacidad de categorizar usuarios y crear *vistas* del sistema para ese usuario donde ese usuario solo puede ver los datos para los que está autorizado. Usamos el término “vista” tal como lo describe la teoría de bases de datos: *“Las vistas se usan generalmente para enfocar, simplificar y personalizar la percepción que cada usuario tiene de la base de datos. Las vistas se pueden utilizar como mecanismos de seguridad al permitir que los usuarios accedan a los datos a través de la vista, sin otorgarles permisos para acceder directamente a las tablas base subyacentes de la vista".*[^3] En otras palabras, permitir a los contribuyentes de datos seleccionar qué tipo de los usuarios a los que les gustaría permitir el acceso a sus datos crean una "vista" para ese usuario de datos (oculta o pone a disposición activos de datos específicos). Esto otorga a los contribuyentes de datos la **Autoridad para controlar** sus recursos de datos. Por supuesto, este concepto depende de la capacidad de categorizar a los usuarios de datos.

Los datos que se consideran "abiertos de forma predeterminada" estarán disponibles públicamente para cualquier usuario que ingrese al portal de datos y estarán disponibles sin restricciones para descargarlos directamente.

![sysView](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/systemView.png)

#### Autenticacion de usuario

Los usuarios que deseen acceder a fuentes de datos privadas deberán categorizarse utilizando identificaciones de usuario de datos predefinidas de GBAD. Esto consistirá en crear un perfil de usuario, identificar qué tipo de usuario es e ingresar un método de verificación para hacerlo. El método de verificación puede consistir en una ID de ORCHID si es un usuario académico. Sin embargo, los mecanismos detrás de la verificación de usuarios aún están bajo estipulación (todavía estamos tratando de descubrir cómo verificamos la identidad de los usuarios de grupos marginados, partes interesadas privadas, etc.). Estas autorizaciones, tanto en términos de información del usuario como de derechos de acceso a un activo de datos, se incluirán en los metadatos.

Una vez que se pueda verificar la identidad de un usuario, a ese usuario se le otorgará una vista de los datos y una clave API que le permitirá acceder a datos privados a través de una llamada API. Del mismo modo, los datos que vean estarán disponibles mediante descarga directa. Cabe señalar que, si bien los principios FAIR se utilizan generalmente en el contexto de datos abiertos, los datos pueden ser FAIRificados dentro de diferentes vistas del sistema y bajo el supuesto de que los datos no son abiertos de forma predeterminada. Nuestros metadatos serán localizables, accesibles, interoperables y reutilizables, como lo sugieren los principios rectores de FAIR, pero dentro de nuestro sistema y protegidos por diferentes vistas. Por ejemplo, los activos de datos abiertos podrán ser encontrados por todos, pero los datos que solo están disponibles para usuarios de datos específicos solo podrán ser encontrados por ese tipo de usuario.

En general, cada conjunto de datos gestionado por GBAD estará equipado con un identificador único que lo vincula a sus metadatos. Cuando un usuario accede a los datos de alguna manera (como a través de una llamada API o descarga directa), se devolverá el identificador único y la URL al portal de metadatos. Luego, el usuario puede acceder fácilmente a los metadatos. Asimismo, los usuarios pueden iniciar su búsqueda de datos con la herramienta de búsqueda de metadatos. La llamada a la API de datos se proporcionará en algún lugar del motor de búsqueda de metadatos (es decir, si selecciona un conjunto de datos de interés, se le proporcionarán los metadatos).

### Desafíos en los mecanismos para compartir datos

Un desafío en el diseño de la vista del sistema son las dificultades de concesión de licencias para abordar la **R**utilizabilidad de un recurso de datos.
Las preocupaciones que surgen tienen que ver con la publicación y presentación de resultados inspirados en datos privados. Si se utilizan datos privados en un modelo o para otras decisiones basadas en datos, ¿cómo se citarán o atribuirán adecuadamente (o quizás se verificarán) los datos sin otorgar acceso a los datos o publicar resultados de modelos que utilizaron datos privados como entrada? Es importante comprender las opiniones de las partes interesadas en los datos para comprender sus deseos sobre cómo se utilizan los datos.

Otra dificultad o posible limitación es que los usuarios con vistas específicas ni siquiera sabrán que existen ciertos activos de datos.

## 3. Principios de CUIDADO

Los principios de CARE incluyen: beneficio colectivo, autoridad para controlar, responsabilidad y ética. Cada principio se refiere al uso y gobernanza de los datos que pertenecen a los Pueblos Indígenas o están relacionados con ellos, sus tierras, propiedades y prácticas culturales [refs] y se desglosa en categorías en el Apéndice B. Los principios de CARE se considerarán en cada paso de los datos de GBAD. estrategia de gobernanza y diseño del portal de datos.

Reconocemos que nuestras interpretaciones de los principios de CARE pueden no reflejar completamente los verdaderos intereses de los pueblos y grupos indígenas, ya que el equipo de informática de GBAD no cuenta actualmente con empleados indígenas ni asociaciones con pueblos indígenas. Cuando se hayan creado colaboraciones oficiales con pueblos y grupos indígenas, se desarrollarán y perfeccionarán estrategias y diseños para garantizar que todos los datos indígenas se gobiernen, gestionen y utilicen para el beneficio colectivo de los pueblos indígenas.

## 4. Reproducibilidad

### Procedencia de los datos

Cómo se recopilará o se accederá a la información sobre los datos de los donantes y cómo se evaluará, almacenará y proporcionará la base para generar información de procedencia sobre todos los datos negociados por los GBAD.

Los contribuyentes de datos deberán proporcionar información de procedencia.

Proporcionar información detallada sobre la procedencia a los usuarios de datos es un elemento esencial para proporcionar datos FAIR. Información de procedencia
debe cubrir como mínimo:

1. ¿Quién o qué creó los datos? Esto incluiría información sobre la metodología utilizada para crear los datos originales.
(ya sea a través de una cita o proporcionando información en los metadatos). Información sobre si los datos han sido
transformado de alguna manera (como a través de un cambio en el vocabulario/ontología, técnicas de imputación, estimaciones, eliminación de filas, etc.)
También debe proporcionarse a través de referencias y descripciones de programas o técnicas utilizadas para completar estas transformaciones.

2. ¿Cuándo se produjeron los datos y cuándo se realizaron los últimos cambios en los datos?

3. Contexto de creación de datos. ¿Por qué se crearon o produjeron los datos? Esto proporciona información a los posibles usuarios de datos sobre
si el uso de los datos satisface sus necesidades y se ajusta a sus prácticas, modelos u otras técnicas estadísticas potenciales.

De interés para esta discusión son las métricas diseñadas para FAIR:
[Métrica FAIR FM-R1.2](https://github.com/FAIRMetrics/Metrics/blob/master/Distributions/FM_R1.2.pdf)

El acceso a los datos se rige en parte por la procedencia de los datos. Por ejemplo, es importante comprender quién creó y posee los datos para determinar si son reutilizables (principio FAIR 4). Puede haber restricciones específicas al acceso a los datos en virtud de acuerdos de licencia que podrían determinar cómo se pueden utilizar los datos y quién los puede utilizar.

---

Los metadatos deben reconocer la procedencia y el propósito y cualquier limitación u obligación en el uso secundario, incluidas las cuestiones de consentimiento.

---

La información de procedencia de cada conjunto de datos se almacenará en metadatos, que estarán disponibles y podrán ser buscados por todos los usuarios de GBAD. Se utilizará un estándar de procedencia reconocido para garantizar que la información de procedencia sea Localizable y Reutilizable.

### Declaración REUNIR

La Declaración GATHER, o las **G**directrices para **A**precisas y **T**transparentes **estimaciones de **Salud **E** **R**informes, definen las mejores prácticas de presentación de informes para estudios que calculan estimaciones de salud [^4].

La lista de verificación de recopilación incluye información que debe incluirse en las estimaciones de salud global:

| Número de artículo | Elemento de la lista de verificación |
| ----------- | -------------- |
| Objetivos y Financiación | |
| 1 | Definir los indicadores, las poblaciones (incluida la edad, el sexo y las entidades geográficas) y los períodos para los cuales se realizaron las estimaciones. |
| 2 | Enumere las fuentes de financiación para el trabajo. |
| Entradas de datos | |
| Para todas las entradas de datos de múltiples fuentes que se sintetizan como parte del estudio: | |
| 3 | Describa cómo se identificaron los datos y cómo se accedió a ellos. |
| 4 | Especificar los criterios de inclusión y exclusión. Identifique todas las exclusiones ad hoc. |
| 5 | Proporcionar información sobre todas las fuentes de datos incluidas y sus principales características. Para cada fuente de datos utilizada, proporcione información de referencia o nombre/institución de contacto, población representada, método de recopilación de datos, año(s) de recopilación de datos, sexo y rango de edad, criterios de diagnóstico o método de medición, y tamaño de la muestra, según corresponda. |
| 6 | Identifique y describa cualquier categoría de datos de entrada que tenga sesgos potencialmente importantes (por ejemplo, según las características enumeradas en el punto 5). |
| Para entradas de datos que contribuyen al análisis pero que no fueron sintetizadas como parte del estudio:|
| 7 | Describa y proporcione fuentes para cualquier otra entrada de datos. |
| Para todas las entradas de datos: | |
| 8 | Proporcione todas las entradas de datos en un formato de archivo del que se puedan extraer datos de manera eficiente (p. ej., una hoja de cálculo en lugar de un PDF), incluidos todos los metadatos relevantes enumerados en el punto 5. Para cualquier entrada de datos que no se pueda compartir por razones éticas o legales Por motivos, como propiedad de terceros, proporcione un nombre de contacto o el nombre de la institución que conserva el derecho a los datos. |
| Análisis de datos |
| 9 | Proporcionar una descripción general conceptual del método de análisis de datos. Un diagrama puede resultar útil. |
| 10 | Proporcione una descripción detallada de todos los pasos del análisis, incluidas las fórmulas matemáticas. Esta descripción debe cubrir, según corresponda, la limpieza de datos, el preprocesamiento de datos, los ajustes de datos y la ponderación de las fuentes de datos, y los modelos matemáticos o estadísticos. |
| 11 | Describa cómo se evaluaron los modelos candidatos y cómo se seleccionaron los modelos finales. |
| 12 | Proporcione los resultados de una evaluación del desempeño del modelo, si se realiza, así como los resultados de cualquier análisis de sensibilidad relevante. |
| 13 | Describir métodos para calcular la incertidumbre de las estimaciones. Indique qué fuentes de incertidumbre se tuvieron en cuenta y cuáles no en el análisis de incertidumbre. |
| 14 | Indique cómo se puede acceder al código fuente analítico o estadístico utilizado para generar estimaciones. |
| Resultados y discusión |
| 15 | Proporcionar estimaciones publicadas en un formato de archivo del cual se puedan extraer datos de manera eficiente. |
| 16 | Informe una medida cuantitativa de la incertidumbre de las estimaciones (por ejemplo, intervalos de incertidumbre). |
| 17 | Interpretar los resultados a la luz de la evidencia existente. Si actualiza un conjunto anterior de estimaciones, describa las razones de los cambios en las estimaciones. |
| 18 | Analice las limitaciones de las estimaciones. Incluya una discusión sobre cualquier supuesto de modelado o limitación de datos que afecte la interpretación de las estimaciones. |
Tabla de [^4].


Si bien los GBAD generarán estimaciones de salud, dado que la salud es la de los animales agrícolas y no la de los humanos (para lo cual se diseñó GATHER), usaremos GATHER como punto de partida y no como punto final.


<!-- # Principios y gobernanza de datos

## Dato de governancia

**El gobierno de datos es la gestión, el almacenamiento, la privacidad, el uso y la calidad de los datos y metadatos utilizados por una organización.** El gobierno de datos es una tarea multidimensional que requiere que todos los individuos de una organización cumplan con los estándares y las mejores prácticas documentados. para todos los elementos del uso de datos.
El cumplimiento de una estrategia de gobernanza de datos bien documentada permite un mejor uso de los datos a través de la capacidad de aprovechar los activos de datos en todas sus capacidades.

### Fundamentos de la gobernanza de datos

Si bien la gobernanza de datos tiene que ver con los datos, también tiene que ver con las personas, los procesos y la seguridad de los datos.

**Gobernanza de datos y personas**
Todas las personas que crean, utilizan, difunden o gestionan datos son parte y deben cumplir con la estrategia de gobernanza de datos.

**Gobierno y seguridad de datos**

**Procesos y gobernanza de datos**

Términos de gobernanza de datos que debes conocer:
- Administrador de datos
- Integración de datos
- Procedencia de los datos
- Ciencia de los datos



#### Más lecturas sobre gobernanza de datos
**Publicaciones de blog**
- https://towardsdatascience.com/what-we-got-wrong-about-data-governance-365555993048 -->

## Referencias
[^1]: https://www.nature.com/articles/sdata201618
[^2]: https://acsess.onlinelibrary.wiley.com/doi/full/10.1002/agj2.21017?af=R
[^3]: https://learn.microsoft.com/en-us/sql/relational-databases/views/views?view=sql-server-ver16
[^4]: https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(16)30388-9/fulltext
