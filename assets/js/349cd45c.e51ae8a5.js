"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[151],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),h=l,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7541:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const r={title:"Accessing the GBADs API in R",author:"Kassy Raymond",date:"19/09/2022",output:"html_document"},s=void 0,o={unversionedId:"GBADsAPITutorial",id:"GBADsAPITutorial",title:"Accessing the GBADs API in R",description:"\x3c!-- `{r setup, include=FALSE}",source:"@site/docs/GBADsAPITutorial.md",sourceDirName:".",slug:"/GBADsAPITutorial",permalink:"/GBADsAPITutorial",draft:!1,tags:[],version:"current",frontMatter:{title:"Accessing the GBADs API in R",author:"Kassy Raymond",date:"19/09/2022",output:"html_document"},sidebar:"tutorialSidebar",previous:{title:"One Health Symposium Presentation May 2022",permalink:"/One-Health-Presentation"}},i={},u=[{value:"Documentation",id:"documentation",level:2},{value:"Some important concepts:",id:"some-important-concepts",level:3},{value:"Required packages",id:"required-packages",level:2},{value:"Using the <code>httr</code> library to get data",id:"using-the-httr-library-to-get-data",level:2},{value:"The basics of <code>httr</code> and getting a list of of available tables",id:"the-basics-of-httr-and-getting-a-list-of-of-available-tables",level:3},{value:"Getting information about a table",id:"getting-information-about-a-table",level:3},{value:"Getting the data table",id:"getting-the-data-table",level:3},{value:"Using functions to get data",id:"using-functions-to-get-data",level:2},{value:"References",id:"references",level:3},{value:"Tutorial built with:",id:"tutorial-built-with",level:3}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"documentation"},"Documentation"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"For documentation about the API and useful commands you can visit ",(0,l.kt)("a",{parentName:"em",href:"http://gbadske.org:9000/dataportal/"},"http://gbadske.org:9000/dataportal/"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Refer to Deb's presentation for more theory on APIs and why you should use them.")),(0,l.kt)("h3",{id:"some-important-concepts"},"Some important concepts:"),(0,l.kt)("p",null,"An API stands for Application Programming Interface. An API is an interface between two programs that allows you to request data from a server and get it back to your program. The GBADs API is a web-based API made with W3's HyperText Transfer Protocol (HTTP) which allows webservers to exchange data. "),(0,l.kt)("p",null,"When making an API call you create a ",(0,l.kt)("em",{parentName:"p"},"request")," (we'll call it a command) that consists of a URL, path to endpoint, and query: "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Base URL")," (aka the Request URL): This is the URL that you need to access the API."),(0,l.kt)("p",null,"For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"http://gbadske.org:9000/GBADsTables/")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"http://gbadske.org:9000/GBADsLivestockPopulation/")," are base URLs for the GBADs API."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Endpoint"),": This is where the data that you want is located. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Query"),": Indicated by a '?', this is how you ask for the specific data you want. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),": "),(0,l.kt)("p",null,"This command provides all tables available in the GBADs API:  ",(0,l.kt)("a",{parentName:"p",href:"http://gbadske.org:9000/GBADsTables/public?format=html"},"http://gbadske.org:9000/GBADsTables/public?format=html")),(0,l.kt)("p",null,"Broken down using the terminology above: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Base URL: ",(0,l.kt)("a",{parentName:"li",href:"http://gbadske.org:9000/GBADsTables/"},"http://gbadske.org:9000/GBADsTables/")),(0,l.kt)("li",{parentName:"ul"},"Endpoint: public"),(0,l.kt)("li",{parentName:"ul"},"Query: ?format=html")),(0,l.kt)("p",null,"Once you have your URL you can use the HTTP's ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," method for getting data. There are other HTTP methods, but ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," is the only one you'll need to know to get data from the GBADs API. "),(0,l.kt)("h2",{id:"required-packages"},"Required packages"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"httr")," package to ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," data from the API. Since we sometimes also have to do some string handling, we also load the ",(0,l.kt)("inlineCode",{parentName:"p"},"stringr")," package (this is personal preference, you can also handle strings in base R but I like stringr, and I only use it in the functions section)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"library('httr')\nlibrary('stringr')\n")),(0,l.kt)("h2",{id:"using-the-httr-library-to-get-data"},"Using the ",(0,l.kt)("inlineCode",{parentName:"h2"},"httr")," library to get data"),(0,l.kt)("p",null,"In the next section we provide functions that help make creating the content URL for the request easier by automatating the creation of the url and handling of the response. This section provides an overview of how to understand the ",(0,l.kt)("inlineCode",{parentName:"p"},"httr")," library in R."),(0,l.kt)("h3",{id:"the-basics-of-httr-and-getting-a-list-of-of-available-tables"},"The basics of ",(0,l.kt)("inlineCode",{parentName:"h3"},"httr")," and getting a list of of available tables"),(0,l.kt)("p",null,"Calling the GBADsTables/public endpoint directly provides a list of tables. When we obtain this list we can know which tables are available, and what data we can access. "),(0,l.kt)("p",null,"First, we set up the content URL. Note that we are requesting the format to be in ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," so we can handle the response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},'url <- "http://gbadske.org:9000/GBADsTables/public?format=text"\n')),(0,l.kt)("p",null,"Then, we can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," method from ",(0,l.kt)("inlineCode",{parentName:"p"},"httr")," by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"GET()")," function. We call the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"res")," to stand for ",(0,l.kt)("inlineCode",{parentName:"p"},"response"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"res <- GET(url = url)\n")),(0,l.kt)("p",null,"Now, let's see what we get back: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"names(res)\n")),(0,l.kt)("p",null,"The important stuff: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"status_code")," provides us a code that tells us whether our request to the API was successful.\nIf we got a status of 204 it would indicate that there was no content returned. For a full list of response codes visit: ",(0,l.kt)("a",{parentName:"p",href:"https://restfulapi.net/http-status-codes/"},"https://restfulapi.net/http-status-codes/")," ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"content")," is the data from the API in raw binary code "))),(0,l.kt)("p",null,"Let's look at the ",(0,l.kt)("inlineCode",{parentName:"p"},"status_code"),": "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"res$status_code\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"status_code")," of 200 means that the request was successful. "),(0,l.kt)("p",null,"Now the content: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r,",metastring:"max.height='100px'}","max.height":"'100px'}"},"res$content\n")),(0,l.kt)("p",null,"The output is useful for a machine, but we need to translate this into human, please. The ",(0,l.kt)("inlineCode",{parentName:"p"},"content")," function from the ",(0,l.kt)("inlineCode",{parentName:"p"},"httr")," library makes this pretty easy. For more information about the ",(0,l.kt)("inlineCode",{parentName:"p"},"content")," function use ",(0,l.kt)("inlineCode",{parentName:"p"},"?content()")," to retrieve the docs. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"tables <- content(res)\ntables\n")),(0,l.kt)("p",null,"This is nice, but we should probably parse this into a list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r,",metastring:"max.height='100px'}","max.height":"'100px'}"},'as.list(strsplit(tables, ","))\n')),(0,l.kt)("p",null,"At last!\n",(0,l.kt)("strong",{parentName:"p"},"Our result is a list of tables that are available from the GBADs API. Each time a new table is added, or something is changed, you will get the most up-to-date list of tables using these 4 lines of code that we just reviewed:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r,",metastring:"eval = FALSE}",eval:!0,"":"","FALSE}":!0},'url <- "http://gbadske.org:9000/GBADsTables/public?format=text"\nres <- GET(url = url)\ntables <- content(res)\nas.list(strsplit(tables, ","))\n')),(0,l.kt)("h3",{id:"getting-information-about-a-table"},"Getting information about a table"),(0,l.kt)("p",null,"Now that we have a list of tables, we can see what columns are available in each table. Let's say we want data from the ",(0,l.kt)("inlineCode",{parentName:"p"},"livestock_countries_population_unfccc"),", or the population numbers from the UNFCCC. "),(0,l.kt)("p",null,"First, construct the URL. We can get to table content using: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"http://gbadske.org:9000/GBADsTable/public?")," ")),(0,l.kt)("p",null,"and specifying the table name and format: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"table_name=livestock_countries_population_unfccc&format=text")),(0,l.kt)("p",null,"So we end up with this: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"url_unfccc <- 'http://gbadske.org:9000/GBADsTable/public?table_name=livestock_countries_population_unfccc&format=text'\n")),(0,l.kt)("p",null,"Then we use ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," and check out the ",(0,l.kt)("inlineCode",{parentName:"p"},"status_code"),": "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"res_unfccc <- GET(url = url_unfccc)\nres_unfccc$status_code\n")),(0,l.kt)("p",null,"Now we can handle the response format: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"content(res_unfccc)\n")),(0,l.kt)("p",null,"Here we have country, species, year, population, and flag as the available columns."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Coming soon"),": functionality for metadata/description in the API. "),(0,l.kt)("p",null,"Now that we have the fields, we can go ahead and construct a query to ask for the actual data."),(0,l.kt)("h3",{id:"getting-the-data-table"},"Getting the data table"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"REMINDER")," FIND EXAMPLE COMMANDS ON ",(0,l.kt)("a",{parentName:"p",href:"http://gbadske.org:9000/dataportal"},"http://gbadske.org:9000/dataportal")),(0,l.kt)("p",null,"First, construct the url: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"url = ",(0,l.kt)("a",{parentName:"li",href:"http://gbadske.org:9000/GBADsPublicQuery/"},"http://gbadske.org:9000/GBADsPublicQuery/")),(0,l.kt)("li",{parentName:"ul"},"table_name = livestock_countries_population_unfccc")),(0,l.kt)("p",null,"The new part of this is the fields and query parts of the url:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fields = country,species,year,population"),(0,l.kt)("li",{parentName:"ul"},"query = In this case, we want all the data, so we can just leave the query empty. ")),(0,l.kt)("p",null,"Then, we specify the format: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"foramt = text ")),(0,l.kt)("p",null,"Putting it all together this is our URL: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"url_unfccc_data <- 'http://gbadske.org:9000/GBADsPublicQuery/livestock_countries_population_unfccc?fields=country,species,year,population&query=&format=text'\n")),(0,l.kt)("p",null,"Now, we can use ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," to get the data "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"res_unfccc_data <- GET(url_unfccc_data)\nunfccc_data <- content(res_unfccc_data)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"unfccc_data\n")),(0,l.kt)("p",null,"And there we have it! "),(0,l.kt)("p",null,"TO RECAP - that was only 3 lines of code: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r,",metastring:"eval = FALSE}",eval:!0,"":"","FALSE}":!0},"url_unfccc_data <- 'http://gbadske.org:9000/GBADsPublicQuery/livestock_countries_population_unfccc?fields=country,species,year,population&query=&format=text'\nres_unfccc_data <- GET(url_unfccc_data)\nunfccc_data <- content(res_unfccc_data)\n")),(0,l.kt)("p",null,"You can now visualize the data, or do whatever you'd like with it: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"library(ggplot2)\nlibrary(tidyverse)\n\nunfccc_data %>% \n  filter (species == 'Buffaloes') %>% \n  filter (country == 'Australia') %>% \n  ggplot(., aes(x = year, y = population)) +\n  geom_line() +\n  geom_point() +\n  ggtitle('Buffaloes in Australia', subtitle = sprintf('Data from: %s', str_wrap(url_unfccc_data))) +\n  theme(plot.subtitle=element_text(size=10, face=\"italic\", color=\"black\"))\n")),(0,l.kt)("p",null,"Now, the trickiest part of all that was. making the URLs. Check out the functions below to make your life easier when building those URLs"),(0,l.kt)("h2",{id:"using-functions-to-get-data"},"Using functions to get data"),(0,l.kt)("p",null,"To make getting data a little easier, we have made some functions to make coding a little easier. "),(0,l.kt)("p",null,"To get a list of all tables in the API, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_tables")," function. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},'get_tables <- function() {\n  \n  # The content url is where the tables are\n  content_url <- "http://gbadske.org:9000/GBADsTables/public?format=text"\n  \n  # GET from the httr module allows us to ask for data from the API\n  res <- GET(content_url)\n  \n  # Get the content by passing the res variable to the content command. \n  tables <- content(res, "text")\n  \n  # Split the content to a more usable format\n  tables <- as.list(strsplit(tables, ","))\n  \n  return(tables)\n}\n')),(0,l.kt)("p",null,"By using the function, you can simply call ",(0,l.kt)("inlineCode",{parentName:"p"},"get_tables()")," to get a list of tables available: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r,",metastring:"max.height='100px'}","max.height":"'100px'}"},"get_tables()\n")),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_table_fields")," function to get information about a table of interest. The ",(0,l.kt)("inlineCode",{parentName:"p"},"get_table_fields")," function works like this: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pass the function the table name that you want information about "),(0,l.kt)("li",{parentName:"ul"},"Builds the content URL using the table name"),(0,l.kt)("li",{parentName:"ul"},"Asks for the data using GET from the httr package "),(0,l.kt)("li",{parentName:"ul"},"Checks to see that the request was valid by using the response status code "),(0,l.kt)("li",{parentName:"ul"},"If the status code is valid, parse the content recieved from the response and return the data"),(0,l.kt)("li",{parentName:"ul"},"If the status code is not valid, print a message")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"get_table_fields <- function(table_name) {\n  # Pass the function the table name that you want information about \n  \n  # Build the url \n  content_url = paste('http://gbadske.org:9000/GBADsTable/public?table_name=',table_name,'&format=text', sep = '')\n  \n  # Ask for the data \n  res = GET(content_url)\n    \n  if (res$status_code == 200) {\n    res_content = content(res, 'text')\n    res_list = as.list(strsplit(res_content, \",\"))\n    \n    # Return the response\n    return(res_list)\n  }\n  \n  else {\n    print('Response status was not 200. Could not process request.')\n  }\n  \n}\n")),(0,l.kt)("p",null,"Trying out the function: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"get_table_fields('livestock_countries_population_unfccc')\n")),(0,l.kt)("p",null,"In the livestock_countries_population_unfccc table there are 5 columns - country, species, year, population, flag"),(0,l.kt)("p",null,"Using the get_data function, you can specify the table_name, fields, and query to get the data from the API:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pass the function the table_name "),(0,l.kt)("li",{parentName:"ul"},"Optional: pass the function fields and query"),(0,l.kt)("li",{parentName:"ul"},"The function does a series of checks to see which parameters were passed "),(0,l.kt)("li",{parentName:"ul"},"The content URL is built according to what is passed"),(0,l.kt)("li",{parentName:"ul"},"A request is made for data according to the content url"),(0,l.kt)("li",{parentName:"ul"},"The response to the request is returned")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r,",metastring:"max.height='100px'}","max.height":"'100px'}"},"get_data <- function(table_name, fields, query) {\n  \n  # Check to see if a table name was provided \n  if (c(missing(table_name))) {\n    stop('Provide a table name.')\n  }\n  \n  base_url = 'http://gbadske.org:9000/GBADsPublicQuery/'\n  \n  # Create API call in the following situations\n  # if there was no query or fields provided\n  if ((missing(query) & missing(fields))) {\n    content_url = paste(base_url,table_name,'?fields=&query=&format=text', sep='')\n  } \n  # if fields were provided but no query\n  else if (missing(query))  {\n    content_url = paste(base_url,table_name,'?fields=',fields,'&query=&format=text', sep='')\n  } \n  # if a query was provided but no fields were specified \n  else if (missing(fields)) {\n    stop('You cannot provide a query with no fields specified')\n  } \n  # if query and fields were provided \n  else {\n    content_url = paste(base_url,table_name,'?fields=',fields,'&query=',query,'&format=text', sep='')\n  }\n  \n  # Ask for the data \n  print(content_url)\n  res = GET(content_url)\n    \n  if (res$status_code == 200) {\n    # Return the response\n    return(res)\n  }\n  \n  else {\n    print('Response status was not 200. Could not process request.')\n  }\n}\n")),(0,l.kt)("p",null,"Testing out the function to get the livestock_countries_population_unfccc data "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"res_unfccc_all <- get_data('livestock_countries_population_unfccc', fields='country,species,year,population')\ntab_unfccc_all <- content(res_unfccc_all)\n")),(0,l.kt)("p",null,"See the table: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"tab_unfccc_all\n")),(0,l.kt)("p",null,"Try a more complex query: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"table_name = livestock_countries_population_unfccc"),(0,l.kt)("li",{parentName:"ul"},"fields = country,species,year,population"),(0,l.kt)("li",{parentName:"ul"},"query for data in 2008")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"res_unfccc_2008 <- get_data('livestock_countries_population_unfccc', fields = 'country,species,year,population', query = 'year=2008')\nunfccc_2008_tab <- content(res_unfccc_2008)\n")),(0,l.kt)("p",null,"See the table: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"unfccc_2008_tab\n")),(0,l.kt)("p",null,"Try another query: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get data for Canada in the year 2008")),(0,l.kt)("p",null,"Constructing this query string is a little trickier. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Canada is a string, so it must be surrounded by single quotation marks. "),(0,l.kt)("li",{parentName:"ul"},"In R, when passing a string in quotes to a function, we have to use the escape character '","\\","'. For example, country=","\\","'Canada","\\","'"),(0,l.kt)("li",{parentName:"ul"},"We are querying for both a year and a country, we can use AND in the query to ask for both. Before and after AND use '%20', which is hexidemial for a space, to denote the space in the URL. For example, country=","\\","'Canada","\\","'%20AND%20year=2008")),(0,l.kt)("p",null,"Putting this together we get ",(0,l.kt)("inlineCode",{parentName:"p"},"query = 'country=\\'Canada\\'%20AND%20year=2008")),(0,l.kt)("p",null,"Now you can call the function as usual, using the query string we just built:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"# Call the function \nres_unfccc <- get_data('livestock_countries_population_unfccc', fields = 'country,species,year,population', query = 'country=\\'Canada\\'%20AND%20year=2008')\ntab <- content(res_unfccc)\n")),(0,l.kt)("p",null,"See the result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"tab\n")),(0,l.kt)("p",null,"Try another query, specifying a species of interest"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get data for Canada for Sheep in the year 2008")),(0,l.kt)("p",null,"Using the same rules as before, we can build the query string"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"query = 'country=\\'Canada\\'%20AND%20year=2008%20AND%20species=\\'Sheep\\'")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"# Call the function \nres_unfccc_sheep <- get_data('livestock_countries_population_unfccc', fields = 'country,species,year,population', query = 'country=\\'Canada\\'%20AND%20year=2008%20AND%20species=\\'Sheep\\'')\ntab <- content(res_unfccc_sheep)\n")),(0,l.kt)("p",null,"See the result: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"tab\n")),(0,l.kt)("p",null,"With the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_data")," building the content url, sending a request, and getting a response is a lot easier! Have fun playing with the API! "),(0,l.kt)("h3",{id:"references"},"References"),(0,l.kt)("p",null,"Format and explanations of this tutorial were inspired by ",(0,l.kt)("a",{parentName:"p",href:"https://www.r-bloggers.com/2015/11/accessing-apis-from-r-and-a-little-r-programming/"},"https://www.r-bloggers.com/2015/11/accessing-apis-from-r-and-a-little-r-programming/")),(0,l.kt)("h3",{id:"tutorial-built-with"},"Tutorial built with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-{r}"},"sessionInfo()\n")))}c.isMDXComponent=!0}}]);