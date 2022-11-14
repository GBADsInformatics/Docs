---
sidebar_position: 10
---
# Best Practices for Coding

GBADs members most commonly use R and Python for coding cleaning and organizing data, and constructing their models. Best practices for coding conventions allow code to be readable and reusable. These are the best practices that GBADs Informatics and modellers suggest to ensure that we can understand and use code.


<!---

	James and Gemma - this area is commented out in the markdown file. When you see 'admonition' in the text, it just means that a little not box comes up! 

·         Comment with name of creator, date (in ISO 8601 format? E.g. 20210729), what the script contains (e.g. principal component analysis)?

·         Libraries loaded in the R script

·         Set working directory?

·         Data should be ‘tidy’ at the end of the cleaning process (see Data Governance Handbook or R for Data Science)

·         Organise data from left to right with categorical variables and then continuous variables. Variables should be grouped together where relevant (e.g. stocking density at thinning, weight at thinning, date of thinning etc.)?

·         Remove irrelevant columns from the dataset (e.g. longitude and latitude)

·         Code well documented

·         Use standard file naming convention (e.g. 20210617_FAO_ProductionPrices_Poultry_Ethiopia_metadata.csv, NOT FAO Production Prices - downloaded by Kassy on April 25.csv)

·         Snake for naming objects in R (e.g. Majority_Parent_Flock_Old)

·         Objects should have meaningful name


--->

## R Coding Best Practices 

### 1. Naming Conventions 

**File naming**

Standard naming conventions are used for the file name, and for all variables and functions defined in your code. 

File names should follow the `dateOfCreation_meaningfulCodeName.R` format. 

For example, if my code cleans and reformats livestock data, I might call my script `20210703_faoLivestockProductionDataCleaning.R`

**Variable naming** 

Use `snake_case` for naming variables and functions in your code. Using a standardized naming convention improves code readability and interpretability. 

<!--Naming conventions should also be used when declaring variables or creating functions. While there are multiple popular naming conventions including camelCase, PascalCase and snake_case, for example, the agreed upon convention for GBADs is the use of snake_case. -->

Use meaningful names when naming variables and functions. The name of the object should reflect its utility or characteristics. For example, if you are reading in a livestock production dataframe: 

```
livestock_df <- read_csv('path/to/my/important/file.csv')
```

```{admonition} Be careful when setting working directory
Remember that when you use `setwd()` to set the working directory for your project or script, the working directory is distinct to your computer and may decrease the level of reproducibility of your code. 
```

### 2. Organize the format of your code 

Start your script with the name of the creator, date that the script was last edited (in ISO 8601), and a brief description of the purpose of the script. 

```
####################################
# Creator: Kassy Raymond 
# Email: kraymond@uoguelph.ca
# Date last edited: 20210803
# 
# This program contains code that performs principal component analysis (PCA)
# on livestock production data from Ethiopia. The data that was used in this
# program is from the FAOSTAT production dataset and was downloaded on
# 2021-08-03. The output data from this script will be used in a model that 
# calculates biomass. 
#
####################################
```

Document your code with comments so that the reader of your code (or future you) can follow each step that you took in your script. 

Load in all libraries at the beginning of your program. In R, this might look like this: 

```
## 0 - Load in all libraries 

library(tidyverse)
library(ggplot2)
library(knitr)
library(readr)
library(forcats)
library(dplyr)
```

When possible, segment your code into sections. This helps with reproducibility and makes code more readable. 

```
## 0 - Load in all libraries 

library(tidyverse)
library(ggplot2)
library(knitr)
library(readr)
library(forcats)
library(dplyr)

## 1 - Source files 

data_path <- 'path/to/my/important/file.csv'
livestock_df <- read_csv(data_path)

## 2 - Data cleaning 

# Drop unneeded columns 

# Check for NAs

# Explore data and check for outliers or errors in data 

## 3 - Modeling 

```

### 3. Data cleaning 

#### 3.1 Drop unneeded columns early on in your code 

If you are not using a column in further analysis, drop it in the data cleaning and exploration phase of your script. This will improve interpretability of your code and increase the processing speed of your program. 

#### 3.2 Remember data provenance 

It is important that the estimates, models, graphics and output datasets created by models can be reproduced. It is therefore important to include the original dataset used, or when APIs are used, the ability to trace back to original dataset. 

If you downloaded your data, make sure you save a copy of the original dataset and **do not overwrite** this in your workflow.

If an API call was made to get the data, ensure that the date stamp of that call is provided in the name of your output dataset, models, or graphics that are created. You may also again, choose, to save a copy of the original dataset. 

#### 3.3 Ensure data is in a 'tidy' format at the end of the data cleaning phase 

See also [Organizing Data in Spreadsheets](http://www.gbadske.org/Documentation/DataGovernanceHandbook/dataBestPractices.html) in this handbook and [R for Data Science](https://r4ds.had.co.nz/) by Hadley Wickham. 

#### 3.4 Organize data

Organize data from left to right with categorical variables and then continuous variables. Variables should be grouped together where relevant (e.g. stocking density at thinning, weight at thinning, date of thinning etc.)

### 4. Other recommendations 

- Try RStudio for your IDE!


