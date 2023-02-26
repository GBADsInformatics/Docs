---
sidebar_position: 4
---

# Data Governance Operating Model

A data governance operating model is a an operating model that defines an organization's key data processes, the roles and tasks involved in each of those processes, and the people, tools, and technology that are required to fulfill each of the processes. 

---

**In this section:** 

* We outline the data goals for GBADs
* We outline the key data processes for GBADs based on the data flows
* We outline the data governance operating model for GBADs using the GBADs' governance structure (Working Groups) to understand the roles and responsibilities for each of the tasks involved to fulfill the data goals

---

## Goals

The main data goals for GBADs can be broken down into the following.

**General**

1. Access to technology and products that are innovative and advance the state-of-the-art.

**Data**

2. Identify data sources that are required for GBADs modeeling purposes 
    * When necessary, create data allicances with private and public data holders
3. Data is accessible for users (both humans and machines) and can be used in a timely matter for decision making [^1]
    * This includes data that GBADs redirects from other organizations and data that GBADs stores for associated projects and partners [^1]. 
4. Data have been analyzed for quality, and these metrics are available as part of the metadata [^1]
5. Data is cleaned only once - reduce replication of data sources and cleaning
6. Data is findable to data users [^1]
7. A system that allows for the customization of information through mechanisms and processing that adjusts the granularity of the data to the user's needs[^1]
8. Data that are interpretable—the semantics to be encoded in meta-data and other semantic systems [^1]

**Models and Data Visualizations**

9. Modelling procedures are reproducible
10. Data lineage is traced to ensure that all data procedures are replicable, to ensure that data is not replicated, to help with data quality and updates, and to keep track of which versions of data are used in publications
11. Data visualizations and dashboards are served on GBADs servers, use data from the GBADs Knowledge Engine (GBADs data sources), and link to metadata and methods

Data governance procedures and processes are crucial to fulfill the goals, to create a system that is FAIR(S), and to ensure that data processes, publications, and models are reproducible. Each goal has its own processes that require unique technological tools and individual (human) responsibilities from the Informatics theme, and others using and creating data models in GBADs. The GBADs governance structure (Working Groups) provide a vantage point for understanding where responsibility lies in the data governance operating structure. 

<!-- 
From FAIR to FAIRS
    Data that can be used in a timely manner for decision making.
    Data that have been analyzed for quality, and these metrics are available as part of the meta-data.
    As complete a data collection as possible for all its stakeholders. This will include data that GBADs redirects from other organizations and data that GBADs stores for associated projects and partners.
    Data that are relevant to the modelling, decision support, and other purposes important to the aims of GBADs and its users.
    Data that are easily accessible to appropriate users (both machine and human).
    Data that are interpretable—the semantics to be encoded in meta-data and other semantic systems.
    Access to technology and products that are innovative and advance the state-of-the-art.
    A system that allows for the customization of information through mechanisms and processing that adjusts the granularity of the data to the user's needs. -->


<!-- * Assess the quality of all input data according to quality metrics established by the Informatics team and communicate the quality via data quality reports or dashboards 
* Data can be shared with internal and external partners via Application Programming Interfaces (APIs) and/or files in S3 buckets 
* Reduce data replication and provide processes so same versions of data can be used by all data users in GBADs 
* Trace data lineage and provenance to ensure that changes to data and outputs are reproducible and traceable, and to ensure that 
* Ensure that modelling procedures are well documented,
* Provide infrastructure to 

The goals were drafted using the 2023 Investment Document.  -->

## People and Processes - GBADs Working Groups 

The governance structure of GBADs is split into three main Working Groups, each with unique, but overlapping responsibilities: 

| Working Group | Description[^2] |
| ------------- | ----------- |
| Working Group 1 (WG1)- Data alliances, Communication of information and Adoption and uptake | Drive effective research translation and will build on the work of the disease prioritization theme in the global context, and on the engagement work with stakeholders of the Indonesian and Ethiopian case studies in a local context. Translate research into valuable products in order to access further resources be they data, finance or in-kind contributions from other programmes. Responsible for combining and organizing analytical results for consistency and comprehension by the users and will be accountable for ensuring user and expert reference group feedback is incorporated into dashboards. |
| Working Group 2 (WG2)  Methods and Analytics | Responsible for the refinement of the GBADs methods delivering high quality data analysis and scientific modelling, using scenario analysis to address data availability constraints and sensitivity analysis to incorporate data quality limitations, a critical foundation for the knowledge engine and valid disease burden estimations. Use subsets of data from the superset built by the Informatics Working Group (WG3) with transformations and calculations required for specific analysis. Accountable for assessing the technical feasibility of GBADs by testing its methods’ scientific relevance and robustness. |
| Working Group 3 (WG3) - Informatics | Responsible for the prototype build of the knowledge engine, delivering a foundation of governed data – a superset of data with governance rules and standard cleaning processes. |

![GBADsWGStruct](./images/GBADsWGStruct.png)

Each working group has a unique set of responsibilites, each which build on each other to create models and estimates build upon the `foundation' which is governed data. 



## References: 
[^1] https://acsess.onlinelibrary.wiley.com/doi/full/10.1002/agj2.21017?af=R
[^2] Working groups and description of responsibilites taken from the GBADs Bill and Melinda Gates Investment Document 2022