"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[8811],{3905:(e,s,n)=>{n.d(s,{Zo:()=>d,kt:()=>m});var t=n(7294);function r(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function o(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?o(Object(n),!0).forEach((function(s){r(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function a(e,s){if(null==e)return{};var n,t,r=function(e,s){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],s.indexOf(n)>=0||(r[n]=e[n]);return r}(e,s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),l=function(e){var s=t.useContext(u),n=s;return e&&(n="function"==typeof e?e(s):i(i({},s),e)),n},d=function(e){var s=l(e.components);return t.createElement(u.Provider,{value:s},e.children)},c={inlineCode:"code",wrapper:function(e){var s=e.children;return t.createElement(t.Fragment,{},s)}},p=t.forwardRef((function(e,s){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return n?t.createElement(f,i(i({ref:s},d),{},{components:n})):t.createElement(f,i({ref:s},d))}));function m(e,s){var n=arguments,r=s&&s.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var a={};for(var u in s)hasOwnProperty.call(s,u)&&(a[u]=s[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2906:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},i="M\xe9canismes de partage de donn\xe9es",a={unversionedId:"Data-Governance-Handbook-for-GBADs/mechanisms",id:"Data-Governance-Handbook-for-GBADs/mechanisms",title:"M\xe9canismes de partage de donn\xe9es",description:'Il existe de nombreuses fa\xe7ons de faciliter techniquement le partage de donn\xe9es, telles que les t\xe9l\xe9chargements de fichiers, les API, etc. Cette section explique les principes qui sous-tendent le fait d\'\xeatre un courtier de donn\xe9es "de confiance" et une source de donn\xe9es f\xe9d\xe9r\xe9e.',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/Data-Governance-Handbook-for-GBADs/mechanisms.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/mechanisms",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/mechanisms",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Data Quality",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/dataQuality"},next:{title:"Metadata",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/metadata"}},u={},l=[{value:"D\xe9fis des m\xe9canismes de partage de donn\xe9es",id:"d\xe9fis-des-m\xe9canismes-de-partage-de-donn\xe9es",level:2},{value:"Vocabulaires et ontologies",id:"vocabulaires-et-ontologies",level:2},{value:"Provenance",id:"provenance",level:2},{value:"Collecte d&#39;informations",id:"collecte-dinformations",level:2}],d={toc:l};function c(e){let{components:s,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"m\xe9canismes-de-partage-de-donn\xe9es"},"M\xe9canismes de partage de donn\xe9es"),(0,r.kt)("p",null,'Il existe de nombreuses fa\xe7ons de faciliter techniquement le partage de donn\xe9es, telles que les t\xe9l\xe9chargements de fichiers, les API, etc. Cette section explique les principes qui sous-tendent le fait d\'\xeatre un courtier de donn\xe9es "de confiance" et une source de donn\xe9es f\xe9d\xe9r\xe9e.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://gbadske.org/Documentation/DataGovernanceHandbook/_images/systemView.png",alt:"sysView"})),(0,r.kt)("p",null,"Les m\xe9canismes de partage de donn\xe9es GBAD reposent sur la capacit\xe9 \xe0 cr\xe9er une architecture de visualisation des donn\xe9es adapt\xe9e aux droits de confidentialit\xe9 et de s\xe9curit\xe9 des diff\xe9rents types d'utilisateurs. Plus pr\xe9cis\xe9ment, cela repose sur la possibilit\xe9 de cat\xe9goriser les utilisateurs et de cr\xe9er des vues syst\xe8me pour cet utilisateur o\xf9 cet utilisateur ne peut voir que les donn\xe9es auxquelles il est autoris\xe9. Nous utilisons le terme \xab vue \xbb tel que d\xe9crit par la th\xe9orie des bases de donn\xe9es : \xab Les vues sont g\xe9n\xe9ralement utilis\xe9es pour focaliser, simplifier et personnaliser la perception que chaque utilisateur a de la base de donn\xe9es. Les vues peuvent \xeatre utilis\xe9es comme m\xe9canismes de s\xe9curit\xe9 en permettant aux utilisateurs d'acc\xe9der aux donn\xe9es via la vue, sans accorder aux utilisateurs l'autorisation d'acc\xe9der directement aux tables de base sous-jacentes de la vue \xbb. En d'autres termes, permettre aux contributeurs de donn\xe9es de s\xe9lectionner le type d'utilisateurs qu'ils souhaitent autoriser \xe0 acc\xe9der \xe0 leurs donn\xe9es cr\xe9e une \xab vue \xbb pour cet utilisateur de donn\xe9es (cache ou met \xe0 disposition des actifs de donn\xe9es sp\xe9cifiques). Cela accorde aux contributeurs de donn\xe9es le pouvoir de contr\xf4ler leurs ressources de donn\xe9es. Bien s\xfbr, ce concept d\xe9pend de la capacit\xe9 \xe0 cat\xe9goriser les utilisateurs de donn\xe9es (voir la section Types de donn\xe9es pour une discussion plus d\xe9taill\xe9e de ce concept)."),(0,r.kt)("p",null,'Les donn\xe9es consid\xe9r\xe9es comme "ouvertes par d\xe9faut" seront accessibles publiquement \xe0 tout utilisateur qui acc\xe8de au portail de donn\xe9es et seront disponibles sans restriction pour \xeatre t\xe9l\xe9charg\xe9es directement. Cependant, pour acc\xe9der m\xeame aux donn\xe9es ouvertes via une API, une inscription sera n\xe9cessaire pour obtenir une cl\xe9 API personnalis\xe9e.'),(0,r.kt)("p",null,"Les utilisateurs souhaitant acc\xe9der \xe0 des sources de donn\xe9es priv\xe9es devront se cat\xe9goriser \xe0 l'aide des identifications d'utilisateurs de donn\xe9es pr\xe9d\xe9finies GBAD. Cela consistera \xe0 cr\xe9er un profil d'utilisateur, \xe0 identifier quel type d'utilisateur vous \xeates et \xe0 saisir une m\xe9thode de v\xe9rification pour ce faire. La m\xe9thode de v\xe9rification peut consister en un ORCHID ID s'il s'agit d'un utilisateur acad\xe9mique. Cependant, les m\xe9canismes derri\xe8re la v\xe9rification des utilisateurs sont toujours stipul\xe9s (nous essayons toujours de comprendre comment nous v\xe9rifions l'identit\xe9 des utilisateurs des groupes marginalis\xe9s, des parties prenantes priv\xe9es, etc.). Ces autorisations, tant en termes d'informations sur les utilisateurs que de droits d'acc\xe8s \xe0 un actif de donn\xe9es, seront incluses dans les m\xe9tadonn\xe9es."),(0,r.kt)("p",null,"Une fois que l'identit\xe9 d'un utilisateur peut \xeatre v\xe9rifi\xe9e, cet utilisateur se verra accorder une vue des donn\xe9es et une cl\xe9 API qui lui permettra d'acc\xe9der aux donn\xe9es priv\xe9es via un appel API. De m\xeame, les donn\xe9es \xe0 leur avis seront disponibles par t\xe9l\xe9chargement direct. Il convient de noter que si les principes FAIR sont g\xe9n\xe9ralement utilis\xe9s dans le contexte des donn\xe9es ouvertes, les donn\xe9es peuvent \xeatre FAIRifi\xe9es dans diff\xe9rentes vues du syst\xe8me et sous l'hypoth\xe8se que les donn\xe9es ne sont pas ouvertes par d\xe9faut. Nos m\xe9tadonn\xe9es seront trouvables, accessibles, interop\xe9rables et r\xe9utilisables, comme le sugg\xe8rent les principes directeurs de FAIR, mais au sein de notre syst\xe8me et prot\xe9g\xe9es par diff\xe9rentes vues. Par exemple, les ressources de donn\xe9es ouvertes seront trouvables pour tout le monde, mais les donn\xe9es qui ne sont disponibles que pour des utilisateurs de donn\xe9es sp\xe9cifiques ne seront trouvables que pour ce type d'utilisateur."),(0,r.kt)("p",null,"En g\xe9n\xe9ral, chaque ensemble de donn\xe9es n\xe9goci\xe9 par les GBAD sera dot\xe9 d'un identifiant unique qui le liera \xe0 ses m\xe9tadonn\xe9es. Lorsqu'un utilisateur acc\xe8de aux donn\xe9es d'une mani\xe8re ou d'une autre (par exemple via un appel d'API ou un t\xe9l\xe9chargement direct), l'identifiant unique et l'URL du portail de m\xe9tadonn\xe9es seront renvoy\xe9s. L'utilisateur peut alors acc\xe9der facilement aux m\xe9tadonn\xe9es. De m\xeame, les utilisateurs peuvent commencer leur recherche de donn\xe9es avec l'outil de recherche de m\xe9tadonn\xe9es. L'appel de l'API de donn\xe9es sera fourni quelque part sur le moteur de recherche de m\xe9tadonn\xe9es (c'est-\xe0-dire que si vous s\xe9lectionnez un ensemble de donn\xe9es qui vous int\xe9resse, les m\xe9tadonn\xe9es vous seront fournies)."),(0,r.kt)("h2",{id:"d\xe9fis-des-m\xe9canismes-de-partage-de-donn\xe9es"},"D\xe9fis des m\xe9canismes de partage de donn\xe9es"),(0,r.kt)("p",null,"Un d\xe9fi dans la conception de la vue syst\xe8me r\xe9side dans les difficult\xe9s de licence pour traiter la ",(0,r.kt)("strong",{parentName:"p"},"R"),"usabilit\xe9 d'une ressource de donn\xe9es.\nLes pr\xe9occupations qui se posent concernent la publication et la communication de r\xe9sultats inspir\xe9s de donn\xe9es priv\xe9es. Si des donn\xe9es priv\xe9es sont\nutilis\xe9 dans un mod\xe8le ou pour d'autres d\xe9cisions bas\xe9es sur les donn\xe9es comment les donn\xe9es seront-elles cit\xe9es ou correctement attribu\xe9es (ou peut-\xeatre v\xe9rifi\xe9es)\nsans accorder l'acc\xe8s aux donn\xe9es ni publier les r\xe9sultats de mod\xe8les utilisant des donn\xe9es priv\xe9es en entr\xe9e\xa0? Il est important de\ncomprendre les opinions des parties prenantes des donn\xe9es afin de comprendre leurs souhaits sur la mani\xe8re dont les donn\xe9es sont utilis\xe9es."),(0,r.kt)("p",null,"Une autre difficult\xe9 ou limitation possible est que les utilisateurs ayant des vues sp\xe9cifiques ne sauront m\xeame pas que certains actifs de donn\xe9es existent."),(0,r.kt)("h2",{id:"vocabulaires-et-ontologies"},"Vocabulaires et ontologies"),(0,r.kt)("p",null,"Les vocabulaires et ontologies pr\xe9existants seront consult\xe9s, affin\xe9s, compar\xe9s et \xe9tendus pour cr\xe9er un\nvocabulaire contr\xf4l\xe9 pour les GBAD. La s\xe9mantique sera accessible pour chaque source de donn\xe9es afin de s'assurer que les mots\nutilis\xe9es pour d\xe9crire les donn\xe9es sont coh\xe9rentes entre les sources de donn\xe9es."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Les vocabulaires des sources de donn\xe9es qui ne citent pas les normes de vocabulaire seront obtenus et les mots seront\npar rapport aux normes de donn\xe9es pr\xe9existantes telles que AGROVOC (vocabulaire contr\xf4l\xe9 de la FAO)"),(0,r.kt)("li",{parentName:"ul"},"Les vocabulaires collect\xe9s seront compar\xe9s pour toutes les sources de donn\xe9es, pour voir comment la description des termes se compare les unes aux autres."),(0,r.kt)("li",{parentName:"ul"},"L'objectif est de fournir une norme pour les GBAD, en augmentant l'interop\xe9rabilit\xe9 et la qualit\xe9 des donn\xe9es, conduisant finalement \xe0\nmod\xe8les et estimations sup\xe9rieurs"),(0,r.kt)("li",{parentName:"ul"},"Les vocabulaires contr\xf4l\xe9s conduisent \xe9galement \xe0 de meilleurs syst\xe8mes et permettent l'automatisation des t\xe2ches")),(0,r.kt)("p",null,"Agroportal est un outil de cartographie d'ontologies qui permettra aux GBAD de d\xe9terminer les ontologies appropri\xe9es et la cartographie entre\nvocabulaires normalis\xe9s li\xe9s au secteur agricole."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nous reconnaissons \xe9galement que nous ne pouvons pas nous attendre \xe0 ce que les contributeurs de donn\xe9es modifient leur vocabulaire pour suivre celui des GBAD\n(et si nous le demandions, cela pourrait d\xe9courager les gens de fournir des donn\xe9es). Cela souligne l'importance du vocabulaire\nmappages.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{avertissement}",metastring:"\xe0 ajouter","\xe0":!0,ajouter:!0},"Discussion g\xe9n\xe9rale sur la fa\xe7on dont nous les voyons se d\xe9velopper pour GBADS.\n")),(0,r.kt)("h2",{id:"provenance"},"Provenance"),(0,r.kt)("p",null,"Comment les informations sur les donn\xe9es seront collect\xe9es ou consult\xe9es par les donateurs et comment ces informations seront \xe9valu\xe9es, stock\xe9es,\net fournir la base pour g\xe9n\xe9rer des informations de provenance sur toutes les donn\xe9es n\xe9goci\xe9es par les GBAD."),(0,r.kt)("p",null,"Les contributeurs de donn\xe9es seront tenus de fournir des informations sur la provenance."),(0,r.kt)("p",null,"Fournir des informations d\xe9taill\xe9es sur la provenance aux utilisateurs de donn\xe9es est un \xe9l\xe9ment essentiel de la fourniture de donn\xe9es FAIR. Informations sur la provenance\ndoit couvrir au minimum\xa0:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Qui ou quoi a cr\xe9\xe9 les donn\xe9es\xa0? Cela comprendrait des informations sur la m\xe9thodologie utilis\xe9e pour cr\xe9er les donn\xe9es d'origine\n(soit par une citation, soit en fournissant des informations dans les m\xe9tadonn\xe9es). Des informations indiquant si les donn\xe9es ont \xe9t\xe9\ntransform\xe9 d'une mani\xe8re ou d'une autre (par exemple par un changement de vocabulaire/d'ontologie, de techniques d'imputation, d'estimations, de suppression de lignes, etc.)\ndoivent \xe9galement \xeatre fournis par des r\xe9f\xe9rences et des descriptions de programmes ou de techniques utilis\xe9s pour effectuer ces transformations.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Quand les donn\xe9es ont-elles \xe9t\xe9 produites et quand les derni\xe8res modifications ont-elles \xe9t\xe9 apport\xe9es aux donn\xe9es\xa0?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Contexte de cr\xe9ation des donn\xe9es. Pourquoi les donn\xe9es ont-elles \xe9t\xe9 cr\xe9\xe9es ou produites\xa0? Cela fournit des informations aux utilisateurs potentiels de donn\xe9es sur\nsi l'utilisation des donn\xe9es r\xe9pond \xe0 leurs besoins et est conforme \xe0 leurs pratiques, mod\xe8les ou autres techniques statistiques potentiels."))),(0,r.kt)("p",null,"Les m\xe9triques con\xe7ues pour FAIR sont int\xe9ressantes pour cette discussion\xa0:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FAIRMetrics/Metrics/blob/master/Distributions/FM_R1.2.pdf"},"FAIR Metric FM-R1.2")),(0,r.kt)("p",null,"L'acc\xe8s aux donn\xe9es est en partie r\xe9gi par la provenance des donn\xe9es. Par exemple, il est important de comprendre qui a cr\xe9\xe9 et\nest propri\xe9taire des donn\xe9es pour d\xe9terminer si les donn\xe9es sont r\xe9utilisables (principe FAIR 4). Il peut y avoir des restrictions sp\xe9cifiques aux donn\xe9es\nacc\xe8s en vertu d'accords de licence qui pourraient d\xe9terminer comment les donn\xe9es peuvent \xeatre utilis\xe9es et par qui."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{remarque}"},"E3 Les m\xe9tadonn\xe9es doivent reconna\xeetre la provenance et le but et toute limitation ou obligation d'utilisation secondaire, y compris\ndes probl\xe8mes de consentement.\n")),(0,r.kt)("p",null,"Les informations de provenance pour chaque ensemble de donn\xe9es seront stock\xe9es dans des m\xe9tadonn\xe9es, qui seront mises \xe0 la disposition et consultables\npar tous les utilisateurs de GBAD. Une norme de provenance reconnue sera utilis\xe9e pour s'assurer que les informations de provenance sont trouvables\net r\xe9utilisable."),(0,r.kt)("h2",{id:"collecte-dinformations"},"Collecte d'informations"),(0,r.kt)("p",null,"Enqu\xeates/formulaires qui recueilleront des informations \xe0 utiliser pour la provenance et l'identification des utilisateurs."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ID ORCIDE"),(0,r.kt)("li",{parentName:"ul"},"Informations de connexion")))}c.isMDXComponent=!0}}]);