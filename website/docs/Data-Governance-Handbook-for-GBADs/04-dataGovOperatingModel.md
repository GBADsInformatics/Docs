---
sidebar_position: 4
---

# Data Governance Operating Model

A data governance operating model is a an operating model that defines an organization's key data processes, the roles and tasks involved in each of those processes, and the people, tools, and technology that are required to fulfill each of the processes. 

---

**In this section:** 

* We outline the data goals for GBADs
* We outline the data governance operating model for GBADs using the GBADs' governance structure (Working Groups) to understand the roles and responsibilities for each of the tasks involved to fulfill the data goals

---

## Goals

The main data goals for GBADs can be broken down into the following:

**General**

<a name="Data-Goal-1"></a>Data Goal 1. Access to technology and products that are innovative and advance the state-of-the-art.


**Data**

<a name="Data-Goal-2"></a>Data Goal 2. Identify data sources that are required for GBADs modelling purposes 

    * When necessary, create data allicances with private and public data holders


<a name="Data-Goal-3"></a>Data Goal 3. Data is accessible for users (both humans and machines) and can be used in a timely matter for decision making [^1]

    * This includes data that GBADs redirects from other organizations and data that GBADs stores for associated projects and partners [^1]. 

<a name="Data-Goal-4"></a>Data Goal 4. Data have been analyzed for quality, and these metrics are available as part of the metadata [^1]

<a name="Data-Goal-5"></a>Data Goal 5. Data is cleaned only once - reduce replication of data sources and cleaning

<a name="Data-Goal-6"></a>Data Goal 6. Data is findable to data users [^1]

<a name="Data-Goal-7"></a>Data Goal 7. A system that allows for the customization of information through mechanisms and processing that adjusts the granularity of the data to the user's needs[^1]

<a name="Data-Goal-8"></a>Data Goal 8. Data that are interpretable—the semantics to be encoded in meta-data and other semantic systems [^1]

**Models and Data Visualizations**

<a name="Data-Goal-9"></a>Data Goal 9. Modelling procedures are reproducible

<a name="Data-Goal-10"></a>Data Goal 10. Data lineage is traced to ensure that all data procedures are replicable, to ensure that data is not replicated, to help with data quality and updates, and to keep track of which versions of data are used in publications

<a name="Data-Goal-11"></a>Data Goal 11. Data visualizations and dashboards are served on GBADs servers, use data from the GBADs Knowledge Engine (GBADs data sources), and link to metadata and methods

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

The governance structure of GBADs is split into three main Working Groups, each with unique, but overlapping responsibilities. Working Groups are organized with each building on each other, where the data lies as the backbone structure (Figure 1).

![GBADsWGStruct](./images/GBADsWGStruct.png)
Figure 1: GBADs Governance Structure

Each working group has a set of responsibilities as outlined by GBADs to fulfill the goal of estimating the economic and health burden of animal diseases through modelling efforts. The responsibilities outlined overlap with the GBADs data goals through interactions with obtaining, using, and managing data. The table below outlines the description of responsibilities for each working group and which goals pertain to each working group:  

| Working Group | Description of Responsibilities[^2] | Overlap with Goals |
| ------------- | ----------- | ----------- |
| Working Group 1 (WG1)- Data alliances, Communication of information and Adoption and uptake | <ul><li>Drive effective research translation and will build on the work of the disease prioritization theme in the global context, and on the engagement work with stakeholders of the Indonesian and Ethiopian case studies in a local context.</li><li>Translate research into valuable products in order to access further resources be they data, finance or in-kind contributions from other programmes.</li><li>Responsible for combining and organizing analytical results for consistency and comprehension by the users and will be accountable for ensuring user and expert reference group feedback is incorporated into dashboards.</li></ul>| <ul><li>[Data Goal 2](#Data-Goal-2)</li></ul>|
| Working Group 2 (WG2)  Methods and Analytics | <ul><li>Responsible for the refinement of the GBADs methods delivering high quality data analysis and scientific modelling, using scenario analysis to address data availability constraints and sensitivity analysis to incorporate data quality limitations, a critical foundation for the knowledge engine and valid disease burden estimations.</li><li>Use subsets of data from the superset built by the Informatics Working Group (WG3) with transformations and calculations required for specific analysis.</li><li>Accountable for assessing the technical feasibility of GBADs by testing its methods’ scientific relevance and robustness.</li></ul> | <ul><li>[Data Goal 2](#Data-Goal-2)</li><li>[Data Goal 9](#Data-Goal-9)</li><li>[Data Goal 10](#Data-Goal-10)</li></ul>|
| Working Group 3 (WG3) - Informatics | <ul><li>Responsible for the prototype build of the knowledge engine, delivering a foundation of governed data – a superset of data with governance rules and standard cleaning processes.</li></ul> | <ul><li> [Data Goal 1](#Data-Goal-1)</li><li>[Data Goal 3](#Data-Goal-3)</li><li>[Data Goal 4](#Data-Goal-4)</li><li>[Data Goal 5](#Data-Goal-5)</li><li>[Data Goal 6](#Data-Goal-6)</li><li>[Data Goal 7](#Data-Goal-7)</li><li>[Data Goal 8](#Data-Goal-8)</li><li>[Data Goal 10](#Data-Goal-10)</li><li>[Data Goal 11](#Data-Goal-11)</li></ul>|

---

The data governance operating model uses the working group governance structure to allocate roles and responsibilities related to the data goals. 

---

## Data Governance Operating Model



<!-- ## Non-Invasive Data Governance Operating Model of Roles and Responsibilities 

The Non-Invasive Data Governance Operating Model of Roles and Responsibilities 

![seinerTdanDGOperating](./images/seinerTdanDGOperating.gif) -->

## References: 
[^1] https://acsess.onlinelibrary.wiley.com/doi/full/10.1002/agj2.21017?af=R
[^2] Working groups and description of responsibilites taken from the GBADs Bill and Melinda Gates Investment Document 2022
[^3] https://tdan.com/the-non-invasive-data-governanceo-operating-model/12210