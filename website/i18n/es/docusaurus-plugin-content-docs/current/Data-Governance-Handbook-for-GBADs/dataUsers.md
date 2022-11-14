---
sidebar_position: 8
---

# Guía del usuario de datos

El [portal de datos GBADs](http://gbadske.org:8050/dash/page-1/) es un tablero prototipo que permite a los usuarios acceder a conjuntos de datos de [FAOSTAT](http://www.fao.org/faostat /es/) y [OIE WAHIS](https://wahis.oie.int/). El prototipo le permite seleccionar datos de interés, visualizarlos en gráficos de líneas de barras, descargar los datos en formato `.csv` y `.json` y ver la llamada de la interfaz de programación de aplicaciones (API).

```{margen}
**¿Qué es `.json`?**

[JSON](https://en.wikipedia.org/wiki/JSON) significa notación de objetos de JavaScript. JSON es un formato de archivo que almacena datos en un formato estructurado estándar, lo que permite que los datos sean legibles tanto por humanos como por máquinas. Los datos JSON se pueden leer en todos los lenguajes de programación y se pueden analizar en `excel`. Los datos JSON son legibles y más fáciles de analizar que otros formatos de archivo como [XML](https://en.wikipedia.org/wiki/XML).

```

````{margen}
```{advertencia} ¡Queremos saber de usted!
:clase: consejo

Tenga en cuenta que esta página se actualizará a medida que mejoremos nuestro portal de datos y obtengamos acceso a más fuentes de datos. Agradecemos los comentarios sobre lo que le gusta del sistema, lo que le gustaría ver y cualquier cosa que crea que podría ser más clara.
```
````

```{admonición} Objetivos de aprendizaje
* Los lectores deben entender qué es una API, cómo funciona y por qué GBADs usa API
* Los lectores deben comprender cómo utilizar la API GBADs para obtener datos de FAOSTAT y OIE WAHIS
* Los lectores deben comprender cómo usar la API de GBAD para leer datos en sus programas `R` y `python`
```

## Primeros pasos con nuestra API

### ¿Qué es una API?

Una interfaz de programación de aplicaciones (API) es una forma de máquina a máquina para solicitar datos a un servidor, hacer que el servidor recupere e interprete los datos y los devuelva a su máquina. Las API están en todas partes; permiten que las aplicaciones 'hablen' entre sí. Por ejemplo, cuando consulta el tiempo en una aplicación meteorológica, la aplicación utiliza una API para obtener los datos y presentarlos de forma utilizable e interpretable en su teléfono. Las API brindan los datos más actualizados sin tener que almacenar datos en su propia máquina.

Para las necesidades de datos de los GBAD, las API funcionan así:
1. Usted/su programa solicita datos a través de la llamada API
2. El servidor web busca en su base de datos interna los datos que solicitó
3. La base de datos le da al servidor los datos que pediste
4. Los datos se le devuelven a usted/su programa

### Su flujo de trabajo y API

Para explicar el concepto de una API con más profundidad, analizaremos el flujo de trabajo común para acceder a los datos para el modelado y dónde entran en juego las API.

**Método de acumulación de datos manual**

Si no está utilizando las API en su flujo de trabajo actual, el acceso a los datos probablemente consiste en navegar a un portal o fuente de datos, buscar en el catálogo de datos o buscar un conjunto de datos de su interés y luego descargar los datos. Cada vez que se actualizan los datos, debe repetir el proceso, encontrar los datos, descargarlos nuevamente, importar el archivo a su modelo y volver a ejecutar con los números actualizados. Si bien este flujo de trabajo funciona, el uso de API puede eliminar el trabajo manual de ir al sitio web y obtener los datos cada vez que los necesite.

Cuando interactúa con el sitio web para obtener los datos que desea, es probable que interactúe indirectamente con una API, que funciona en el backend para obtener los datos que ha seleccionado y presentarlos nuevamente en la página web. Sin embargo, puede usar una **llamada API** para solicitar datos del servidor donde residen los datos de interés {numref}`APIcall`.

```{margen}
Una **llamada API** es la forma en que solicita datos a un servidor.
```

**Uso de API para obtener datos**

En lugar de descargar manualmente datos de un sitio web cada vez, puede incorporar llamadas API en su flujo de trabajo para solicitar los datos más actualizados de la fuente. Esto le permite volver a ejecutar el código sin tener que cambiar su código.

```{figura} /images/API.png
:nombre: Llamada API

Desglose simple de cómo funciona una API.
```


<!--Si nunca antes ha utilizado una interfaz de programación de aplicaciones (API), ¡no entre en pánico! Estás en el lugar correcto. Antes de profundizar en cómo usar nuestra API, explicaremos por qué creemos que las personas deberían adoptar el uso de API y qué es una API.

Es posible que haya oído hablar de una API antes y pensó, ¿qué es una API? A menudo, cuando se busca "API" en Google, se ve inundado de jerga técnica y palabras de moda, o información adaptada a los ingenieros de software y los departamentos de tecnología. Sin embargo, las API son extremadamente valiosas para cualquiera que se dirija activamente a un sitio web y descargue datos de él. El uso de una API le permite hacer que su computadora se comunique con un servidor web y solicite los datos, sin ingresar a ese sitio web y descargar estos datos usted mismo. Por ejemplo, en este momento puede dirigirse al portal de datos del Banco Mundial navegando al sitio web, revisando el catálogo de datos o buscando el conjunto de datos de su interés y luego descargándolos. Ciertamente, este método manual es una forma válida de interactuar con un servidor web y permitirle obtener los datos que desea. Pero, en realidad, no tiene que interactuar con un sitio web de esta manera manual para obtener los datos que desea. Las API le permiten llamar al sitio web y solicitar los datos que desea sin tener que navegar por un sitio web (o incluso abrir su navegador web). Y, como aprenderá, ¡no tiene que tener una gran experiencia en programación para usar una API! --->

<!--Las llamadas a la API se realizan mediante el identificador único de recursos (URI) de la API. En pocas palabras, un URI es algo que distingue claramente a la API de otras API. Puede pensar en un URI como algo que identifica algo de todas las demás cosas. Por ejemplo, su número de seguro social es su URI que le permite al gobierno identificarlo de otros ciudadanos. Del mismo modo, puede notar que nadie más tiene la misma dirección de correo electrónico que usted. ¡Una dirección de correo electrónico también es un URI! -->

Una vez que tenga esta 'llamada API', simplemente puede ingresar el programa de su elección y automatizar sus flujos de trabajo y tener acceso a los datos sin tener que buscar en los catálogos de datos cada vez. Las API se basan en protocolos HTTP, lo que brinda otra ventaja: puede usar API con prácticamente cualquier lenguaje de programación, incluidos R y Python, que son los más populares entre nuestros usuarios actuales. Esto significa que en lugar de cargar archivos de datos en su programa R o Python cada vez, simplemente puede acceder a la API directamente en su programa. Un beneficio adicional es que esto le permite volver a ejecutar sus programas sin tener que descargar datos de sus fuentes cada vez que esa fuente se actualiza o modifica.

Algunas fuentes de datos que usa GBAD, como FAOSTAT y el Banco Mundial, tienen API que se pueden usar para obtener datos. Sin embargo, GBADs está manejando la administración de API mediante el desarrollo de una API que puede solicitar datos de otras API ({numref}`GBADsAPI`).

```{figura} /images/GBADsAPI.png
:nombre: GBADsAPI

Descripción general de la infraestructura de la API de GBAD. La API de GBAD puede comunicarse con otras API abiertas para acceder a datos de otros almacenes de datos, como FAOSTAT. La API de GBADs también permite solicitar datos del almacén de datos de GBADs. Los usuarios pueden acceder a datos de varias fuentes a través de una llamada API a la API de GBAD.
```

````{margen}
```{admonición} Datos de acceso especial
:clase: consejo

_Tenga en cuenta que algunos datos no están disponibles públicamente y, por lo tanto, no están disponibles para todos los usuarios_. Consulte [el capítulo sobre licencias de datos, privacidad y seguridad](http://www.gbadske.org/Documentation/DataGovernanceHandbook/dataOwnership.html) para obtener más información sobre cómo GBAD maneja los datos confidenciales y sensibles.
```
````


### Uso de la API de GBAD

Puede consultar nuestra documentación API más extensa [FIXME aquí]. Sin embargo, esta sección le mostrará los conceptos básicos del uso de nuestra API para obtener algunos datos.

Proporcionaremos dos ejemplos de llamadas de API a la API de GBADs. Uno en Python y otro en R. En ambos ejemplos, usaremos la misma llamada API que le dará el precio de las acciones de los pollos en Etiopía de 2005 y 2018 de la FAO. Nuestra llamada API para este tipo de datos es: [http://35.183.203.15:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Chickens](http://35.183.203.15:8000/gbads/LiveAnimals /?year_start=2005&year_end=2018&element=Stocks&item=Pollos)

```{margen}
Notará que si coloca la llamada API directamente en su navegador, accederá a una página con los datos en formato JSON. También notará que la llamada API especifica la categoría (LiveAnimals), el año de inicio y fin, el elemento, que son los precios de las acciones y el artículo, Pollos. Actualmente, nuestro portal solo admite la recuperación de datos etíopes, ya que ese es el enfoque de nuestro estudio piloto.
```

```{nota}
Todavía estamos desarrollando nuestra API de metadatos.
```

En nuestro caso de uso de Python, necesitará tres bibliotecas descargadas: `json`, `requests` y `pandas`.

```{código-celda} ipython3
importar json
solicitudes de importación
importar pandas como pd
importar seaborn como sns
importar matplotlib.pyplot como plt

# Crear llamada API
apiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stock&item=Pollos"

respuesta = solicitudes.get(apiCall).json()

# Imprima la respuesta para que podamos ver lo que obtuvimos.
imprimir (respuesta)
```

En algunos casos, es posible que desee convertir su respuesta en un marco de datos `pandas`, visualizar el resultado o guardar el resultado en un archivo csv. A continuación, demostraremos cómo puede lograr cada uno de los siguientes:

```{código-celda} ipython3
# Crear marco de datos de pandas a partir de la respuesta de API
respuesta = pd.DataFrame(respuesta)

# ¿Cuál es nuestro resultado? Imprima las primeras 10 filas del marco de datos.
imprimir (respuesta. cabeza (10))
```

Antes de continuar y graficar estos datos, podemos usar `pandas` para obtener una descripción general de los datos que obtuvimos de la llamada a la API.

```{código-celda} ipython3
# ¿Qué columnas tenemos?
imprimir (respuesta.columnas)
```

También podemos ver resúmenes de las columnas:

```{código-celda} ipython3
respuesta.describe()
```

```{código-celda} ipython3
# Tiempo gráfico!
respuesta.plot.scatter(x='Año',
y='Valor',
c='Azul oscuro')
```
Y por diversión, visualicemos una relación lineal a través de la función de regresión lineal de `seaborn`. La función proporciona una línea de regresión en un gráfico con un intervalo de confianza del 95 %.

```{código-celda} ipython3

ax = sns.regplot(x="Año", y="Valor", datos=respuesta)

# Establecer etiquetas de eje
ax.set(xlabel='Año', ylabel='Número de animales vivos (1000 cabezas)')

# Añade un titulo
plt.title("Número de pollos vivos en Etiopía")

# Mostrar el resultado
plt.mostrar(hacha)

```

Como puede ver, con muy poco trabajo recopilamos los datos de la API, los convertimos en un marco de datos "pandas" y trazamos una regresión.

También podríamos graficar los datos y visualizar qué puntos corresponden a datos oficiales y cuáles fueron imputados:

```{código-celda} python3
# Diferentes colores para las descripciones de las banderas
sns.scatterplot(x="Año", y="Valor", hue="Descripción de la bandera", data=respuesta)

# Establecer etiquetas de eje
ax.set(xlabel='Año', ylabel='Número de animales vivos (1000 cabezas)')

# Añade un titulo
plt.title("Número de pollos vivos en Etiopía")

# Mostrar el resultado
plt.mostrar(hacha)

```


Si está interesado en simplemente recopilar los datos de la API y guardarlos como un archivo csv, puede usar el siguiente código para hacerlo.

```
importar json
solicitudes de importación
importar pandas como pd

# Crear llamada API
apiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stock&item=Pollos"

respuesta = solicitudes.get(apiCall).json()

# Codificación/descodificación del marco de datos para obtenerlo en formato csv
respuesta = respuesta.to_json(orient='split')
respuesta = pd.read_json(respuesta,orientar='dividir')

# Nombre del archivo externo. Reemplace esto con la ruta donde desea almacenar el archivo y el nombre del archivo.
archivo de salida = 'ruta/al/archivo de salida/nombre del archivo de salida.csv'

# Guardar en archivo externo usando pandas
respuesta.to_csv(archivo de salida, índice=Falso)
```

Aquí está nuestra implementación de R:

Deberá asegurarse de tener los paquetes `httr` y `jsonlite` R descargados.

```
# Descomente la siguiente línea si aún no tiene las bibliotecas
# install.packages(c("httr", "jsonlite"))

# Cargar en bibliotecas
biblioteca (httr)
biblioteca (jsonlite)

# Crear llamada API
apiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stock&item=Pollos"

# Enviar petición
respuesta = GET (llamada api)

# Ver que nos da la respuesta
respuesta

# Crear un marco de datos a partir de la respuesta de la API
data = fromJSON(rawToChar(respuesta$contenido))

# Verifique para asegurarse de que funcionó
clase (datos)

# Vea cómo se ven las primeras 5 filas de los datos
cabeza (datos)
```

## Creación de un perfil de usuario

La guía anterior le permite acceder a la API, que permite el acceso a datos abiertos. En el futuro, anticipamos fuentes de datos privados a las que solo tendrá acceso si tiene permisos. Nuestro sistema admitirá la capacidad de crear un inicio de sesión de usuario verificado, que le dará acceso a las fuentes privadas a las que tiene acceso a través de un portal personalizado y una clave API.

