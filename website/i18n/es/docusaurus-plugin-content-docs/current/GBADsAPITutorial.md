---
title: "Acceder a la API de GBADs en R"
author: "Kassy Raymond"
date: "19/09/2022"
output: html_document
---

<!-- ```{r configuración, incluir=FALSE}
knitr::opts_chunk$set(echo = VERDADERO)
```

```{r, incluir=FALSO}
opciones(ancho = 60)
local({
hook_output <- knitr::knit_hooks$get('salida')
knitr::knit_hooks$set(salida = función(x, opciones) {
if (!is.null(opciones$max.height)) opciones$attr.output <- c(
opciones$attr.salida,
sprintf('estilo="altura máxima: %s;"', opciones$altura máxima)

gancho_salida(x, opciones)
})
})
``` -->

## Documentación

*Para obtener documentación sobre la API y comandos útiles, puede visitar http://gbadske.org/api/dataportal/*

**Consulta la presentación de Deb para obtener más teoría sobre las API y por qué deberías usarlas.**

### Algunos conceptos importantes:

Una API significa Interfaz de programación de aplicaciones. Una API es una interfaz entre dos programas que le permite solicitar datos de un servidor y devolverlos a su programa. La API GBADs es una API basada en web creada con el Protocolo de transferencia de hipertexto (HTTP) de W3 que permite a los servidores web intercambiar datos.

Al realizar una llamada API, crea una *solicitud* (la llamaremos comando) que consta de una URL, una ruta al punto final y una consulta:

**URL base** (también conocida como URL de solicitud): esta es la URL que necesita para acceder a la API.

Por ejemplo: `http://gbadske.org/api/GBADsTables/` y `http://gbadske.org/api/GBADsLivestockPopulation/` son URL base para la API de GBAD.

**Punto final**: aquí es donde se encuentran los datos que desea.

**Consulta**: Indicado con un '?', así es como solicitas los datos específicos que deseas.

**Ejemplo**:

Este comando proporciona todas las tablas disponibles en la API de GBAD: http://gbadske.org/api/GBADsTables/public?format=html

Desglosado utilizando la terminología anterior:

* URL base: http://gbadske.org/api/GBADsTables/
* Punto final: público
* Consulta: ?formato=html

Una vez que tenga su URL, puede utilizar el método "GET" de HTTP para obtener datos. Existen otros métodos HTTP, pero "GET" es el único que necesitará conocer para obtener datos de la API de GBAD.

## Paquetes requeridos

Puede utilizar el paquete `httr` para `OBTENER` datos de la API. Como a veces también tenemos que manejar algunas cadenas, también cargamos el paquete `stringr` (esto es una preferencia personal, también puedes manejar cadenas en base R, pero a mí me gusta stringr y solo lo uso en la sección de funciones).


```{r}
biblioteca('httr')
biblioteca('cadena')
```

## Usando la biblioteca `httr` para obtener datos

En la siguiente sección proporcionamos funciones que ayudan a facilitar la creación de la URL del contenido para la solicitud al automatizar la creación de la URL y el manejo de la respuesta. Esta sección proporciona una descripción general de cómo entender la biblioteca `httr` en R.

### Los conceptos básicos de `httr` y cómo obtener una lista de tablas disponibles

Llamar directamente al punto final público/GBADsTables proporciona una lista de tablas. Cuando obtenemos este listado podremos saber qué tablas están disponibles y a qué datos podemos acceder.

Primero, configuramos la URL del contenido. Tenga en cuenta que solicitamos que el formato sea "texto" para que podamos manejar la respuesta.

```{r}
URL <- "http://gbadske.org/api/GBADsTables/public?format=text"
```

Luego, podemos usar el método `GET` de `httr` usando la función `GET()`. Llamamos a la variable "res" para representar "respuesta".
```{r}
res <- OBTENER (url = URL)
```

Ahora, veamos qué obtenemos:
```{r}
nombres(res)
```
Lo importante:

* El `status_code` nos proporciona un código que nos dice si nuestra solicitud a la API fue exitosa.
Si obtuvimos un estado de 204, indicaría que no se devolvió ningún contenido. Para obtener una lista completa de códigos de respuesta, visite: https://restfulapi.net/http-status-codes/

* `content` son los datos de la API en código binario sin formato

Veamos el `status_code`:
```{r}
res$código_estado
```
Un `status_code` de 200 significa que la solicitud se realizó correctamente.

Ahora el contenido:
```{r, altura máxima='100px'}
res$contenido
```
El resultado es útil para una máquina, pero necesitamos traducirlo a humano, por favor. La función `content` de la biblioteca `httr` hace que esto sea bastante fácil. Para obtener más información sobre la función `content`, utilice `?content()` para recuperar los documentos.
```{r}
tablas <- contenido (res)
mesas
```
Esto es bueno, pero probablemente deberíamos analizarlo en una lista.
```{r, altura máxima='100px'}
as.list(strsplit(tablas, ",""))
```
¡Por fin!
**Nuestro resultado es una lista de tablas que están disponibles en la API de GBAD. Cada vez que se agrega una nueva tabla o se cambia algo, obtendrá la lista de tablas más actualizada utilizando estas 4 líneas de código que acabamos de revisar:**
```{r, evaluación = FALSO}
URL <- "http://gbadske.org/api/GBADsTables/public?format=text"
res <- OBTENER (url = URL)
tablas <- contenido (res)
as.list(strsplit(tablas, ",""))
```
### Obtener información sobre una tabla

Ahora que tenemos una lista de tablas, podemos ver qué columnas están disponibles en cada tabla. Digamos que queremos datos de `livestock_countries_population_unfccc`, o las cifras de población de la CMNUCC.

Primero, construya la URL. Podemos acceder al contenido de la tabla usando:

* `http://gbadske.org/api/GBADsTable/public?`

y especificando el nombre de la tabla y el formato:

* nombre_tabla=población_países_ganaderos_unfccc&formato=texto

Entonces terminamos con esto:
```{r}
url_unfccc <- 'http://gbadske.org/api/GBADsTable/public?table_name=livestock_countries_population_unfccc&format=text'
```

Luego usamos `GET` y verificamos el `status_code`:
```{r}
res_unfccc <- OBTENER (url = url_unfccc)
res_unfccc$status_code
```
Ahora podemos manejar el formato de respuesta:
```{r}
contenido (res_unfccc)
```
Aquí tenemos país, especie, año, población y bandera como columnas disponibles.

**Próximamente**: funcionalidad para metadatos/descripción en la API.

Ahora que tenemos los campos, podemos seguir adelante y crear una consulta para solicitar los datos reales.

### Obteniendo la tabla de datos

**RECORDATORIO** ENCUENTRE COMANDOS DE EJEMPLO EN http://gbadske.org/api/dataportal

Primero, construye la URL:

* URL = http://gbadske.org/api/GBADsPublicQuery/
* nombre_tabla = población_países_ganaderos_unfccc

La parte nueva de esto son los campos y las partes de consulta de la URL:

* campos = país,especie,año,población
* consulta = En este caso, queremos todos los datos, por lo que podemos dejar la consulta vacía.

Luego, especificamos el formato:

* formato = texto

Poniéndolo todo junto, esta es nuestra URL:

```{r}
url_unfccc_data <- 'http://gbadske.org/api/GBADsPublicQuery/livestock_countries_population_unfccc?fields=country,species,year,population&query=&format=text'
```

Ahora podemos usar `GET` para obtener los datos.
```{r}
res_unfccc_data <- OBTENER (url_unfccc_data)
unfccc_data <- contenido (res_unfccc_data)
```
```{r}
datos_unfccc
```
¡Y ahí lo tenemos!

PARA RESUMEN: fueron solo 3 líneas de código:
```{r, evaluación = FALSO}
url_unfccc_data <- 'http://gbadske.org/api/GBADsPublicQuery/livestock_countries_population_unfccc?fields=country,species,year,population&query=&format=text'
res_unfccc_data <- OBTENER (url_unfccc_data)
unfccc_data <- contenido (res_unfccc_data)
```

Ahora puedes visualizar los datos o hacer lo que quieras con ellos:
```{r}
biblioteca (ggplot2)
biblioteca (tidyverse)

datos_unfccc %>%
filtrar (especie == 'Búfalos') %>%
filtrar (país == 'Australia') %>%
ggplot(., aes(x = año, y = población)) +
geom_line() +
punto_geom() +
ggtitle('Búfalos en Australia', subtítulo = sprintf('Datos de: %s', str_wrap(url_unfccc_data))) +
tema(plot.subtitle=element_text(tamaño=10, cara="italic", color="negro"))
```



Ahora, la parte más complicada de todo eso fue. haciendo las URL. Consulte las funciones a continuación para facilitarle la vida al crear esas URL

## Usando funciones para obtener datos

Para facilitar un poco la obtención de datos, hemos creado algunas funciones para facilitar un poco la codificación.

Para obtener una lista de todas las tablas en la API, puede usar la función `get_tables`.

```{r}
get_tables <- función() {

# La URL del contenido es donde están las tablas.
content_url <- "http://gbadske.org/api/GBADsTables/public?format=text"

# GET del módulo httr nos permite pedir datos a la API
res <- OBTENER (content_url)

# Obtenga el contenido pasando la variable res al comando de contenido.
tablas <- contenido (res, "texto")

# Dividir el contenido a un formato más utilizable
tablas <- as.list(strsplit(tablas, ",""))

retorno (tablas)

```

Al usar la función, simplemente puedes llamar a `get_tables()` para obtener una lista de tablas disponibles:
```{r, altura máxima='100px'}
obtener_tablas()
```

Utilice la función `get_table_fields` para obtener información sobre una tabla de interés. La función `get_table_fields` funciona así:

* Pase a la función el nombre de la tabla sobre la que desea información
* Crea la URL del contenido usando el nombre de la tabla.
* Pide los datos usando GET del paquete httr
* Verifica que la solicitud sea válida utilizando el código de estado de respuesta
* Si el código de estado es válido, analiza el contenido recibido de la respuesta y devuelve los datos.
* Si el código de estado no es válido, imprima un mensaje

```{r}
get_table_fields <- función (nombre_tabla) {
# Pasa a la función el nombre de la tabla sobre la que quieres información

# Construye la URL
content_url = pegar('http://gbadske.org/api/GBADsTable/public?table_name=',table_name,'&format=text', sep = '')

#Pregunta por los datos
res = OBTENER (contenido_url)

si (res$status_code == 200) {
res_content = contenido (res, 'texto')
lista_res = as.list(strsplit(res_content, ",""))

# Devolver la respuesta
retorno(lista_res)


demás {
print('El estado de la respuesta no era 200. No se pudo procesar la solicitud.')



```

Probando la función:
```{r}
get_table_fields('población_de_países_ganaderos_unfccc')
```
En la tabla ganado_países_población_unfccc hay 5 columnas: país, especie, año, población, bandera

Usando la función get_data, puede especificar el nombre de la tabla, los campos y la consulta para obtener los datos de la API:

* Pasar la función nombre_tabla
* Opcional: pasar los campos de función y consultar
* La función realiza una serie de comprobaciones para ver qué parámetros se pasaron.
* La URL del contenido se construye según lo que se pasa.
*Se realiza una solicitud de datos según la url del contenido
*Se devuelve la respuesta a la solicitud
```{r, altura máxima='100px'}
get_data <- función (nombre_tabla, campos, consulta) {

# Comprobar si se proporcionó un nombre de tabla
if (c(faltante(nombre_tabla))) {
stop('Proporcione un nombre de tabla.')


base_url = 'http://gbadske.org/api/GBADsPublicQuery/'

# Crear una llamada API en las siguientes situaciones
# si no se proporcionaron consultas ni campos
if ((faltante (consulta) y faltante (campos))) {
content_url = pegar(base_url,table_name,'?fields=&query=&format=text', sep='')

# si se proporcionaron campos pero no hubo consulta
else if (faltante(consulta)) {
content_url = pegar(base_url,table_name,'?fields=',fields,'&query=&format=text', sep='')

# si se proporcionó una consulta pero no se especificaron campos
de lo contrario si (faltan (campos)) {
stop('No puede proporcionar una consulta sin campos especificados')

# si se proporcionaron la consulta y los campos
demás {
content_url = pegar(base_url,nombre_tabla,'?fields=',campos,'&query=',consulta,'&format=text', sep='')


#Pregunta por los datos
imprimir (contenido_url)
res = OBTENER (contenido_url)

si (res$status_code == 200) {
# Devolver la respuesta
retorno(res)


demás {
print('El estado de la respuesta no era 200. No se pudo procesar la solicitud.')


```

Probando la función para obtener los datos de ganado_países_población_unfccc
```{r}
res_unfccc_all <- get_data('población_de_países_ganaderos_unfccc', campos='país,especie,año,población')
tab_unfccc_all <- contenido (res_unfccc_all)
```
Ver la tabla:
```{r}
tab_unfccc_all
```

Pruebe una consulta más compleja:

* nombre_tabla = población_países_ganaderos_unfccc
* campos = país,especie,año,población
* consulta de datos en 2008

```{r}
res_unfccc_2008 <- get_data('población_de_países_ganaderos_unfccc', campos = 'país,especie,año,población', consulta = 'año=2008')
unfccc_2008_tab <- contenido (res_unfccc_2008)
```
Ver la tabla:
```{r}
unfccc_2008_tab
```

Pruebe con otra consulta:

* Obtener datos de Canadá en el año 2008.

Construir esta cadena de consulta es un poco más complicado.

* Canadá es una cadena, por lo que debe estar entre comillas simples.
* En R, al pasar una cadena entre comillas a una función, tenemos que usar el carácter de escape '\\'. Por ejemplo, país=\\'Canadá\\'
* Estamos consultando tanto para un año como para un país, podemos usar AND en la consulta para preguntar por ambos. Antes y después Y use '%20', que es hexidemial para un espacio, para indicar el espacio en la URL. Por ejemplo, país=\\'Canadá\\'%20AND%20año=2008

Al juntar esto obtenemos `query = 'country=\'Canada\'%20AND%20year=2008`

Ahora puedes llamar a la función como de costumbre, usando la cadena de consulta que acabamos de crear:
```{r}
# Llamar a la función
res_unfccc <- get_data('livestock_countries_population_unfccc', campos = 'país,especie,año,población', consulta = 'país=\'Canadá\'%20AND%20año=2008')
pestaña <- contenido (res_unfccc)
```

ver el resultado
```{r}
pestaña
```

Pruebe con otra consulta, especificando una especie de interés.

* Obtener datos de Canadá para Ovinos en el año 2008.

Usando las mismas reglas que antes, podemos construir la cadena de consulta.

`consulta = 'país=\'Canadá\'%20AND%20 año=2008%20AND%20 especie=\'Ovejas\'`

```{r}
# Llamar a la función
res_unfccc_sheep <- get_data('livestock_countries_population_unfccc', campos = 'país,especie,año,población', consulta = 'país=\'Canadá\'%20AND%20year=2008%20AND%20species=\'Ovejas\'')
pestaña <- contenido (res_unfccc_sheep)
```
Vea el resultado:
```{r}
pestaña
```

¡Con `get_data` crear la URL del contenido, enviar una solicitud y obtener una respuesta es mucho más fácil! ¡Diviértete jugando con la API!

### Referencias
El formato y las explicaciones de este tutorial se inspiraron en https://www.r-bloggers.com/2015/11/accessing-apis-from-r-and-a-little-r-programming/

### Tutorial creado con:
```{r}
información de sesión()
```



