---
sidebar_position: 7
---
# Guía del colaborador de datos

La guía del contribuyente de datos brinda información sobre cómo puede ingresar datos en nuestro sistema utilizando nuestros formularios de datos.

GBADs tiene como objetivo hacer que los datos sean JUSTOS, y eso comienza con garantizar que tengamos una producción de metadatos estricta y que la procedencia de los recursos de datos esté bien documentada. Por lo tanto, cuando contribuye con datos, es importante que recopilemos información al respecto que permita la reutilización y la interoperabilidad de los recursos de datos que se aportan.

## Por qué es importante la producción de metadatos

La producción de metadatos es importante porque permite la reutilización de datos. Los metadatos se pueden considerar como su "guía del usuario" de datos: debe decirle todo lo que necesita saber para determinar si los datos son adecuados para su análisis y cómo se obtuvieron. A veces, nos encontramos en situaciones en las que nos encontramos con algunos datos y no tenemos idea de dónde se originaron, los métodos experimentales que se utilizaron para la recopilación de datos o qué modelos crearon los datos. Aún más preocupante es cuando no se proporcionan unidades de medida o los encabezados de las columnas son ambiguos. Los metadatos son la solución a este problema. Por lo tanto, cuando ingrese sus datos en el sistema GBADs o proporcione información API de otra fuente, le pediremos que complete un formulario que generará automáticamente metadatos para que usted (y otros) puedan reutilizar los datos y crear modelos y conocimientos precisos. y decisiones basadas en datos. La producción de metadatos granulares finalmente conduce a datos de mayor calidad.

## Preguntas sobre tus datos para generar metadatos

Dependiendo del tipo de datos que ingrese, las preguntas pueden variar ligeramente. Por ejemplo, si está ingresando datos de la salida de un modelo, necesitaremos conocer información diferente que si está ingresando datos de encuestas de hogares. A medida que aprendamos más sobre las fuentes de datos que los GBAD comercializarán y los datos que utilizan nuestros usuarios, nuestra producción de metadatos evolucionará.

Estamos adaptando las Directrices para la elaboración de informes de estimaciones de salud precisas y transparentes (directrices GATHER) para la producción de metadatos preliminares.

Estas son las preguntas para cada conjunto de datos que ingresa al sistema GBADs:
Tenga en cuenta que estas preguntas se adaptaron de las pautas de GATHER y, en algunos casos, son idénticas a GATHER.

1. Definir los indicadores, las poblaciones (entidades geográficas, especies animales) y los períodos de tiempo para los que se realizaron las estimaciones.
2. Enumere las fuentes de financiación para el trabajo.
3. Describa cómo se identificaron y accedieron a los datos.
4. Especificar los criterios de inclusión/exclusión. Identifique todas las exclusiones ad-hoc.
5. Proporcionar información sobre todas las fuentes de datos incluidas y sus principales características. Para cada fuente de datos utilizada, informe la información de referencia o el nombre/institución de contacto, la población representada, el método de recopilación de datos, los años de recopilación de datos, el sexo y el rango de edad, los criterios de diagnóstico o el método de medición y el tamaño de la muestra, según corresponda.
6. Identifique y describa cualquier categoría de datos de entrada que tenga sesgos potencialmente importantes (p. ej., según las características enumeradas en el punto 5).
7. Describa y proporcione fuentes para cualquier otra entrada de datos.
8. Proporcione todas las entradas de datos en un formato de archivo desde el cual se puedan extraer datos de manera eficiente (por ejemplo, una hoja de cálculo en lugar de un PDF o una llamada API que se utilizó para extraer datos). Para cualquier entrada de datos que no se pueda compartir por razones éticas o legales, como la propiedad de terceros, proporcione un nombre de contacto o el nombre de la institución que retiene el derecho a los datos.

Si los datos se seleccionaron utilizando un modelo o análisis de datos o si los datos se limpiaron, le pedimos que también responda lo siguiente:

1. Proporcione una descripción detallada de todos los pasos del análisis, incluidas las fórmulas matemáticas. Esta descripción debe cubrir, según corresponda, la limpieza de datos, el preprocesamiento de datos, los ajustes de datos y la ponderación de las fuentes de datos, y los modelos matemáticos o estadísticos. También se requiere un repositorio de GitHub para el código apropiado.
2. Proporcione los resultados de una evaluación del desempeño del modelo, si se realizó, así como los resultados de cualquier análisis de sensibilidad relevante.
3. Describir métodos para calcular la incertidumbre de las estimaciones. Indique qué fuentes de incertidumbre se tuvieron en cuenta y cuáles no en el análisis de incertidumbre.

Cada una de estas preguntas se presentará en un formulario en el portal de datos de GBADs, donde se llena cada uno de los campos de acuerdo a las preguntas.

Entendemos que algunos contribuyentes de datos ya tendrán sus propios metadatos producidos. En estos casos, alentamos a las personas a usar sus metadatos para completar los campos proporcionados.

