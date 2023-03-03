"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[6641],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||s;return a?n.createElement(m,o(o({ref:t},l),{},{components:a})):n.createElement(m,o({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6463:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:10},o="Data Licenses, Privacy and Security",i={unversionedId:"Data-Governance-Handbook-for-GBADs/dataOwnership",id:"Data-Governance-Handbook-for-GBADs/dataOwnership",title:"Data Licenses, Privacy and Security",description:"Data on a spectrum",source:"@site/docs/Data-Governance-Handbook-for-GBADs/dataOwnership.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/dataOwnership",permalink:"/docs/Data-Governance-Handbook-for-GBADs/dataOwnership",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Data User Guide",permalink:"/docs/Data-Governance-Handbook-for-GBADs/dataUsers"},next:{title:"Data Contributor Guide",permalink:"/docs/Data-Governance-Handbook-for-GBADs/dataContributors"}},c={},d=[{value:"Data on a spectrum",id:"data-on-a-spectrum",level:2},{value:"Categories on the data spectrum",id:"categories-on-the-data-spectrum",level:2},{value:"Personal Identifiable Information (PII)",id:"personal-identifiable-information-pii",level:3},{value:"Licensing",id:"licensing",level:2},{value:"License uses",id:"license-uses",level:3},{value:"License selection",id:"license-selection",level:3}],l={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-licenses-privacy-and-security"},"Data Licenses, Privacy and Security"),(0,r.kt)("h2",{id:"data-on-a-spectrum"},"Data on a spectrum"),(0,r.kt)("p",null,"GBADs disseminates and in some cases stores data that has various access, usage and reuse restrictions. Not all data can be open, and data privacy isn't as simple as having either open or private data. In order to encourage sharing, it is important that data contributors are given the option to select how they would like their data to be used, what they want it to be used for and who they would like it to be used by. Data licensing agreements make sure that data usage isn't confused, and inform our system on who can see, download or use data. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{margin}"},'**Even data that is defined as "Open" needs a license!** When you use Open data you still need to determine how to properly attribute (or cite) the data set. In addition, data can be considered Open but may still have restrictions on what it can be used for. For example, some Open data licenses restrict the use of data for commercial purposes. \n')),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://theodi.org/about-the-odi/"},"Open Data Institute")," communicates this idea by putting data on a spectrum from closed to open data. "),(0,r.kt)("h2",{id:"categories-on-the-data-spectrum"},"Categories on the data spectrum"),(0,r.kt)("p",null,"We used the spectrum to come up with four discrete data licensing categories:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Open data"),": \u201cOpen means anyone can freely access, use, modify, and share for any purpose (subject, at most, to requirements that preserve provenance and openness).\u201d"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Public access data"),": The data is protected by a licensing agreement that limits the use and dissemination of the data and/or the models the data can be used for. This could include the way the data can be used and for what purposes, attribution requirements etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Group-based access data"),": Authentication is required to access the data. Like public access data, the data is also protected by a licensing agreement that limits the use and dissemination of the data and/or the models the data can be used for. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Named access data and internal access data"),": A special contract will be required to articulate the use, attribution and access restrictions of the data. This will be explicitly assigned by a contract and/or NDA, which will require direct contact with the GBADs legal team. We grouped these two, because both will need a data contract and require named (and authenticated)access to use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"Decision Needed",Decision:!0,Needed:!0},"- How will users be authenticated? \n- How will groups of users be authenticated? \n- What license will we use for models generated by GBADs and data outputs generated by the models?\n")),(0,r.kt)("h3",{id:"personal-identifiable-information-pii"},"Personal Identifiable Information (PII)"),(0,r.kt)("p",null,"Personal Identifiable Information (PII) is any information that can be used to identify a person, residence or farm. This could include names, email addresses, geolocation or vet records for example. No matter the type of PII, data containing should be managed carefully. "),(0,r.kt)("p",null,"PII should be protected and secure, with restricted access requirements. Depending on the use case, the data may be able to transformed to protect the PII. For example, geolocations can move up in spatial granularity and data can be provided in regions or zones or by country. Email addresses, phone numbers and names of farms can be encrypted on ingest and removed from data tables. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"Secure Data Storage Infrastructure",Secure:!0,Data:!0,Storage:!0,Infrastructure:!0},":class: tip\nAs the GBADs Knowledge Engine is a cloud service, any data that includes PII will be stored in a secure bucket, such as the [Amazon S3](https://aws.amazon.com/s3/) bucket.\n")),(0,r.kt)("h2",{id:"licensing"},"Licensing"),(0,r.kt)("p",null,"Licenses inform who can access data, how data can be used, who it can be used by and for what purposes and how to properly attribute the data. "),(0,r.kt)("h3",{id:"license-uses"},"License uses"),(0,r.kt)("p",null,"Licenses have 3 utilities for GBADs, each which are informed by the CARE principles: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{tabbed}",metastring:"1. Protect Data Contributors","1.":!0,Protect:!0,Data:!0,Contributors:!0},"**Any time data is contributed to GBADs, data holders will be required to select a license for their data.** \n\nThis is a CARE sharing mechanism because licenses enable data contributors to have the Authority to Control their data throughout it's lifecycle and with licenses that dictate the usage restrictions of the data, the data can be used for the Collective Benefit of the data holder individually, or the group that the data holder represents. \n\nPublicly available licenses will be linked to in the metadata, and the citation/attribution information will be disseminated alongside the dataset.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{tabbed}",metastring:"2. Inform Data Users","2.":!0,Inform:!0,Data:!0,Users:!0},"Each data set will be licensed and the licensing and citation information will be available in the data set's metadata. Therefore, data users will be informed of how they can use the data that they access and the attribution that they must use. \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{tabbed}",metastring:"3. Inform System View","3.":!0,Inform:!0,System:!0,View:!0},"Open and public data will be available to any user who enters the site, but group or named access data will need authentification, and therefore will be inaccessible by default. \n\nIn other words, the view of GBADs Knowledge Engine will be informed by the licensing agreement. In some cases, this may mean that even the metadata will not be shown to unauthorized users. In other cases, the descriptive metadata may be available and users could request access. What the public, or certain users and groups can see will be governed by the choices of the data user. \n")),(0,r.kt)("h3",{id:"license-selection"},"License selection"),(0,r.kt)("p",null,"Data holders contributing Open or public access data must chose a licensing agreement for their data. There is a suite of data licensing agreements that data holders can choose from. These include: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creative Commons Licenses. The ",(0,r.kt)("a",{parentName:"li",href:"https://creativecommons.org/choose/"},"Creative Commons license selector tool")," allows individuals to select the features of usage, adaptation and sharing, and provides a license that reflects these preferences."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://opendatacommons.org/licenses/"},"Open Data Commons Licenses")," including the ",(0,r.kt)("a",{parentName:"li",href:"https://opendatacommons.org/licenses/odbl/"},"Open Data Commons Open Database License (ODbl)"),", the ",(0,r.kt)("a",{parentName:"li",href:"https://opendatacommons.org/licenses/by/"},"Open Data Commons Attribution License")," and the ",(0,r.kt)("a",{parentName:"li",href:"https://opendatacommons.org/licenses/pddl/"},"Open Data Commons Public Domain Dedication and License (PDDL)"),". ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"Machine Readable Licenses",Machine:!0,Readable:!0,Licenses:!0},"GBADs is exploring how to make licenses machine readable, so that data that flows through the knowledge engine and is stored in GBADs repositories can be more FAIR. In addition, we use data privacy restrictions to inform system views for different users to help protect the usage requirements set forward by data contributors. \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"Decision Needed",Decision:!0,Needed:!0},"GBADs must determine whether data contributors can change the license on their data after they submit it and if so how to communicate to individuals who may have downloaded the data in question. In addition, GBADs must decide how the retraction of data affects pre-existing models.\n")))}u.isMDXComponent=!0}}]);