---
sidebar_position: 10
---
# Guía para contribuyentes de datos

La guía para contribuyentes de datos brinda información sobre cómo puede ingresar datos en nuestro sistema utilizando nuestros formularios de datos.

GBADs tiene como objetivo hacer que los datos sean JUSTOS, y eso comienza con garantizar que tengamos una producción de metadatos rigurosa y que la procedencia de los recursos de datos esté bien documentada. Por lo tanto, cuando usted aporta datos, es importante que recopilemos información al respecto que permita la reutilización y la interoperabilidad de los recursos de datos que se aportan.

## Por qué es importante la producción de metadatos

La producción de metadatos es importante porque permite la reutilización de datos. Los metadatos pueden considerarse como su 'guía de usuario' de datos: deben informarle todo lo que necesita saber para determinar si los datos son adecuados para su análisis y cómo surgieron. A veces, nos encontramos en situaciones en las que nos encontramos con algunos datos y no tenemos idea de dónde se originaron, los métodos experimentales que se utilizaron para la recopilación de datos o qué modelos crearon los datos. Aún más preocupante es cuando no se proporcionan unidades de medida o los encabezados de las columnas son ambiguos. Los metadatos son la solución a este problema. Por lo tanto, cuando ingresa sus datos en el sistema GBAD o proporciona información API de otra fuente, le pediremos que complete un formulario que generará automáticamente metadatos para que usted (y otros) puedan reutilizar los datos y crear información y modelos precisos. y decisiones basadas en datos. La producción de metadatos granulares conduce en última instancia a datos de mayor calidad.

## Preguntas sobre tus datos para generar metadatos

Dependiendo del tipo de datos que esté ingresando, las preguntas pueden variar ligeramente. Por ejemplo, si ingresa datos de los resultados de un modelo, necesitaremos conocer información diferente que si ingresa datos de encuestas de hogares. A medida que aprendamos más sobre las fuentes de datos que los GBAD negociarán y los datos que utilizan nuestros usuarios, nuestra producción de metadatos evolucionará.

Estamos adaptando las Directrices para la presentación de informes de estimaciones de salud precisas y transparentes (directrices GATHER) para la producción de metadatos preliminares.

Estas son las preguntas para cada conjunto de datos que ingresa al sistema GBADs:
Tenga en cuenta que estas preguntas fueron adaptadas de las pautas de GATHER y, en algunos casos, son idénticas a GATHER.

1. Definir el(los) indicador(es), las poblaciones (entidades geográficas, especies animales) y el(los) periodo(s) de tiempo para los cuales se realizaron las estimaciones.
2. Enumere las fuentes de financiación para el trabajo.
3. Describa cómo se identificaron y accedieron a los datos.
4. Especificar criterios de inclusión/exclusión. Identifique todas las exclusiones ad hoc.
5. Proporcionar información sobre todas las fuentes de datos incluidas y sus principales características. Para cada fuente de datos utilizada, proporcione información de referencia o nombre/institución de contacto, población representada, método de recopilación de datos, año(s) de recopilación de datos, sexo y rango de edad, criterios de diagnóstico o método de medición, y tamaño de la muestra, según corresponda.
6. Identifique y describa cualquier categoría de datos de entrada que tenga sesgos potencialmente importantes (por ejemplo, según las características enumeradas en el punto 5).
7. Describa y proporcione fuentes de cualquier otra entrada de datos.
8. Proporcione todas las entradas de datos en un formato de archivo del cual se puedan extraer datos de manera eficiente (por ejemplo, una hoja de cálculo en lugar de un PDF o una llamada API que se utilizó para extraer datos). Para cualquier entrada de datos que no se pueda compartir por razones éticas o legales, como propiedad de terceros, proporcione un nombre de contacto o el nombre de la institución que conserva el derecho a los datos.

Si los datos fueron curados usando un modelo, o análisis de datos o si los datos fueron limpiados, le pedimos que también responda lo siguiente:

1. Proporcione una descripción detallada de todos los pasos del análisis, incluidas las fórmulas matemáticas. Esta descripción debe cubrir, según corresponda, la limpieza de datos, el preprocesamiento de datos, los ajustes de datos y la ponderación de las fuentes de datos, y los modelos matemáticos o estadísticos. También se requiere un repositorio de GitHub con el código apropiado.
2. Proporcionar los resultados de una evaluación del desempeño del modelo, si se realiza, así como los resultados de cualquier análisis de sensibilidad relevante.
3. Describir métodos para calcular la incertidumbre de las estimaciones. Indique qué fuentes de incertidumbre se tuvieron en cuenta y cuáles no en el análisis de incertidumbre.

Cada una de estas preguntas se presentará en un formulario en el portal de datos de GBADs, donde se llena cada uno de los campos según las preguntas.

Entendemos que algunos contribuyentes de datos ya tendrán sus propios metadatos producidos. En estos casos, animamos a las personas a utilizar sus metadatos para completar los campos proporcionados.

