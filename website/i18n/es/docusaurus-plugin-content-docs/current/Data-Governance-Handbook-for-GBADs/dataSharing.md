---
sidebar_position: 2
---
# Principios de datos y gobernanza

## La gobernanza de datos

**La gobernanza de datos es la gestión, el almacenamiento, la privacidad, el uso y la calidad de los datos y metadatos utilizados por una organización.** La gobernanza de datos es una tarea multidimensional que requiere que todas las personas de una organización cumplan con los estándares documentados y las mejores prácticas para todos los elementos del uso de datos. El cumplimiento de una estrategia de gobernanza de datos bien documentada permite un uso mejorado de los datos a través de la capacidad de aprovechar los activos de datos en todas sus capacidades.

### Fundamentos de la gobernanza de datos

Si bien la gobernanza de datos se trata de los datos, también se trata de las personas, los procesos y la seguridad de los datos.

**Gobierno de datos y personas**
Todas las personas que crean, usan, difunden o administran datos forman parte y deben cumplir con la estrategia de gobernanza de datos.

**Gobernanza y seguridad de datos**

**Gobernanza de Datos y Procesos**

Términos de gbernanza de datos que se deben de conocer:
- La administrador de datos
- La integración de datos
- La procedencia de los datos
- La ciencia de los datos



#### Más lecturas sobre la gobernanza de datos
**Publicaciones de blog**
- https://towardsdatascience.com/what-we-got-wrong-about-data-governance-365555993048



## Principios de datos

Para proporcionar y crear datos que se puedan utilizar en todo su potencial, GBADs se esfuerza por proporcionar datos y metadatos que sean **F**indable (Encontrables), **A**ccessible (Accesibles), **I**nteroprable (Interoperables) y **R**eusable (Reutilizable) y **S**eguros.

```{margen}
Los '[Principios rectores FAIR para la gestión y administración de datos científicos](https://www.nature.com/articles/sdata201618)' se publicaron en *Scientific Data* en el 2016. Desde su publicación, el artículo ha sido citado más de 4500 tiempos y ha habido esfuerzos para implementar y aceptar los principios FAIR en diferentes dominios. Esto incluye la [Iniciativa GO FAIR](https://www.go-fair.org/go-fair-initiative/go-fair-offices/), que brinda recursos a los grupos que intentan hacer que sus datos sean FAIR (o JUSTOS).
```

<!--GBADs se esfuerza por proporcionar (meta)datos que se adhieran a los principios FAIR(S) y CARE y adoptará una versión modificada de la declaración GATHER y la lista de verificación para crear metadatos más granulares, cuando corresponda.

Al usar y desarrollar estándares preexistentes, construiremos un sistema interoperable que otros investigadores podrán comprender y desarrollar. -->

### Principios FAIR y cultura de datos

La idea de datos 'FAIR' se creó en el 2014/15 para guiar la reutilización, usabilidad, descubrimiento e interoperabilidad de los datos de investigación. El acrónimo 'FAIR' significa Encontrabilidad, Accesibilidad, Interoperabilidad y Reutilización de activos de datos, incluidos los datos en sí y los metadatos que se utilizan para describirlos (consulte el Apéndice A para ver un desglose de cada principio FAIR). Desde entonces, la idea de los datos FAIR ha crecido y se ha utilizado, adaptado y desarrollado ampliamente.
En el 2020, la informática de GBAD informática propuso datos 'FAIR(S)' para agregar un elemento de seguridad a los principios rectores de FAIR.

Si bien se creó inicialmente para la reutilización de datos de investigación, la idea de FAIR ha crecido y se puede aplicar a fuentes de datos abiertas y privadas. El GBAD adaptara los datos FAIR como un concepto de sistema y creara objetos de datos FAIR. El ecosistema de datos FAIR (Figura 1) se utilizará como la estructura básica de nuestro ecosistema de datos. Este documento actuará como un Plan de gestión de datos en el que se abordará y discutirá cada componente del ecosistema de datos FAIR en términos de estructuración de objetos de datos FAIR y definición del uso de los datos que fluyen a través de nuestro sistema.


```{figura} /images/fairDataObj.png
:nombre: fairDataObj

```

Un concepto erróneo popular en la adopción de los principios de intercambio FAIR es que FAIR sugiere que los datos deben estar "abiertos" de forma predeterminada; sin embargo, FAIR en realidad sugiere que los datos deben ser "tan abiertos como sea posible, tan cerrados como sea necesario" [Jones et al, 2018]. Para el GBAD, esto significa complementar los principios FAIR con CARE, que se analiza con mayor profundidad más adelante en este documento. Un componente clave en esto será identificar diferentes tipos de usuarios y contribuyentes de datos.

Garantizar que los metadatos estén en un formato estándar permitirá que el GBAD cumple con FAIR y servirá como columna vertebral para nuestro sistema, alimentando la capacidad de buscar y encontrar recursos basados ​​en términos estandarizados. Por lo tanto, se hará hincapié en definiciones y atributos de metadatos bien definidos.

![cloudReg](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/cloudOfRegistries.png)

GBADs se esfuerza no solo por adaptar FAIR en el sistema, sino también por crear una cultura con nuestra empresa que inspire el uso de FAIR en los datos de investigación de los académicos involucrados en el gran proyecto GBADs. Creemos que este cambio permitirá un mejor uso y reutilización de los datos, lo que permitirá la colaboración y una mejor asignación de recursos.

### Principios CARE

Los principios CARE (o Collective Benefit, Authority to Control, Responsibility and Ethics en ingles) incluyen: Beneficio Colectivo, Autoridad de Control, Responsabilidad y Ética. Cada principio se relaciona con el uso y la gobernanza de los datos pertenecientes o relacionados con los Pueblos Indígenas, sus tierras, bienes culturales y prácticas [refs] y se divide en categorías en el Apéndice B. Los principios de CARE se considerarán en cada paso de los datos GBAD, y en la estrategia de gobernanza y diseño del portal de datos.

Reconocemos que nuestras interpretaciones de los principios CARE pueden no reflejar completamente los verdaderos intereses de los pueblos y grupos indígenas, ya que el equipo de informática de GBAD actualmente no tiene empleados indígenas o asociaciones con pueblos indígenas. Cuando se hayan creado colaboraciones oficiales con pueblos y grupos indígenas, se desarrollarán estrategias y diseños y se perfeccionarán aún más para garantizar que todos los datos indígenas se gobiernen, gestionen y utilicen para el beneficio colectivo de los pueblos indígenas.

### Directrices de Recoleccion

GATHER, (o the Guidelines for Accurate and Transparent Health Estimates Reporting en ingles), son las Pautas para informes de estimaciones de salud precisos y transparentes. Se, definen como las mejores prácticas de informes para estudios que calculan estimaciones de salud. GATHER tiene tres documentos principales: la declaración GATHER [refs], la lista de verificación GATHER y la explicación y elaboración GATHER [ref]. Si bien el GBAD generara estimaciones de salud, dado que la salud es la de los animales de ganaderia y no la de los humanos (para lo cual se diseñó GATHER), usaremos GATHER como punto de partida y no como punto final. Consulte el Apéndice C para ver la lista de verificación GATHER y una crítica preliminar de qué elementos se relacionan con el GBAD.




