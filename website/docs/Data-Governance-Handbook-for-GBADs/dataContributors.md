---
sidebar_position: 11
---
# Data Contributor Guide

The data contributor guide gives information about how you can input data into our system using our data forms. 

GBADs aims to make data FAIR, and that starts with ensuring that we have stringent metadata production and that provenance of data resources is well documented. So, when you are contributing data, it is important that we collect information about it that allows for the reuse and interoperability of data resources that are contributed. 

## Why metadata production is important 

Production of metadata is important because it enables the reuse of data. Metadata can be thought of your data 'user guide' - it should tell you everything you need to know to determine whether the data is suitable for your analysis, and how the data came to be. Sometimes, we find ourselves in situations where we come across some data and have no idea where the data originated, the experimental methods that were used for data collection, or which models created the data. Even more troubling, is when units of measure aren't provided or column headers are ambiguous. Metadata is the solution to this problem. So, when you input your data into the GBADs system, or provide API information from another source, we will ask you to fill out a form that will autogenerate metadata so that you (and others) can reuse the data and create accurate insights, models and data driven decisions. The production of granular metadata ultimately leads to higher quality data. 

## Questions about your data to generate metadata

Depending on the type of data that you are inputting, the questions might vary slightly. For example, if you are inputting data from a model output, we will need to know different information than if you are inputting data from household surveys. As we learn more about the data sources that GBADs will broker and the data that our users use, our metadata production will evolve. 

We are adapting the Guidelines for Accurate and Trasparent Health Estimates Reporting (GATHER guidelines) for preliminary metadata production. 

Here are the questions for every data set that enters the GBADs system:
Please note that these questions were adapted from GATHER guidelines, and in some cases are identical to GATHER.  

1. Define the indicator(s), populations (geographic entities, animal species), and time period(s) for which estimates were made.
2. List funding sources for the work.
3. Describe how the data were identified and accessed. 
4. Specify inclusion/exclusion criteria. Identify all ad-hoc exclusions. 
5. Provide information on all included data sources and their main characteristics. For each data source used, report reference information or contact name/institution, population represented, data collection method, year(s) of data collection, sex and age range, diagnostic criteria or measurement method, and sample size, as relevant. 
6. Identify and describe any categories of input data that have potentially important biases (e.g., based on characteristics listed in item 5).
7. Describe and give sources for any other data inputs. 
8. Provide all data inputs in a file format from which data can be efficiently extracted (e.g., a spreadsheet rather than a PDF or API call that was used to extract data). For any data inputs that cannot be shared because of ethical or legal reasons, such as third-party ownership, provide a contact name or the name of the institution that retains the right to the data.

If the data were currated using a model, or data analysis or if data were cleaned, we ask that you also answer the following: 

1. Provide a detailed description of all steps of the analysis, including mathematical formulae. This description should cover, as relevant, data cleaning, data pre-processing, data adjustments and weighting of data sources, and mathematical or statistical model(s). A GitHub repo to the appropriate code is also required. 
2. Provide the results of an evaluation of model performance, if done, as well as the results of any relevant sensitivity analysis.
3. Describe methods for calculating uncertainty of the estimates. State which sources of uncertainty were, and were not, accounted for in the uncertainty analysis.

Each of these questions will be presented in a form on the GBADs data portal, where you fill in each of the fields according to the questions. 

We understand that some data contributors will already have their own metadata produced. In these cases we encourage individuals to use their metadata to fill in the fields provided.

