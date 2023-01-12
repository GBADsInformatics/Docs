---
sidebar_position: 7
---

# Data User Guide	

## Objectives of the Data Usage Guide: 

* Understand how to access different types of data in the Knowledge Engine 
* Understand how to search for data stored in the Knowledge Engine

For information about what to do when you identify new data sets of interest for use in the GBADs program visit the Data Contributor section of the Data Governance Handbook which outlines the following: 

* Understand the roles and responsibilities of individuals who have identified a new data set for the use of GBADs program, and how to get this data stored in the Knowledge Engine 
* Understand how Informatics stores data from models in the Knowledge Engine 

## Data types in the Knowledge Engine 

The data user guide provides GBADs collaborators with an overview of how to access data in the knowledge engine. We have 3 main types of data: 

1. Input data (or raw data)
2. Output data from models 
3. Intermediate data sets 

Each type of data and their subsets are uniquely formatted and require specific storage requirements to ensure that the data can be findable, accessible, interoperable and reusable (FAIR); all data must be documented with metadata to ensure that the data is FAIR.

### Input data

Input, or raw data can come in two forms across the GBADs program: 

* Data sets from sources such  as the Food and Agriculture Organization of the United Nations Statistical Database (FAOSTAT), the World Organization for Animal Health (WOAH), national statistics agencies, etc. 
* Parameters obtained from meta-analyses from systematic reviews. 
* Data sets produced from expert elicitation exercises.

These data are the _inputs_ to the models and calculations that GBADs themes produce. Input data can come in different forms, use varying terminologies and standards for naming countries, species, or other classifications, and thus may have various interpretations of the meaning. 

All themes and modellers should be using the same input data that has been cleaned only once to ensure that we are all using the same inputs to models. This ensures reproducibility and accuracy of data across the program. 

### Output data from models

When models or estimates are produced, they produce parameters and data sets that may be used in subsequent models or estimations. The output data from models and estimates therefore need to be stored in the Knowledge Engine alongside metadata to ensure that all users can understand how the data were populated and produced, including the model code and datasets that were used to populate this data. 

### Intermediate data sets 

Intermediate data sets may be data that were produced through a stage in modelling or imputation but are not considered an end product. Intermediate data, however, may be used for other modelling processes and may be important to ensure that the data processes are reproducible. 

## Accessing data in the Knowledge Engine 

There are 2 main ways to access the data in the Knowledge Engine: 

1. Through the Application Programming Interface (API)
2. Direct download through a URL from an Amazon S3 Bucket 

   ---
   **What is an API?**
   
   API stands for Application Programming Interface. It is a machine-to-machine way to ask a server for data, get the server retrieve and interpret the data and return it to your machine. APIs are everywhere; they allow applications to 'talk' to each other. For example, when you check the weather on a weather app, the app is using an API to grab the data and present it in a usable and interpretable fashion on your phone. APIs provide the most up-to-date data without having to store data on your own machine. 
   
   For more information about APIs and how to use them visit the [GBADs API Tutorial](https://gbadskedoc.org/docs/GBADsAPITutorial).
   --- 

   ---
   **What is an Amazon S3 Bucket?** 
   An [Amazon Simple Storage Service (S3) Bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) is a cloud object storage service that allows you to store data and other digital objects in the cloud. 
   ---

## Searching for data in the Knowledge Engine 

To use the data in the Knowledge Engine, you need to be able to find it. The search functionality of the data is built using a metadata pipeline. 

Each type of data has unique metadata that describes it. For more information about the metadata please visit the [FIX ME UNDER REVIEW Metadata section] of the Handbook. 



<!-- The [GBADs data portal](http://gbadske.org:8050/dash/page-1/) is a prototype dashboard that allows users to access datasets from [FAOSTAT](http://www.fao.org/faostat/en/) and [OIE WAHIS](https://wahis.oie.int/). The prototype allows you to select data of interest, visualize it on bar line graphs, download the data in `.csv` and `.json` format and see the Application Programming Interface (API) call.  -->

<!-- ```{margin}
**What is `.json`?**

[JSON](https://en.wikipedia.org/wiki/JSON) stands for JavaScript Object Notation. JSON is a file format that stores data in a standard structured format, allowing data to be both human and machine readable. JSON data can be read into all programming languages, and can be parsed into `excel`. JSON data is readable and easier to parse than other file formats such as [XML](https://en.wikipedia.org/wiki/XML).

```

````{margin}
```{admonition} We want to hear from you! 
:class: tip

Please note that this page will be updated as we continue to improve our data portal, and gain access to more data sources. We welcome feedback on what you like about the system, what you'd like to see and anything that you think could be more clear! 
```
```` -->

<!-- ```{admonition} Learning Objectives 
* Readers should understand what an API is, how it works, and why GBADs is using APIs
* Readers should understand how to use the GBADs API to get FAOSTAT and OIE WAHIS data 
* Readers should understand how to use the GBADs API to read data into their `R` and `python` programs
``` -->

<!-- ## Getting started with our API -->

<!-- ### What is an API? 

An Application Programming Interface (API) is a machine-to-machine way to ask a server for data, get the server retrieve and interpret the data and return it to your machine. APIs are everywhere; they allow applications to 'talk' to each other. For example, when you check the weather on a weather app, the app is using an API to grab the data and present it in a usable and interpretable fashion on your phone. APIs provide the most up-to-date data without having to store data on your own machine. 

For the data needs of GBADs, APIs work like this: 
1. You/your program requests data through the API call
2. The webserver looks through its internal database for the data that you asked for 
3. The database gives the server the data that you asked for 
4. The data is returned to you/your program

### Your workflow and APIs 

To explain the concept of an API in more depth, we will discuss the common workflow to access data for modelling and where APIs come into play.

**Manual data accrual method**

If you are not using APIs in your current workflow, accessing data likely consists of navigating to a data portal or source, looking through the data catalogue or searching for a data set of your interest and then downloading the data. Each time the data is updated you have to repeat the process, find the data, download it again, import the file into your model and rerun with the updated numbers. While this workflow works, using APIs can eliminate the manual work of going to the website and getting the data everytime you need it. 

When you are interacting with the website to get the data you would like, you are likely indirectly interacting with an API, which is working in the backend to get the data that you've selected and present it back to the webpage. However, you can use an **API call** to request data from the server where the data of interest resides {numref}`APIcall`. 

```{margin}
An **API call** is the way that you ask a server for data. 
```

**Using APIs to get data** 

Instead of manually downloading data from a website each time, you can incorporate API calls into your work flow to request the most up-to-date data from the source. This allows you to rerun code without having to change your code. 

```{figure} /images/API.png
:name: APIcall

Simple breakdown of how an API works. 
``` -->


<!--If you have never used an Application Programming Interface (API) before, don't panic! You're in the right place. Before delving into how to use our API, we'll explain why we think people should adopt API use and what an API even is. 

You might have heard of an API before and thought, what even is an API? Oftentimes, when "API" is Googled you are swamped with technical jargon and buzzwords - or information that is tailored towards software engineers and tech departments. However, APIs are extremely valuable for anyone that actively heads to a website and downloads data from it. Using an API allows you to get your computer to talk to a web server and ask for the data, without going onto that website and downloading this data yourself. For example, right now you might head to The World Bank's data portal by navigating to the website, going through the data catalogue or searching for the data set of your interest and then downloading the data. Certainly, this manual method is a valid way to interact with a webserver and allow you to get the data that you want. But, you don't actually have to interact with a website in this manual way to get the data that you want. APIs allow you to call the website and request the data that you want without having to navigate through a website (or even open your web browser). And, as you will learn, you do not have to have an extensive programming background to use an API! --->

<!--API calls are made using the API's Unique Resource Identifier (URI). Simply put, a URI is something that distinctly distinguishes the API from other APIs. You can think of a URI as anything that identifies something from all other things. For example, your Social Insurance Number is your URI that allows the government to identify you from other citizens. Similarly, you might notice that nobody else has the same email address as you. An email address is also a URI! -->

<!-- 
Once you have this 'API call' you can simply input into the program of your choice and automate your workflows and have access to the data without having to search through data catalogues each time. APIs are built on HTTP protocols, providing another plus: you can use APIs with virtually any programming language including R and Python, which are the most popular among our current users. This means that instead of loading data files into your R or python program each time, you can simply access the API right in your program. An added benefit is that this allows you to rerun your programs without having to download data from your sources each time that source is updated or modified.

Some data sources that GBADs uses such as FAOSTAT and The World Bank have APIs that can be used to get data. However, GBADs is handling the API management by developing an API that can request data from other APIs ({numref}`GBADsAPI`).

```{figure} /images/GBADsAPI.png
:name: GBADsAPI

Overview of GBADs API infrastructure. The GBADs API can communicate with various other open APIs to access data from other data stores, such as FAOSTAT. The GBADs API also allows data to be requested from the GBADs data store. Users can access data from various sources through an API call to GBADs API. 
```

````{margin}
```{admonition} Special Access Data
:class: tip

_Please note that some data is not publicly available, and therefore is not available to all users_. See [the chapter on Data Licenses, Privacy and Security](http://www.gbadske.org/Documentation/DataGovernanceHandbook/dataOwnership.html) for more information about how GBADs handles confidential and sensitive data. 
```
````


### Using the GBADs API

You can check out our more extensive API documentation [FIXME here]. However, this section will show you the basics of using our API to fetch some data. 

We will provide two examples of API calls to the GBADs API. One in Python, and one in R. In both examples we will use the same API call which will give you stock price of chickens in Ethiopia from 2005 and 2018 from the FAO. Our API call for this type of data is: [http://35.183.203.15:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Chickens](http://35.183.203.15:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Chickens)

```{margin}
You will notice that if you put the API call directly in your browser you will be brought to a page with the data in JSON format. You'll also notice that the API call specifies the category (LiveAnimals), the start and end year, the element, which are the stock prices and the item, Chickens. Currently our portal only supports the retrieval of Ethiopian data as that is the focus of our pilot study.
```

```{note}
We are still developing our metadata API. 
```

In our Python use case you will need three libraries downloaded: `json`, `requests` and `pandas`.  

```{code-cell} ipython3
import json
import requests
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Create apiCall
apiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Chickens"

response = requests.get(apiCall).json()

# Print the response so we can see what we got. 
print(response)
```

In some cases, you may want to convert your response to a `pandas` dataframe, visualize the result, or save the result to a csv file. Below we will demonstrate how you can accomplish each of the following: 

```{code-cell} ipython3
# Create pandas dataframe from api response
response = pd.DataFrame(response)

# What is our result? Print the first 10 rows of the dataframe.
print(response.head(10))
```

Before we go ahead and graph this data, we can use `pandas`  to get a general overview of the data that we got from the api call.

```{code-cell} ipython3
# Which columns do we have? 
print(response.columns)
```

We can also see summaries of the columns: 

```{code-cell} ipython3
response.describe()
```

```{code-cell} ipython3
# Graph time!
response.plot.scatter(x='Year',
	y='Value',
	c='DarkBlue')
```
And for fun, lets visualize a linear relationship through `seaborn`'s linear regression function. The function provides a regression line on a plot with a 95% confidence interval. 

```{code-cell} ipython3

ax = sns.regplot(x="Year", y="Value", data=response)

# Set axis labels 
ax.set(xlabel='Year', ylabel='Number of Live Animals (1000 Heads)')

# Add a title 
plt.title("Number of Live Chickens in Ethiopia")

# Show the result
plt.show(ax)

```

As you can see, with very little work we have gathered the data from the API, converted into a `pandas` dataframe, and plotted a regression. 

We could also plot the data and visualize which points correspond to official data, and which were imputted: 

```{code-cell} python3
# Different colours for the flag descriptions
sns.scatterplot(x="Year", y="Value", hue="Flag Description", data=response)

# Set axis labels 
ax.set(xlabel='Year', ylabel='Number of Live Animals (1000 Heads)')

# Add a title 
plt.title("Number of Live Chickens in Ethiopia")

# Show the result
plt.show(ax)

```


If you are interested in simply gathering the data from the API and saving it as a csv, you can use the code below to do so.

```
import json
import requests
import pandas as pd

# Create apiCall
apiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Chickens"

response = requests.get(apiCall).json()

# Encoding/decoding dataframe to get it in csv format
response = response.to_json(orient='split')
response = pd.read_json(response,orient='split')

# Name of outfile. Replace this with the path to where you would like to store the file, and the filename. 
outfile = 'path/to/outfile/outfilename.csv'

# Save to outfile using pandas 
response.to_csv(outfile, index=False)
```

Here's our R implementation: 

You will need to make sure that you have the `httr` and `jsonlite` R packages downloaded. 

```
# Uncomment the line below if you don't already have the libraries 
# install.packages(c("httr", "jsonlite"))

# Load in libraries 
library(httr)
library(jsonlite)

# Create API call
apiCall = "http://15.223.72.239:8000/gbads/LiveAnimals/?year_start=2005&year_end=2018&element=Stocks&item=Chickens"

# Send request
response = GET(apiCall)

# See what the response gives us
response

# Create a dataframe from the API response 
data = fromJSON(rawToChar(response$content))

# Check to make sure that worked 
class(data)

# See what the first 5 rows of the data look like 
head(data)
``` -->

<!-- ## Creating a User Profile 

The guide above allows you to access the API, which allows access to open data. In the future, we anticipate private data sources which you will only have access to if you are given permissions. Our system will support the ability to create a verified user log in, which will give you access to the private sources you are granted access to via a personalized portal and API key.  -->

