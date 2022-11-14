---
sidebar_position: 5
---
Mecanismos para el intercambio de datos
===========================

Existen muchas maneras de facilitar técnicamente el intercambio de datos, como descargas de archivos, API, etc. Esta sección explica los principios que sustentan ser un intermediario de datos "confiable" y una fuente de datos federada.

![sysView](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/systemView.png)

Los mecanismos en el intercambio de datos de GBAD se basan en la capacidad de crear una arquitectura de visualización de datos que se adapta a los derechos de privacidad y seguridad de diferentes tipos de usuarios. Específicamente, esto se basa en la capacidad de categorizar a los usuarios y crear vistas del sistema para ese usuario donde ese usuario solo puede ver los datos para los que está autorizado. Usamos el término "vista" como lo describe la teoría de la base de datos: "Las vistas generalmente se usan para enfocar, simplificar y personalizar la percepción que cada usuario tiene de la base de datos. Las vistas se pueden utilizar como mecanismos de seguridad al permitir que los usuarios accedan a los datos a través de la vista, sin otorgarles permisos para acceder directamente a las tablas base subyacentes de la vista”. En otras palabras, permitir que los contribuyentes de datos seleccionen qué tipo de usuarios les gustaría permitir el acceso a sus datos crea una "vista" para ese usuario de datos (oculta o pone a disposición activos de datos específicos). Esto otorga a los contribuyentes de datos la autoridad para controlar sus recursos de datos. Por supuesto, este concepto depende de la capacidad de categorizar a los usuarios de datos (consulte la sección Tipos de datos para obtener una discusión más detallada de este concepto).

Los datos que se consideren "Abiertos de forma predeterminada" estarán disponibles públicamente para cualquier usuario que ingrese al portal de datos y estarán disponibles sin restricciones para descargarlos directamente. Sin embargo, para acceder incluso a los datos abiertos a través de una API, será necesario registrarse para obtener una clave de API personalizada.

Los usuarios que deseen acceder a fuentes de datos privados deberán categorizarse utilizando las identificaciones de usuario de datos predefinidas de GBAD. Esta consistirá en crear un perfil de usuario, identificar qué tipo de usuario eres e introducir un método de verificación para ello. El método de verificación puede consistir en un ORCHID ID si es un usuario académico. Sin embargo, los mecanismos detrás de la verificación de usuarios todavía están bajo estipulación (todavía estamos tratando de averiguar cómo verificamos la identidad de los usuarios de grupos marginados, partes interesadas privadas, etc.). Estas autorizaciones, tanto en términos de información del usuario como de derechos de acceso a un activo de datos, se incluirán en los metadatos.

Una vez que se pueda verificar la identidad de un usuario, a ese usuario se le otorgará una vista de los datos y una clave API que le permitirá acceder a datos privados a través de una llamada API. De igual forma, los datos a su vista estarán disponibles a través de descarga directa. Cabe señalar que, si bien los principios FAIR generalmente se usan en el contexto de los datos abiertos, los datos se pueden FAIRificar dentro de diferentes vistas del sistema y bajo el supuesto de que los datos no son abiertos de forma predeterminada. Nuestros metadatos serán Localizables, Accesibles, Interoperables y Reutilizables, como lo sugieren los principios rectores de FAIR, pero dentro de nuestro sistema y protegidos por diferentes puntos de vista. Por ejemplo, los activos de datos abiertos se podrán encontrar para todos, pero los datos que solo están disponibles para usuarios de datos específicos solo se podrán encontrar para ese tipo de usuario.

En general, cada conjunto de datos gestionado por GBAD estará equipado con un identificador único que lo vincula a sus metadatos. Cuando un usuario accede a los datos de alguna manera (como a través de una llamada API o una descarga directa), se devolverá el identificador único y la URL del portal de metadatos. El usuario puede entonces acceder fácilmente a los metadatos. Asimismo, los usuarios pueden iniciar su búsqueda de datos con la herramienta de búsqueda de metadatos. La llamada a la API de datos se proporcionará en algún lugar del motor de búsqueda de metadatos (es decir, si selecciona un conjunto de datos de interés, se le proporcionarán los metadatos).


Desafíos en los mecanismos de intercambio de datos
-------------------------------------

Un desafío en el diseño de la vista del sistema son las dificultades de licencia para abordar la **R**reutilización de un recurso de datos.
Las preocupaciones que surgen son con la publicación y el informe de resultados inspirados en datos privados. Si los datos privados son
utilizado en un modelo o para otras decisiones basadas en datos cómo se citarán o atribuirán correctamente los datos (o tal vez verificados)
sin otorgar acceso a los datos o publicar los resultados de los modelos que utilizaron datos privados como entrada? Es importante
comprender las opiniones de las partes interesadas en los datos para comprender sus deseos sobre cómo se utilizan los datos.

Otra dificultad o posible limitación es que los usuarios con vistas específicas no sabrán que existen ciertos activos de datos.

Vocabularios y Ontologías
---------------------------

Se accederá a vocabularios y ontologías preexistentes, se refinarán, compararán y ampliarán para crear un
vocabulario controlado para GBADs. Se accederá a la semántica de cada fuente de datos para garantizar que las palabras
utilizados para describir los datos son consistentes entre las fuentes de datos.

- Se obtendrán vocabularios para fuentes de datos que no citan estándares de vocabulario y las palabras serán
en comparación con estándares de datos preexistentes como AGROVOC (vocabulario controlado de la FAO)
- Los vocabularios recopilados se compararán para todas las fuentes de datos, para ver cómo se compara la descripción de los términos entre sí.
- El objetivo es proporcionar un estándar para GBAD, aumentando la interoperabilidad y la calidad de los datos, lo que en última instancia conduce a
modelos y estimaciones superiores
- También los vocabularios controlados conducen a mejores sistemas y permiten la automatización de tareas

Agroportal es una herramienta de mapeo de ontologías que permitirá a los GBADs determinar ontologías adecuadas y mapeo entre
vocabularios estandarizados relacionados con el sector agrícola.
- También reconocemos que no podemos esperar que los contribuyentes de datos cambien su vocabulario para seguir el de GBAD.
(y si preguntamos, puede desanimar a las personas a contribuir con datos). Esto subraya la importancia del vocabulario.
mapeos.

```{advertencia} para agregar
Discusión general sobre cómo los vemos desarrollándose para GBADS.
```

Procedencia
----------

Cómo se recopilará o se accederá a la información sobre los datos de los donantes y cómo se evaluará, almacenará,
y proporcionar la base para generar información de procedencia sobre todos los datos negociados por GBAD.

Los contribuyentes de datos deberán proporcionar información sobre la procedencia.

Proporcionar información detallada sobre la procedencia a los usuarios de datos es un elemento esencial para proporcionar datos FAIR. Información de procedencia
debe cubrir como mínimo:
1. ¿Quién o qué creó los datos? Esto incluiría información sobre la metodología utilizada para crear los datos originales.
(ya sea a través de una cita o proporcionando información en los metadatos). Información sobre si los datos han sido
transformado de alguna manera (como a través de un cambio en el vocabulario/ontología, técnicas de imputación, estimaciones, eliminación de filas, etc.)
también debe proporcionarse a través de referencias y descripciones de programas o técnicas utilizadas para completar estas transformaciones.

2. ¿Cuándo se produjeron los datos y cuándo se realizaron los últimos cambios?

3. Contexto de creación de datos. ¿Por qué se crearon o produjeron los datos? Esto proporciona información a los posibles usuarios de datos sobre
si el uso de los datos satisface sus necesidades y se ajusta a sus posibles prácticas, modelos u otras técnicas estadísticas.

De interés para esta discusión son las métricas diseñadas para FAIR:
[FAIR Metric FM-R1.2](https://github.com/FAIRMetrics/Metrics/blob/master/Distributions/FM_R1.2.pdf)

El acceso a los datos se rige en parte por la procedencia de los datos. Por ejemplo, es importante comprender quién creó y
posee los datos para determinar si los datos son Reutilizables (FAIR principio 4). Puede haber restricciones específicas a los datos
acceso en virtud de acuerdos de licencia que podrían determinar cómo se pueden utilizar los datos y por quién.

```{nota}
E3 Los metadatos deben reconocer la procedencia y el propósito y cualquier limitación u obligación en el uso secundario inclusive
de cuestiones de consentimiento.
```

La información de procedencia de cada conjunto de datos se almacenará en metadatos, que estarán disponibles y se podrán buscar
por todos los usuarios de GBAD. Se utilizará un estándar de procedencia reconocido para garantizar que la información de procedencia sea localizable.
y reutilizable.

Recopilación de información
----------------------

Encuestas/formularios que recopilarán información para ser utilizada para la procedencia e identificación del usuario.
- ID ORCIDO
- Información Entrar

