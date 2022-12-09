"use strict";(self.webpackChunkdocumentation_server=self.webpackChunkdocumentation_server||[]).push([[2279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=d(n),c=o,m=p["".concat(s,".").concat(c)]||p[c]||u[c]||i;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={id:"Dockerizing-Dashboards",title:"Guide to Dockerizing Dashboards",author:"William Fitzjohn",sidebar_position:12},r=void 0,l={unversionedId:"Dockerizing-Dashboards",id:"Dockerizing-Dashboards",title:"Guide to Dockerizing Dashboards",description:"Author: @WilliamFitzjohn - Contact me for assistance.\\",source:"@site/docs/Dockerizing-Dashboards.md",sourceDirName:".",slug:"/Dockerizing-Dashboards",permalink:"/docs/Dockerizing-Dashboards",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"Dockerizing-Dashboards",title:"Guide to Dockerizing Dashboards",author:"William Fitzjohn",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"One Health Symposium Presentation May 2022",permalink:"/docs/One-Health-Presentation"},next:{title:"Accessing the GBADs API in R",permalink:"/docs/GBADsAPITutorial"}},s={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code Preparation",id:"code-preparation",level:2},{value:"The Dockerfile",id:"the-dockerfile",level:2},{value:"Confidential Files",id:"confidential-files",level:2},{value:"Building the Image",id:"building-the-image",level:2},{value:"Running the Dashboard",id:"running-the-dashboard",level:2},{value:"Publishing the Dashboard",id:"publishing-the-dashboard",level:2}],h={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Author: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WilliamFitzjohn"},"@WilliamFitzjohn")," - Contact me for assistance.\\\nThis is a guide outlining the steps taken to create a Docker image from a plotly dashboard running through Flask."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#code-preparation"},"Code Preparation")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#the-dockerfile"},"The Dockerfile")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#confidential-files"},"Confidential Files")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#building-the-image"},"Building the Image")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#running-the-dashboard"},"Running the Dashboard")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#publishing-the-dashboard"},"Publishing the Dashboard"))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This guides assumes you already have a plotly dashboard established.\\\nYou should have docker installed on your system too."),(0,o.kt)("h2",{id:"code-preparation"},"Code Preparation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure your ",(0,o.kt)("inlineCode",{parentName:"li"},"requirements.txt")," contains all the required python modules needed to run your dashboard."),(0,o.kt)("li",{parentName:"ol"},"In development you might have used something like ",(0,o.kt)("inlineCode",{parentName:"li"},"python wsgi.py")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"python dashboard.py")," to run your dashboard. This is okay for temporarily running it, but in production we want to use a production Flask server to run the app. We will use Waitress for our server. This requires you to add a function to file that starts your dashboard (wsgi.py or example_dashboard.py) that returns your Dash app:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you create a normal ",(0,o.kt)("strong",{parentName:"li"},"Dash")," app then this should work:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def returnApp():\n    return app\n"))),(0,o.kt)("li",{parentName:"ul"},"If you create a ",(0,o.kt)("strong",{parentName:"li"},"DashProxy")," app then this should work:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def returnApp():\n    return app.server\n")))))),(0,o.kt)("h2",{id:"the-dockerfile"},"The Dockerfile"),(0,o.kt)("p",null,"add a new file to your project directory named ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". This file will be used by docker to create your docker image. This file has to have a few key features:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The base image: To make this easier, we will use an image with python pre-installed."),(0,o.kt)("li",{parentName:"ol"},"The python prerequisites: We install all the python modules your dashboard needs."),(0,o.kt)("li",{parentName:"ol"},"The dashboard files: We then copy the files over to the docker image."),(0,o.kt)("li",{parentName:"ol"},"The app call: We tell docker how to start the dashboard inside the container.")),(0,o.kt)("p",null,"Here is an example of what the Dockerfile should look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# Base image - tried a few others, this one was the easiest and most resilient\n# you can change the python version here if you are having issues. You can find\n# more base images online.\nFROM python:3.10.0-slim-buster\n\n# Create a base directory in the image to work from \nWORKDIR /app/dash\n\n## For some python modules (psycopg2 & others), you need to preinstall programs\n## through apt. Do that here with a command like: \n# RUN apt update && \\\n#  apt install -y INSERT PACKAGES HERE && \\\n#  rm -rf /var/lib/apt/lists/*\n\n# Copy the requirements file into the image, then install python requirements\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\n\n# Copy the rest of the dashboard files into the image\nCOPY . /app/dash\n\n# Specifying the dashboard command through waitress\n# Keep 80 the same: this is just exposed inside the docker container. Later\n# you can map this to any port outside of the container. Change "wsgi" to the\n# name of the file you edited earlier in #code-preparation.2\nCMD ["waitress-serve","--port=80","--call","wsgi:returnApp"]\n')),(0,o.kt)("h2",{id:"confidential-files"},"Confidential Files"),(0,o.kt)("p",null,"Some files such as ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," files should not be published to GitHub so you add a .gitignore to your repo. The same concept goes for publishing Docker images using a .dockerignore."),(0,o.kt)("p",null,"Add a ",(0,o.kt)("inlineCode",{parentName:"p"},".dockerignore")," file to your repo that includes the name of sensitive files you don't want included in your Docker image."),(0,o.kt)("p",null,"We still need our confidential files (like ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),") in the container to run the server, but we let the user add those sensitive files later when they start the container."),(0,o.kt)("h2",{id:"building-the-image"},"Building the Image"),(0,o.kt)("p",null,"Now that we have our ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," with instruction on building an image we can run a command to create our image.\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker build -t gbadsinformatics/dashboardname-dash ."),"\\\nRun this command in the same directory as your ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". This tells docker to build our image and give it a username/tag: ",(0,o.kt)("inlineCode",{parentName:"p"},"gbadsinformatics/dashboardname-dash"),". This step can be tedious if you get build errors. You might need to play around with your ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," to get compatible python modules, or add apt package dependencies to your ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". Troubleshoot the issues as you go, this is usually the hardest step."),(0,o.kt)("h2",{id:"running-the-dashboard"},"Running the Dashboard"),(0,o.kt)("p",null,"Now that you finally have an image with no build errors, you can test it. You need to build a command to run your image that will look something like:\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker run -d -p 9090:80 gbadsinformatics/dashboardname-dash")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-d")," tells docker to run the container detached"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p 9090:80")," tells docker to forward port 80 inside the container to 9090 on the host machine.\\\nHere you can change 9090 to any port you desire to run the dashboard on, do not change 80."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gbadsinformatics/dashboardname-dash")," should be whatever you called your docker image.")),(0,o.kt)("p",null,"You might want to allow the user to add ",(0,o.kt)("a",{parentName:"p",href:"#confidential-files"},"Confidential Files")," like ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),". You can do this in docker with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," tag:\\\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker run -d -p 9090:80 -v /local/path/to/.env:/app/.env gbadsinformatics/dashboardname-dash")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The user will change ",(0,o.kt)("inlineCode",{parentName:"li"},"/local/path/to/.env")," to the full path of the confidential file on their machine. "),(0,o.kt)("li",{parentName:"ul"},"You will change ",(0,o.kt)("inlineCode",{parentName:"li"},"/app/.env")," to where the confidential file needs to be placed in the container.")),(0,o.kt)("p",null,"Once your container is up and running you should be able to go to your specified port on your web browser and see the dashboard. If you run into issues here are some helpful commands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docker ps --all"),"\\\nThis shows stopped docker containers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docker logs XXXX"),"\\\nThis shows the logs of a container with ID XXXX. You'll use the output from docker ps to get a container ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docker exec -it XXXX /bin/bash"),"\\\nThis opens a shell inside the container so you can troubleshoot within the container.\\\n",(0,o.kt)("strong",{parentName:"li"},"However"),", changes made within a running container are temporary and will not be reflected in the image.  ")),(0,o.kt)("h2",{id:"publishing-the-dashboard"},"Publishing the Dashboard"),(0,o.kt)("p",null,"Once you have a working image, you can publish it to DockerHub through the command line."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a DockerHub repo named ",(0,o.kt)("inlineCode",{parentName:"li"},"dashboardname-dash")," with your dashboard name on the GBADsInformatics DockerHub account."),(0,o.kt)("li",{parentName:"ol"},"Head back to the command line and Login to DockerHub:\\\n",(0,o.kt)("inlineCode",{parentName:"li"},"docker login")),(0,o.kt)("li",{parentName:"ol"},"Push the image to DockerHub:\\\n",(0,o.kt)("inlineCode",{parentName:"li"},"docker puch gbadsinformatics/dashboardname-dash"))),(0,o.kt)("p",null,"You should now try to run a container using the public image just to check that it's working correctly. You can also try using GitHub Actions to build the image automatically when you push to your GitHub repo. That way you never need to go through these steps again!"))}u.isMDXComponent=!0}}]);