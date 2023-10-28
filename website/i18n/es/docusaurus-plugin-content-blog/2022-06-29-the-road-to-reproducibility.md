---
slug: the-roadmap-to-reproducibility
title: La hoja de ruta hacia la reproducibilidad
authors: Kassy
tags: [reproducibility, data, values]
---

![Imagen de encabezado](https://i.imgur.com/2JEVnaV.png)
*Figura 1: La hoja de ruta hacia la reproducibilidad*

> *“El objetivo de la ciencia, la forma en que sabemos algo, no es que confíe en Isaac Newton porque creo que fue un gran tipo. El punto es que puedo hacerlo yo mismo... Muéstrame los datos, muéstrame el proceso, muéstrame el método y luego, si quiero, puedo reproducirlo”.*

[Brian Nosek](https://www.washingtonpost.com/news/speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100-experimental-results -sólo-tiene-éxito-36-veces/) - Washington Post[^1]

<br/>

La ciencia reproducible requiere métodos, códigos y disponibilidad de datos bien documentados. Significa brindar transparencia en lo que se está haciendo a lo largo de todo el proceso científico para fomentar la confianza en el proceso y los resultados y permitir que otros aprovechen el trabajo anterior. No hay lugar para el escéptico científico cuando su investigación es reproducible.

<br/>

Los datos que utiliza GBAD provienen de muchas fuentes diferentes y se utilizan en modelos que luego producen más conjuntos de datos y que actúan como entradas para otros modelos. Esta cadena de datos-modelo-datos-modelo-datos no se limita al trabajo de un solo científico; Tenemos colaboradores trabajando en todo el mundo. Es fundamental que los datos subyacentes estén disponibles y que todos nuestros métodos sean reproducibles para que podamos aprovechar el trabajo de los demás y permitir que otros utilicen nuestras estimaciones con confianza.

<br/>

Con el objetivo de hacer que todos nuestros procesos sean reproducibles y transparentes, GBADs se embarca en la “Hoja de Ruta hacia la Reproducibilidad”. En esta publicación de blog lo invitamos a recorrer el camino hacia la reproducibilidad con nosotros. Abróchense los cinturones de seguridad mientras evitamos las llamas de la “Crisis de Reproducibilidad” antes de dirigirnos a nuestro destino final, ¡la “Utopía de Datos”!

<br/>

## La “crisis de la reproducibilidad”

En 2016, una encuesta de 1.576 investigadores de Nature reveló que existe una "crisis de reproducibilidad" en la comunidad científica[^2]. De los participantes, "más del 70% de los investigadores intentaron y no lograron reproducir el experimento de otros científicos y más de la mitad no lograron reproducir sus propios experimentos". Muchos factores contribuyen a que la investigación sea irreproducible (Figura 2), donde la presión para publicar y los informes selectivos estuvieron entre los mejor calificados. Sin embargo, los datos brutos no disponibles y los métodos o códigos no disponibles también fueron calificados como grandes contribuyentes. Si bien la presión para publicar requiere un cambio cultural en la investigación, los datos brutos, los métodos o el código no disponibles son problemas que podemos resolver.

<br/>


![Figura 2](https://i.imgur.com/dcnJkJR.jpg)
Figura 2: Factores que contribuyen a la investigación irreproducible. Figura obtenida de Baker, 2016[^2].

## Emprendendo el camino hacia la reproducibilidad

### Parada 1: Personas y procesos

La disponibilidad del código y los datos es importante para la reproducibilidad; sin embargo, hay personas detrás del código y los datos trabajando en procesos para hacerlo reproducible.

<br/>

Como tal, hemos establecido procesos y mejores prácticas para el uso de datos en GBAD, que se comunican en el [Manual de Gobernanza de Datos] (http://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/intro ), y en nuestro [Sitio de documentación](http://gbadskedoc.org). Estos procesos involucran lo siguiente:

<br/>

1. Documentación de cambios en los datos y prácticas de limpieza de datos.
2. Documentación de los estándares de metadatos utilizados para proporcionar información sobre los datos.
3. Dónde y cómo se almacenan los datos y metadatos, y cómo se difunden
4. Mejores prácticas para documentar código en repositorios de GitHub

<br/>

También contamos con personas para cumplir con los procesos que hemos establecido. Dado que algunos de los datos que utilizan los GBAD no tienen metadatos, confiamos en el establecimiento de un punto de contacto para la fuente de datos para garantizar que podamos obtener el contexto sobre cómo se recopilaron los datos, cómo se pueden utilizar, por quién, y para qué fines y qué categorías representan los datos.

<br/>

### Parada 2: Adquisición e ingestión de datos

Para adquirir datos, identificamos datos que son relevantes para la estimación de modelos. Por ejemplo, la población de ganado por país y especie y el peso vivo son datos de entrada para los cálculos de biomasa.

<br/>

La forma en que adquirimos datos depende del formato en el que estén disponibles. Hay tres formas principales en que se adquieren e ingieren los datos:

<br/>

* Cuando los datos están disponibles a través de Interfaces de programación de aplicaciones (API), los datos se adquieren directamente de la fuente y se transforman antes de estar disponibles a través de la API de GBAD;
* Cuando los datos están disponibles mediante descarga directa, los datos se descargan y formatean en tablas de bases de datos antes de estar disponibles a través de la API de GBAD, y;
* Cuando los datos están disponibles en tablas PDF, los scripts de raspado web extraen datos de las tablas y los ponen a disposición a través de archivos csv antes de formatearlos en tablas de bases de datos y ponerlos a disposición a través de la API de GBAD.

<br/>

Cada uno de estos procesos está documentado. El linaje de los datos se rastrea en una base de datos gráfica para garantizar que podamos rastrear cualquier cambio en los datos y hacer que nuestros procesos sean transparentes y reproducibles.

<br/>

### Parada 3: Calidad de los datos

Controlamos la calidad de cada fuente de datos adquirida por GBAD. A veces hay errores internos en la agregación de categorizaciones donde las subcategorías no suman una "supercategoría". Por ejemplo, si las aves de corral se dividen en aves de corral y comerciales, estas categorías deberían sumar “aves de corral”. En otros casos, puede haber un aumento repentino en el número de animales en un país. En este caso, debemos investigar comparando el valor con otras fuentes de datos.

<br/>

Todos los controles de calidad y los cambios respectivos se registran. Una vez que los datos se han "limpiado", la versión "limpiada" se proporciona a través de la API y los paneles de control de GBAD. De esta manera, hay coherencia en las evaluaciones de calidad y cada colaborador no lo hace de forma independiente. Esto garantiza la coherencia en los resultados y mejora la reproducibilidad de las estimaciones y los datos de los GBAD en conjunto.

<br/>

### Parada 4: Código

El código que se utiliza para adquirir e ingerir datos, limpiar datos y crear modelos está disponible a través de los repositorios GitHub de GBAD. El código está bien documentado y hay información sobre cómo ejecutarlo, qué conjuntos de datos se utilizaron y quién participó en el desarrollo.

<br/>

### Destino final: la utopía de los datos

En Data Utopia, los datos se pueden armonizar y reutilizar para modelos o fines posteriores. La idea aquí es que todos los miembros de GBAD utilicen los mismos datos y no dupliquen los esfuerzos de limpieza, ingesta o adquisición de datos. Al hacer que los datos y la metodología de limpieza sean reproducibles, los datos subyacentes son consistentes y están listos para usar. En nuestra Utopía, los datos se visualizan y están disponibles a través de paneles de control y se puede acceder a ellos a través de la API. Los paneles también cuentan con una pestaña de metadatos donde se proporciona la metodología, el código y la información de procedencia para garantizar que todos los miembros puedan acceder al código y a los datos sin procesar que se muestran y están disponibles en los paneles.

<br/>

*Nota: Reconocemos el hecho de que no todos los datos pueden estar disponibles. Si bien actualmente estamos trabajando con Datos Gubernamentales Abiertos, anticipamos la gobernanza controlada de datos privados y sensibles, que no estarán disponibles abiertamente en forma sin procesar sin el permiso del titular de los datos de acuerdo con los acuerdos y licencias de datos.*

<br/>><br/>

Referencias:

<!--Referencias-->
[^1]: Achenbach, J. (27 de octubre de 2021). Muchos estudios científicos no se pueden replicar. eso es un problema. El Washington Post. Obtenido el 19 de junio de 2022 de [https://www.washingtonpost.com/news/speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100- resultados-experimentales-exitos-solo-36-veces/](https://www.washingtonpost.com/news/speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort- reproducir-100-resultados-experimentales-solo-tiene-éxito-36-veces/)

[^ 2]: panadero, M. (2016). 1.500 científicos descubren la reproducibilidad. Naturaleza, 533(7604).


