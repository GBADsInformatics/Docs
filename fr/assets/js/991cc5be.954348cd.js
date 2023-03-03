"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[2119],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:9},s="Accessing Data in the Knowledge Engine",i={unversionedId:"Data-Governance-Handbook-for-GBADs/dataAccess",id:"Data-Governance-Handbook-for-GBADs/dataAccess",title:"Accessing Data in the Knowledge Engine",description:"Objectives:",source:"@site/docs/Data-Governance-Handbook-for-GBADs/09-dataAccess.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/dataAccess",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/dataAccess",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Educational Materials and Best Practices",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/educationalMaterials"},next:{title:"Data Licenses, Security, and Privacy",permalink:"/fr/docs/Data-Governance-Handbook-for-GBADs/licensesAndSecurity"}},l={},d=[{value:"Objectives:",id:"objectives",level:2},{value:"Data types in the Knowledge Engine",id:"data-types-in-the-knowledge-engine",level:2},{value:"Input data",id:"input-data",level:3},{value:"Output data from models",id:"output-data-from-models",level:3},{value:"Intermediate data sets",id:"intermediate-data-sets",level:3},{value:"Accessing data in the Knowledge Engine",id:"accessing-data-in-the-knowledge-engine-1",level:2},{value:"APIs",id:"apis",level:3},{value:"S3 Buckets",id:"s3-buckets",level:3},{value:"GBADs Data Portal Interface",id:"gbads-data-portal-interface",level:3},{value:"Searching for data in the Knowledge Engine",id:"searching-for-data-in-the-knowledge-engine",level:2}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"accessing-data-in-the-knowledge-engine"},"Accessing Data in the Knowledge Engine"),(0,r.kt)("h2",{id:"objectives"},"Objectives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understand how to access different types of data in the Knowledge Engine "),(0,r.kt)("li",{parentName:"ul"},"Understand how to search for data stored in the Knowledge Engine")),(0,r.kt)("p",null,"For information about what to do when you identify new data sets of interest for use in the GBADs program visit the Data Contributor section of the Data Governance Handbook which outlines the following: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understand the roles and responsibilities of individuals who have identified a new data set for the use of GBADs program, and how to get this data stored in the Knowledge Engine "),(0,r.kt)("li",{parentName:"ul"},"Understand how Informatics stores data from models in the Knowledge Engine ")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The ways to access data consider the findability, accessibility, interoperability, and reusability of data for both ",(0,r.kt)("strong",{parentName:"p"},"humans")," and ",(0,r.kt)("strong",{parentName:"p"},"machines"),". "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"data-types-in-the-knowledge-engine"},"Data types in the Knowledge Engine"),(0,r.kt)("p",null,"The data user guide provides GBADs collaborators with an overview of how to access data in the knowledge engine. We have 3 main types of data: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Input data (or raw data)"),(0,r.kt)("li",{parentName:"ol"},"Output data from models "),(0,r.kt)("li",{parentName:"ol"},"Intermediate data sets ")),(0,r.kt)("p",null,"Each type of data and their subsets are uniquely formatted and require specific storage requirements to ensure that the data can be findable, accessible, interoperable and reusable (FAIR); all data must be documented with metadata to ensure that the data is FAIR."),(0,r.kt)("h3",{id:"input-data"},"Input data"),(0,r.kt)("p",null,"Input, or raw data can come in two forms across the GBADs program: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data sets from sources such  as the Food and Agriculture Organization of the United Nations Statistical Database (FAOSTAT), the World Organization for Animal Health (WOAH), national statistics agencies, etc. "),(0,r.kt)("li",{parentName:"ul"},"Parameters obtained from meta-analyses from systematic reviews. "),(0,r.kt)("li",{parentName:"ul"},"Data sets produced from expert elicitation exercises.")),(0,r.kt)("p",null,"These data are the ",(0,r.kt)("em",{parentName:"p"},"inputs")," to the models and calculations that GBADs themes produce. Input data can come in different forms, use varying terminologies and standards for naming countries, species, or other classifications, and thus may have various interpretations of the meaning. "),(0,r.kt)("p",null,"All themes and modellers should be using the same input data that has been cleaned only once to ensure that we are all using the same inputs to models. This ensures reproducibility and accuracy of data across the program. "),(0,r.kt)("h3",{id:"output-data-from-models"},"Output data from models"),(0,r.kt)("p",null,"When models or estimates are produced, they produce parameters and data sets that may be used in subsequent models or estimations. The output data from models and estimates therefore need to be stored in the Knowledge Engine alongside metadata to ensure that all users can understand how the data were populated and produced, including the model code and datasets that were used to populate this data. "),(0,r.kt)("h3",{id:"intermediate-data-sets"},"Intermediate data sets"),(0,r.kt)("p",null,"Intermediate data sets may be data that were produced through a stage in modelling or imputation but are not considered an end product. Intermediate data, however, may be used for other modelling processes and may be important to ensure that the data processes are reproducible. "),(0,r.kt)("h2",{id:"accessing-data-in-the-knowledge-engine-1"},"Accessing data in the Knowledge Engine"),(0,r.kt)("p",null,"There are 2 main ways to access the data in the Knowledge Engine: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Through the Application Programming Interface (API)"),(0,r.kt)("li",{parentName:"ol"},"Direct download through a URL from an Amazon S3 Bucket ")),(0,r.kt)("h3",{id:"apis"},"APIs"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What is an API?")),(0,r.kt)("p",null,"API stands for Application Programming Interface. It is a machine-to-machine way to ask a server for data, get the server retrieve and interpret the data and return it to your machine. APIs are everywhere; they allow applications to 'talk' to each other. For example, when you check the weather on a weather app, the app is using an API to grab the data and present it in a usable and interpretable fashion on your phone. APIs provide the most up-to-date data without having to store data on your own machine. "),(0,r.kt)("p",null,"For more information about APIs and how to use them visit the ",(0,r.kt)("a",{parentName:"p",href:"https://gbadskedoc.org/docs/GBADsAPITutorial"},"GBADs API Tutorial"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Input and output data are stored in ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/rds/"},"Amazon RDS")," tables. The current functionality of the API includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provides access to data contained in the public databases "),(0,r.kt)("li",{parentName:"ul"},"Provides a list of all tables contained in the public databases"),(0,r.kt)("li",{parentName:"ul"},"For a given table, provides names of all fields and data types of those fields")),(0,r.kt)("p",null,"While there may be a learning curve for human users of the API, APIs are important for providing machine-to-machine access to data (ensuring interoperability (exchange of information) between systems). "),(0,r.kt)("p",null,"Documentation about how to build API calls is available at the ",(0,r.kt)("a",{parentName:"p",href:"http://gbadske.org:9000/dataportal/"},"GBADs Data Portal Documentation Page"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GBADsAPI",src:a(2943).Z,width:"1415",height:"468"})),(0,r.kt)("p",null,"To improve the ease of use for human users, ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/kurtis-sobkowich/?originalSubdomain=ca"},"Kurtis Sobkowich")," created a dashboard to view and download data from the GBADs API. The URL will be linked in the Handbook when the dashboard is served on the GBADs server. For now, the dashboard is available on Kurtis' R shiny server: (GBADs API User Interface)","[https://kurtissobkowich.shinyapps.io/GBADs_API_UI/]",". Please expect delays - the dashboard will be slow until it is served on the GBADs' servers. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GBADsUI",src:a(6429).Z,width:"1420",height:"896"})),(0,r.kt)("p",null,"We have also developed a tutorial for using the GBADs API in R: ",(0,r.kt)("a",{parentName:"p",href:"https://gbadskedoc.org/docs/GBADsAPITutorial"},"Accessing the GBADs API in R")),(0,r.kt)("h3",{id:"s3-buckets"},"S3 Buckets"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What is an Amazon S3 Bucket?")," "),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"},"Amazon Simple Storage Service (S3) Bucket")," is a cloud object storage service that allows you to store data and other digital objects in the cloud. "),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Data from the API is also available via Amazon S3 buckets. Using the S3 URL, users can download csv versions of the data. In addition, we will store files that are used by GBADs that cannot be stored in RDS tables such as shapefiles, images, intermediate data files produced by models, data from meta-analyses and any other data that cannot be structured into an RDs table. "),(0,r.kt)("p",null,"The S3 URL will be used as a unique identifier for the data, and will be available in a dataset's metadata. The S3 URL will then be discoverable through the GBADs metadata API, and eventually the data catalogue user interface (coming soon)."),(0,r.kt)("p",null,"Ethiopia CSA S3 Files: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Species"),(0,r.kt)("th",{parentName:"tr",align:null},"S3 link to instructions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Camels"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/camels-region-instructions.pdf"},"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/camels-region-instructions.pdf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cattle"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/cattle-region-instructions.pdf"},"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/cattle-region-instructions.pdf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Donkeys"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/donkeys-region-instructions.pdf"},"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/donkeys-region-instructions.pdf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Goats"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/goats-region-instructions.pdf"},"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/goats-region-instructions.pdf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Horses"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/horses-region-instructions.pdf"},"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/horses-region-instructions.pdf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mules"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/mules-region-instructions.pdf"},"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/mules-region-instructions.pdf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Poultry"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/poultry-region-instructions.pdf"},"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/poultry-region-instructions.pdf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sheep"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/sheep-region-instructions.pdf"},"https://gbads-eth.s3.ca-central-1.amazonaws.com/CSA/sheep-region-instructions.pdf"))))),(0,r.kt)("h3",{id:"gbads-data-portal-interface"},"GBADs Data Portal Interface"),(0,r.kt)("h2",{id:"searching-for-data-in-the-knowledge-engine"},"Searching for data in the Knowledge Engine"),(0,r.kt)("p",null,"To use the data in the Knowledge Engine, you need to be able to find it. The search functionality of the data is built using a metadata pipeline. "),(0,r.kt)("p",null,"Each type of data has unique metadata that describes it. For more information about the metadata please visit the ",(0,r.kt)("a",{parentName:"p",href:"https://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/metadata"},"Metadata")," section of the Handbook. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The metadata API will be published soon with information about how to discover data sources stored in the GBADs KE based on descriptive information that describes data")))}u.isMDXComponent=!0},2943:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/GBADsAPI-5de3e57b0e289dd38df00859196e704f.png"},6429:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gbadsDataPortalUI-405407347318ca6b5ead1129d65a0a46.png"}}]);