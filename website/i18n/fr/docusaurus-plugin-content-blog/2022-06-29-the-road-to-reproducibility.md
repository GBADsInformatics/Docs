---
slug: the-roadmap-to-reproducibility
title: The Roadmap to Reproducibility
authors: Kassy
tags: [reproducibility, data, values]
---

![Header Image](https://i.imgur.com/2JEVnaV.png)
*Figure 1: The Roadmap to Reproducibility*

> *“The whole point of science, the way we know something, is not that I trust Isaac Newton because I think he was a great guy. The whole point is that I can do it myself … Show me the data, show me the process, show me the method, and then if I want to, I can reproduce it.”*
> 
[Brian Nosek](https://www.washingtonpost.com/news/speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100-experimental-results-succeeds-only-36-times/) - Washington Post[^1]

<br/>

Reproducible science requires well-documented methods, code, and making data available. It means providing transparency in what you are doing through the whole scientific process to foster trust in the process and outcomes and allowing others to leverage past work. There is no place for the scientific skeptic when your research is reproducible. 

<br/>

The data that GBADs is using comes from many different sources and is used in models that then produce more datasets, and that act as inputs to other models. This daisy-chain of data-model-data-model-data is not confined to the work of a single scientist; we have collaborators working all over the globe. It is crucial that the underlying data is available, and all our methods are reproducible so we can build upon each other’s work and allow others to use our estimates confidently.  

<br/>

With the aim of making all our processes reproducible and transparent, GBADs is embarking on the “Roadmap to Reproducibility”. In this blog post we invite you to travel along the road to reproducibility with us. Buckle up your seat belts as we avoid the fiery blazes of the “Reproducibility Crisis” before heading to our final destination, the “Data Utopia”! 

<br/>

## The “Reproducibility Crisis” 

In 2016, a survey of 1,576 researchers from Nature revealed that there is a "crisis of reproducibility" in the scientific community[^2]. Of the participants "more than 70% of researchers have tried and failed to reproduce another scientists’ experiment and more than half have failed to reproduce their own experiments." Many factors contribute to irreproducible research (Figure 2), where pressure to publish and selective reporting were among the most highly rated. However, unavailable raw data and unavailable methods or code were also rated as high contributors. While pressure to publish requires a culture shift in research, unavailable raw data and methods or code are problems we can solve. 

<br/>

 
![Figure 2](https://i.imgur.com/dcnJkJR.jpg)
Figure 2: Factors that contribute to irreproducible research. Figure obtained from Baker, 2016[^2]. 

## Embarking on the Road to Reproducibility 

### Stop 1: People and processes

Code and data availability are important for reproducibility, however there are people behind the code and data working on processes to make it reproducible.  

<br/>

As such, we have established processes and best practices for the use of data in GBADs, which are communicated in the [Data Governance Handbook](http://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/intro), and on our [Documentation Site](http://gbadskedoc.org). These processes involve the following: 

<br/>

1.	Documentation of changes to data and data cleaning practices
2.	Documentation of metadata standards used to provide information about the data
3.	Where and how data and metadata are stored, and how they are disseminated
4.	Best practices for documenting code in GitHub repositories 

<br/>

We also rely on people to comply to the processes we have established. Since some of the data that is used by GBADs does not have metadata, we rely on the establishment of a contact point for the data source to ensure that we can get context on how data were collected, how it can be used, by whom, and for which purposes, and what categories in the data represent. 

<br/>

### Stop 2: Acquisition and ingestion of data

To acquire data, we identify data that is relevant to the estimation of models. For example, livestock population by country and species and live weights are inputs to biomass calculations. 

<br/>

The way we acquire data depends on the format that it is available. There are 3 main ways data has been acquired and ingested: 

<br/>

* When data is available via Application Programming Interfaces (APIs), the data is acquired directly from the source, being transformed before made available via the GBADs’ API;
* When data is available via direct download, the data is downloaded and formatted in database tables before being made available via the GBADs’ API, and;
* When data is available in PDF tables, web scraping scripts scrape data from tables and make it available via csv files before being formatted in database tables and made available via the GBADs’ API.

<br/>

Each of these processes are documented. The lineage of the data is traced in a Graph Database to ensure that we can trace any changes to the data and make our processes transparent and reproducible. 

<br/>

### Stop 3: Data quality

We quality-check each data source that is acquired by GBADs. Sometimes there are internal errors in the aggregation of categorizations where sub-categories do not add up to a “super-category”. For instance, if poultry is split up into backyard and commercial poultry, these categories should add up to “poultry”. In other cases, there may be a sudden spike in the number of animals in a country. In this case, we need to investigate by comparing the value to other data sources. 

<br/>

All quality-checking and respective changes are recorded. Once data has been “cleaned”, the “cleaned” version is provided via the GBADs’ API and dashboards. This way, there is consistency in quality assessments and each collaborator isn’t doing this independently. This ensures consistency in outputs and improves reproducibility of GBADs’ estimates and data collectively. 

<br/>

### Stop 4: Code

Code that is used to acquire and ingest data, clean data, and create models is available via the GBADs’ GitHub repositories. The code is well documented and there is information about how to run the code, which datasets were used, and who was involved in development. 

<br/>

### Final Destination: Data Utopia

In the Data Utopia, data can be harmonized and re-used for subsequent models or purposes. The idea here is that all members of GBADs are using the same data and not duplicating data cleaning, ingestion, or acquisition efforts. By making the data and methodology for cleaning reproducible, the underlying data is consistent and ready-to-use. In our Utopia, data is visualized and available via dashboards and can be accessed through the API. The dashboards also feature a metadata tab where the methodology, code, and provenance information are provided to ensure all members can access the code and raw data that are displayed and available in the dashboards. 

<br/>

*Note: We acknowledge the fact that not all data can be made available. While we are currently working with Open Governmental Data, we anticipate the controlled governance of private and sensitive data, which will not be openly available in raw form without permission from the data holder according to data agreements and licenses.*

<br/><br/>

References:

<!--References-->
[^1]: Achenbach, J. (2021, October 27). Many scientific studies can't be replicated. that's a problem. The Washington Post. Retrieved June 19, 2022, from [https://www.washingtonpost.com/news/speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100-experimental-results-succeeds-only-36-times/](https://www.washingtonpost.com/news/speaking-of-science/wp/2015/08/27/trouble-in-science-massive-effort-to-reproduce-100-experimental-results-succeeds-only-36-times/)

[^2]: Baker, M. (2016). 1,500 scientists lift the lid on reproducibility. Nature, 533(7604).


