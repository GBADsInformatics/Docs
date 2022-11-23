"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[1134],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),p=i,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5238:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:5},r="Mechanisms for Data Sharing",s={unversionedId:"Data-Governance-Handbook-for-GBADs/mechanisms",id:"Data-Governance-Handbook-for-GBADs/mechanisms",title:"Mechanisms for Data Sharing",description:"There are many ways to technically facilitate data sharing such as file downloads, APIs, etc.  This section explains the principles behind being a \u201ctrusted\u201d data broker and a federated data source.",source:"@site/docs/Data-Governance-Handbook-for-GBADs/mechanisms.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/mechanisms",permalink:"/Data-Governance-Handbook-for-GBADs/mechanisms",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Data Licenses, Privacy and Security",permalink:"/Data-Governance-Handbook-for-GBADs/dataOwnership"},next:{title:"Data and Data Management Audits and Reviews",permalink:"/Data-Governance-Handbook-for-GBADs/dataAudits"}},l={},d=[{value:"Challenges in Data Sharing Mechanisms",id:"challenges-in-data-sharing-mechanisms",level:2},{value:"Vocabularies and Ontologies",id:"vocabularies-and-ontologies",level:2},{value:"Provenance",id:"provenance",level:2},{value:"Information Collection",id:"information-collection",level:2}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mechanisms-for-data-sharing"},"Mechanisms for Data Sharing"),(0,i.kt)("p",null,"There are many ways to technically facilitate data sharing such as file downloads, APIs, etc.  This section explains the principles behind being a \u201ctrusted\u201d data broker and a federated data source."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://gbadske.org/Documentation/DataGovernanceHandbook/_images/systemView.png",alt:"sysView"})),(0,i.kt)("p",null,"Mechanisms in GBADs data sharing are rooted in the ability to create a data viewing architecture that is tailored to the privacy and security rights of different user types. Specifically, this relies on the ability to categorize users and create system views for that user where that user can only see the data that they are authorized to. We use the term \u201cview\u201d as described by database theory: \u201cViews are generally used to focus, simplify, and customize the perception each user has of the database. Views can be used as security mechanisms by letting users access data through the view, without granting the users permissions to directly access the underlying base tables of the view\u201d. In other words, allowing data contributors to select which type of users they would like to allow to access their data creates a \u201cview\u201d for that data user (either hides or makes available specific data assets). This grants data contributors the Authority to Control their data resources. Of course, this concept is contingent on the ability to categorize data users (see Section Data Types for a more detailed discussion of this concept). "),(0,i.kt)("p",null,"Data that are deemed \u2018Open by default\u2019 will be available publicly to any user that enters the data portal and will be available without restriction to download directly. However, to access even Open data through an API, registration will be required to obtain a customized API key. "),(0,i.kt)("p",null,"Users wishing to access private data sources will be required to categorize themselves using GBADs predefined data user identifications. This will consist of creating a user profile, identifying what type of user you are and entering a verification method to do so. The verification method may consist of an ORCHID ID if an academic user. However, the mechanisms behind user verification are still under stipulation (we are still trying to figure out how we verify the identity of users from marginalized groups, private stakeholders etc).  These authorizations, both in terms of user information and the access rights of a data asset will be included in the metadata. "),(0,i.kt)("p",null,"Once the identity of a user can be verified, that user will be granted a view of the data and an API key that will allow them to access private data through an API call. Similarly, data in their view will be available through direct download. It should be noted that while FAIR principles are usually used in the context of Open data, data can be FAIRified within different system views and under the assumption that data are not Open by default. Our metadata will be Findable, Accessible, Interoperable and Reusable, as suggested by the FAIR guiding principles but within our system and as protected by different views. For example, Open data assets will be Findable to everyone, but data that are only available to specific data users will only be Findable to that user type. "),(0,i.kt)("p",null,"In general, each dataset brokered by GBADs will be equipped with a unique identifier which links it to its metadata. When a user accesses the data in some way (such as through an API call or direct download), the unique identifier and URL to the metadata portal will be returned. The user can then access the metadata easily. Likewise, users can begin their data search with the metadata search tool. The data API call will be provided somewhere on the metadata search engine (i.e. if you select a data set of interest, you will be provided with the metadata). "),(0,i.kt)("h2",{id:"challenges-in-data-sharing-mechanisms"},"Challenges in Data Sharing Mechanisms"),(0,i.kt)("p",null,"A challenge in the system view design is licensing difficulties in addressing the ",(0,i.kt)("strong",{parentName:"p"},"R"),"eusability of a data resource.\nConcerns that arise are with the publication and reporting of results inspired by private data. If private data are\nused in a model or for other data driven decisions how will data be cited or properly attributed (or perhaps verified)\nwithout granting access to data or publishing results from models that used private data as input? It is important to\nunderstand the opinions of the data stakeholders in order to understand their wishes on how data are used. "),(0,i.kt)("p",null,"Another difficulty or possible limitation is that users with specific views will be unaware that certain data assets even exist. "),(0,i.kt)("h2",{id:"vocabularies-and-ontologies"},"Vocabularies and Ontologies"),(0,i.kt)("p",null,"Pre-existing vocabularies and ontologies will be accessed, refined, compared and extended upon to create a\ncontrolled vocabulary for GBADs.  Semantics will be accessed for each data source to ensure that the words\nused to describe data are consistent between data sources. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vocabularies for data sources that don\u2019t cite vocabulary standards will be obtained and words will be\ncompared to pre-existing data standards such as AGROVOC (FAO\u2019s controlled vocabulary) "),(0,i.kt)("li",{parentName:"ul"},"Collected vocabularies will be compared for all data sources, to see how the description of terms compares to each other."),(0,i.kt)("li",{parentName:"ul"},"Goal is to provide a standard for GBADs, increasing interoperability and quality of data, ultimately leading to\nsuperior models and estimates ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- Also controlled vocabularies lead to better systems and allow for automation of tasks \n")))),(0,i.kt)("p",null,"Agroportal is an ontology mapping tool that will allow GBADs to determine suitable ontologies and mapping between\nstandardized vocabularies related to the agricultural sector."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We also acknowledge that we cannot expect data contributors to change their vocabularies to follow that of GBADs\n(and if we did ask, it may discourage people from contributing data). This underlines the importance of vocabulary\nmappings. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"To Be Added",To:!0,Be:!0,Added:!0},"General discussion on how we see them developing for GBADS.\n")),(0,i.kt)("h2",{id:"provenance"},"Provenance"),(0,i.kt)("p",null,"How information about data will be collected or accessed from donors and how this information will be evaluated, stored,\nand provide the basis for generating provenance information about all data brokered by GBADs."),(0,i.kt)("p",null,"Data contributors will be required to provide provenance information."),(0,i.kt)("p",null,"Providing detailed provenance information to data users is an essential element of providing FAIR data. Provenance information\nshould at minimum cover: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Who or what created the data? This would include information about the methodology used to create the original data\n(either through a citation or providing information in the metadata). Information about whether the data has been\ntransformed in some way (such as through a change in vocabulary/ontology, imputation techniques, estimations, dropping rows etc.)\nshould also be provided through references to and descriptions of programs or techniques used to complete these transformations.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When was the data produced and when changes were last made to the data? ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Context of data creation. Why was the data created or produced? This provides information to potential data users about\nwhether using the data fulfills their needs and conforms to their potential practices, models or other statistical techniques."))),(0,i.kt)("p",null,"Of interest to this discussion are the metrics designed for FAIR:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FAIRMetrics/Metrics/blob/master/Distributions/FM_R1.2.pdf"},"FAIR Metric FM-R1.2")),(0,i.kt)("p",null,"Data access is in part governed by the provenance of the data. For example, it is important to understand who created and\nowns the data to determine whether the data are Reusable (FAIR principle 4). There may be specific restrictions to data\naccess under licensing agreements that could determine how data can be used, and by whom."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-{note}"},"E3 Metadata should acknowledge the provenance and purpose and any limitations or obligations in secondary use inclusive \nof issues of consent.\n")),(0,i.kt)("p",null,"Provenance information for each data set will be stored in metadata, which will be made available to and searchable\nby all users of GBADs. A recognized provenance standard will be used to ensure that provenance information is Findable\nand Reusable."),(0,i.kt)("h2",{id:"information-collection"},"Information Collection"),(0,i.kt)("p",null,"Surveys/forms that will collect information to be used for provenance and user identification."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ORCID ID "),(0,i.kt)("li",{parentName:"ul"},"Login information")))}u.isMDXComponent=!0}}]);