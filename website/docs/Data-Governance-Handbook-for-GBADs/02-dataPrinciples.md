---
sidebar_position: 2
---

# Data Principles 

As a program, we have core data principles that our [Data Governance Operating Model](https://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/dataGovOperatingModel) is based on. 

Our core principles include: 

1. Adhere to the FAIR(S)[^1],[^2] guiding principles to the best of our abilities
2. Be a "trusted" data broker and a federated data source
3. Consider the CARE principles when using data from marginalized groups and private data
4. Ensure that all processes that use data (including data cleaning, modelling, reformatting etc.) are replicable and reproducible

---

In this chapter of the handbook we outline the principles that we intend to follow in our data governance framework and an overview of the processes involved in each.

Other chapters in the handbook will provide more detail on the processes, technological tools, and human responsibilities involved in each of the principles, and will refer back to these principles when outlining the processes involved in each of our data goals.

---

## 1. FAIR Principles and Data Culture

We have adopted the FAIR(S)[^1],[^2] guiding principles to ensure that data, metadata, and modelling processes are **F**indable, **A**ccessibile, **I**nteroperabile, **R**eusable, and **S**ecure. 

<!-- To provide and create data that can be used to it's fullest potential, GBADs strives to provide data and metadata that are **F**indable, **A**ccessible, **I**nteroperable, **R**eusable and **S**ecure (FAIR(S)).  -->


---

**About FAIR:**

The '[FAIR Guiding Principles for scientific data management and stewardship](https://www.nature.com/articles/sdata201618)' were published in *Scientific Data* in 2016. Since it's publication, the article has been cited over 4500 times and there has been efforts to implement and accept the FAIR principles across different domains. This includes the [GO FAIR Initiative](https://www.go-fair.org/go-fair-initiative/go-fair-offices/), which provides resources to groups trying to make their data FAIR.

---

<!--GBADs strives to provide (meta)data that adhere to the FAIR(S) and CARE principles and will adopt a modified version of the GATHER statement and checklist to create more granular metadata, where appropriate. 

By using and building on pre-existing standards we will build an interoperable system that other researchers will be able to understand and build on. -->



The idea of ‘FAIR’ data was created in 2014/15 to guide the reuse, usability, discoverability and interoperability of research data. The acronym ‘FAIR’ stands for Findablity, Accessibility, Interoperability and Reusability of data assets, including the data itself and the metadata that is used to describe it (see Appendix A for a breakdown of each FAIR principle). The idea of FAIR data has since grown and has been widely used, adapted and built on.
In 2020, GBADs informatics proposed ‘FAIR(S)’ data to add an element of Security to the FAIR guiding principles. 

While initially created for the reuse of research data, the idea of FAIR has grown and can be applied to Open and private data sources. GBADs will adapt FAIR data as a system concept. The FAIR data ecosystem (Figure 1) will be used as the skeletal structure of our data ecosystem. This document will act as a Data Management Plan where each component of the FAIR data ecosystem will be addressed and discussed in terms of structuring FAIR data objects and defining the use of data flowing through our system. 

![fairDataObj](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/fairDataObj.png)

A popular misconception in the adoption of FAIR sharing principles is that FAIR suggests that data should be ‘Open’ by default; however, FAIR actually suggests that data should be “As open as possible, as closed as necessary” [Jones et al, 2018]. For GBADs, this means supplementing FAIR principles with CARE, which is discussed in more depth later in this document. A key component in this will be identifying different types of data users and contributors. 

Ensuring that metadata are in a standard form will allow GBADs to comply to FAIR, and will serve as a backbone for our system, feeding into the ability to search and find resources based on standardized terms. Therefore, emphasis will be placed on well defined metadata attributes and definitions. 

![cloudReg](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/cloudOfRegistries.png)

GBADs strives to not only adapt FAIR in the system, but also create a culture with our enterprise that inspires the use of FAIR in the research data of the academics involved in the greater GBADs project. We believe that this shift will enable better use and re-use of data, allowing for collaboration and better allocation of resources.

## 2. A "Trusted" Data Broker

There are many ways to technically facilitate data sharing such as file downloads, APIs, etc.  This section explains the principles behind being a “trusted” data broker and a federated data source.

### Mechanisms for Responsible Data Sharing 

**The technological mechanisms in GBADs data sharing are rooted in the ability to create a data viewing architecture that is tailored to the privacy and security rights of different user types.** 
Specifically, this relies on the ability to categorize users and create system *views* for that user where that user can only see the data that they are authorized to. We use the term “view” as described by database theory: *“Views are generally used to focus, simplify, and customize the perception each user has of the database. Views can be used as security mechanisms by letting users access data through the view, without granting the users permissions to directly access the underlying base tables of the view”.*[^3]  In other words, allowing data contributors to select which type of users they would like to allow to access their data creates a “view” for that data user (either hides or makes available specific data assets). This grants data contributors the **Authority to Control** their data resources. Of course, this concept is contingent on the ability to categorize data users. 

Data that are deemed ‘Open by default’ will be available publicly to any user that enters the data portal and will be available without restriction to download directly.  

![sysView](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/systemView.png)

#### User Authentification

Users wishing to access private data sources will be required to categorize themselves using GBADs predefined data user identifications. This will consist of creating a user profile, identifying what type of user you are and entering a verification method to do so. The verification method may consist of an ORCHID ID if an academic user. However, the mechanisms behind user verification are still under stipulation (we are still trying to figure out how we verify the identity of users from marginalized groups, private stakeholders etc).  These authorizations, both in terms of user information and the access rights of a data asset will be included in the metadata. 

Once the identity of a user can be verified, that user will be granted a view of the data and an API key that will allow them to access private data through an API call. Similarly, data in their view will be available through direct download. It should be noted that while FAIR principles are usually used in the context of Open data, data can be FAIRified within different system views and under the assumption that data are not Open by default. Our metadata will be Findable, Accessible, Interoperable and Reusable, as suggested by the FAIR guiding principles but within our system and as protected by different views. For example, Open data assets will be Findable to everyone, but data that are only available to specific data users will only be Findable to that user type. 

In general, each dataset brokered by GBADs will be equipped with a unique identifier which links it to its metadata. When a user accesses the data in some way (such as through an API call or direct download), the unique identifier and URL to the metadata portal will be returned. The user can then access the metadata easily. Likewise, users can begin their data search with the metadata search tool. The data API call will be provided somewhere on the metadata search engine (i.e. if you select a data set of interest, you will be provided with the metadata). 

### Challenges in Mechanisms for Data Sharing

A challenge in the system view design is licensing difficulties in addressing the **R**eusability of a data resource. 
Concerns that arise are with the publication and reporting of results inspired by private data. If private data are used in a model or for other data driven decisions how will data be cited or properly attributed (or perhaps verified) without granting access to data or publishing results from models that used private data as input? It is important to understand the opinions of the data stakeholders in order to understand their wishes on how data are used. 

Another difficulty or possible limitation is that users with specific views will be unaware that certain data assets even exist. 

## 3. CARE Principles 

CARE principles include: Collective Benefit, Authority to Control, Responsibility and Ethics. Each principle pertains to the use and governance of data owned by or related to Indigenous Peoples, their land, cultural property and practices [refs] and is broken down into categories in Appendix B. CARE principles will be considered in each step of the GBADs data governance strategy and data portal design. 

We acknowledge that our interpretations of the CARE principles may not completely reflect the true interests of Indigenous Peoples and groups, as the GBADs Informatics team does not currently have Indigenous employees or partnerships with Indigenous Peoples. When official collaborations with Indigenous Peoples and groups have been created, strategies and designs will be developed and further refined to ensure that all Indigenous data is being governed, managed and used for the collective benefit of Indigenous Peoples.

## 4. Reproducibility  

### Data Provenance 

How information about data will be collected or accessed from donors and how this information will be evaluated, stored, and provide the basis for generating provenance information about all data brokered by GBADs.
 
Data contributors will be required to provide provenance information.
 
Providing detailed provenance information to data users is an essential element of providing FAIR data. Provenance information 
should at minimum cover: 

1. Who or what created the data? This would include information about the methodology used to create the original data 
(either through a citation or providing information in the metadata). Information about whether the data has been 
transformed in some way (such as through a change in vocabulary/ontology, imputation techniques, estimations, dropping rows etc.) 
should also be provided through references to and descriptions of programs or techniques used to complete these transformations.

2. When was the data produced and when changes were last made to the data? 

3. Context of data creation. Why was the data created or produced? This provides information to potential data users about 
whether using the data fulfills their needs and conforms to their potential practices, models or other statistical techniques.

Of interest to this discussion are the metrics designed for FAIR: 
[FAIR Metric FM-R1.2](https://github.com/FAIRMetrics/Metrics/blob/master/Distributions/FM_R1.2.pdf)
 
Data access is in part governed by the provenance of the data. For example, it is important to understand who created and owns the data to determine whether the data are Reusable (FAIR principle 4). There may be specific restrictions to data access under licensing agreements that could determine how data can be used, and by whom.

---

Metadata should acknowledge the provenance and purpose and any limitations or obligations in secondary use inclusive of issues of consent.

---

Provenance information for each data set will be stored in metadata, which will be made available to and searchable by all users of GBADs. A recognized provenance standard will be used to ensure that provenance information is Findable and Reusable.

###  GATHER Statement

The GATHER Statement, or the **G**uidelines for **A**ccurate and **T**ransparent **H**ealth **E**stimates **R**eporting, defines best reporting practices for studies that calculate health estimates [^4]. 

The Gather Checklist includes information that should be included in global health estimates:

| Item number | Checklist item |
| ----------- | -------------- | 
| Objectives and Funding | | 
| 1 | Define the indicator(s), populations (including age, sex, and geographic entities), and time period(s) for which estimates were made. | 
| 2 | List the funding sources for the work. | 
| Data inputs | |
| For all data inputs from multiple sources that are synthesised as part of the study: | | 
| 3 | Describe how the data were identified and how the data were accessed. | 
| 4 | Specify the inclusion and exclusion criteria. Identify all ad-hoc exclusions. | 
| 5 | Provide information about all included data sources and their main characteristics. For each data source used, report reference information or contact name/institution, population represented, data collection method, year(s) of data collection, sex and age range, diagnostic criteria or measurement method, and sample size, as relevant. | 
| 6 | Identify and describe any categories of input data that have potentially important biases (eg, based on characteristics listed in item 5).  | 
| For data inputs that contribute to the analysis but were not synthesised as part of the study:| 
| 7 | Describe and give sources for any other data inputs. |
| For all data inputs: | | 
| 8 | Provide all data inputs in a file format from which data can be efficiently extracted (eg, a spreadsheet rather than a PDF), including all relevant meta-data listed in item 5. For any data inputs that cannot be shared because of ethical or legal reasons, such as third-party ownership, provide a contact name or the name of the institution that retains the right to the data. |
| Data analysis | 
| 9 | Provide a conceptual overview of the data analysis method. A diagram may be helpful. | 
| 10 | Provide a detailed description of all steps of the analysis, including mathematical formulae. This description should cover, as relevant, data cleaning, data pre-processing, data adjustments and weighting of data sources, and mathematical or statistical model(s). | 
| 11 | Describe how candidate models were evaluated and how the final model(s) were selected. | 
| 12 | Provide the results of an evaluation of model performance, if done, as well as the results of any relevant sensitivity analysis. | 
| 13 | Describe methods of calculating uncertainty of the estimates. State which sources of uncertainty were, and were not, accounted for in the uncertainty analysis. |
| 14 | State how analytical or statistical source code used to generate estimates can be accessed. | 
| Results and discussion | 
| 15 | Provide published estimates in a file format from which data can be efficiently extracted. | 
| 16 | Report a quantitative measure of the uncertainty of the estimates (eg, uncertainty intervals). | 
| 17 | Interpret results in light of existing evidence. If updating a previous set of estimates, describe the reasons for changes in estimates. | 
| 18 | Discuss limitations of the estimates. Include a discussion of any modelling assumptions or data limitations that affect interpretation of the estimates. |
Table from [^4].


 While GBADs will be generating health estimates, since the health is that of agricultural animals and not humans (which GATHER was designed for), we will use GATHER as a starting and not an end point. 


<!-- # Data Principles and Governance 

## Data Governance 

**Data governance is the management, storage, privacy, usage and quality of data and metadata used by an organization.** Data governance is a multi-dimensional task that requires all individuals in an organization to comply to the documented standards and best practices for all elements of data use.
Compliance to a well documented data governance strategy enables enhanced data use through the ability to leverage data assets to their full capabilities. 

### Foundations of Data Governance 

While data governance is about the data, it is also about the people, processes and security of the data. 

**Data Governance and People** 
All individuals who create, use, disseminate or manage data are part of and should comply to the data governance strategy. 

**Data Governance and Security** 

**Data Governance and Processes** 

Data governance terms you should know: 
- Data steward 
- Data integration
- Data provenance 
- Data science 



#### More reading on data governance
**Blog Posts**
- https://towardsdatascience.com/what-we-got-wrong-about-data-governance-365555993048 -->

## References
[^1]: https://www.nature.com/articles/sdata201618
[^2]: https://acsess.onlinelibrary.wiley.com/doi/full/10.1002/agj2.21017?af=R
[^3]: https://learn.microsoft.com/en-us/sql/relational-databases/views/views?view=sql-server-ver16
[^4]: https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(16)30388-9/fulltext