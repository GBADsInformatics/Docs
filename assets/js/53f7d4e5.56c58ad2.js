"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[7386],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,h=u["".concat(l,".").concat(c)]||u[c]||p[c]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:11},o="Organizing Data in Spreadsheets",s={unversionedId:"Data-Governance-Handbook-for-GBADs/dataBestPractices",id:"Data-Governance-Handbook-for-GBADs/dataBestPractices",title:"Organizing Data in Spreadsheets",description:"If you are reading this, you probably spend a lot of timing dealing with data. You might collect it, clean it, model it, share it, attempt to interpret it and then do the whole thing over again. When you recieve data from a collegue, you might try to clean it again (even if it's already been cleaned), try to interpret it and might even have to write several emails to interpret the data.",source:"@site/docs/Data-Governance-Handbook-for-GBADs/dataBestPractices.md",sourceDirName:"Data-Governance-Handbook-for-GBADs",slug:"/Data-Governance-Handbook-for-GBADs/dataBestPractices",permalink:"/docs/docs/Data-Governance-Handbook-for-GBADs/dataBestPractices",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Best Practices for Coding",permalink:"/docs/docs/Data-Governance-Handbook-for-GBADs/codeBestPractices"},next:{title:"Examples",permalink:"/docs/docs/Data-Governance-Handbook-for-GBADs/examples"}},l={},d=[{value:"Spreadsheets and datasets",id:"spreadsheets-and-datasets",level:3},{value:"Data structure",id:"data-structure",level:3},{value:"Saving spreadsheets",id:"saving-spreadsheets",level:3},{value:"Standard date and time convention",id:"standard-date-and-time-convention",level:3},{value:"Large number conventions",id:"large-number-conventions",level:3},{value:"File naming convention",id:"file-naming-convention",level:3},{value:"Common Errors",id:"common-errors",level:3},{value:"7 common errors that make spreadsheets messy",id:"7-common-errors-that-make-spreadsheets-messy",level:4},{value:"Further reading recommendations",id:"further-reading-recommendations",level:3}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"organizing-data-in-spreadsheets"},"Organizing Data in Spreadsheets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{epigraph}"},'"Garbage in, Garbage out"\n')),(0,r.kt)("p",null,"If you are reading this, you probably spend a lot of timing dealing with data. You might collect it, clean it, model it, share it, attempt to interpret it and then do the whole thing over again. When you recieve data from a collegue, you might try to clean it again (even if it's already been cleaned), try to interpret it and might even have to write several emails to interpret the data. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In this part of the handbook, we tell you how you can better organize your data in spreadsheets to create higher quality data, leading to higher quality models. We also define some standard practices for inputting data of specific types including dates and long numbers.")),(0,r.kt)("h3",{id:"spreadsheets-and-datasets"},"Spreadsheets and datasets"),(0,r.kt)("p",null,"Spreadsheets, such as those made in Microsoft Excel and Google Sheets are common for storing, entering, sharing and manipulating data from research. Spreadsheets are commonly shared to communicate research results and used as input data for models or statistical analysis. While spreadsheets are an integral part of the data lifecycle, they must be structured properly to ensure that mistakes are not made that lead to data being unable to be reused or interpreted. Small mistakes in spreadsheets can leave us in situations where data are hard to understand, hard to analyze and time consuming to clean."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{warning}",metastring:"Contact the GBADs Informatics team if...",Contact:!0,the:!0,GBADs:!0,Informatics:!0,team:!0,"if...":!0},"Please contact the GBADs Informatics team if you are a GBADs member who has many spreadsheets of 'untidy' data! We can consult, and think about how to create a program that will wrangle and transform your data into a tidy format! \n")),(0,r.kt)("p",null,"Structuring data properly in spreadsheets leads to data being more reusable and interoperable (FAIR), leading to higher quality data and ultimately better research. By setting up spreadsheets to be ingested in statistical softwares or libraries from the get-go we can minimize confusion and simplify our workflows. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"Learning Objectives",Learning:!0,Objectives:!0},"* Readers should understand how to structure a dataset in a spreadsheet in a manner that supports FAIR data principles\n* Readers should understand how to structure their dataset to preserve the semantics (underlying meaning) of the data \n* Readers should understand how to structure dates and long numbers in spreadsheets and why it is important that these data are machine readable \n* Readers should understand common mistakes that make messy datasets and how to avoid them \n")),(0,r.kt)("h3",{id:"data-structure"},"Data structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{epigraph}"},'"Tidy datasets are all alike, but every messy dataset is messy in its own way." \n\n-- [Hadley Wickham](http://hadley.nz/)\n')),(0,r.kt)("p",null,"In general, a tidy or clean dataset is made up of the following ({numref}",(0,r.kt)("inlineCode",{parentName:"p"},"tidyData"),") {cite}",(0,r.kt)("inlineCode",{parentName:"p"},"wickham_R4DS_2017"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{panels}"},":column: col-4\n:card: border-2\nColumns (Variables)\n^^^\nColumns are a group of cells aligned vertically. In datasets, columns are variables, where each cell holds a piece of information about a given attribute. \n---\nRows (Observations)\n^^^\nRows are a group of cells that are aligned horizontally, where each row is an observation. \n---\nCells (Values)\n^^^\nIn datasets, each row is an observation and each cell in that row holds the value of the column where it falls. \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{figure}",metastring:"/images/tidyDataWickham.png","/images/tidyDataWickham.png":!0},":name: tidyData\n\nRules that make a tidy dataset: columns are variables, observations are rows and values are cells. Image and caption from {cite}`wickham_R4DS_2017`. \n")),(0,r.kt)("p",null,"Sticking to a tidy data format enables data reusability, ensures consistancy (which improves data quality), and helps to understand the underlying meaning (semantics) of each of the values in the spreadsheet. Having columns as variables and rows as observations allows us to know what a value means based on it's relation to the variables and observations."),(0,r.kt)("p",null,"FAIR data is tidy data - tidy data is reusable and interoperable by nature. Tidy data is more findable, because headers are well defined making metadata creation easier. Fundamentally, we can draw more information from tidy data. "),(0,r.kt)("h3",{id:"saving-spreadsheets"},"Saving spreadsheets"),(0,r.kt)("p",null,"Datasets in spreadsheets can be saved as an excel file or in ",(0,r.kt)("inlineCode",{parentName:"p"},".csv")," (comma separated value) or ",(0,r.kt)("inlineCode",{parentName:"p"},".txt")," format. The latter two are preferred as they are easier to read into programming libraries in R and python. "),(0,r.kt)("h3",{id:"standard-date-and-time-convention"},"Standard date and time convention"),(0,r.kt)("p",null,"Without a standard convention, dates can present a lot of ambiguity. For example, 01/11 could be interpreted as January 2011, November 2001 or November 1st. For this reason, it is important to use an internationally accepted date standard so we can relabily understand our data. "),(0,r.kt)("p",null,"GBADs will use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO 8601")," standard for dates. ISO 8601 is an internationally accepted standard that uses the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Gregorian_calendar"},"Gregorian calendar"),". "),(0,r.kt)("p",null,"Dates are represented as:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YYYY-MM-DD or YYYYMMDD")),(0,r.kt)("p",null,"The ISO 8601 standard uses the 24 hour clock. Times can therefore be entered as: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T","[hh:mm:ss]"," ")),(0,r.kt)("p",null,"or if seconds are not applicable: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T","[hh:mm]")),(0,r.kt)("p",null,"and if minutes are not applicable: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T","[hh]")),(0,r.kt)("p",null,"Since GBADs is a global organization, it is important to specify time zones entering time into spreadsheets. Time zones are specified following the date by specifying how far behind or ahead the time zone is from UTC."),(0,r.kt)("p",null,"For example:\nSaturday 10 July 2021 at 13:48 EDT is written as 2021-07-10T13:48-4:00"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"Different calendars for different countries",Different:!0,calendars:!0,for:!0,different:!0,countries:!0},":class: tip\n\nWhen analyzing datasets from different countries be aware that not all parts of the world use the Gregorian calendar. \n\nFor example, Ethiopia uses the Ethiopian calendar, which is different from the Gregorian calendar. This puts Ethiopia 7 years behind the calendar used in Europe and North America. [Here](https://melaku.ml/) is a tool that allows you to convert from the Gregorian to the Ethiopian calendar. \n")),(0,r.kt)("h3",{id:"large-number-conventions"},"Large number conventions"),(0,r.kt)("p",null,"Depending on the country, there are different conventions for large numbers. "),(0,r.kt)("p",null,"For example the number 133333.450 can be represented different ways: "),(0,r.kt)("p",null,"In English speaking countries the number could look like this: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"133,333.450 ")),(0,r.kt)("p",null,"In non-English speaking countries, like this: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"133.333,450")),(0,r.kt)("p",null,"So - the same number but represented 3 different ways. This leaves a lot up to interpretation, especially since the default when reading most files into statistical programming languages assumes that a comma specifies a new column. And because much of the work GBADs does relies on programming languages such as R and python, it is really important to structure our numbers so that they can be easily read in and interpreted and read by machines too! "),(0,r.kt)("p",null,"To keep things clear we should structure our large numbers ",(0,r.kt)("strong",{parentName:"p"},"without")," commas, and reserve periods to specify a decimal place. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"If you see a comma where you think it shouldn't be...",If:!0,you:!0,see:!0,a:!0,comma:!0,where:!0,think:!0,it:!0,"shouldn't":!0,"be...":!0},":class: tip\n\nIf the formatting of large numbers is unclear to you, ask the data owner for clarification! If the data owner is part of the GBADs programme, gently suggest that they use the standards used and set forth by the program (you could even send this chapter along). \n\n")),(0,r.kt)("h3",{id:"file-naming-convention"},"File naming convention"),(0,r.kt)("p",null,"When naming files you should be consistent, be descriptive, avoid characters and spaces, and include the date (preferably using a standard such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO 8601"),". For the purposes of file naming convention, we will omit the dashes between YYYY-MM-DD. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples of good file naming conventions:")),(0,r.kt)("p",null,"When dealing with data downloaded from organizations: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YYYYMMDD_organization_topic_species_country",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"20210617_FAO_ProductionPrices_Poultry_Ethiopia.csv"),(0,r.kt)("li",{parentName:"ul"},"20210617_WorldBank_LSMS_Ethiopia.csv")))),(0,r.kt)("p",null,"Where YYYYMMDD is the date that you downloaded the file."),(0,r.kt)("p",null,"If it is a metadata file, you should name the file with 'metadata' and the file name as above to know which metadata file corresponds to the proper dataset. For example: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"20210617_FAO_ProductionPrices_Poultry_Ethiopia_metadata.csv"),(0,r.kt)("li",{parentName:"ul"},"20210617_WorldBank_LSMS_Ethiopia_metadata.csv")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples of poorly named files:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FAO Production Prices - downloaded by Kassy on April 25.csv"),(0,r.kt)("li",{parentName:"ul"},"Ethiopian production prices from the fao stat website.csv"),(0,r.kt)("li",{parentName:"ul"},"ETHPRODPRICES_GOODCOPY.csv")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-{admonition}",metastring:"Dates first",Dates:!0,first:!0},":class: tip\n\nPutting the date first in a file allows you to easily organize files in a directory or folder by ascending or descending date. \n\n")),(0,r.kt)("h3",{id:"common-errors"},"Common Errors"),(0,r.kt)("p",null,"Formatting, highlighting and bolding should be avoided. Here's why making spreadsheets pretty causes headaches in the data analysis lifecycle: "),(0,r.kt)("h4",{id:"7-common-errors-that-make-spreadsheets-messy"},"7 common errors that make spreadsheets messy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Multiple tables in one spreadsheet"),(0,r.kt)("li",{parentName:"ol"},"Bad null values (a zero does not mean null)"),(0,r.kt)("li",{parentName:"ol"},"Cells are merged "),(0,r.kt)("li",{parentName:"ol"},"Units of measurement are included in values instead of column names "),(0,r.kt)("li",{parentName:"ol"},"Formatting is used to represent information "),(0,r.kt)("li",{parentName:"ol"},"Cells contain more than one piece of information "),(0,r.kt)("li",{parentName:"ol"},"Standard date format is not used ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"1. Multiple tables in one spreadsheet"))),(0,r.kt)("p",null,"Having multiple tables in one spreadsheets often leads to unnecessary data cleaning for any further data processing. Multiple tables in one spreadsheet leads to confusion when we share the spreadsheet or come back to it at a later date. If a row is an observation, creating multiple tables goes against this notion, lowering the quality and ability to interpret the data set. "),(0,r.kt)("p",null,"In the example below, which is made up of fabricated data, there are 4 tables in a single spreadsheet. In each table, the 'item' is the observation and the number of live animals in a given year is what is being measured. However, because of the way the spreadsheet is set up, it is difficult know whether both of the upper tables are associated with Canada, or if the table on the right is missing a header. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210615_dataBestPractices_MultipleTablesBAD.png",alt:"MultipleTablesBad"})),(0,r.kt)("p",null,"A better way to set up the data would be like this: "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://gbadske.org/Documentation/DataGovernanceHandbook/_images/20210614_dataBestPractices_MultipleTablesGOOD.png",alt:"MultipleTablesGood"})),(0,r.kt)("p",null,"Here we see that all of the information is still provided, but each row is an observation for a given country, item and year. In addition to improving the interpretabiltiy of the data, this data can now be inputted into a statistical software such as R without extensive data cleaning. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"2. Bad null values"))),(0,r.kt)("p",null,'Missing or null values should be denoted in a standard way that is distinguishable from a quantitative value of 0. This way, the dataset reader will understand which data are missing or unknown and which have a value of 0. The most important thing when recording missing values is consistency; if you decide to use "NA" to denote missing values, ensure that you do not switch to lower case ("na") or "Not Applicable" later in the spreadsheet. '),(0,r.kt)("p",null,'Depending on the statisical software, the meaning of "NA" can vary. For example, in R, ',(0,r.kt)("inlineCode",{parentName:"p"},"NA")," is a reserved term for a missing value. The way ",(0,r.kt)("inlineCode",{parentName:"p"},"NA")," values are represented in python varies depending on the library being used. In pandas (a popular python library for data analysis, cleaning and wrangling), ",(0,r.kt)("inlineCode",{parentName:"p"},"NA")," values are represented by ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),". However, as long as we are consistent in the way we represent ",(0,r.kt)("inlineCode",{parentName:"p"},"NA")," values when inputting and analyzing data, we can quickly change between formats depending on the statistical or programming software that we chose. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"3. Cells are merged"))," "),(0,r.kt)("p",null,"Merging cells goes against the notion of rows being observations and each column being a variable. Not only does merging cells go against these principles, it makes it impossible to sort columns and rows, cause errors when reading in data to statistical softwares and introduces the potential of misinterpreting data or losing information. For example, using merged cells to link two rows together causes confusion when you come back to look at the data. Or, if the merged formatting is lost, you bring the potential of losing an entire observation or variables in a given observation. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"4. Units of measurement are included in values instead of column names"))),(0,r.kt)("p",null,"As each column represents a variable, the units of measure should be consistent through that entire column. Therefore, when applicable, you should include the unit of measure in the column header. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"5. Formatting is used to represent information"))),(0,r.kt)("p",null,"Highlighting cells and bolding or italicizing information should be avoided as a means to represent information in a dataset. This is problematic because if the formatting is lost, you lose valuable information. If you would like to include the information articulated by the formatting in your model or analysis, you would be required to clean the sheet in excel before reading it in your software. "),(0,r.kt)("p",null,"For example, when testing samples for disease, one might use highlighting to show which samples came back positive. If the formatting is lost, or someone does not know the context of what the highlight means, this information is lost. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"6. Cells contain more than one piece of information"))),(0,r.kt)("p",null,"When cells contain more than one piece of information, it limits how you can analyze a pre-existing dataset and usually leads to more data cleaning. For example, you might be reporting breed types and counts in your dataset."),(0,r.kt)("p",null,"In this case you would want to report the breed and count in separate columns like this: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Breed"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Count"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Farm"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DateCounted"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Aberdeen Angus"),(0,r.kt)("td",{parentName:"tr",align:"center"},"20"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Canadian Cattle Farms"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Abergele"),(0,r.kt)("td",{parentName:"tr",align:"center"},"60"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Canadian Cattle Farms"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Limousin"),(0,r.kt)("td",{parentName:"tr",align:"center"},"10"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Canadian Cattle Farms"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")))),(0,r.kt)("p",null,"Rather than reporting them in the same cell, like this: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"NumberOfBreed"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Farm"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DateCounted"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"20 Aberdeen Angus"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Canadian Cattle Farms"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"60 Abergele"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Canadian Cattle Farms"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"10 Limousin"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Canadian Cattle Farms"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-06-01")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"7. Standard date format is not used"))),(0,r.kt)("p",null,"When inputting dates, use a standard such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO 8601")," (YYYY-MM-DD). This allows you to sort by date, improve interpretability and if needed, convert into other date formats easily. Refer back to the ",(0,r.kt)("strong",{parentName:"p"},"Standard date and time convention")," section of this section for more information about how GBADs approaches inputting dates and times. "),(0,r.kt)("p",null,"Also - when using dates be sure to specify what the date means. A column header simply entitled 'date' does not provide much context. For example, does date mean the date the data was entered into the spreadsheet? The date a sample was collected? The date a sample was run in the lab? Be sure that other researchers (and future you) know what you were talking about! "),(0,r.kt)("h3",{id:"further-reading-recommendations"},"Further reading recommendations"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://r4ds.had.co.nz/"},"R for Data Science by Hadley Wickham")),(0,r.kt)("p",null,"Authors: Kassy Raymond and K. Marie McIntyre"))}p.isMDXComponent=!0}}]);