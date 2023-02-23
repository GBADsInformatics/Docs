---
sidebar_position: 
---
# Data Principles and Governance 

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
- https://towardsdatascience.com/what-we-got-wrong-about-data-governance-365555993048



## Data Principles 

To provide and create data that can be used to it's fullest potential, GBADs strives to provide data and metadata that are **F**indable, **A**ccessible, **I**nteroperable, **R**eusable and **S**ecure (FAIR(S)). 

```{margin}
The '[FAIR Guiding Principles for scientific data management and stewardship](https://www.nature.com/articles/sdata201618)' were published in *Scientific Data* in 2016. Since it's publication, the article has been cited over 4500 times and there has been efforts to implement and accept the FAIR principles across different domains. This includes the [GO FAIR Initiative](https://www.go-fair.org/go-fair-initiative/go-fair-offices/), which provides resources to groups trying to make their data FAIR.
```

<!--GBADs strives to provide (meta)data that adhere to the FAIR(S) and CARE principles and will adopt a modified version of the GATHER statement and checklist to create more granular metadata, where appropriate. 

By using and building on pre-existing standards we will build an interoperable system that other researchers will be able to understand and build on. -->

### FAIR Principles and Data Culture

The idea of ‘FAIR’ data was created in 2014/15 to guide the reuse, usability, discoverability and interoperability of research data. The acronym ‘FAIR’ stands for Findablity, Accessibility, Interoperability and Reusability of data assets, including the data itself and the metadata that is used to describe it (see Appendix A for a breakdown of each FAIR principle). The idea of FAIR data has since grown and has been widely used, adapted and built on.
In 2020, GBADs informatics proposed ‘FAIR(S)’ data to add an element of Security to the FAIR guiding principles. 

While initially created for the reuse of research data, the idea of FAIR has grown and can be applied to Open and private data sources. GBADs will adapt FAIR data as a system concept, and to create FAIR data objects. The FAIR data ecosystem (Figure 1) will be used as the skeletal structure of our data ecosystem. This document will act as a Data Management Plan where each component of the FAIR data ecosystem will be addressed and discussed in terms of structuring FAIR data objects and defining the use of data flowing through our system. 


```{figure} /images/fairDataObj.png
:name: fairDataObj

```

A popular misconception in the adoption of FAIR sharing principles is that FAIR suggests that data should be ‘Open’ by default; however, FAIR actually suggests that data should be “As open as possible, as closed as necessary” [Jones et al, 2018]. For GBADs, this means supplementing FAIR principles with CARE, which is discussed in more depth later in this document. A key component in this will be identifying different types of data users and contributors. 

Ensuring that metadata are in a standard form will allow GBADs to comply to FAIR, and will serve as a backbone for our system, feeding into the ability to search and find resources based on standardized terms. Therefore, emphasis will be placed on well defined metadata attributes and definitions. 

![cloudReg](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/cloudOfRegistries.png)

GBADs strives to not only adapt FAIR in the system, but also create a culture with our enterprise that inspires the use of FAIR in the research data of the academics involved in the greater GBADs project. We believe that this shift will enable better use and re-use of data, allowing for collaboration and better allocation of resources.

### CARE Principles 

CARE principles include: Collective Benefit, Authority to Control, Responsibility and Ethics. Each principle pertains to the use and governance of data owned by or related to Indigenous Peoples, their land, cultural property and practices [refs] and is broken down into categories in Appendix B. CARE principles will be considered in each step of the GBADs data governance strategy and data portal design. 

We acknowledge that our interpretations of the CARE principles may not completely reflect the true interests of Indigenous Peoples and groups, as the GBADs Informatics team does not currently have Indigenous employees or partnerships with Indigenous Peoples. When official collaborations with Indigenous Peoples and groups have been created, strategies and designs will be developed and further refined to ensure that all Indigenous data is being governed, managed and used for the collective benefit of Indigenous Peoples.

### GATHER Guidelines 

GATHER, or the Guidelines for Accurate and Transparent Health Estimates Reporting, defines best reporting practices for studies that calculate health estimates. GATHER has three core documents: the GATHER statement [refs], the GATHER Checklist, and the GATHER Explanation and Elaboration [ref].  While GBADs will be generating health estimates, since the health is that of agricultural animals and not humans (which GATHER was designed for), we will use GATHER as a starting and not an end point.  Please see Appendix C to see the GATHER checklist and a preliminary critique of which items relate to GBADs.



