"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[888],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>p});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=o.createContext({}),u=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(a),p=r,m=h["".concat(d,".").concat(p)]||h[p]||c[p]||n;return a?o.createElement(m,i(i({ref:t},l),{},{components:a})):o.createElement(m,i({ref:t},l))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_position:12},i="Data Contributor Guide",s={unversionedId:"Data-Governance-Handbook-for-GBADs/dataContributors",id:"Data-Governance-Handbook-for-GBADs/dataContributors",title:"Data Contributor Guide",description:"The data contributor guide gives information about how you can input data into our system using our data forms.",source:"@site/docs/Data-Governance-Handbook-for-GBADs/dataContributors.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/dataContributors",permalink:"/docs/Data-Governance-Handbook-for-GBADs/dataContributors",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Data Licenses, Privacy and Security",permalink:"/docs/Data-Governance-Handbook-for-GBADs/dataOwnership"},next:{title:"Data and Data Management Audits and Reviews",permalink:"/docs/Data-Governance-Handbook-for-GBADs/dataAudits"}},d={},u=[{value:"Why metadata production is important",id:"why-metadata-production-is-important",level:2},{value:"Questions about your data to generate metadata",id:"questions-about-your-data-to-generate-metadata",level:2}],l={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-contributor-guide"},"Data Contributor Guide"),(0,r.kt)("p",null,"The data contributor guide gives information about how you can input data into our system using our data forms. "),(0,r.kt)("p",null,"GBADs aims to make data FAIR, and that starts with ensuring that we have stringent metadata production and that provenance of data resources is well documented. So, when you are contributing data, it is important that we collect information about it that allows for the reuse and interoperability of data resources that are contributed. "),(0,r.kt)("h2",{id:"why-metadata-production-is-important"},"Why metadata production is important"),(0,r.kt)("p",null,"Production of metadata is important because it enables the reuse of data. Metadata can be thought of your data 'user guide' - it should tell you everything you need to know to determine whether the data is suitable for your analysis, and how the data came to be. Sometimes, we find ourselves in situations where we come across some data and have no idea where the data originated, the experimental methods that were used for data collection, or which models created the data. Even more troubling, is when units of measure aren't provided or column headers are ambiguous. Metadata is the solution to this problem. So, when you input your data into the GBADs system, or provide API information from another source, we will ask you to fill out a form that will autogenerate metadata so that you (and others) can reuse the data and create accurate insights, models and data driven decisions. The production of granular metadata ultimately leads to higher quality data. "),(0,r.kt)("h2",{id:"questions-about-your-data-to-generate-metadata"},"Questions about your data to generate metadata"),(0,r.kt)("p",null,"Depending on the type of data that you are inputting, the questions might vary slightly. For example, if you are inputting data from a model output, we will need to know different information than if you are inputting data from household surveys. As we learn more about the data sources that GBADs will broker and the data that our users use, our metadata production will evolve. "),(0,r.kt)("p",null,"We are adapting the Guidelines for Accurate and Trasparent Health Estimates Reporting (GATHER guidelines) for preliminary metadata production. "),(0,r.kt)("p",null,"Here are the questions for every data set that enters the GBADs system:\nPlease note that these questions were adapted from GATHER guidelines, and in some cases are identical to GATHER.  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Define the indicator(s), populations (geographic entities, animal species), and time period(s) for which estimates were made."),(0,r.kt)("li",{parentName:"ol"},"List funding sources for the work."),(0,r.kt)("li",{parentName:"ol"},"Describe how the data were identified and accessed. "),(0,r.kt)("li",{parentName:"ol"},"Specify inclusion/exclusion criteria. Identify all ad-hoc exclusions. "),(0,r.kt)("li",{parentName:"ol"},"Provide information on all included data sources and their main characteristics. For each data source used, report reference information or contact name/institution, population represented, data collection method, year(s) of data collection, sex and age range, diagnostic criteria or measurement method, and sample size, as relevant. "),(0,r.kt)("li",{parentName:"ol"},"Identify and describe any categories of input data that have potentially important biases (e.g., based on characteristics listed in item 5)."),(0,r.kt)("li",{parentName:"ol"},"Describe and give sources for any other data inputs. "),(0,r.kt)("li",{parentName:"ol"},"Provide all data inputs in a file format from which data can be efficiently extracted (e.g., a spreadsheet rather than a PDF or API call that was used to extract data). For any data inputs that cannot be shared because of ethical or legal reasons, such as third-party ownership, provide a contact name or the name of the institution that retains the right to the data.")),(0,r.kt)("p",null,"If the data were currated using a model, or data analysis or if data were cleaned, we ask that you also answer the following: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Provide a detailed description of all steps of the analysis, including mathematical formulae. This description should cover, as relevant, data cleaning, data pre-processing, data adjustments and weighting of data sources, and mathematical or statistical model(s). A GitHub repo to the appropriate code is also required. "),(0,r.kt)("li",{parentName:"ol"},"Provide the results of an evaluation of model performance, if done, as well as the results of any relevant sensitivity analysis."),(0,r.kt)("li",{parentName:"ol"},"Describe methods for calculating uncertainty of the estimates. State which sources of uncertainty were, and were not, accounted for in the uncertainty analysis.")),(0,r.kt)("p",null,"Each of these questions will be presented in a form on the GBADs data portal, where you fill in each of the fields according to the questions. "),(0,r.kt)("p",null,"We understand that some data contributors will already have their own metadata produced. In these cases we encourage individuals to use their metadata to fill in the fields provided."))}c.isMDXComponent=!0}}]);