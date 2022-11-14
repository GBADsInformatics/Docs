"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[7450],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=d(a),u=o,m=f["".concat(c,".").concat(u)]||f[u]||p[u]||r;return a?n.createElement(m,i(i({ref:t},l),{},{components:a})):n.createElement(m,i({ref:t},l))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:12},i="Examples",s={unversionedId:"Data-Governance-Handbook-for-GBADs/examples",id:"Data-Governance-Handbook-for-GBADs/examples",title:"Examples",description:"Scenario 1: Metadata for corporate data",source:"@site/docs/Data-Governance-Handbook-for-GBADs/examples.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/examples",permalink:"/docs/docs/Data-Governance-Handbook-for-GBADs/examples",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Organizing Data in Spreadsheets",permalink:"/docs/docs/Data-Governance-Handbook-for-GBADs/dataBestPractices"},next:{title:"Ontology Glossary",permalink:"/docs/docs/Data-Governance-Handbook-for-GBADs/ontologyGlossary"}},c={},d=[{value:"Scenario 1: Metadata for corporate data",id:"scenario-1-metadata-for-corporate-data",level:2},{value:"Scenario 2: Metadata for modified data",id:"scenario-2-metadata-for-modified-data",level:2},{value:"Scenario 3: Metadata from Indigenous contributors",id:"scenario-3-metadata-from-indigenous-contributors",level:2}],l={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"Description of this section needed",Description:!0,of:!0,this:!0,section:!0,needed:!0},"Provide a scenario and meta-data for each type of data outlined in the Data Ownership section\n")),(0,o.kt)("h2",{id:"scenario-1-metadata-for-corporate-data"},"Scenario 1: Metadata for corporate data"),(0,o.kt)("p",null,"Metadata for FAO data that are already available through the GBADs portal. Metadata is for\nLive Animals > Ethiopia > Stocks > Chickens > 1961 - 2018. "),(0,o.kt)("p",null,"This metadata makes the following assumptions: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The date of creation is when FAO revised their agricultural data domain methodologies "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf"},"Reference"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "@context": {\n    //Each metadata term would go here, with a reference (URL) \n    //to the context, or description of the term\n    //We are still deciding on standards, and creating our own (which can be \n    //registered), so this is left largely blank, for now.\n    "spatialCoverage":"https://www.geonames.org/countries/",\n    "temporalCoverage":"https://www.iso.org/iso-8601-date-and-time-format.html"\n\n  },\n  "@id": "http://www.fao.org/faostat/en/#data/QA",\n  "@type":"https://schema.org/Dataset",\n  "URI": "http://www.fao.org/faostat/en/#data/QA",\n  "title": "FAO Chicken, Live Animals",\n  "accessRights":"Open",\n  "accrual":{\n    "accrualMethod":"loan",\n    "accrualPeriodicity":"Annual",\n  },\n  "creator": {\n    "@type": "creatorCorporate",\n    "URL":"http://www.fao.org/",\n  },\n  "coverage": {\n    "temporalCoverage":"1961/2018",\n    "spatialCoverage":"ET"\n  },\n  "date": {\n    "created":"2016",\n    "dateSubmitted":"2020-10-09",\n    "modified": "2020-03-04"\n  },\n  "description":"Number of live chickens in Ethiopia from 1961 to 2020, as calculated and recorded by the FAO.",\n  "distribution":"directDownload",\n  "relation":{\n    "format":"csv, json"\n  },\n  "subject": {\n    "subjectClassification":"",\n    "subjectKeywords": "Chicken, FAO, Live Animals",\n    "subjectThesaraus":"http://aims.fao.org/vest-registry/vocabularies/agrovoc"\n  },\n  "language":"English",\n  "license":"http://www.fao.org/tenure/resources/results/details/en/c/CA7570EN/#querystring=JmVuZHN0cmluZz0x",\n  "provenance":[\n    "http://fenixservices.fao.org/faostat/static/documents/QA/QA_Update_History.pdf",\n    "http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf"\n  ],\n  "publisher":"http://www.fao.org/faostat/",\n  "source":"http://www.fao.org/faostat/en/#data/QA",\n  "methodology":"http://fenixservices.fao.org/faostat/static/documents/QA/QL_methodology_e.pdf",\n  "metadataInformation":"http://www.fao.org/faostat/en/#data/QA",\n  "vocabularyEncodingScheme": "http://aims.fao.org/vest-registry/vocabularies/agrovoc"\n\n}\n')),(0,o.kt)("h2",{id:"scenario-2-metadata-for-modified-data"},"Scenario 2: Metadata for modified data"),(0,o.kt)("p",null,"In the cases where raw data was modified in some way, like through modelling, metadata must reflect that data are\ncreated through transformations of some kind. The provenance information of the raw data must also be provided\nincluding links or references to computer programs that created the data. Related publications must also be cited\nor referenced. Please note that GBADs does not have data for this scenario yet and this metadata is fabricated to\nenhance the understanding of the metadata and data governance strategy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"To Be Added",To:!0,Be:!0,Added:!0},"Metadata\n")),(0,o.kt)("h2",{id:"scenario-3-metadata-from-indigenous-contributors"},"Scenario 3: Metadata from Indigenous contributors"),(0,o.kt)("p",null,"In this scenario the data are contributed by Indigenous Peoples or communities and the metadata will reflect the data and\nprivacy restrictions that should be used to comply with CARE."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"To Be Added",To:!0,Be:!0,Added:!0},"Metadata\n")))}p.isMDXComponent=!0}}]);