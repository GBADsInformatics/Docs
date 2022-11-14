---
sidebar_position: 11
---
# Organización de datos en hojas de cálculo

```{epígrafe}
"Basura dentro basura fuera"
```

Si está leyendo esto, probablemente dedique mucho tiempo a tratar con datos. Puede recopilarlo, limpiarlo, modelarlo, compartirlo, intentar interpretarlo y luego hacer todo de nuevo. Cuando recibe datos de un colega, puede intentar limpiarlos nuevamente (incluso si ya se han limpiado), tratar de interpretarlos e incluso puede que tenga que escribir varios correos electrónicos para interpretar los datos.

**En esta parte del manual, le decimos cómo puede organizar mejor sus datos en hojas de cálculo para crear datos de mayor calidad, lo que lleva a modelos de mayor calidad. También definimos algunas prácticas estándar para ingresar datos de tipos específicos, incluidas fechas y números largos.**

### Hojas de cálculo y conjuntos de datos

Las hojas de cálculo, como las creadas en Microsoft Excel y Google Sheets, son comunes para almacenar, ingresar, compartir y manipular datos de investigación. Las hojas de cálculo se comparten comúnmente para comunicar los resultados de la investigación y se utilizan como datos de entrada para modelos o análisis estadísticos. Si bien las hojas de cálculo son una parte integral del ciclo de vida de los datos, deben estructurarse adecuadamente para garantizar que no se cometan errores que impidan la reutilización o interpretación de los datos. Los pequeños errores en las hojas de cálculo pueden dejarnos en situaciones en las que los datos son difíciles de entender, difíciles de analizar y requieren mucho tiempo para limpiarlos.

```{advertencia} Comuníquese con el equipo de informática de GBAD si...
Póngase en contacto con el equipo de informática de GBADs si es miembro de GBADs y tiene muchas hojas de cálculo con datos 'desordenados'. ¡Podemos consultar y pensar en cómo crear un programa que discuta y transforme sus datos en un formato ordenado!
```

La estructuración adecuada de los datos en hojas de cálculo conduce a que los datos sean más reutilizables e interoperables (FAIR), lo que genera datos de mayor calidad y, en última instancia, una mejor investigación. Al configurar hojas de cálculo para que se ingieran en software estadístico o bibliotecas desde el principio, podemos minimizar la confusión y simplificar nuestros flujos de trabajo.

```{admonición} Objetivos de aprendizaje
* Los lectores deben comprender cómo estructurar un conjunto de datos en una hoja de cálculo de una manera que admita los principios de datos FAIR
* Los lectores deben comprender cómo estructurar su conjunto de datos para preservar la semántica (significado subyacente) de los datos
* Los lectores deben entender cómo estructurar fechas y números largos en hojas de cálculo y por qué es importante que estos datos sean legibles por máquina.
* Los lectores deben comprender los errores comunes que generan conjuntos de datos desordenados y cómo evitarlos
```

### Estructura de datos

```{epígrafe}
"Los conjuntos de datos ordenados son todos iguales, pero cada conjunto de datos desordenado es desordenado a su manera".

-- [Hadley Wickham](http://hadley.nz/)
```

En general, un conjunto de datos ordenado o limpio se compone de los siguientes ({numref}`tidyData`) {cite}`wickham_R4DS_2017`:

````{paneles}
:columna: col-4
:tarjeta: borde-2
Columnas (Variables)
^^^
Las columnas son un grupo de celdas alineadas verticalmente. En los conjuntos de datos, las columnas son variables, donde cada celda contiene información sobre un atributo determinado.
---
Filas (Observaciones)
^^^
Las filas son un grupo de celdas que están alineadas horizontalmente, donde cada fila es una observación.
---
Celdas (Valores)
^^^
En los conjuntos de datos, cada fila es una observación y cada celda de esa fila contiene el valor de la columna donde cae.
````

```{figura} /images/tidyDataWickham.png
:nombre: tidyData

Reglas que hacen un conjunto de datos ordenado: las columnas son variables, las observaciones son filas y los valores son celdas. Imagen y pie de foto de {cite}`wickham_R4DS_2017`.
```

Cumplir con un formato de datos ordenado permite la reutilización de datos, garantiza la consistencia (lo que mejora la calidad de los datos) y ayuda a comprender el significado subyacente (semántica) de cada uno de los valores en la hoja de cálculo. Tener columnas como variables y filas como observaciones nos permite saber qué significa un valor en función de su relación con las variables y las observaciones.

Los datos FAIR son datos ordenados: los datos ordenados son reutilizables e interoperables por naturaleza. Los datos ordenados son más fáciles de encontrar, porque los encabezados están bien definidos, lo que facilita la creación de metadatos. Fundamentalmente, podemos extraer más información de los datos ordenados.

### Guardar hojas de cálculo

Los conjuntos de datos en hojas de cálculo se pueden guardar como un archivo de Excel o en formato `.csv` (valores separados por comas) o `.txt`. Se prefieren los dos últimos porque son más fáciles de leer en las bibliotecas de programación en R y Python.

### Convención estándar de fecha y hora

Sin una convención estándar, las fechas pueden presentar mucha ambigüedad. Por ejemplo, 01/11 podría interpretarse como enero de 2011, noviembre de 2001 o 1 de noviembre. Por esta razón, es importante utilizar un estándar de fecha aceptado internacionalmente para que podamos comprender nuestros datos de manera confiable.

Los GBAD utilizarán el estándar [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) para las fechas. ISO 8601 es un estándar internacionalmente aceptado que utiliza el [calendario gregoriano] (https://en.wikipedia.org/wiki/Gregorian_calendar).

Las fechas se representan como:
- AAAA-MM-DD o AAAAMMDD

El estándar ISO 8601 utiliza el reloj de 24 horas. Por lo tanto, los tiempos se pueden ingresar como:

- T[hh:mm:ss]

o si los segundos no son aplicables:

- T[hh:mm]

y si los minutos no son aplicables:

- T[hh]

Dado que GBADs es una organización global, es importante especificar las zonas horarias ingresando la hora en las hojas de cálculo. Las zonas horarias se especifican después de la fecha especificando qué tan atrás o adelante está la zona horaria de UTC.

Por ejemplo:
Sábado 10 de julio de 2021 a las 13:48 EDT está escrito como 2021-07-10T13:48-4:00

```{advertencia} Diferentes calendarios para diferentes países
:clase: consejo

Al analizar conjuntos de datos de diferentes países, tenga en cuenta que no todas las partes del mundo usan el calendario gregoriano.

Por ejemplo, Etiopía usa el calendario etíope, que es diferente del calendario gregoriano. Esto coloca a Etiopía 7 años por detrás del calendario utilizado en Europa y América del Norte. [Aquí](https://melaku.ml/) es una herramienta que le permite convertir del calendario gregoriano al etíope.
```

### Convenciones de números grandes

Dependiendo del país, existen diferentes convenciones para números grandes.

Por ejemplo, el número 133333.450 se puede representar de diferentes maneras:

En los países de habla inglesa, el número podría verse así:
- 133.333.450

En países de habla no inglesa, así:
- 133.333.450

Entonces, el mismo número pero representado de 3 formas diferentes. Esto deja mucho a la interpretación, especialmente porque el valor predeterminado al leer la mayoría de los archivos en lenguajes de programación estadísticos asume que una coma especifica una nueva columna. Y debido a que gran parte del trabajo que hace GBAD se basa en lenguajes de programación como R y python, es realmente importante estructurar nuestros números para que puedan ser leídos e interpretados fácilmente y también leídos por máquinas.

Para mantener las cosas claras, debemos estructurar nuestros números grandes **sin** comas y reservar puntos para especificar un lugar decimal.


```{Advertencia} Si ves una coma donde crees que no debería estar...
:clase: consejo

Si el formato de los números grandes no está claro para usted, ¡pídale una aclaración al propietario de los datos! Si el propietario de los datos es parte del programa GBADs, sugiérale amablemente que utilice los estándares utilizados y establecidos por el programa (incluso podría enviar este capítulo).

```

### Convención de nomenclatura de archivos

Al nombrar archivos, debe ser consistente, ser descriptivo, evitar caracteres y espacios, e incluir la fecha (preferiblemente usando un estándar como [ISO 8601] (https://www.iso.org/iso-8601-date-and- time-format.html). A los efectos de la convención de nomenclatura de archivos, omitiremos los guiones entre AAAA-MM-DD.

**Ejemplos de buenas convenciones de nomenclatura de archivos:**

Cuando se trata de datos descargados de organizaciones:
* AAAAMMDD_organización_tema_especies_país
* 20210617_FAO_ProductionPrices_Poultry_Ethiopia.csv
* 20210617_Banco Mundial_LSMS_Etiopía.csv

Donde AAAAMMDD es la fecha en que descargó el archivo.

Si es un archivo de metadatos, debe nombrar el archivo con 'metadatos' y el nombre de archivo como se indicó anteriormente para saber qué archivo de metadatos corresponde al conjunto de datos adecuado. Por ejemplo:

* 20210617_FAO_ProductionPrices_Poultry_Ethiopia_metadata.csv
* 20210617_Banco Mundial_LSMS_Etiopía_metadatos.csv

**Ejemplos de archivos mal nombrados:**
* Precios de producción de la FAO - descargados por Kassy el 25 de abril.csv
* Precios de producción de Etiopía del sitio web de estadísticas de fao.csv
* ETHPRODPRICES_GOODCOPY.csv

```{advertencia} Fechas primero
:clase: consejo

Poner la fecha primero en un archivo le permite organizar fácilmente los archivos en un directorio o carpeta por fecha ascendente o descendente.

```

### Errores comunes

Debe evitarse el formateo, el resaltado y la negrita. He aquí por qué hacer que las hojas de cálculo sean bonitas causa dolores de cabeza en el ciclo de vida del análisis de datos:

#### 7 errores comunes que ensucian las hojas de cálculo

1. Múltiples tablas en una hoja de cálculo
2. Valores nulos incorrectos (un cero no significa nulo)
3. Las celdas se fusionan
4. Las unidades de medida se incluyen en los valores en lugar de los nombres de las columnas
5. El formato se utiliza para representar información.
6. Las celdas contienen más de una pieza de información
7. No se utiliza el formato de fecha estándar

*** 1. Múltiples tablas en una hoja de cálculo***

Tener varias tablas en una hoja de cálculo a menudo conduce a una limpieza de datos innecesaria para cualquier otro procesamiento de datos. Múltiples tablas en una hoja de cálculo generan confusión cuando compartimos la hoja de cálculo o volvemos a ella en una fecha posterior. Si una fila es una observación, la creación de varias tablas va en contra de esta noción, lo que reduce la calidad y la capacidad de interpretar el conjunto de datos.

En el siguiente ejemplo, que se compone de datos fabricados, hay 4 tablas en una sola hoja de cálculo. En cada tabla, el 'elemento' es la observación y el número de animales vivos en un año determinado es lo que se mide. Sin embargo, debido a la forma en que está configurada la hoja de cálculo, es difícil saber si las dos tablas superiores están asociadas con Canadá o si a la tabla de la derecha le falta un encabezado.

![MultipleTablesBad](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210615_dataBestPractices_MultipleTablesBAD.png)

Una mejor manera de configurar los datos sería así:

![MultipleTablesGood](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210614_dataBestPractices_MultipleTablesGOOD.png)

Aquí vemos que todavía se proporciona toda la información, pero cada fila es una observación para un país, artículo y año determinados. Además de mejorar la interpretabilidad de los datos, estos datos ahora se pueden ingresar en un software estadístico como R sin una limpieza exhaustiva de los datos.

***2. Valores nulos incorrectos***

Los valores faltantes o nulos deben indicarse de una manera estándar que se distinga de un valor cuantitativo de 0. De esta manera, el lector del conjunto de datos comprenderá qué datos faltan o son desconocidos y cuáles tienen un valor de 0. Lo más importante al registrar faltantes valores es consistencia; si decide usar "NA" para indicar valores faltantes, asegúrese de no cambiar a minúsculas ("na") o "No aplicable" más adelante en la hoja de cálculo.

Dependiendo del software estadístico, el significado de "NA" puede variar. Por ejemplo, en R, `NA` es un término reservado para un valor faltante. La forma en que se representan los valores `NA` en python varía según la biblioteca que se utilice. En pandas (una popular biblioteca de python para análisis, limpieza y disputa de datos), los valores `NA` están representados por `NaN` o `Ninguno`. Sin embargo, siempre que seamos consistentes en la forma en que representamos los valores `NA` al ingresar y analizar datos, podemos cambiar rápidamente entre formatos según el software estadístico o de programación que elijamos.

***3. Las celdas se fusionan***

Combinar celdas va en contra de la noción de que las filas son observaciones y cada columna es una variable. La combinación de celdas no solo va en contra de estos principios, sino que hace que sea imposible clasificar columnas y filas, provoca errores al leer los datos en los software estadísticos e introduce la posibilidad de malinterpretar los datos o perder información. Por ejemplo, el uso de celdas combinadas para vincular dos filas causa confusión cuando vuelve a mirar los datos. O bien, si se pierde el formato fusionado, existe la posibilidad de perder una observación completa o variables en una observación determinada.

***4. Las unidades de medida se incluyen en los valores en lugar de los nombres de las columnas***

Como cada columna representa una variable, las unidades de medida deben ser consistentes en toda la columna. Por lo tanto, cuando corresponda, debe incluir la unidad de medida en el encabezado de la columna.

***5. El formato se utiliza para representar información***

Se debe evitar resaltar las celdas y poner la información en negrita o cursiva como un medio para representar la información en un conjunto de datos. Esto es problemático porque si se pierde el formato, se pierde información valiosa. Si desea incluir la información articulada por el formato en su modelo o análisis, deberá limpiar la hoja en Excel antes de leerla en su software.

Por ejemplo, al analizar muestras para detectar enfermedades, se podría usar el resaltado para mostrar qué muestras resultaron positivas. Si se pierde el formato, o si alguien no conoce el contexto de lo que significa el resaltado, esta información se pierde.

***6. Las celdas contienen más de una pieza de información***

Cuando las celdas contienen más de una pieza de información, limita la forma en que puede analizar un conjunto de datos preexistente y, por lo general, conduce a una mayor limpieza de datos. Por ejemplo, podría estar reportando tipos de razas y conteos en su conjunto de datos.

En este caso, querrá informar la raza y contar en columnas separadas como esta:

| Raza | Contar | Granja | Fecha contada |
| :---: | :---: | :---: | :---: |
| Aberdeen Angus | 20 | Granjas ganaderas canadienses | 2021-06-01 |
| abergele | 60 | Granjas ganaderas canadienses | 2021-06-01 |
| Lemosín | 10| Granjas ganaderas canadienses | 2021-06-01 |

En lugar de reportarlos en la misma celda, así:

| NúmeroDeRaza | Granja | Fecha contada |
| :---: | :---: | :---: |
| 20 Aberdeen-Angus | Granjas ganaderas canadienses | 2021-06-01 |
| 60 Abergèle | Granjas ganaderas canadienses | 2021-06-01 |
| 10 Lemosín | Granjas ganaderas canadienses | 2021-06-01 |


***7. No se utiliza el formato de fecha estándar***

Al ingresar fechas, utilice un estándar como [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) (YYYY-MM-DD). Esto le permite ordenar por fecha, mejorar la interpretabilidad y, si es necesario, convertir fácilmente a otros formatos de fecha. Consulte la sección **Convención estándar de fecha y hora** de esta sección para obtener más información sobre cómo los GBAD abordan el ingreso de fechas y horas.

Además, al usar fechas, asegúrese de especificar qué significa la fecha. Un encabezado de columna simplemente titulado 'fecha' no proporciona mucho contexto. Por ejemplo, ¿fecha significa la fecha en que se ingresaron los datos en la hoja de cálculo? ¿La fecha en que se recolectó una muestra? ¿La fecha en que se analizó una muestra en el laboratorio? ¡Asegúrese de que otros investigadores (y usted en el futuro) sepan de lo que estaba hablando!

### Otras recomendaciones de lectura
[R de Data Science de Hadley Wickham](https://r4ds.had.co.nz/)

Autores: Kassy Raymond y K. Marie McIntyre
