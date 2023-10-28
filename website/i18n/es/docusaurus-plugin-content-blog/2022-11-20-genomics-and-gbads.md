---
slug: genomics-and-gbads-how-ncbi-metadata-can-be-a-new-source-of-data-on-livestock production-and-health
title: "Genómica y GBAD: cómo los metadatos del NCBI pueden ser una nueva fuente de datos sobre la producción y la salud del ganado"
authors: Cassandre
tags: [metadata, genomics, NCBI]
css: custom.css 
---

## La investigación genómica mundial aumenta los metadatos de salud animal

Organizaciones globales como la Organización Mundial de Sanidad Animal (WOAH) y la Organización para la Agricultura y la Alimentación (FAO) han tomado la iniciativa en la recopilación de datos relacionados con métricas de enfermedades animales. Sin embargo, a medida que los datos genómicos aumentan con el costo cada vez menor de la secuenciación, los metadatos relacionados con la salud y las enfermedades animales se pueden utilizar para complementar los datos existentes de los GBAD. Hay estimaciones que predicen que cada año se generan hasta 40 mil millones de gigabytes de datos genómicos y que durante la próxima década la investigación genómica generará entre 2 y 40 exabytes de datos (Stephens et al. 2015). El Centro Nacional de Información Biotecnológica (NCBI) es un ejemplo de un conjunto de bases de datos que contiene información pertinente a los GBAD. A medida que más investigadores realizan trabajos genómicos en ganado y otras especies económicamente importantes, se registran datos sobre raza, ubicación y condición y enfermedad individual. En particular, la base de datos BioSamples del NCBI almacena los metadatos que acompañan a las secuencias genéticas cargadas en el NCBI. A medida que la secuenciación se vuelva más rentable, se acumularán metadatos de animales que pueden ser utilizados por los GBAD. Ha habido un aumento notable en el número de entradas de metadatos relacionados con el ganado en los últimos siete años (Figura 1). Estos metadatos acompañan a los estudios genómicos realizados no sólo por universidades, sino también por organizaciones de todo el mundo. El NCBI ya se ha utilizado para crear bases de datos para que las utilicen otros investigadores (Hu et al. 2022). AnimalMetagenome DB (http://animalmetagenome.com) contiene datos metagenómicos para 4 especies domésticas y una gran cantidad de especies silvestres.

![](https://i.imgur.com/bgF3nCD.png)
<p align="center"><i>Figura 1. Entradas del NCBI en la base de datos BioSample relativas a especies cubiertas por GBAD (bovinos, cerdos, cabras, ovejas, pollos, llamas, équidos, camellos). Esta figura muestra el patrón del número de entradas desde 2005.</i></p>

## Difusión geográfica de datos genómicos.
Uno de los principales objetivos de los GBAD es cerrar las lagunas de datos mundiales sobre la salud animal. Para estandarizar los datos básicos de salud animal en todos los países, los datos de ubicación y raza son increíblemente importantes. Clasificar la variedad global de animales ayudará a comprender la propagación de enfermedades que se originan en los animales. Los usuarios pueden ingresar datos de ubicación como atributo básico en la base de datos de BioSamples. En particular, las entradas pueden contener la ubicación del remitente, la ubicación del muestreo e incluso coordenadas de muestreo específicas. Estos datos pueden reflejar dónde están densamente pobladas ciertas especies o qué países y ubicaciones carecen de datos. Aunque el costo de la secuenciación de ADN ha disminuido, sigue siendo una compra considerable; por lo tanto, estos datos también pueden indicar si existen sesgos inherentes en la presencia de muestreo genómico entre países. Utilizando rentrez, un paquete R para acceder al NCBI (invierno de 2017), pudimos extraer entradas de metadatos para estudios genómicos que involucran ganado y otras especies económicamente importantes. La Figura 2 ilustra la distribución geográfica de estos datos, donde se muestra que hay grupos de datos en áreas altamente estudiadas. Por el contrario, existen claras lagunas en los datos en África y partes de Asia (Figura 2).

![](https://i.imgur.com/skR7ffk.png)
<p align="center"><i>Figura 2. Instantánea estática de una figura interactiva que muestra ubicaciones de muestreo para ganado y otras especies relevantes para GBAD según los metadatos de NCBI BioSample.</i></p>

Ahora bien, estos son sólo los datos que contenían información de ubicación para cada entrada. Como se mencionó anteriormente, estos datos son datos de referencia importantes sobre la presencia de especies a nivel mundial; sin embargo, la base de datos BioSamples también contiene datos más pertinentes a los GBAD, como las enfermedades. Exploramos los metadatos extraídos del NCBI y descubrimos que en las especies de nuestro estudio, el 98 por ciento de las entradas no contenían datos de enfermedades viables. Por "viable" nos referimos a información relacionada con la enfermedad, ya que muchas entradas tenían caracteres aleatorios o información no relacionada. El 2 por ciento restante de los datos contenía enfermedades y agentes de enfermedades que se superponían con la lista de agentes de enfermedades de la WOAH (WOAH, comunicación personal del documento interno). Por ejemplo, los bovinos tenían 16 enfermedades que se superponían con la lista WOAH (Figura 3).

![](https://i.imgur.com/jlqJbUB.png)
<p align="center"><i>Figura 3. Instantánea estática de una figura interactiva que muestra ubicaciones de muestreo para ganado con información sobre enfermedades presente en la entrada del NCBI. Las enfermedades enumeradas se superponen con las enfermedades que WOAH está monitoreando. </i></p>


## La entrada inconsistente de los usuarios genera lagunas en los datos

El NCBI alberga datos de una variedad de organismos, desde bacterias hasta ballenas; sin embargo, cuando se extrajeron datos de ganado y especies económicamente importantes, se obtuvieron cerca de 350.000 entradas. La recopilación de datos para las especies de GBAD (bovinos, pollos, cerdos, ovejas, cabras, etc.) reveló variaciones en la cantidad de datos. La siguiente figura ilustra esta variación, donde el ganado vacuno, los pollos y los cerdos arrojaron la mayor cantidad de datos. La integridad de los datos de estas entradas devueltas varió; sin embargo, constituyeron la mayor proporción de datos relacionados con GBAD. Las entradas de ganado vacuno, en particular, representaron el 27% del número total de entradas. La combinación de otras dos especies, llamas y camellos, representó menos del 1% del total de entradas devueltas.

Además de la información sobre especies, NCBI también permite a los usuarios ingresar datos de raza. Como la información sobre razas puede ser útil para comprender la prevalencia y propagación de enfermedades, es importante saber qué razas forman la mayoría de los datos. La Figura 4 ilustra la proporción de razas específicas para cada especie recopiladas para los GBAD, donde cada barra de color diferente indica una raza diferente. Como se muestra en el gráfico, la mayoría de las entradas no contenían información sobre la raza. Este es un hallazgo importante, ya que la información racial debería ser uno de los principales parámetros reportados, especialmente para especies económicamente importantes. Este gráfico también muestra posibles lagunas en los datos almacenados en el NCBI, ya que ciertas razas no son tan frecuentes en los datos. Esto puede proporcionar conocimiento sobre dónde se deben asignar los recursos, el tiempo y la financiación para igualar los datos entre razas y especies.

![](https://i.imgur.com/dZKyLeW.png)
<p align="center"><i>Figura 4. Diagrama de barras que ilustra la proporción de diferentes razas reportadas para cada especie investigada en la base de datos NCBI BioSamples. El rosa indica la cantidad de entradas sin información de raza. Todos los demás colores indican la proporción de razas diferentes para cada especie.
</i></p>


## Próximos pasos para utilizar estos datos

Según nuestro primer vistazo a los metadatos disponibles en NCBI, hay algunas tareas que podrían simplificar el proceso. Además, los siguientes pasos aumentarían los metadatos para usos secundarios.

1. Estandarizar parámetros.
La estandarización de los parámetros mejoraría el proceso de limpieza de datos y ayudaría a igualar los datos entre diferentes instituciones. Actualmente, la configuración de texto libre de la base de datos BioSample hace que sea muy difícil comparar entradas, ya que los errores ortográficos y los caracteres adicionales pueden inhibir las comparaciones. Como se analizó en otro lugar (Goncalves y Musen 2019), reforzar la infraestructura subyacente de la base de datos NCBI BioSamples ayudará a estandarizar los datos y hacerlos más accesibles para los investigadores para usos secundarios fuera de la genómica.

2. Más atención a los metadatos.
Existen importantes lagunas en los datos que van desde detalles más pequeños, como la prevalencia de enfermedades, hasta parámetros importantes como la raza o la ubicación. A medida que se accede cada vez más al NCBI para obtener metadatos, será imperativo que los usuarios introduzcan la mayor cantidad de datos posible. Los datos básicos como especie, raza y ubicación deberían ser obligatorios para los usuarios.

3. Cargas de datos de preimpresión.
Actualmente, existe un desfase entre el muestreo y la secuenciación del ADN y el momento en que estos datos se cargan en bases de datos públicas como el NCBI. Este retraso puede variar desde unos pocos meses hasta años. Por lo tanto, los datos que podrían usarse en proyectos secundarios como este podrían publicarse hasta unos años después del muestreo. Por lo tanto, recomiendo cargar datos genómicos con los metadatos que los acompañan al NCBI lo antes posible o cuando se envíen las preimpresiones.

El NCBI y otras bases de datos genómicas contienen datos que pueden ser útiles para algo más que proyectos genómicos. Para los GBAD, estos datos pueden proporcionar información valiosa sobre la presencia de razas locales en lugares normalmente no muestreados, así como la aparición de enfermedades en los individuos muestreados. Además, proporciona una primera visión de cómo los proyectos genómicos pueden complementar el objetivo de los GBAD de recopilar datos y métricas de salud animal.

Referencias:

Goncalves R, Musen MA (2019) La calidad variable de los metadatos sobre muestras biológicas utilizadas en experimentos biomédicos. Datos científicos, 6, 190021.

Hu R, Yao R, Li L, et al. (2022) Una base de datos de metagenomas animales. Datos científicos, 9, 312.

Stephens ZD, Lee SY, Faghri, F, et al. (2015) Big Data: ¿astronómico o genómico? Biología PLoS, 3, 1002195.

Winter, DJ (2017) rentrez: Un paquete R para la API NCBI eUtils. El diario R, 9, 520-526.

