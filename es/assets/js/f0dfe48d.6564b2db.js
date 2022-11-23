"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[2991],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,o,r=function(e,a){if(null==e)return{};var n,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),d=function(e){var a=o.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=d(e.components);return o.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var n=e.components,r=e.mdxType,t=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||t;return n?o.createElement(g,s(s({ref:a},c),{},{components:n})):o.createElement(g,s({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=n.length,s=new Array(t);s[0]=p;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<t;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1375:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const t={sidebar_position:11},s="Organizaci\xf3n de datos en hojas de c\xe1lculo",l={unversionedId:"Data-Governance-Handbook-for-GBADs/dataBestPractices",id:"Data-Governance-Handbook-for-GBADs/dataBestPractices",title:"Organizaci\xf3n de datos en hojas de c\xe1lculo",description:"Si est\xe1 leyendo esto, probablemente dedique mucho tiempo a tratar con datos. Puede recopilarlo, limpiarlo, modelarlo, compartirlo, intentar interpretarlo y luego hacer todo de nuevo. Cuando recibe datos de un colega, puede intentar limpiarlos nuevamente (incluso si ya se han limpiado), tratar de interpretarlos e incluso puede que tenga que escribir varios correos electr\xf3nicos para interpretar los datos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/Data-Governance-Handbook-for-GBADs/dataBestPractices.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/dataBestPractices",permalink:"/es/Data-Governance-Handbook-for-GBADs/dataBestPractices",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Mejores pr\xe1cticas para la codificaci\xf3n",permalink:"/es/Data-Governance-Handbook-for-GBADs/codeBestPractices"},next:{title:"Ejemplos",permalink:"/es/Data-Governance-Handbook-for-GBADs/examples"}},i={},d=[{value:"Hojas de c\xe1lculo y conjuntos de datos",id:"hojas-de-c\xe1lculo-y-conjuntos-de-datos",level:3},{value:"Estructura de datos",id:"estructura-de-datos",level:3},{value:"Guardar hojas de c\xe1lculo",id:"guardar-hojas-de-c\xe1lculo",level:3},{value:"Convenci\xf3n est\xe1ndar de fecha y hora",id:"convenci\xf3n-est\xe1ndar-de-fecha-y-hora",level:3},{value:"Convenciones de n\xfameros grandes",id:"convenciones-de-n\xfameros-grandes",level:3},{value:"Convenci\xf3n de nomenclatura de archivos",id:"convenci\xf3n-de-nomenclatura-de-archivos",level:3},{value:"Errores comunes",id:"errores-comunes",level:3},{value:"7 errores comunes que ensucian las hojas de c\xe1lculo",id:"7-errores-comunes-que-ensucian-las-hojas-de-c\xe1lculo",level:4},{value:"Otras recomendaciones de lectura",id:"otras-recomendaciones-de-lectura",level:3}],c={toc:d};function u(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"organizaci\xf3n-de-datos-en-hojas-de-c\xe1lculo"},"Organizaci\xf3n de datos en hojas de c\xe1lculo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{ep\xedgrafe}"},'"Basura dentro basura fuera"\n')),(0,r.kt)("p",null,"Si est\xe1 leyendo esto, probablemente dedique mucho tiempo a tratar con datos. Puede recopilarlo, limpiarlo, modelarlo, compartirlo, intentar interpretarlo y luego hacer todo de nuevo. Cuando recibe datos de un colega, puede intentar limpiarlos nuevamente (incluso si ya se han limpiado), tratar de interpretarlos e incluso puede que tenga que escribir varios correos electr\xf3nicos para interpretar los datos."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"En esta parte del manual, le decimos c\xf3mo puede organizar mejor sus datos en hojas de c\xe1lculo para crear datos de mayor calidad, lo que lleva a modelos de mayor calidad. Tambi\xe9n definimos algunas pr\xe1cticas est\xe1ndar para ingresar datos de tipos espec\xedficos, incluidas fechas y n\xfameros largos.")),(0,r.kt)("h3",{id:"hojas-de-c\xe1lculo-y-conjuntos-de-datos"},"Hojas de c\xe1lculo y conjuntos de datos"),(0,r.kt)("p",null,"Las hojas de c\xe1lculo, como las creadas en Microsoft Excel y Google Sheets, son comunes para almacenar, ingresar, compartir y manipular datos de investigaci\xf3n. Las hojas de c\xe1lculo se comparten com\xfanmente para comunicar los resultados de la investigaci\xf3n y se utilizan como datos de entrada para modelos o an\xe1lisis estad\xedsticos. Si bien las hojas de c\xe1lculo son una parte integral del ciclo de vida de los datos, deben estructurarse adecuadamente para garantizar que no se cometan errores que impidan la reutilizaci\xf3n o interpretaci\xf3n de los datos. Los peque\xf1os errores en las hojas de c\xe1lculo pueden dejarnos en situaciones en las que los datos son dif\xedciles de entender, dif\xedciles de analizar y requieren mucho tiempo para limpiarlos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{advertencia}",metastring:"Comun\xedquese con el equipo de inform\xe1tica de GBAD si...","Comun\xedquese":!0,con:!0,el:!0,equipo:!0,de:!0,"inform\xe1tica":!0,GBAD:!0,"si...":!0},"P\xf3ngase en contacto con el equipo de inform\xe1tica de GBADs si es miembro de GBADs y tiene muchas hojas de c\xe1lculo con datos 'desordenados'. \xa1Podemos consultar y pensar en c\xf3mo crear un programa que discuta y transforme sus datos en un formato ordenado!\n")),(0,r.kt)("p",null,"La estructuraci\xf3n adecuada de los datos en hojas de c\xe1lculo conduce a que los datos sean m\xe1s reutilizables e interoperables (FAIR), lo que genera datos de mayor calidad y, en \xfaltima instancia, una mejor investigaci\xf3n. Al configurar hojas de c\xe1lculo para que se ingieran en software estad\xedstico o bibliotecas desde el principio, podemos minimizar la confusi\xf3n y simplificar nuestros flujos de trabajo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{admonici\xf3n}",metastring:"Objetivos de aprendizaje",Objetivos:!0,de:!0,aprendizaje:!0},"* Los lectores deben comprender c\xf3mo estructurar un conjunto de datos en una hoja de c\xe1lculo de una manera que admita los principios de datos FAIR\n* Los lectores deben comprender c\xf3mo estructurar su conjunto de datos para preservar la sem\xe1ntica (significado subyacente) de los datos\n* Los lectores deben entender c\xf3mo estructurar fechas y n\xfameros largos en hojas de c\xe1lculo y por qu\xe9 es importante que estos datos sean legibles por m\xe1quina.\n* Los lectores deben comprender los errores comunes que generan conjuntos de datos desordenados y c\xf3mo evitarlos\n")),(0,r.kt)("h3",{id:"estructura-de-datos"},"Estructura de datos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{ep\xedgrafe}"},'"Los conjuntos de datos ordenados son todos iguales, pero cada conjunto de datos desordenado es desordenado a su manera".\n\n-- [Hadley Wickham](http://hadley.nz/)\n')),(0,r.kt)("p",null,"En general, un conjunto de datos ordenado o limpio se compone de los siguientes ({numref}",(0,r.kt)("inlineCode",{parentName:"p"},"tidyData"),") {cite}",(0,r.kt)("inlineCode",{parentName:"p"},"wickham_R4DS_2017"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{paneles}"},":columna: col-4\n:tarjeta: borde-2\nColumnas (Variables)\n^^^\nLas columnas son un grupo de celdas alineadas verticalmente. En los conjuntos de datos, las columnas son variables, donde cada celda contiene informaci\xf3n sobre un atributo determinado.\n---\nFilas (Observaciones)\n^^^\nLas filas son un grupo de celdas que est\xe1n alineadas horizontalmente, donde cada fila es una observaci\xf3n.\n---\nCeldas (Valores)\n^^^\nEn los conjuntos de datos, cada fila es una observaci\xf3n y cada celda de esa fila contiene el valor de la columna donde cae.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{figura}",metastring:"/images/tidyDataWickham.png","/images/tidyDataWickham.png":!0},":nombre: tidyData\n\nReglas que hacen un conjunto de datos ordenado: las columnas son variables, las observaciones son filas y los valores son celdas. Imagen y pie de foto de {cite}`wickham_R4DS_2017`.\n")),(0,r.kt)("p",null,"Cumplir con un formato de datos ordenado permite la reutilizaci\xf3n de datos, garantiza la consistencia (lo que mejora la calidad de los datos) y ayuda a comprender el significado subyacente (sem\xe1ntica) de cada uno de los valores en la hoja de c\xe1lculo. Tener columnas como variables y filas como observaciones nos permite saber qu\xe9 significa un valor en funci\xf3n de su relaci\xf3n con las variables y las observaciones."),(0,r.kt)("p",null,"Los datos FAIR son datos ordenados: los datos ordenados son reutilizables e interoperables por naturaleza. Los datos ordenados son m\xe1s f\xe1ciles de encontrar, porque los encabezados est\xe1n bien definidos, lo que facilita la creaci\xf3n de metadatos. Fundamentalmente, podemos extraer m\xe1s informaci\xf3n de los datos ordenados."),(0,r.kt)("h3",{id:"guardar-hojas-de-c\xe1lculo"},"Guardar hojas de c\xe1lculo"),(0,r.kt)("p",null,"Los conjuntos de datos en hojas de c\xe1lculo se pueden guardar como un archivo de Excel o en formato ",(0,r.kt)("inlineCode",{parentName:"p"},".csv")," (valores separados por comas) o ",(0,r.kt)("inlineCode",{parentName:"p"},".txt"),". Se prefieren los dos \xfaltimos porque son m\xe1s f\xe1ciles de leer en las bibliotecas de programaci\xf3n en R y Python."),(0,r.kt)("h3",{id:"convenci\xf3n-est\xe1ndar-de-fecha-y-hora"},"Convenci\xf3n est\xe1ndar de fecha y hora"),(0,r.kt)("p",null,"Sin una convenci\xf3n est\xe1ndar, las fechas pueden presentar mucha ambig\xfcedad. Por ejemplo, 01/11 podr\xeda interpretarse como enero de 2011, noviembre de 2001 o 1 de noviembre. Por esta raz\xf3n, es importante utilizar un est\xe1ndar de fecha aceptado internacionalmente para que podamos comprender nuestros datos de manera confiable."),(0,r.kt)("p",null,"Los GBAD utilizar\xe1n el est\xe1ndar ",(0,r.kt)("a",{parentName:"p",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO 8601")," para las fechas. ISO 8601 es un est\xe1ndar internacionalmente aceptado que utiliza el ","[calendario gregoriano]"," (",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Gregorian_calendar"},"https://en.wikipedia.org/wiki/Gregorian_calendar"),")."),(0,r.kt)("p",null,"Las fechas se representan como:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AAAA-MM-DD o AAAAMMDD")),(0,r.kt)("p",null,"El est\xe1ndar ISO 8601 utiliza el reloj de 24 horas. Por lo tanto, los tiempos se pueden ingresar como:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T","[hh:mm:ss]")),(0,r.kt)("p",null,"o si los segundos no son aplicables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T","[hh:mm]")),(0,r.kt)("p",null,"y si los minutos no son aplicables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T","[hh]")),(0,r.kt)("p",null,"Dado que GBADs es una organizaci\xf3n global, es importante especificar las zonas horarias ingresando la hora en las hojas de c\xe1lculo. Las zonas horarias se especifican despu\xe9s de la fecha especificando qu\xe9 tan atr\xe1s o adelante est\xe1 la zona horaria de UTC."),(0,r.kt)("p",null,"Por ejemplo:\nS\xe1bado 10 de julio de 2021 a las 13:48 EDT est\xe1 escrito como 2021-07-10T13:48-4:00"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{advertencia}",metastring:"Diferentes calendarios para diferentes pa\xedses",Diferentes:!0,calendarios:!0,para:!0,diferentes:!0,"pa\xedses":!0},":clase: consejo\n\nAl analizar conjuntos de datos de diferentes pa\xedses, tenga en cuenta que no todas las partes del mundo usan el calendario gregoriano.\n\nPor ejemplo, Etiop\xeda usa el calendario et\xedope, que es diferente del calendario gregoriano. Esto coloca a Etiop\xeda 7 a\xf1os por detr\xe1s del calendario utilizado en Europa y Am\xe9rica del Norte. [Aqu\xed](https://melaku.ml/) es una herramienta que le permite convertir del calendario gregoriano al et\xedope.\n")),(0,r.kt)("h3",{id:"convenciones-de-n\xfameros-grandes"},"Convenciones de n\xfameros grandes"),(0,r.kt)("p",null,"Dependiendo del pa\xeds, existen diferentes convenciones para n\xfameros grandes."),(0,r.kt)("p",null,"Por ejemplo, el n\xfamero 133333.450 se puede representar de diferentes maneras:"),(0,r.kt)("p",null,"En los pa\xedses de habla inglesa, el n\xfamero podr\xeda verse as\xed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"133.333.450")),(0,r.kt)("p",null,"En pa\xedses de habla no inglesa, as\xed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"133.333.450")),(0,r.kt)("p",null,"Entonces, el mismo n\xfamero pero representado de 3 formas diferentes. Esto deja mucho a la interpretaci\xf3n, especialmente porque el valor predeterminado al leer la mayor\xeda de los archivos en lenguajes de programaci\xf3n estad\xedsticos asume que una coma especifica una nueva columna. Y debido a que gran parte del trabajo que hace GBAD se basa en lenguajes de programaci\xf3n como R y python, es realmente importante estructurar nuestros n\xfameros para que puedan ser le\xeddos e interpretados f\xe1cilmente y tambi\xe9n le\xeddos por m\xe1quinas."),(0,r.kt)("p",null,"Para mantener las cosas claras, debemos estructurar nuestros n\xfameros grandes ",(0,r.kt)("strong",{parentName:"p"},"sin")," comas y reservar puntos para especificar un lugar decimal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{Advertencia}",metastring:"Si ves una coma donde crees que no deber\xeda estar...",Si:!0,ves:!0,una:!0,coma:!0,donde:!0,crees:!0,que:!0,no:!0,"deber\xeda":!0,"estar...":!0},":clase: consejo\n\nSi el formato de los n\xfameros grandes no est\xe1 claro para usted, \xa1p\xeddale una aclaraci\xf3n al propietario de los datos! Si el propietario de los datos es parte del programa GBADs, sugi\xe9rale amablemente que utilice los est\xe1ndares utilizados y establecidos por el programa (incluso podr\xeda enviar este cap\xedtulo).\n\n")),(0,r.kt)("h3",{id:"convenci\xf3n-de-nomenclatura-de-archivos"},"Convenci\xf3n de nomenclatura de archivos"),(0,r.kt)("p",null,"Al nombrar archivos, debe ser consistente, ser descriptivo, evitar caracteres y espacios, e incluir la fecha (preferiblemente usando un est\xe1ndar como ","[ISO 8601]"," (",(0,r.kt)("a",{parentName:"p",href:"https://www.iso.org/iso-8601-date-and-"},"https://www.iso.org/iso-8601-date-and-")," time-format.html). A los efectos de la convenci\xf3n de nomenclatura de archivos, omitiremos los guiones entre AAAA-MM-DD."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ejemplos de buenas convenciones de nomenclatura de archivos:")),(0,r.kt)("p",null,"Cuando se trata de datos descargados de organizaciones:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AAAAMMDD_organizaci\xf3n_tema_especies_pa\xeds"),(0,r.kt)("li",{parentName:"ul"},"20210617_FAO_ProductionPrices_Poultry_Ethiopia.csv"),(0,r.kt)("li",{parentName:"ul"},"20210617_Banco Mundial_LSMS_Etiop\xeda.csv")),(0,r.kt)("p",null,"Donde AAAAMMDD es la fecha en que descarg\xf3 el archivo."),(0,r.kt)("p",null,"Si es un archivo de metadatos, debe nombrar el archivo con 'metadatos' y el nombre de archivo como se indic\xf3 anteriormente para saber qu\xe9 archivo de metadatos corresponde al conjunto de datos adecuado. Por ejemplo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"20210617_FAO_ProductionPrices_Poultry_Ethiopia_metadata.csv"),(0,r.kt)("li",{parentName:"ul"},"20210617_Banco Mundial_LSMS_Etiop\xeda_metadatos.csv")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ejemplos de archivos mal nombrados:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Precios de producci\xf3n de la FAO - descargados por Kassy el 25 de abril.csv"),(0,r.kt)("li",{parentName:"ul"},"Precios de producci\xf3n de Etiop\xeda del sitio web de estad\xedsticas de fao.csv"),(0,r.kt)("li",{parentName:"ul"},"ETHPRODPRICES_GOODCOPY.csv")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{advertencia}",metastring:"Fechas primero",Fechas:!0,primero:!0},":clase: consejo\n\nPoner la fecha primero en un archivo le permite organizar f\xe1cilmente los archivos en un directorio o carpeta por fecha ascendente o descendente.\n\n")),(0,r.kt)("h3",{id:"errores-comunes"},"Errores comunes"),(0,r.kt)("p",null,"Debe evitarse el formateo, el resaltado y la negrita. He aqu\xed por qu\xe9 hacer que las hojas de c\xe1lculo sean bonitas causa dolores de cabeza en el ciclo de vida del an\xe1lisis de datos:"),(0,r.kt)("h4",{id:"7-errores-comunes-que-ensucian-las-hojas-de-c\xe1lculo"},"7 errores comunes que ensucian las hojas de c\xe1lculo"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"M\xfaltiples tablas en una hoja de c\xe1lculo"),(0,r.kt)("li",{parentName:"ol"},"Valores nulos incorrectos (un cero no significa nulo)"),(0,r.kt)("li",{parentName:"ol"},"Las celdas se fusionan"),(0,r.kt)("li",{parentName:"ol"},"Las unidades de medida se incluyen en los valores en lugar de los nombres de las columnas"),(0,r.kt)("li",{parentName:"ol"},"El formato se utiliza para representar informaci\xf3n."),(0,r.kt)("li",{parentName:"ol"},"Las celdas contienen m\xe1s de una pieza de informaci\xf3n"),(0,r.kt)("li",{parentName:"ol"},"No se utiliza el formato de fecha est\xe1ndar")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," 1. M\xfaltiples tablas en una hoja de c\xe1lculo"))),(0,r.kt)("p",null,"Tener varias tablas en una hoja de c\xe1lculo a menudo conduce a una limpieza de datos innecesaria para cualquier otro procesamiento de datos. M\xfaltiples tablas en una hoja de c\xe1lculo generan confusi\xf3n cuando compartimos la hoja de c\xe1lculo o volvemos a ella en una fecha posterior. Si una fila es una observaci\xf3n, la creaci\xf3n de varias tablas va en contra de esta noci\xf3n, lo que reduce la calidad y la capacidad de interpretar el conjunto de datos."),(0,r.kt)("p",null,"En el siguiente ejemplo, que se compone de datos fabricados, hay 4 tablas en una sola hoja de c\xe1lculo. En cada tabla, el 'elemento' es la observaci\xf3n y el n\xfamero de animales vivos en un a\xf1o determinado es lo que se mide. Sin embargo, debido a la forma en que est\xe1 configurada la hoja de c\xe1lculo, es dif\xedcil saber si las dos tablas superiores est\xe1n asociadas con Canad\xe1 o si a la tabla de la derecha le falta un encabezado."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210615_dataBestPractices_MultipleTablesBAD.png",alt:"MultipleTablesBad"})),(0,r.kt)("p",null,"Una mejor manera de configurar los datos ser\xeda as\xed:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210614_dataBestPractices_MultipleTablesGOOD.png",alt:"MultipleTablesGood"})),(0,r.kt)("p",null,"Aqu\xed vemos que todav\xeda se proporciona toda la informaci\xf3n, pero cada fila es una observaci\xf3n para un pa\xeds, art\xedculo y a\xf1o determinados. Adem\xe1s de mejorar la interpretabilidad de los datos, estos datos ahora se pueden ingresar en un software estad\xedstico como R sin una limpieza exhaustiva de los datos."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"2. Valores nulos incorrectos"))),(0,r.kt)("p",null,'Los valores faltantes o nulos deben indicarse de una manera est\xe1ndar que se distinga de un valor cuantitativo de 0. De esta manera, el lector del conjunto de datos comprender\xe1 qu\xe9 datos faltan o son desconocidos y cu\xe1les tienen un valor de 0. Lo m\xe1s importante al registrar faltantes valores es consistencia; si decide usar "NA" para indicar valores faltantes, aseg\xfarese de no cambiar a min\xfasculas ("na") o "No aplicable" m\xe1s adelante en la hoja de c\xe1lculo.'),(0,r.kt)("p",null,'Dependiendo del software estad\xedstico, el significado de "NA" puede variar. Por ejemplo, en R, ',(0,r.kt)("inlineCode",{parentName:"p"},"NA")," es un t\xe9rmino reservado para un valor faltante. La forma en que se representan los valores ",(0,r.kt)("inlineCode",{parentName:"p"},"NA")," en python var\xeda seg\xfan la biblioteca que se utilice. En pandas (una popular biblioteca de python para an\xe1lisis, limpieza y disputa de datos), los valores ",(0,r.kt)("inlineCode",{parentName:"p"},"NA")," est\xe1n representados por ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"Ninguno"),". Sin embargo, siempre que seamos consistentes en la forma en que representamos los valores ",(0,r.kt)("inlineCode",{parentName:"p"},"NA")," al ingresar y analizar datos, podemos cambiar r\xe1pidamente entre formatos seg\xfan el software estad\xedstico o de programaci\xf3n que elijamos."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"3. Las celdas se fusionan"))),(0,r.kt)("p",null,"Combinar celdas va en contra de la noci\xf3n de que las filas son observaciones y cada columna es una variable. La combinaci\xf3n de celdas no solo va en contra de estos principios, sino que hace que sea imposible clasificar columnas y filas, provoca errores al leer los datos en los software estad\xedsticos e introduce la posibilidad de malinterpretar los datos o perder informaci\xf3n. Por ejemplo, el uso de celdas combinadas para vincular dos filas causa confusi\xf3n cuando vuelve a mirar los datos. O bien, si se pierde el formato fusionado, existe la posibilidad de perder una observaci\xf3n completa o variables en una observaci\xf3n determinada."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"4. Las unidades de medida se incluyen en los valores en lugar de los nombres de las columnas"))),(0,r.kt)("p",null,"Como cada columna representa una variable, las unidades de medida deben ser consistentes en toda la columna. Por lo tanto, cuando corresponda, debe incluir la unidad de medida en el encabezado de la columna."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"5. El formato se utiliza para representar informaci\xf3n"))),(0,r.kt)("p",null,"Se debe evitar resaltar las celdas y poner la informaci\xf3n en negrita o cursiva como un medio para representar la informaci\xf3n en un conjunto de datos. Esto es problem\xe1tico porque si se pierde el formato, se pierde informaci\xf3n valiosa. Si desea incluir la informaci\xf3n articulada por el formato en su modelo o an\xe1lisis, deber\xe1 limpiar la hoja en Excel antes de leerla en su software."),(0,r.kt)("p",null,"Por ejemplo, al analizar muestras para detectar enfermedades, se podr\xeda usar el resaltado para mostrar qu\xe9 muestras resultaron positivas. Si se pierde el formato, o si alguien no conoce el contexto de lo que significa el resaltado, esta informaci\xf3n se pierde."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"6. Las celdas contienen m\xe1s de una pieza de informaci\xf3n"))),(0,r.kt)("p",null,"Cuando las celdas contienen m\xe1s de una pieza de informaci\xf3n, limita la forma en que puede analizar un conjunto de datos preexistente y, por lo general, conduce a una mayor limpieza de datos. Por ejemplo, podr\xeda estar reportando tipos de razas y conteos en su conjunto de datos."),(0,r.kt)("p",null,"En este caso, querr\xe1 informar la raza y contar en columnas separadas como esta:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Raza"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Contar"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Granja"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Fecha contada"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Aberdeen Angus"),(0,r.kt)("td",{parentName:"tr",align:"center"},"20"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Granjas ganaderas canadienses"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"abergele"),(0,r.kt)("td",{parentName:"tr",align:"center"},"60"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Granjas ganaderas canadienses"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Lemos\xedn"),(0,r.kt)("td",{parentName:"tr",align:"center"},"10"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Granjas ganaderas canadienses"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")))),(0,r.kt)("p",null,"En lugar de reportarlos en la misma celda, as\xed:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"N\xfameroDeRaza"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Granja"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Fecha contada"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"20 Aberdeen-Angus"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Granjas ganaderas canadienses"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"60 Aberg\xe8le"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Granjas ganaderas canadienses"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"10 Lemos\xedn"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Granjas ganaderas canadienses"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"7. No se utiliza el formato de fecha est\xe1ndar"))),(0,r.kt)("p",null,"Al ingresar fechas, utilice un est\xe1ndar como ",(0,r.kt)("a",{parentName:"p",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO 8601")," (YYYY-MM-DD). Esto le permite ordenar por fecha, mejorar la interpretabilidad y, si es necesario, convertir f\xe1cilmente a otros formatos de fecha. Consulte la secci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Convenci\xf3n est\xe1ndar de fecha y hora")," de esta secci\xf3n para obtener m\xe1s informaci\xf3n sobre c\xf3mo los GBAD abordan el ingreso de fechas y horas."),(0,r.kt)("p",null,"Adem\xe1s, al usar fechas, aseg\xfarese de especificar qu\xe9 significa la fecha. Un encabezado de columna simplemente titulado 'fecha' no proporciona mucho contexto. Por ejemplo, \xbffecha significa la fecha en que se ingresaron los datos en la hoja de c\xe1lculo? \xbfLa fecha en que se recolect\xf3 una muestra? \xbfLa fecha en que se analiz\xf3 una muestra en el laboratorio? \xa1Aseg\xfarese de que otros investigadores (y usted en el futuro) sepan de lo que estaba hablando!"),(0,r.kt)("h3",{id:"otras-recomendaciones-de-lectura"},"Otras recomendaciones de lectura"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://r4ds.had.co.nz/"},"R de Data Science de Hadley Wickham")),(0,r.kt)("p",null,"Autores: Kassy Raymond y K. Marie McIntyre"))}u.isMDXComponent=!0}}]);