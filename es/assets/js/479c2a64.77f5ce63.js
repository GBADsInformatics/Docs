"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[114],{3905:(e,a,o)=>{o.d(a,{Zo:()=>u,kt:()=>m});var n=o(7294);function s(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){s(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function l(e,a){if(null==e)return{};var o,n,s=function(e,a){if(null==e)return{};var o,n,s={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(s[o]=e[o]);return s}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var i=n.createContext({}),d=function(e){var a=n.useContext(i),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},u=function(e){var a=d(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var o=e.components,s=e.mdxType,t=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(o),m=s,g=p["".concat(i,".").concat(m)]||p[m]||c[m]||t;return o?n.createElement(g,r(r({ref:a},u),{},{components:o})):n.createElement(g,r({ref:a},u))}));function m(e,a){var o=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var t=o.length,r=new Array(t);r[0]=p;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var d=2;d<t;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},8566:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var n=o(7462),s=(o(7294),o(3905));const t={sidebar_position:8},r="Gu\xeda del usuario de datos",l={unversionedId:"Data-Governance-Handbook-for-GBADs/dataUsers",id:"Data-Governance-Handbook-for-GBADs/dataUsers",title:"Gu\xeda del usuario de datos",description:"El portal de datos GBADs es un tablero prototipo que permite a los usuarios acceder a conjuntos de datos de FAOSTAT y OIE WAHIS. El prototipo le permite seleccionar datos de inter\xe9s, visualizarlos en gr\xe1ficos de l\xedneas de barras, descargar los datos en formato .csv y .json y ver la llamada de la interfaz de programaci\xf3n de aplicaciones (API).",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/Data-Governance-Handbook-for-GBADs/dataUsers.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/dataUsers",permalink:"/docs/es/docs/Data-Governance-Handbook-for-GBADs/dataUsers",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Gu\xeda del colaborador de datos",permalink:"/docs/es/docs/Data-Governance-Handbook-for-GBADs/dataContributors"},next:{title:"Almacenamiento de metadatos: bases de datos de gr\xe1ficos en GBAD",permalink:"/docs/es/docs/Data-Governance-Handbook-for-GBADs/metadataStorage"}},i={},d=[{value:"Primeros pasos con nuestra API",id:"primeros-pasos-con-nuestra-api",level:2},{value:"\xbfQu\xe9 es una API?",id:"qu\xe9-es-una-api",level:3},{value:"Su flujo de trabajo y API",id:"su-flujo-de-trabajo-y-api",level:3},{value:"Uso de la API de GBAD",id:"uso-de-la-api-de-gbad",level:3},{value:"Creaci\xf3n de un perfil de usuario",id:"creaci\xf3n-de-un-perfil-de-usuario",level:2}],u={toc:d};function c(e){let{components:a,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"gu\xeda-del-usuario-de-datos"},"Gu\xeda del usuario de datos"),(0,s.kt)("p",null,"El ",(0,s.kt)("a",{parentName:"p",href:"http://gbadske.org:8050/dash/page-1/"},"portal de datos GBADs")," es un tablero prototipo que permite a los usuarios acceder a conjuntos de datos de ","[FAOSTAT]","(",(0,s.kt)("a",{parentName:"p",href:"http://www.fao.org/faostat"},"http://www.fao.org/faostat")," /es/) y ",(0,s.kt)("a",{parentName:"p",href:"https://wahis.oie.int/"},"OIE WAHIS"),". El prototipo le permite seleccionar datos de inter\xe9s, visualizarlos en gr\xe1ficos de l\xedneas de barras, descargar los datos en formato ",(0,s.kt)("inlineCode",{parentName:"p"},".csv")," y ",(0,s.kt)("inlineCode",{parentName:"p"},".json")," y ver la llamada de la interfaz de programaci\xf3n de aplicaciones (API)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{margen}"},"**\xbfQu\xe9 es `.json`?**\n\n[JSON](https://en.wikipedia.org/wiki/JSON) significa notaci\xf3n de objetos de JavaScript. JSON es un formato de archivo que almacena datos en un formato estructurado est\xe1ndar, lo que permite que los datos sean legibles tanto por humanos como por m\xe1quinas. Los datos JSON se pueden leer en todos los lenguajes de programaci\xf3n y se pueden analizar en `excel`. Los datos JSON son legibles y m\xe1s f\xe1ciles de analizar que otros formatos de archivo como [XML](https://en.wikipedia.org/wiki/XML).\n\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{margen}"},"```{advertencia} \xa1Queremos saber de usted!\n:clase: consejo\n\nTenga en cuenta que esta p\xe1gina se actualizar\xe1 a medida que mejoremos nuestro portal de datos y obtengamos acceso a m\xe1s fuentes de datos. Agradecemos los comentarios sobre lo que le gusta del sistema, lo que le gustar\xeda ver y cualquier cosa que crea que podr\xeda ser m\xe1s clara.\n```\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{admonici\xf3n}",metastring:"Objetivos de aprendizaje",Objetivos:!0,de:!0,aprendizaje:!0},"* Los lectores deben entender qu\xe9 es una API, c\xf3mo funciona y por qu\xe9 GBADs usa API\n* Los lectores deben comprender c\xf3mo utilizar la API GBADs para obtener datos de FAOSTAT y OIE WAHIS\n* Los lectores deben comprender c\xf3mo usar la API de GBAD para leer datos en sus programas `R` y `python`\n")),(0,s.kt)("h2",{id:"primeros-pasos-con-nuestra-api"},"Primeros pasos con nuestra API"),(0,s.kt)("h3",{id:"qu\xe9-es-una-api"},"\xbfQu\xe9 es una API?"),(0,s.kt)("p",null,"Una interfaz de programaci\xf3n de aplicaciones (API) es una forma de m\xe1quina a m\xe1quina para solicitar datos a un servidor, hacer que el servidor recupere e interprete los datos y los devuelva a su m\xe1quina. Las API est\xe1n en todas partes; permiten que las aplicaciones 'hablen' entre s\xed. Por ejemplo, cuando consulta el tiempo en una aplicaci\xf3n meteorol\xf3gica, la aplicaci\xf3n utiliza una API para obtener los datos y presentarlos de forma utilizable e interpretable en su tel\xe9fono. Las API brindan los datos m\xe1s actualizados sin tener que almacenar datos en su propia m\xe1quina."),(0,s.kt)("p",null,"Para las necesidades de datos de los GBAD, las API funcionan as\xed:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Usted/su programa solicita datos a trav\xe9s de la llamada API"),(0,s.kt)("li",{parentName:"ol"},"El servidor web busca en su base de datos interna los datos que solicit\xf3"),(0,s.kt)("li",{parentName:"ol"},"La base de datos le da al servidor los datos que pediste"),(0,s.kt)("li",{parentName:"ol"},"Los datos se le devuelven a usted/su programa")),(0,s.kt)("h3",{id:"su-flujo-de-trabajo-y-api"},"Su flujo de trabajo y API"),(0,s.kt)("p",null,"Para explicar el concepto de una API con m\xe1s profundidad, analizaremos el flujo de trabajo com\xfan para acceder a los datos para el modelado y d\xf3nde entran en juego las API."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"M\xe9todo de acumulaci\xf3n de datos manual")),(0,s.kt)("p",null,"Si no est\xe1 utilizando las API en su flujo de trabajo actual, el acceso a los datos probablemente consiste en navegar a un portal o fuente de datos, buscar en el cat\xe1logo de datos o buscar un conjunto de datos de su inter\xe9s y luego descargar los datos. Cada vez que se actualizan los datos, debe repetir el proceso, encontrar los datos, descargarlos nuevamente, importar el archivo a su modelo y volver a ejecutar con los n\xfameros actualizados. Si bien este flujo de trabajo funciona, el uso de API puede eliminar el trabajo manual de ir al sitio web y obtener los datos cada vez que los necesite."),(0,s.kt)("p",null,"Cuando interact\xfaa con el sitio web para obtener los datos que desea, es probable que interact\xfae indirectamente con una API, que funciona en el backend para obtener los datos que ha seleccionado y presentarlos nuevamente en la p\xe1gina web. Sin embargo, puede usar una ",(0,s.kt)("strong",{parentName:"p"},"llamada API")," para solicitar datos del servidor donde residen los datos de inter\xe9s {numref}",(0,s.kt)("inlineCode",{parentName:"p"},"APIcall"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{margen}"},"Una **llamada API** es la forma en que solicita datos a un servidor.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Uso de API para obtener datos")),(0,s.kt)("p",null,"En lugar de descargar manualmente datos de un sitio web cada vez, puede incorporar llamadas API en su flujo de trabajo para solicitar los datos m\xe1s actualizados de la fuente. Esto le permite volver a ejecutar el c\xf3digo sin tener que cambiar su c\xf3digo."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{figura}",metastring:"/images/API.png","/images/API.png":!0},":nombre: Llamada API\n\nDesglose simple de c\xf3mo funciona una API.\n")),(0,s.kt)("p",null,"Una vez que tenga esta 'llamada API', simplemente puede ingresar el programa de su elecci\xf3n y automatizar sus flujos de trabajo y tener acceso a los datos sin tener que buscar en los cat\xe1logos de datos cada vez. Las API se basan en protocolos HTTP, lo que brinda otra ventaja: puede usar API con pr\xe1cticamente cualquier lenguaje de programaci\xf3n, incluidos R y Python, que son los m\xe1s populares entre nuestros usuarios actuales. Esto significa que en lugar de cargar archivos de datos en su programa R o Python cada vez, simplemente puede acceder a la API directamente en su programa. Un beneficio adicional es que esto le permite volver a ejecutar sus programas sin tener que descargar datos de sus fuentes cada vez que esa fuente se actualiza o modifica."),(0,s.kt)("p",null,"Algunas fuentes de datos que usa GBAD, como FAOSTAT y el Banco Mundial, tienen API que se pueden usar para obtener datos. Sin embargo, GBADs est\xe1 manejando la administraci\xf3n de API mediante el desarrollo de una API que puede solicitar datos de otras API ({numref}",(0,s.kt)("inlineCode",{parentName:"p"},"GBADsAPI"),")."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{figura}",metastring:"/images/GBADsAPI.png","/images/GBADsAPI.png":!0},":nombre: GBADsAPI\n\nDescripci\xf3n general de la infraestructura de la API de GBAD. La API de GBAD puede comunicarse con otras API abiertas para acceder a datos de otros almacenes de datos, como FAOSTAT. La API de GBADs tambi\xe9n permite solicitar datos del almac\xe9n de datos de GBADs. Los usuarios pueden acceder a datos de varias fuentes a trav\xe9s de una llamada API a la API de GBAD.\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{margen}"},"```{admonici\xf3n} Datos de acceso especial\n:clase: consejo\n\n_Tenga en cuenta que algunos datos no est\xe1n disponibles p\xfablicamente y, por lo tanto, no est\xe1n disponibles para todos los usuarios_. Consulte [el cap\xedtulo sobre licencias de datos, privacidad y seguridad](http://www.gbadske.org/Documentation/DataGovernanceHandbook/dataOwnership.html) para obtener m\xe1s informaci\xf3n sobre c\xf3mo GBAD maneja los datos confidenciales y sensibles.\n```\n")),(0,s.kt)("h3",{id:"uso-de-la-api-de-gbad"},"Uso de la API de GBAD"),(0,s.kt)("p",null,"Puede consultar nuestra documentaci\xf3n API m\xe1s extensa ","[FIXME aqu\xed]",". Sin embargo, esta secci\xf3n le mostrar\xe1 los conceptos b\xe1sicos del uso de nuestra API para obtener algunos datos."),(0,s.kt)("p",null,"Proporcionaremos dos ejemplos de llamadas de API a la API de GBADs. Uno en Python y otro en R. En ambos ejemplos, usaremos la misma llamada API que le dar\xe1 el precio de las acciones de los pollos en Etiop\xeda de 2005 y 2018 de la FAO. Nuestra llamada API para este tipo de datos es: ","[http://35.183.203.15:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Chickens]","(",(0,s.kt)("a",{parentName:"p",href:"http://35.183.203.15:8000/gbads/LiveAnimals"},"http://35.183.203.15:8000/gbads/LiveAnimals")," /?year_start=2005&year_end=2018&element=Stocks&item=Pollos)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{margen}"},"Notar\xe1 que si coloca la llamada API directamente en su navegador, acceder\xe1 a una p\xe1gina con los datos en formato JSON. Tambi\xe9n notar\xe1 que la llamada API especifica la categor\xeda (LiveAnimals), el a\xf1o de inicio y fin, el elemento, que son los precios de las acciones y el art\xedculo, Pollos. Actualmente, nuestro portal solo admite la recuperaci\xf3n de datos et\xedopes, ya que ese es el enfoque de nuestro estudio piloto.\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{nota}"},"Todav\xeda estamos desarrollando nuestra API de metadatos.\n")),(0,s.kt)("p",null,"En nuestro caso de uso de Python, necesitar\xe1 tres bibliotecas descargadas: ",(0,s.kt)("inlineCode",{parentName:"p"},"json"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"requests")," y ",(0,s.kt)("inlineCode",{parentName:"p"},"pandas"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{c\xf3digo-celda}",metastring:"ipython3",ipython3:!0},'importar json\nsolicitudes de importaci\xf3n\nimportar pandas como pd\nimportar seaborn como sns\nimportar matplotlib.pyplot como plt\n\n# Crear llamada API\napiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stock&item=Pollos"\n\nrespuesta = solicitudes.get(apiCall).json()\n\n# Imprima la respuesta para que podamos ver lo que obtuvimos.\nimprimir (respuesta)\n')),(0,s.kt)("p",null,"En algunos casos, es posible que desee convertir su respuesta en un marco de datos ",(0,s.kt)("inlineCode",{parentName:"p"},"pandas"),", visualizar el resultado o guardar el resultado en un archivo csv. A continuaci\xf3n, demostraremos c\xf3mo puede lograr cada uno de los siguientes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{c\xf3digo-celda}",metastring:"ipython3",ipython3:!0},"# Crear marco de datos de pandas a partir de la respuesta de API\nrespuesta = pd.DataFrame(respuesta)\n\n# \xbfCu\xe1l es nuestro resultado? Imprima las primeras 10 filas del marco de datos.\nimprimir (respuesta. cabeza (10))\n")),(0,s.kt)("p",null,"Antes de continuar y graficar estos datos, podemos usar ",(0,s.kt)("inlineCode",{parentName:"p"},"pandas")," para obtener una descripci\xf3n general de los datos que obtuvimos de la llamada a la API."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{c\xf3digo-celda}",metastring:"ipython3",ipython3:!0},"# \xbfQu\xe9 columnas tenemos?\nimprimir (respuesta.columnas)\n")),(0,s.kt)("p",null,"Tambi\xe9n podemos ver res\xfamenes de las columnas:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{c\xf3digo-celda}",metastring:"ipython3",ipython3:!0},"respuesta.describe()\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{c\xf3digo-celda}",metastring:"ipython3",ipython3:!0},"# Tiempo gr\xe1fico!\nrespuesta.plot.scatter(x='A\xf1o',\ny='Valor',\nc='Azul oscuro')\n")),(0,s.kt)("p",null,"Y por diversi\xf3n, visualicemos una relaci\xf3n lineal a trav\xe9s de la funci\xf3n de regresi\xf3n lineal de ",(0,s.kt)("inlineCode",{parentName:"p"},"seaborn"),". La funci\xf3n proporciona una l\xednea de regresi\xf3n en un gr\xe1fico con un intervalo de confianza del 95 %."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{c\xf3digo-celda}",metastring:"ipython3",ipython3:!0},'\nax = sns.regplot(x="A\xf1o", y="Valor", datos=respuesta)\n\n# Establecer etiquetas de eje\nax.set(xlabel=\'A\xf1o\', ylabel=\'N\xfamero de animales vivos (1000 cabezas)\')\n\n# A\xf1ade un titulo\nplt.title("N\xfamero de pollos vivos en Etiop\xeda")\n\n# Mostrar el resultado\nplt.mostrar(hacha)\n\n')),(0,s.kt)("p",null,'Como puede ver, con muy poco trabajo recopilamos los datos de la API, los convertimos en un marco de datos "pandas" y trazamos una regresi\xf3n.'),(0,s.kt)("p",null,"Tambi\xe9n podr\xedamos graficar los datos y visualizar qu\xe9 puntos corresponden a datos oficiales y cu\xe1les fueron imputados:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-{c\xf3digo-celda}",metastring:"python3",python3:!0},'# Diferentes colores para las descripciones de las banderas\nsns.scatterplot(x="A\xf1o", y="Valor", hue="Descripci\xf3n de la bandera", data=respuesta)\n\n# Establecer etiquetas de eje\nax.set(xlabel=\'A\xf1o\', ylabel=\'N\xfamero de animales vivos (1000 cabezas)\')\n\n# A\xf1ade un titulo\nplt.title("N\xfamero de pollos vivos en Etiop\xeda")\n\n# Mostrar el resultado\nplt.mostrar(hacha)\n\n')),(0,s.kt)("p",null,"Si est\xe1 interesado en simplemente recopilar los datos de la API y guardarlos como un archivo csv, puede usar el siguiente c\xf3digo para hacerlo."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"importar json\nsolicitudes de importaci\xf3n\nimportar pandas como pd\n\n# Crear llamada API\napiCall = \"http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stock&item=Pollos\"\n\nrespuesta = solicitudes.get(apiCall).json()\n\n# Codificaci\xf3n/descodificaci\xf3n del marco de datos para obtenerlo en formato csv\nrespuesta = respuesta.to_json(orient='split')\nrespuesta = pd.read_json(respuesta,orientar='dividir')\n\n# Nombre del archivo externo. Reemplace esto con la ruta donde desea almacenar el archivo y el nombre del archivo.\narchivo de salida = 'ruta/al/archivo de salida/nombre del archivo de salida.csv'\n\n# Guardar en archivo externo usando pandas\nrespuesta.to_csv(archivo de salida, \xedndice=Falso)\n")),(0,s.kt)("p",null,"Aqu\xed est\xe1 nuestra implementaci\xf3n de R:"),(0,s.kt)("p",null,"Deber\xe1 asegurarse de tener los paquetes ",(0,s.kt)("inlineCode",{parentName:"p"},"httr")," y ",(0,s.kt)("inlineCode",{parentName:"p"},"jsonlite")," R descargados."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'# Descomente la siguiente l\xednea si a\xfan no tiene las bibliotecas\n# install.packages(c("httr", "jsonlite"))\n\n# Cargar en bibliotecas\nbiblioteca (httr)\nbiblioteca (jsonlite)\n\n# Crear llamada API\napiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stock&item=Pollos"\n\n# Enviar petici\xf3n\nrespuesta = GET (llamada api)\n\n# Ver que nos da la respuesta\nrespuesta\n\n# Crear un marco de datos a partir de la respuesta de la API\ndata = fromJSON(rawToChar(respuesta$contenido))\n\n# Verifique para asegurarse de que funcion\xf3\nclase (datos)\n\n# Vea c\xf3mo se ven las primeras 5 filas de los datos\ncabeza (datos)\n')),(0,s.kt)("h2",{id:"creaci\xf3n-de-un-perfil-de-usuario"},"Creaci\xf3n de un perfil de usuario"),(0,s.kt)("p",null,"La gu\xeda anterior le permite acceder a la API, que permite el acceso a datos abiertos. En el futuro, anticipamos fuentes de datos privados a las que solo tendr\xe1 acceso si tiene permisos. Nuestro sistema admitir\xe1 la capacidad de crear un inicio de sesi\xf3n de usuario verificado, que le dar\xe1 acceso a las fuentes privadas a las que tiene acceso a trav\xe9s de un portal personalizado y una clave API."))}c.isMDXComponent=!0}}]);