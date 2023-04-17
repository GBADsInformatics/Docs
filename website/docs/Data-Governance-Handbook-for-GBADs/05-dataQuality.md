---
sidebar_position: 5
---

# Data Quality 

The quality of data that is used by GBADs is assessed and communicated as per [Data Goal 4](#Data-Goal-4). Our definition of data quality is rooted in the 6 dimensions of data quality. 

Data quality is important for GBADs because the quality of data will have a direct impact on the quality of models and outputs produced by models. Therefore, the input data must be assessed for quality and the quality of this data must be reported to modellers and users of GBADs' data and models. While we do not have a direct influence on the quality of the input data, we can report our confidence in the data and potential quality issues that may impact the certainty of estimates.

Similarly, we must ensure that the output data produced by models and estimates are of high quality to ensure that they can be used with confidence for decision-making and users can trust GBADs outputs.

---

Data quality falls under the responsibility of Working Groups 2 and 3 - see the [Data Governance Operating Model](https://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/dataGovOperatingModel) for more details on data responsibilities 

---

## Defining Data Quality

There is no agreed definition of data quality; the definition of data quality depends on the context in which data will be used. Many dimensions of data quality have been proposed, however, the dimensions that are relevant to the use case of an organization are again dependent on the context of use. 

*In this section we outline the dimensions of data quality that are relevant to GBADs and the processes, metrics, and tools that are used to assess the quality of data that is used and produced.* 

<!-- ### Dimensions of Data Quality 

*Accuracy*

*Internal Consistency*

Internal consistency is defined as 

*External Consistency* 

External consistency is defined as  -->
## Data Quality Analysis 

### Internal and External Data Consistency 

Determining whether data is consistent between and within data sources is an important indicator of data quality. For example, does data from different sources that report the "same" metric align numerically?

Ian McKechnie created a methodology to analyze the internal and external consistency between data sources to determine whether there is any uncertainty in the data reported. 

Each data source (WOAH, FAOSTAT, National and UN Census) was analyzed with the following: 
* Identified outliers: plotted all the yearly growth on a normal curve to determine whether there are data points outside the third standard deviation
* Determined Interquartile range (IQR) for each source's growth range 
* Trailing five-year population averages across all data sources and compared these average to determine whether there was an inconsistencies in the trend. 

The methodology that was created will be solidified and the findings will be reported in a manuscript (currently being revised). The main findings suggest that there are inconsistencies between data sources in most species and countries; specifics will be reported in the manuscript.

## Tools to Support Data Quality Analysis 

### Data Visualization Dashboard for Quality Analysis 

Data from international organizations, such as FAOSTAT, embelish their data with forecasted, imputed, and unoffical values when official data is unavailable. Joshua Davidson created a dashboard which supports the analysis of longitudinal data from FAOSTAT through the following: 

Given a species and country: 

* Visualize potentially erroneous data due to imputed or unofficial data 
* Provides the percentage of values that are unoffical 
* Visualize longitudinal trends to identify unexpected or rapid changes in population from year to year 

The tool is still under development; future development ideas include: 
* Filtering for a 'quality level'. For example provide data that is over a certain percentage unofficial, or that considers the slope of the trend line across time to automatically identify possible errors. 


### Other tools 

GBADs Informatics is working on a number of data quality tools.  These tools encompass the following tasks: 

* Data “stories” that visualise and provide commentary on data from the Ethiopian Central Statistical Agency Livestock reports at both the national and regional levels 

* Analysis of data sources such as FAOSTAT and WOAH in terms of internal and external agreeability (visualisations, measurements, and metrics) 

* Ontology and SHACL for validating data and assessing data quality relating to the categories of species in the WOAH population data (software demonstration of this capability to be available in the 1st quarter of 2023) 

While it is up to the organization or data contributor to correct their data at source, we have procedures in place to communicate the results of quality assessments. 


