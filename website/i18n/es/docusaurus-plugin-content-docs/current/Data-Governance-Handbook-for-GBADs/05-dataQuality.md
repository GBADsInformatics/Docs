---
sidebar_position: 5
---

# Calidad de datos

La calidad de los datos que utilizan los GBAD se evalúa y comunica según el [Objetivo de datos 4](#Data-Goal-4). Nuestra definición de calidad de datos se basa en las 6 dimensiones de la calidad de los datos.

La calidad de los datos es importante para los GBAD porque la calidad de los datos tendrá un impacto directo en la calidad de los modelos y los resultados producidos por los modelos. Por lo tanto, se debe evaluar la calidad de los datos de entrada y se debe informar la calidad de estos datos a los modeladores y usuarios de los datos y modelos de GBAD. Si bien no tenemos una influencia directa sobre la calidad de los datos de entrada, podemos informar nuestra confianza en los datos y los posibles problemas de calidad que pueden afectar la certeza de las estimaciones.

De manera similar, debemos asegurarnos de que los datos producidos por los modelos y estimaciones sean de alta calidad para garantizar que puedan usarse con confianza para la toma de decisiones y que los usuarios puedan confiar en los resultados del GBAD.

---

La calidad de los datos es responsabilidad de los Grupos de Trabajo 2 y 3; consulte el [Modelo operativo de gobernanza de datos] (https://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/dataGovOperatingModel) para obtener más detalles sobre las responsabilidades de los datos.

---

## Definición de calidad de datos

No existe una definición acordada de calidad de los datos; La definición de calidad de los datos depende del contexto en el que se utilizarán los datos. Se han propuesto muchas dimensiones de la calidad de los datos; sin embargo, las dimensiones que son relevantes para el caso de uso de una organización dependen nuevamente del contexto de uso.

*En esta sección describimos las dimensiones de la calidad de los datos que son relevantes para los GBAD y los procesos, métricas y herramientas que se utilizan para evaluar la calidad de los datos que se utilizan y producen.*

<!-- ### Dimensiones de la calidad de los datos

*Exactitud*

*Consistencia interna*

La consistencia interna se define como

*Consistencia externa*

La consistencia externa se define como -->
## Análisis de calidad de datos

### Coherencia de datos internos y externos

Determinar si los datos son consistentes entre y dentro de las fuentes de datos es un indicador importante de la calidad de los datos. Por ejemplo, ¿los datos de diferentes fuentes que informan la "misma" métrica se alinean numéricamente?

Ian McKechnie creó una metodología para analizar la coherencia interna y externa entre fuentes de datos para determinar si existe alguna incertidumbre en los datos reportados.

Cada fuente de datos (WOAH, FAOSTAT, censo nacional y de la ONU) se analizó con lo siguiente:
* Valores atípicos identificados: trazó todo el crecimiento anual en una curva normal para determinar si hay puntos de datos fuera de la tercera desviación estándar
* Rango intercuartil (IQR) determinado para el rango de crecimiento de cada fuente
* Se siguieron los promedios de población de cinco años en todas las fuentes de datos y se compararon estos promedios para determinar si había inconsistencias en la tendencia.

La metodología que se creó se solidificará y los hallazgos se informarán en un manuscrito (actualmente en revisión). Los principales hallazgos sugieren que existen inconsistencias entre las fuentes de datos en la mayoría de las especies y países; Los detalles se informarán en el manuscrito.

## Herramientas para respaldar el análisis de la calidad de los datos

### Panel de visualización de datos para análisis de calidad

Los datos de organizaciones internacionales, como FAOSTAT, embellecen sus datos con valores pronosticados, imputados y no oficiales cuando los datos oficiales no están disponibles. Joshua Davidson creó un panel que respalda el análisis de datos longitudinales de FAOSTAT a través de lo siguiente:

Dada una especie y un país:

* Visualizar datos potencialmente erróneos debido a datos imputados o no oficiales
* Proporciona el porcentaje de valores que no son oficiales.
* Visualizar tendencias longitudinales para identificar cambios inesperados o rápidos en la población de un año a otro.

La herramienta aún está en desarrollo; Las ideas de desarrollo futuro incluyen:
* Filtrado por un 'nivel de calidad'. Por ejemplo, proporcionar datos que superen un determinado porcentaje no oficial, o que consideren la pendiente de la línea de tendencia a lo largo del tiempo para identificar automáticamente posibles errores.


### Otras herramientas

GBADs Informatics está trabajando en una serie de herramientas de calidad de datos. Estas herramientas abarcan las siguientes tareas:

* “Historias” de datos que visualizan y brindan comentarios sobre los datos de los informes ganaderos de la Agencia Central de Estadística de Etiopía tanto a nivel nacional como regional.

* Análisis de fuentes de datos como FAOSTAT y WOAH en términos de conformidad interna y externa (visualizaciones, mediciones y métricas)

* Ontología y SHACL para validar datos y evaluar la calidad de los datos relacionados con las categorías de especies en los datos de población de WOAH (la demostración de software de esta capacidad estará disponible en el primer trimestre de 2023)

Si bien depende de la organización o del contribuyente de datos corregir sus datos en la fuente, contamos con procedimientos para comunicar los resultados de las evaluaciones de calidad.


