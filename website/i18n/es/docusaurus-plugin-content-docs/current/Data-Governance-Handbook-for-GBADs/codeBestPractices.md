---
sidebar_position: 10
---
# Mejores prácticas para la codificación

Los miembros de GBAD suelen utilizar R y Python para codificar, limpiar y organizar datos, y construir sus modelos. Las mejores prácticas para las convenciones de codificación permiten que el código sea legible y reutilizable. Estas son las mejores prácticas que GBADs Informatics y modeladores sugieren para garantizar que podamos entender y usar el código.


<!---

James y Gemma: esta área está comentada en el archivo de rebajas. Cuando vea 'advertencia' en el texto, ¡simplemente significa que aparece un pequeño recuadro que no!

· Comente con el nombre del creador, la fecha (¿en formato ISO 8601? Por ejemplo, 20210729), ¿qué contiene el script (por ejemplo, análisis de componentes principales)?

· Bibliotecas cargadas en el script R

· ¿Establecer directorio de trabajo?

· Los datos deben estar 'ordenados' al final del proceso de limpieza (consulte el Manual de gobierno de datos o R para ciencia de datos)

· Organizar datos de izquierda a derecha con variables categóricas y luego variables continuas. Las variables deben agruparse cuando corresponda (p. ej., densidad de población al momento del aclareo, peso al momento del aclareo, fecha del aclareo, etc.)

· Eliminar columnas irrelevantes del conjunto de datos (por ejemplo, longitud y latitud)

· Código bien documentado

· Utilice la convención de nomenclatura de archivos estándar (por ejemplo, 20210617_FAO_ProductionPrices_Poultry_Ethiopia_metadata.csv, NO los precios de producción de la FAO - descargados por Kassy el 25 de abril.csv)

· Serpiente para nombrar objetos en R (por ejemplo, Majority_Parent_Flock_Old)

· Los objetos deben tener un nombre significativo


--->

## Prácticas recomendadas de codificación R

### 1. Convenciones de nomenclatura

**Nombre de archivo**

Las convenciones de nomenclatura estándar se utilizan para el nombre del archivo y para todas las variables y funciones definidas en su código.

Los nombres de los archivos deben seguir el formato `dateOfCreation_meaningfulCodeName.R`.

Por ejemplo, si mi código limpia y reformatea los datos de ganado, podría llamar a mi script `20210703_faoLivestockProductionDataCleaning.R`

**Denominación de variables**

Usa `snake_case` para nombrar variables y funciones en tu código. El uso de una convención de nomenclatura estandarizada mejora la legibilidad y la interpretación del código.

<!--Las convenciones de nomenclatura también deben usarse cuando se declaran variables o se crean funciones. Si bien existen múltiples convenciones de nomenclatura populares que incluyen camelCase, PascalCase y snake_case, por ejemplo, la convención acordada para GBAD es el uso de snake_case. -->

Utilice nombres significativos al nombrar variables y funciones. El nombre del objeto debe reflejar su utilidad o características. Por ejemplo, si está leyendo en un marco de datos de producción ganadera:

```
ganado_df <- read_csv('ruta/a/mi/importante/archivo.csv')
```

```{advertencia} Tenga cuidado al configurar el directorio de trabajo
Recuerde que cuando usa `setwd()` para establecer el directorio de trabajo para su proyecto o secuencia de comandos, el directorio de trabajo es distinto a su computadora y puede disminuir el nivel de reproducibilidad de su código.
```

### 2. Organiza el formato de tu código

Comience su secuencia de comandos con el nombre del creador, la fecha en que se editó por última vez (en ISO 8601) y una breve descripción del propósito de la secuencia de comandos.

```
##################################
# Creador: Kassy Raymond
# Correo electrónico: kraymond@uoguelph.ca
# Fecha de última edición: 20210803

# Este programa contiene código que realiza análisis de componentes principales (PCA)
# sobre datos de producción ganadera de Etiopía. Los datos que se utilizaron en este
# programa es del conjunto de datos de producción de FAOSTAT y se descargó en
#2021-08-03. Los datos de salida de este script se utilizarán en un modelo que
# calcula la biomasa.

##################################
```

Documente su código con comentarios para que el lector de su código (o usted en el futuro) pueda seguir cada paso que tomó en su secuencia de comandos.

Cargue todas las bibliotecas al comienzo de su programa. En R, esto podría verse así:

```
## 0 - Cargar en todas las bibliotecas

biblioteca (tidyverse)
biblioteca (ggplot2)
biblioteca (tejer)
biblioteca (readr)
biblioteca (forcats)
biblioteca (dplyr)
```

Cuando sea posible, segmente su código en secciones. Esto ayuda con la reproducibilidad y hace que el código sea más legible.

```
## 0 - Cargar en todas las bibliotecas

biblioteca (tidyverse)
biblioteca (ggplot2)
biblioteca (tejer)
biblioteca (readr)
biblioteca (forcats)
biblioteca (dplyr)

## 1 - Archivos fuente

data_path <- 'ruta/a/mi/importante/archivo.csv'
ganado_df <- read_csv(ruta_datos)

## 2 - Limpieza de datos

# Eliminar columnas innecesarias

# Verificar NA

# Explore los datos y verifique si hay valores atípicos o errores en los datos

## 3 - Modelado

```

### 3. Limpieza de datos

#### 3.1 Elimina las columnas innecesarias al principio de tu código

Si no está utilizando una columna en un análisis posterior, colóquela en la fase de limpieza y exploración de datos de su secuencia de comandos. Esto mejorará la interpretabilidad de su código y aumentará la velocidad de procesamiento de su programa.

#### 3.2 Recordar la procedencia de los datos

Es importante que las estimaciones, los modelos, los gráficos y los conjuntos de datos de salida creados por los modelos puedan reproducirse. Por lo tanto, es importante incluir el conjunto de datos original utilizado o, cuando se utilizan API, la capacidad de rastrear hasta el conjunto de datos original.

Si descargó sus datos, asegúrese de guardar una copia del conjunto de datos original y **no sobrescriba** esto en su flujo de trabajo.

Si se realizó una llamada a la API para obtener los datos, asegúrese de que se proporcione la marca de fecha de esa llamada en el nombre de su conjunto de datos de salida, modelos o gráficos que se crean. También puede volver a elegir guardar una copia del conjunto de datos original.

#### 3.3 Asegúrese de que los datos estén en un formato 'ordenado' al final de la fase de limpieza de datos

Consulte también [Organización de datos en hojas de cálculo](http://www.gbadske.org/Documentation/DataGovernanceHandbook/dataBestPractices.html) en este manual y [R para Data Science](https://r4ds.had.co.nz/ ) de Hadley Wickham.

#### 3.4 Organizar datos

Organice los datos de izquierda a derecha con variables categóricas y luego variables continuas. Las variables deben agruparse cuando sea pertinente (p. ej., densidad de población al momento del aclareo, peso al momento del aclareo, fecha del aclareo, etc.)

### 4. Otras recomendaciones

- ¡Prueba RStudio para tu IDE!


