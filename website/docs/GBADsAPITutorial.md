---
title: "Accessing the GBADs API in R"
author: "Kassy Raymond"
date: "19/09/2022"
output: html_document
---

<!-- ```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
```

```{r, include=FALSE}
options(width = 60)
local({
  hook_output <- knitr::knit_hooks$get('output')
  knitr::knit_hooks$set(output = function(x, options) {
    if (!is.null(options$max.height)) options$attr.output <- c(
      options$attr.output,
      sprintf('style="max-height: %s;"', options$max.height)
    )
    hook_output(x, options)
  })
})
``` -->

## Documentation

*For documentation about the API and useful commands you can visit http://gbadske.org/api/dataportal/*

**Refer to Deb's presentation for more theory on APIs and why you should use them.**

### Some important concepts: 

An API stands for Application Programming Interface. An API is an interface between two programs that allows you to request data from a server and get it back to your program. The GBADs API is a web-based API made with W3's HyperText Transfer Protocol (HTTP) which allows webservers to exchange data. 

When making an API call you create a *request* (we'll call it a command) that consists of a URL, path to endpoint, and query: 

**Base URL** (aka the Request URL): This is the URL that you need to access the API.

For example: `http://gbadske.org/api/GBADsTables/` and `http://gbadske.org/api/GBADsLivestockPopulation/` are base URLs for the GBADs API.

**Endpoint**: This is where the data that you want is located. 

**Query**: Indicated by a '?', this is how you ask for the specific data you want. 

**Example**: 

This command provides all tables available in the GBADs API:  http://gbadske.org/api/GBADsTables/public?format=html

Broken down using the terminology above: 

* Base URL: http://gbadske.org/api/GBADsTables/
* Endpoint: public
* Query: ?format=html

Once you have your URL you can use the HTTP's `GET` method for getting data. There are other HTTP methods, but `GET` is the only one you'll need to know to get data from the GBADs API. 

## Required packages

You can use the `httr` package to `GET` data from the API. Since we sometimes also have to do some string handling, we also load the `stringr` package (this is personal preference, you can also handle strings in base R but I like stringr, and I only use it in the functions section).


```{r}
library('httr')
library('stringr')
```

## Using the `httr` library to get data 

In the next section we provide functions that help make creating the content URL for the request easier by automatating the creation of the url and handling of the response. This section provides an overview of how to understand the `httr` library in R.

### The basics of `httr` and getting a list of of available tables

Calling the GBADsTables/public endpoint directly provides a list of tables. When we obtain this list we can know which tables are available, and what data we can access. 

First, we set up the content URL. Note that we are requesting the format to be in `text` so we can handle the response.

```{r}
url <- "http://gbadske.org/api/GBADsTables/public?format=text"
```

Then, we can use the `GET` method from `httr` by using the `GET()` function. We call the variable `res` to stand for `response`.
```{r}
res <- GET(url = url)
```

Now, let's see what we get back: 
```{r}
names(res)
```
The important stuff: 

* The `status_code` provides us a code that tells us whether our request to the API was successful. 
If we got a status of 204 it would indicate that there was no content returned. For a full list of response codes visit: https://restfulapi.net/http-status-codes/ 

* `content` is the data from the API in raw binary code 

Let's look at the `status_code`: 
```{r}
res$status_code
```
A `status_code` of 200 means that the request was successful. 

Now the content: 
```{r, max.height='100px'}
res$content
```
The output is useful for a machine, but we need to translate this into human, please. The `content` function from the `httr` library makes this pretty easy. For more information about the `content` function use `?content()` to retrieve the docs. 
```{r}
tables <- content(res)
tables
```
This is nice, but we should probably parse this into a list.
```{r,  max.height='100px'}
as.list(strsplit(tables, ","))
```
At last! 
**Our result is a list of tables that are available from the GBADs API. Each time a new table is added, or something is changed, you will get the most up-to-date list of tables using these 4 lines of code that we just reviewed:**
```{r, eval = FALSE}
url <- "http://gbadske.org/api/GBADsTables/public?format=text"
res <- GET(url = url)
tables <- content(res)
as.list(strsplit(tables, ","))
```
### Getting information about a table 

Now that we have a list of tables, we can see what columns are available in each table. Let's say we want data from the `livestock_countries_population_unfccc`, or the population numbers from the UNFCCC. 

First, construct the URL. We can get to table content using: 

* `http://gbadske.org/api/GBADsTable/public?` 

and specifying the table name and format: 

* table_name=livestock_countries_population_unfccc&format=text

So we end up with this: 
```{r}
url_unfccc <- 'http://gbadske.org/api/GBADsTable/public?table_name=livestock_countries_population_unfccc&format=text'
```

Then we use `GET` and check out the `status_code`: 
```{r}
res_unfccc <- GET(url = url_unfccc)
res_unfccc$status_code
```
Now we can handle the response format: 
```{r}
content(res_unfccc)
```
Here we have country, species, year, population, and flag as the available columns.

**Coming soon**: functionality for metadata/description in the API. 

Now that we have the fields, we can go ahead and construct a query to ask for the actual data.

### Getting the data table 

**REMINDER** FIND EXAMPLE COMMANDS ON http://gbadske.org/api/dataportal

First, construct the url: 

* url = http://gbadske.org/api/GBADsPublicQuery/
* table_name = livestock_countries_population_unfccc

The new part of this is the fields and query parts of the url:

* fields = country,species,year,population
* query = In this case, we want all the data, so we can just leave the query empty. 

Then, we specify the format: 

* foramt = text 

Putting it all together this is our URL: 

```{r}
url_unfccc_data <- 'http://gbadske.org/api/GBADsPublicQuery/livestock_countries_population_unfccc?fields=country,species,year,population&query=&format=text'
```

Now, we can use `GET` to get the data 
```{r}
res_unfccc_data <- GET(url_unfccc_data)
unfccc_data <- content(res_unfccc_data)
```
```{r}
unfccc_data
```
And there we have it! 

TO RECAP - that was only 3 lines of code: 
```{r, eval = FALSE}
url_unfccc_data <- 'http://gbadske.org/api/GBADsPublicQuery/livestock_countries_population_unfccc?fields=country,species,year,population&query=&format=text'
res_unfccc_data <- GET(url_unfccc_data)
unfccc_data <- content(res_unfccc_data)
```

You can now visualize the data, or do whatever you'd like with it: 
```{r}
library(ggplot2)
library(tidyverse)

unfccc_data %>% 
  filter (species == 'Buffaloes') %>% 
  filter (country == 'Australia') %>% 
  ggplot(., aes(x = year, y = population)) +
  geom_line() +
  geom_point() +
  ggtitle('Buffaloes in Australia', subtitle = sprintf('Data from: %s', str_wrap(url_unfccc_data))) +
  theme(plot.subtitle=element_text(size=10, face="italic", color="black"))
```



Now, the trickiest part of all that was. making the URLs. Check out the functions below to make your life easier when building those URLs

## Using functions to get data 

To make getting data a little easier, we have made some functions to make coding a little easier. 

To get a list of all tables in the API, you can use the `get_tables` function. 

```{r}
get_tables <- function() {
  
  # The content url is where the tables are
  content_url <- "http://gbadske.org/api/GBADsTables/public?format=text"
  
  # GET from the httr module allows us to ask for data from the API
  res <- GET(content_url)
  
  # Get the content by passing the res variable to the content command. 
  tables <- content(res, "text")
  
  # Split the content to a more usable format
  tables <- as.list(strsplit(tables, ","))
  
  return(tables)
}
```

By using the function, you can simply call `get_tables()` to get a list of tables available: 
```{r, max.height='100px'}
get_tables()
```

Use the `get_table_fields` function to get information about a table of interest. The `get_table_fields` function works like this: 

* Pass the function the table name that you want information about 
* Builds the content URL using the table name
* Asks for the data using GET from the httr package 
* Checks to see that the request was valid by using the response status code 
* If the status code is valid, parse the content recieved from the response and return the data
* If the status code is not valid, print a message

```{r}
get_table_fields <- function(table_name) {
  # Pass the function the table name that you want information about 
  
  # Build the url 
  content_url = paste('http://gbadske.org/api/GBADsTable/public?table_name=',table_name,'&format=text', sep = '')
  
  # Ask for the data 
  res = GET(content_url)
    
  if (res$status_code == 200) {
    res_content = content(res, 'text')
    res_list = as.list(strsplit(res_content, ","))
    
    # Return the response
    return(res_list)
  }
  
  else {
    print('Response status was not 200. Could not process request.')
  }
  
}
```

Trying out the function: 
```{r}
get_table_fields('livestock_countries_population_unfccc')
```
In the livestock_countries_population_unfccc table there are 5 columns - country, species, year, population, flag

Using the get_data function, you can specify the table_name, fields, and query to get the data from the API:

* Pass the function the table_name 
* Optional: pass the function fields and query
* The function does a series of checks to see which parameters were passed 
* The content URL is built according to what is passed
* A request is made for data according to the content url
* The response to the request is returned
```{r, max.height='100px'}
get_data <- function(table_name, fields, query) {
  
  # Check to see if a table name was provided 
  if (c(missing(table_name))) {
    stop('Provide a table name.')
  }
  
  base_url = 'http://gbadske.org/api/GBADsPublicQuery/'
  
  # Create API call in the following situations
  # if there was no query or fields provided
  if ((missing(query) & missing(fields))) {
    content_url = paste(base_url,table_name,'?fields=&query=&format=text', sep='')
  } 
  # if fields were provided but no query
  else if (missing(query))  {
    content_url = paste(base_url,table_name,'?fields=',fields,'&query=&format=text', sep='')
  } 
  # if a query was provided but no fields were specified 
  else if (missing(fields)) {
    stop('You cannot provide a query with no fields specified')
  } 
  # if query and fields were provided 
  else {
    content_url = paste(base_url,table_name,'?fields=',fields,'&query=',query,'&format=text', sep='')
  }
  
  # Ask for the data 
  print(content_url)
  res = GET(content_url)
    
  if (res$status_code == 200) {
    # Return the response
    return(res)
  }
  
  else {
    print('Response status was not 200. Could not process request.')
  }
}
```

Testing out the function to get the livestock_countries_population_unfccc data 
```{r}
res_unfccc_all <- get_data('livestock_countries_population_unfccc', fields='country,species,year,population')
tab_unfccc_all <- content(res_unfccc_all)
```
See the table: 
```{r}
tab_unfccc_all
```

Try a more complex query: 

* table_name = livestock_countries_population_unfccc
* fields = country,species,year,population
* query for data in 2008

```{r}
res_unfccc_2008 <- get_data('livestock_countries_population_unfccc', fields = 'country,species,year,population', query = 'year=2008')
unfccc_2008_tab <- content(res_unfccc_2008)
```
See the table: 
```{r}
unfccc_2008_tab
```

Try another query: 

* Get data for Canada in the year 2008

Constructing this query string is a little trickier. 

* Canada is a string, so it must be surrounded by single quotation marks. 
* In R, when passing a string in quotes to a function, we have to use the escape character '\\'. For example, country=\\'Canada\\'
* We are querying for both a year and a country, we can use AND in the query to ask for both. Before and after AND use '%20', which is hexidemial for a space, to denote the space in the URL. For example, country=\\'Canada\\'%20AND%20year=2008

Putting this together we get `query = 'country=\'Canada\'%20AND%20year=2008`

Now you can call the function as usual, using the query string we just built:
```{r}
# Call the function 
res_unfccc <- get_data('livestock_countries_population_unfccc', fields = 'country,species,year,population', query = 'country=\'Canada\'%20AND%20year=2008')
tab <- content(res_unfccc)
```

See the result
```{r}
tab
```

Try another query, specifying a species of interest

* Get data for Canada for Sheep in the year 2008

Using the same rules as before, we can build the query string

`query = 'country=\'Canada\'%20AND%20year=2008%20AND%20species=\'Sheep\'`

```{r}
# Call the function 
res_unfccc_sheep <- get_data('livestock_countries_population_unfccc', fields = 'country,species,year,population', query = 'country=\'Canada\'%20AND%20year=2008%20AND%20species=\'Sheep\'')
tab <- content(res_unfccc_sheep)
```
See the result: 
```{r}
tab
```

With the `get_data` building the content url, sending a request, and getting a response is a lot easier! Have fun playing with the API! 

### References 
Format and explanations of this tutorial were inspired by https://www.r-bloggers.com/2015/11/accessing-apis-from-r-and-a-little-r-programming/

### Tutorial built with: 
```{r}
sessionInfo()
```



