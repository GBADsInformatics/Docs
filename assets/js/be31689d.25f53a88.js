"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[5992],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),l=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(d.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,m=p["".concat(d,".").concat(u)]||p[u]||h[u]||s;return t?n.createElement(m,o(o({ref:a},c),{},{components:t})):n.createElement(m,o({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=p;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1340:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const s={sidebar_position:9},o="Metadata Storage: Graph Databases in GBADs",i={unversionedId:"Data-Governance-Handbook-for-GBADs/metadataStorage",id:"Data-Governance-Handbook-for-GBADs/metadataStorage",title:"Metadata Storage: Graph Databases in GBADs",description:"GBADs Informatics uses neo4j, a graph database management system, to manage and storage metadata and information about individuals and groups involved in the project. As you will learn in this section, a graph database is a type of database that leverages the idea of connections between entites as a method to derive insights and new knowledge from otherwise disconnected data.",source:"@site/docs/Data-Governance-Handbook-for-GBADs/metadataStorage.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/metadataStorage",permalink:"/docs/Data-Governance-Handbook-for-GBADs/metadataStorage",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Data User Guide",permalink:"/docs/Data-Governance-Handbook-for-GBADs/dataUsers"},next:{title:"Best Practices for Coding",permalink:"/docs/Data-Governance-Handbook-for-GBADs/codeBestPractices"}},d={},l=[{value:"What is a graph database?",id:"what-is-a-graph-database",level:2},{value:"Parts of a graph database",id:"parts-of-a-graph-database",level:3},{value:"Master metadata management",id:"master-metadata-management",level:3}],c={toc:l};function h(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metadata-storage-graph-databases-in-gbads"},"Metadata Storage: Graph Databases in GBADs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{epigraph}"},'"All the knowledge is in connections"\n\n-- [David Rumelhart](https://en.wikipedia.org/wiki/David_Rumelhart) \n')),(0,r.kt)("p",null,"GBADs Informatics uses ",(0,r.kt)("a",{parentName:"p",href:"https://neo4j.com/"},"neo4j"),", a graph database management system, to manage and storage metadata and information about individuals and groups involved in the project. As you will learn in this section, a graph database is a type of database that leverages the idea of connections between entites as a method to derive insights and new knowledge from otherwise disconnected data.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"In this section we tell you what a graph database is, how it can be used, talk about One Health research as a connected entity and outline the GBADs graph database use cases."))," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"Learning Objectives",Learning:!0,Objectives:!0},"* Readers should understand what a graph database and a graph model is\n* Readers should understand the metadata use case for graph databases in GBADs\n* Readers should understand the idea of connectedness and data \n")),(0,r.kt)("h2",{id:"what-is-a-graph-database"},"What is a graph database?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{margin}",metastring:"What are relational databases?",What:!0,are:!0,relational:!0,"databases?":!0},"Traditionally, data are organized into a series of tables. Each of the tables have columns, and some tables have common columns. With these common columns you can specify joins between tables, resulting in a new table. \n\nThe biggest advantage of relational databases is the ability to join common tables to derive insights. On the other hand, relational databases require rigid schemas which require database engineers to structure their data to fit the schema. This comes with the assumption that we know what all of our data already looks like, which isn't always the case for research.  \n\n")),(0,r.kt)("p",null,"A graph database is a type of database that stores data using relationships between main ideas or entities. The relationships between different entities show connectedness, allowing for more insights to be drawn than a traditional relational database. Because data is highly complex and multidimensional in terms of structure, provenance, governance, security and semantics, GBADs uses graph databases for master metadata management and data cataloguing. By leveraging the dynamic nature of the graph database and structuring our ",(0,r.kt)("strong",{parentName:"p"},"graph model")," in a way that enables improved understanding of the many dimensions of data, we can both visualize and understand how data flows outside and inside our organization. Graph databases also allow us to add and change the structure as the structure of the information about data changes. This will become more clear as we introduce the preliminary GBADs graph data model. "),(0,r.kt)("h3",{id:"parts-of-a-graph-database"},"Parts of a graph database"),(0,r.kt)("p",null,"Graph databases are made up of ",(0,r.kt)("strong",{parentName:"p"},"nodes")," (entities) and ",(0,r.kt)("strong",{parentName:"p"},"edges")," (relationships). Nodes can have properties and labels while edges serve as the connection, or relationship between nodes. "),(0,r.kt)("p",null,"A graph model is a model of what kinds of nodes you are representing and how they are connected (what relationships you will have)."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210719_GBADs_GraphModel.png",alt:"Graph Model"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Research and connectivity")),(0,r.kt)("p",null,"Research and modelling is build on the data that we collect to make sense of the world around us. We use the data to draw insights that inform decisions or to make models that inform decisions, to forecast, to optimize, to understand, to further science, to better business, to understand what features of something are truly fundamental to decision making or that impact whatever it is we are studying. But what is often missing in our collections of data (our datasets), is the connectedness, or relationships between the things that we are studying. "),(0,r.kt)("p",null,"Graph databases allow us to capture these relationships and use them to derive new insights and visualize data in a more meaningful way. "),(0,r.kt)("h3",{id:"master-metadata-management"},"Master metadata management"),(0,r.kt)("p",null,"To understand more about metadata, how it is used, and why it is very important see the ",(0,r.kt)("a",{parentName:"p",href:"#techdatastds"},"metadata section")," of this handbook."),(0,r.kt)("p",null,"We use graph databases to understand the flow of "),(0,r.kt)("p",null,"Datasets can be related in many different ways. Two different datasets, from different sources might be connected in terms of their descriptive properties such as the "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"while different datasets can have different metadata contents, there is always relationships that can connect datasets to others."),(0,r.kt)("li",{parentName:"ul"},"graph databases leverage this idea by..")))}h.isMDXComponent=!0}}]);