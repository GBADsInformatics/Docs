---
sidebar_position: 9
---

# Almacenamiento de metadatos: bases de datos de gráficos en GBAD

```{epígrafe}
"Todo el conocimiento está en las conexiones"

-- [David Rumelhart](https://en.wikipedia.org/wiki/David_Rumelhart)
```

GBADs Informatics utiliza [neo4j](https://neo4j.com/), un sistema de gestión de base de datos de gráficos, para gestionar y almacenar metadatos e información sobre las personas y los grupos que participan en el proyecto. Como aprenderá en esta sección, una base de datos de grafos es un tipo de base de datos que aprovecha la idea de las conexiones entre entidades como un método para obtener información y nuevos conocimientos a partir de datos que de otro modo estarían desconectados.

***En esta sección, le decimos qué es una base de datos de gráficos, cómo se puede usar, hablamos sobre la investigación de One Health como una entidad conectada y describimos los casos de uso de la base de datos de gráficos de GBAD.***

```{admonición} Objetivos de aprendizaje
* Los lectores deben comprender qué es una base de datos de gráficos y un modelo de gráfico
* Los lectores deben comprender el caso de uso de metadatos para bases de datos de gráficos en GBAD
* Los lectores deben comprender la idea de conectividad y datos.
```



## ¿Qué es una base de datos de gráficos?

```{margen} ¿Qué son las bases de datos relacionales?
Tradicionalmente, los datos se organizan en una serie de tablas. Cada una de las tablas tiene columnas y algunas tablas tienen columnas comunes. Con estas columnas comunes puede especificar uniones entre tablas, lo que da como resultado una nueva tabla.

La mayor ventaja de las bases de datos relacionales es la capacidad de unir tablas comunes para obtener información. Por otro lado, las bases de datos relacionales requieren esquemas rígidos que requieren que los ingenieros de bases de datos estructuren sus datos para que se ajusten al esquema. Esto viene con la suposición de que sabemos cómo se ven todos nuestros datos, lo que no siempre es el caso para la investigación.

```

Una base de datos de gráficos es un tipo de base de datos que almacena datos utilizando relaciones entre ideas o entidades principales. Las relaciones entre diferentes entidades muestran conectividad, lo que permite obtener más información que una base de datos relacional tradicional. Debido a que los datos son altamente complejos y multidimensionales en términos de estructura, procedencia, gobierno, seguridad y semántica, GBADs utiliza bases de datos gráficas para la gestión de metadatos maestros y la catalogación de datos. Al aprovechar la naturaleza dinámica de la base de datos de gráficos y estructurar nuestro **modelo de gráficos** de una manera que permita una mejor comprensión de las muchas dimensiones de los datos, podemos visualizar y comprender cómo fluyen los datos dentro y fuera de nuestra organización. Las bases de datos de gráficos también nos permiten agregar y cambiar la estructura a medida que cambia la estructura de la información sobre los datos. Esto se volverá más claro a medida que presentemos el modelo preliminar de datos del gráfico GBADs.


### Partes de una base de datos de grafos

Las bases de datos de grafos se componen de **nodos** (entidades) y **aristas** (relaciones). Los nodos pueden tener propiedades y etiquetas, mientras que los bordes sirven como conexión o relación entre nodos.

Un modelo gráfico es un modelo de qué tipo de nodos está representando y cómo están conectados (qué relaciones tendrá).

![Modelo gráfico](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210719_GBADs_GraphModel.png)

**Investigación y conectividad**

La investigación y el modelado se basan en los datos que recopilamos para dar sentido al mundo que nos rodea. Usamos los datos para obtener información que informe las decisiones o para hacer modelos que informen las decisiones, pronosticar, optimizar, comprender, promover la ciencia, mejorar los negocios, comprender qué características de algo son realmente fundamentales para la toma de decisiones o ese impacto. lo que sea que estemos estudiando. Pero lo que a menudo falta en nuestras colecciones de datos (nuestros conjuntos de datos) es la conexión o las relaciones entre las cosas que estamos estudiando.

Las bases de datos de gráficos nos permiten capturar estas relaciones y usarlas para obtener nuevos conocimientos y visualizar datos de una manera más significativa.

<!---## Casos de uso de la base de datos de grafos GBADs--->

<!---GBADs utiliza bases de datos de gráficos para 2 propósitos principales:
1. Gestión de metadatos maestros
2. Sistema de información de gestión (MIS) --->

### Gestión de metadatos maestros

Para comprender más acerca de los metadatos, cómo se usan y por qué son tan importantes, consulte la [sección de metadatos](#techdatastds) de este manual.

Usamos bases de datos de grafos para entender el flujo de

Los conjuntos de datos se pueden relacionar de muchas maneras diferentes. Se pueden conectar dos conjuntos de datos diferentes, de diferentes fuentes, en términos de sus propiedades descriptivas, como el

- mientras que diferentes conjuntos de datos pueden tener diferentes contenidos de metadatos, siempre hay relaciones que pueden conectar conjuntos de datos a otros.
- Las bases de datos de grafos aprovechan esta idea al...
