"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[2006],{3905:(e,n,s)=>{s.d(n,{Zo:()=>u,kt:()=>m});var t=s(7294);function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function o(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function a(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?o(Object(s),!0).forEach((function(n){r(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function d(e,n){if(null==e)return{};var s,t,r=function(e,n){if(null==e)return{};var s,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)s=o[t],n.indexOf(s)>=0||(r[s]=e[s]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)s=o[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var i=t.createContext({}),l=function(e){var n=t.useContext(i),s=n;return e&&(s="function"==typeof e?e(n):a(a({},n),e)),s},u=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var s=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=l(s),m=r,g=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return s?t.createElement(g,a(a({ref:n},u),{},{components:s})):t.createElement(g,a({ref:n},u))}));function m(e,n){var s=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=s.length,a=new Array(o);a[0]=c;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var l=2;l<o;l++)a[l]=s[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,s)}c.displayName="MDXCreateElement"},2424:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=s(7462),r=(s(7294),s(3905));const o={sidebar_position:9},a="Stockage des m\xe9tadonn\xe9es\xa0: bases de donn\xe9es de graphes dans les GBAD",d={unversionedId:"Data-Governance-Handbook-for-GBADs/metadataStorage",id:"Data-Governance-Handbook-for-GBADs/metadataStorage",title:"Stockage des m\xe9tadonn\xe9es\xa0: bases de donn\xe9es de graphes dans les GBAD",description:"GBADs Informatics utilise neo4j, un syst\xe8me de gestion de base de donn\xe9es graphique, pour g\xe9rer et stocker les m\xe9tadonn\xe9es et les informations sur les individus et les groupes impliqu\xe9s dans le projet. Comme vous l'apprendrez dans cette section, une base de donn\xe9es de graphes est un type de base de donn\xe9es qui exploite l'id\xe9e de connexions entre les entit\xe9s comme m\xe9thode pour extraire des informations et de nouvelles connaissances \xe0 partir de donn\xe9es autrement d\xe9connect\xe9es.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Data-Governance-Handbook-for-GBADs/metadataStorage.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/metadataStorage",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/metadataStorage",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Guide de l'utilisateur des donn\xe9es",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/dataUsers"},next:{title:"Exemples",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/examples"}},i={},l=[{value:"Qu&#39;est-ce qu&#39;une base de donn\xe9es de graphes\xa0?",id:"quest-ce-quune-base-de-donn\xe9es-de-graphes",level:2},{value:"Parties d&#39;une base de donn\xe9es de graphes",id:"parties-dune-base-de-donn\xe9es-de-graphes",level:3},{value:"Gestion des m\xe9tadonn\xe9es principales",id:"gestion-des-m\xe9tadonn\xe9es-principales",level:3}],u={toc:l};function p(e){let{components:n,...s}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stockage-des-m\xe9tadonn\xe9es-bases-de-donn\xe9es-de-graphes-dans-les-gbad"},"Stockage des m\xe9tadonn\xe9es\xa0: bases de donn\xe9es de graphes dans les GBAD"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{\xe9pigraphe}"},'"Tout le savoir est dans les connexions"\n\n-- [David Rumelhart](https://en.wikipedia.org/wiki/David_Rumelhart)\n')),(0,r.kt)("p",null,"GBADs Informatics utilise ",(0,r.kt)("a",{parentName:"p",href:"https://neo4j.com/"},"neo4j"),", un syst\xe8me de gestion de base de donn\xe9es graphique, pour g\xe9rer et stocker les m\xe9tadonn\xe9es et les informations sur les individus et les groupes impliqu\xe9s dans le projet. Comme vous l'apprendrez dans cette section, une base de donn\xe9es de graphes est un type de base de donn\xe9es qui exploite l'id\xe9e de connexions entre les entit\xe9s comme m\xe9thode pour extraire des informations et de nouvelles connaissances \xe0 partir de donn\xe9es autrement d\xe9connect\xe9es."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Dans cette section, nous vous expliquons ce qu'est une base de donn\xe9es de graphes, comment elle peut \xeatre utilis\xe9e, parlons de la recherche One Health en tant qu'entit\xe9 connect\xe9e et d\xe9crivons les cas d'utilisation de la base de donn\xe9es de graphes GBADs."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{avertissement}",metastring:"Objectifs d'apprentissage",Objectifs:!0,"d'apprentissage":!0},"* Les lecteurs doivent comprendre ce qu'est une base de donn\xe9es de graphes et un mod\xe8le de graphe\n* Les lecteurs doivent comprendre le cas d'utilisation des m\xe9tadonn\xe9es pour les bases de donn\xe9es de graphes dans les GBAD\n* Les lecteurs doivent comprendre l'id\xe9e de connectivit\xe9 et de donn\xe9es\n")),(0,r.kt)("h2",{id:"quest-ce-quune-base-de-donn\xe9es-de-graphes"},"Qu'est-ce qu'une base de donn\xe9es de graphes\xa0?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{margin}",metastring:"Que sont les bases de donn\xe9es relationnelles\xa0?",Que:!0,sont:!0,les:!0,bases:!0,de:!0,"donn\xe9es":!0,"relationnelles\xa0?":!0},"Traditionnellement, les donn\xe9es sont organis\xe9es en une s\xe9rie de tableaux. Chacune des tables a des colonnes et certaines tables ont des colonnes communes. Avec ces colonnes communes, vous pouvez sp\xe9cifier des jointures entre les tables, r\xe9sultant en une nouvelle table.\n\nLe plus grand avantage des bases de donn\xe9es relationnelles est la possibilit\xe9 de joindre des tables communes pour en tirer des informations. D'autre part, les bases de donn\xe9es relationnelles n\xe9cessitent des sch\xe9mas rigides qui obligent les ing\xe9nieurs de base de donn\xe9es \xe0 structurer leurs donn\xe9es pour s'adapter au sch\xe9ma. Cela vient avec l'hypoth\xe8se que nous savons d\xe9j\xe0 \xe0 quoi ressemblent toutes nos donn\xe9es, ce qui n'est pas toujours le cas pour la recherche.\n\n")),(0,r.kt)("p",null,"Une base de donn\xe9es de graphes est un type de base de donn\xe9es qui stocke des donn\xe9es en utilisant des relations entre des id\xe9es ou des entit\xe9s principales. Les relations entre les diff\xe9rentes entit\xe9s montrent la connectivit\xe9, permettant de tirer plus d'informations qu'une base de donn\xe9es relationnelle traditionnelle. Parce que les donn\xe9es sont tr\xe8s complexes et multidimensionnelles en termes de structure, de provenance, de gouvernance, de s\xe9curit\xe9 et de s\xe9mantique, les GBAD utilisent des bases de donn\xe9es de graphes pour la gestion des m\xe9tadonn\xe9es principales et le catalogage des donn\xe9es. En tirant parti de la nature dynamique de la base de donn\xe9es de graphes et en structurant notre ",(0,r.kt)("strong",{parentName:"p"},"mod\xe8le de graphe")," de mani\xe8re \xe0 permettre une meilleure compr\xe9hension des nombreuses dimensions des donn\xe9es, nous pouvons \xe0 la fois visualiser et comprendre comment les donn\xe9es circulent \xe0 l'ext\xe9rieur et \xe0 l'int\xe9rieur de notre organisation. Les bases de donn\xe9es de graphes nous permettent \xe9galement d'ajouter et de modifier la structure \xe0 mesure que la structure des informations sur les changements de donn\xe9es. Cela deviendra plus clair lorsque nous pr\xe9senterons le mod\xe8le de donn\xe9es de graphe GBADs pr\xe9liminaire."),(0,r.kt)("h3",{id:"parties-dune-base-de-donn\xe9es-de-graphes"},"Parties d'une base de donn\xe9es de graphes"),(0,r.kt)("p",null,"Les bases de donn\xe9es de graphes sont constitu\xe9es de ",(0,r.kt)("strong",{parentName:"p"},"n\u0153uds")," (entit\xe9s) et de ",(0,r.kt)("strong",{parentName:"p"},"ar\xeates")," (relations). Les n\u0153uds peuvent avoir des propri\xe9t\xe9s et des \xe9tiquettes tandis que les bords servent de connexion ou de relation entre les n\u0153uds."),(0,r.kt)("p",null,"Un mod\xe8le de graphe est un mod\xe8le des types de n\u0153uds que vous repr\xe9sentez et de la fa\xe7on dont ils sont connect\xe9s (quelles relations vous aurez)."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210719_GBADs_GraphModel.png",alt:"Mod\xe8le graphique"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Recherche et connectivit\xe9")),(0,r.kt)("p",null,"La recherche et la mod\xe9lisation s'appuient sur les donn\xe9es que nous recueillons pour donner un sens au monde qui nous entoure. Nous utilisons les donn\xe9es pour tirer des informations qui \xe9clairent les d\xe9cisions ou pour cr\xe9er des mod\xe8les qui \xe9clairent les d\xe9cisions, pour pr\xe9voir, pour optimiser, pour comprendre, pour faire avancer la science, pour am\xe9liorer les affaires, pour comprendre quelles caract\xe9ristiques de quelque chose sont vraiment fondamentales pour la prise de d\xe9cision ou qui ont un impact quoi que ce soit que nous \xe9tudions. Mais ce qui manque souvent dans nos collections de donn\xe9es (nos ensembles de donn\xe9es), c'est la connexit\xe9 ou les relations entre les choses que nous \xe9tudions."),(0,r.kt)("p",null,"Les bases de donn\xe9es de graphes nous permettent de capturer ces relations et de les utiliser pour en tirer de nouvelles informations et visualiser les donn\xe9es de mani\xe8re plus significative."),(0,r.kt)("h3",{id:"gestion-des-m\xe9tadonn\xe9es-principales"},"Gestion des m\xe9tadonn\xe9es principales"),(0,r.kt)("p",null,"Pour en savoir plus sur les m\xe9tadonn\xe9es, leur utilisation et leur importance, consultez la ",(0,r.kt)("a",{parentName:"p",href:"#techdatastds"},"section m\xe9tadonn\xe9es")," de ce manuel."),(0,r.kt)("p",null,"Nous utilisons des bases de donn\xe9es de graphes pour comprendre le flux de"),(0,r.kt)("p",null,"Les ensembles de donn\xe9es peuvent \xeatre li\xe9s de diff\xe9rentes mani\xe8res. Deux ensembles de donn\xe9es diff\xe9rents, provenant de sources diff\xe9rentes, peuvent \xeatre connect\xe9s en termes de propri\xe9t\xe9s descriptives telles que le"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"alors que diff\xe9rents ensembles de donn\xe9es peuvent avoir des contenus de m\xe9tadonn\xe9es diff\xe9rents, il existe toujours des relations qui peuvent connecter des ensembles de donn\xe9es \xe0 d'autres."),(0,r.kt)("li",{parentName:"ul"},"les bases de donn\xe9es de graphes tirent parti de cette id\xe9e en ..")))}p.isMDXComponent=!0}}]);