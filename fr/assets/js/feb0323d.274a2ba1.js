"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[5458],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=s(a),u=r,h=c["".concat(d,".").concat(u)]||c[u]||p[u]||o;return a?n.createElement(h,l(l({ref:e},m),{},{components:a})):n.createElement(h,l({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},834:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:6},l="Metadata",i={unversionedId:"Data-Governance-Handbook-for-GBADs/metadata",id:"Data-Governance-Handbook-for-GBADs/metadata",title:"Metadata",description:'Metadata is "data about data".',source:"@site/docs/Data-Governance-Handbook-for-GBADs/06-metadata.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/metadata",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/metadata",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Data Quality",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/dataQuality"},next:{title:"Educational Materials and Best Practices",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/educationalMaterials"}},d={},s=[{value:"Metadata Schema",id:"metadata-schema",level:2},{value:"Encoding Schema",id:"encoding-schema",level:2},{value:"Vocabularies and Ontologies",id:"vocabularies-and-ontologies",level:2},{value:"Metadata Storage and Management",id:"metadata-storage-and-management",level:2},{value:"What is a graph database?",id:"what-is-a-graph-database",level:3},{value:"Parts of a graph database",id:"parts-of-a-graph-database",level:3},{value:"Graph Database and Metadata API",id:"graph-database-and-metadata-api",level:2}],m={toc:s};function p(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,'Metadata is "data about data".'),(0,r.kt)("p",null,"Metadata is used to store information about data assets that are stored in the GBADs knowledge engine. We strive for metadata to be FAIR (Findable, Accessible, Interoperable, and Reusable). "),(0,r.kt)("p",null,"In addition, we collect metadata on the processes in ingesting data into the Knowledge Engine to ensure that all data lineage is tracked. "),(0,r.kt)("h2",{id:"metadata-schema"},"Metadata Schema"),(0,r.kt)("p",null,'"A metadata schema is a set of rules about what sorts of subject-predicate-object statements one is allowed to make, and how one is allowed to make them." - Jeffery Pomerantz'),(0,r.kt)("p",null,"A subject-predicate-object statement consists of: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Subject = the thing being described"),(0,r.kt)("li",{parentName:"ul"},"Object = the thing describing the subject"),(0,r.kt)("li",{parentName:"ul"},"Predicate = relationship between the subject and object")),(0,r.kt)("p",null,"For example: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Subject = FAOSTAT QCL dataset"),(0,r.kt)("li",{parentName:"ul"},"Object = FAO "),(0,r.kt)("li",{parentName:"ul"},"Predicate = creator ")),(0,r.kt)("p",null,"In this subject-predicate-object statement the FAO is the creator of the FAOSTAT QCL dataset. "),(0,r.kt)("p",null,"Based on this model, we can craete a metadata schema that defines the predicates (also called elements) that we would like to use to describe a resource. Metadata vocabularies such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.dublincore.org/"},"Dublin Core"),", ",(0,r.kt)("a",{parentName:"p",href:"https://schema.org/"},"schema.org"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/prov-dm/"},"PROV-DM"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vocab-dcat-2/"},"DCAT")," , provide metadata elements that can be used to describe data. There is not a 'one-size-fits-all' when it comes to metadata. Several standard metadata element sets exist because what you will include in metadata depends on what your use case is. "),(0,r.kt)("p",null,"We have selected metadata elements from schema.org and PROV-DM to describe data and trace data lineage in the knowledge engine (see Figure below). "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"metadataModel",src:a(8588).Z,width:"809",height:"701"})),(0,r.kt)("h2",{id:"encoding-schema"},"Encoding Schema"),(0,r.kt)("p",null,"Each metadata element should have instructions on the expected values expected for each element. For example, there are many different ways to specify a date: 01/04/23 could mean January 4th, 2023 or April 1st, 2023. Therefore, any values for any element specifying a date  should use ",(0,r.kt)("a",{parentName:"p",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO-8601")," to ensure that all dates are formatted in a standard fashion. "),(0,r.kt)("p",null,"The encoding schema for each metadata element used in the metadataModel is found below: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Encoding Scheme"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/name"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"free text"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/codeRepository"},"codeRepository")),(0,r.kt)("td",{parentName:"tr",align:null},"link to GitHub repo"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/runtimePlatform"},"runtimePlatform")),(0,r.kt)("td",{parentName:"tr",align:null},"name of programming language or platform used at runtime (need controlled vocabulary)"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/dateCreated"},"dateCreated")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO-8601")),(0,r.kt)("td",{parentName:"tr",align:null},"datetime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/startTime"},"startTime")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO-8601")),(0,r.kt)("td",{parentName:"tr",align:null},"datetime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/endTime"},"endTime")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO-8601")),(0,r.kt)("td",{parentName:"tr",align:null},"datetime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prov:type"),(0,r.kt)("td",{parentName:"tr",align:null},"Controlled vocabulary to be built for use case (",(0,r.kt)("em",{parentName:"td"},"i.e")," ingestionEvent, dataCleaning etc.)"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/description"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"free text"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/url"},"url")),(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/identifier"},"identifier")),(0,r.kt)("td",{parentName:"tr",align:null},"url, doi, or uri"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/license"},"license")),(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/temporalCoverage"},"temporalCoverage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO-8601")),(0,r.kt)("td",{parentName:"tr",align:null},"datetime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/creator"},"creator")),(0,r.kt)("td",{parentName:"tr",align:null},"free text"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/inDefinedTermSet"},"inDefinedTermSet")),(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/termCode"},"termCode")),(0,r.kt)("td",{parentName:"tr",align:null},"code from defined term set"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/Place"},"Place")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.geonames.org/"},"GeoNames")),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/contentSize"},"contentSize")),(0,r.kt)("td",{parentName:"tr",align:null},"File size in megabytes"),(0,r.kt)("td",{parentName:"tr",align:null},"float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/fileFormat"},"fileFormat")),(0,r.kt)("td",{parentName:"tr",align:null},"File format. One of: csv, json, dbtable etc. (controlled vocabulary required)"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/contentUrl"},"contentUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://schema.org/uploadDate"},"uploadDate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO-8601")),(0,r.kt)("td",{parentName:"tr",align:null},"datetime")))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Decision needed: "),(0,r.kt)("p",null,"Currently, keywords for metadata are created through extracting terms (like species), from data sets."),(0,r.kt)("p",null,"A controlled vocabulary needs to be created to link keywords to. We have begun to do this by collecting all species classifications and definitions from data sources, however, synonyms have not yet been identified. "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"vocabularies-and-ontologies"},"Vocabularies and Ontologies"),(0,r.kt)("p",null,"Pre-existing vocabularies and ontologies will be accessed, refined, compared and extended upon to create a\ncontrolled vocabulary for GBADs.  Semantics will be accessed for each data source to ensure that the words\nused to describe data are consistent between data sources. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vocabularies for data sources that don\u2019t cite vocabulary standards will be obtained and words will be\ncompared to pre-existing data standards such as AGROVOC (FAO\u2019s controlled vocabulary) "),(0,r.kt)("li",{parentName:"ul"},"Collected vocabularies will be compared for all data sources, to see how the description of terms compares to each other."),(0,r.kt)("li",{parentName:"ul"},"Goal is to provide a standard for GBADs, increasing interoperability and quality of data, ultimately leading to\nsuperior models and estimates ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"- Also controlled vocabularies lead to better systems and allow for automation of tasks \n")))),(0,r.kt)("p",null,"Agroportal is an ontology mapping tool that will allow GBADs to determine suitable ontologies and mapping between\nstandardized vocabularies related to the agricultural sector."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We also acknowledge that we cannot expect data contributors to change their vocabularies to follow that of GBADs\n(and if we did ask, it may discourage people from contributing data). This underlines the importance of vocabulary\nmappings.")),(0,r.kt)("h2",{id:"metadata-storage-and-management"},"Metadata Storage and Management"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"All the knowledge is in connections"'),(0,r.kt)("p",{parentName:"blockquote"},"-- ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/David_Rumelhart"},"David Rumelhart")," ")),(0,r.kt)("p",null,"GBADs Informatics uses ",(0,r.kt)("a",{parentName:"p",href:"https://neo4j.com/"},"neo4j"),", a graph database management system, to manage and storage metadata and information about individuals and groups involved in the project. As you will learn in this section, a graph database is a type of database that leverages the idea of connections between entites as a method to derive insights and new knowledge from otherwise disconnected data.  "),(0,r.kt)("h3",{id:"what-is-a-graph-database"},"What is a graph database?"),(0,r.kt)("p",null,"A graph database is a type of database that stores data using relationships between main ideas or entities. The relationships between different entities show connectedness, allowing for more insights to be drawn than a traditional relational database. Because data is highly complex and multidimensional in terms of structure, provenance, governance, security and semantics, GBADs uses graph databases for master metadata management and data cataloguing. By leveraging the dynamic nature of the graph database and structuring our ",(0,r.kt)("strong",{parentName:"p"},"graph model")," in a way that enables improved understanding of the many dimensions of data, we can both visualize and understand how data flows outside and inside our organization. Graph databases also allow us to add and change the structure as the structure of the information about data changes. This will become more clear as we introduce the preliminary GBADs graph data model. "),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Traditionally, data are organized into a series of tables. Each of the tables have columns, and some tables have common columns. With these common columns you can specify joins between tables, resulting in a new table. "),(0,r.kt)("p",null,"The biggest advantage of relational databases is the ability to join common tables to derive insights. On the other hand, relational databases require rigid schemas which require database engineers to structure their data to fit the schema. This comes with the assumption that we know what all of our data already looks like, which isn't always the case for research.  "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"parts-of-a-graph-database"},"Parts of a graph database"),(0,r.kt)("p",null,"Graph databases are made up of ",(0,r.kt)("strong",{parentName:"p"},"nodes")," (entities) and ",(0,r.kt)("strong",{parentName:"p"},"edges")," (relationships). Nodes can have properties and labels while edges serve as the connection, or relationship between nodes. "),(0,r.kt)("p",null,"A graph model is a model of what kinds of nodes you are representing and how they are connected (what relationships you will have)."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210719_GBADs_GraphModel.png",alt:"Graph Model"}),"\nd"),(0,r.kt)("h2",{id:"graph-database-and-metadata-api"},"Graph Database and Metadata API"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To be updated when API is launched")))}p.isMDXComponent=!0},8588:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/metadataModel.drawio-b0f378c9789dc88426d90dd4a18beef6.png"}}]);