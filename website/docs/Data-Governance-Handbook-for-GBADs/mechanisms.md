---
sidebar_position: 5
---
Mechanisms for Data Sharing
===========================
 
There are many ways to technically facilitate data sharing such as file downloads, APIs, etc.  This section explains the principles behind being a “trusted” data broker and a federated data source.

![sysView](http://gbadske.org/Documentation/DataGovernanceHandbook/_images/systemView.png)

Mechanisms in GBADs data sharing are rooted in the ability to create a data viewing architecture that is tailored to the privacy and security rights of different user types. Specifically, this relies on the ability to categorize users and create system views for that user where that user can only see the data that they are authorized to. We use the term “view” as described by database theory: “Views are generally used to focus, simplify, and customize the perception each user has of the database. Views can be used as security mechanisms by letting users access data through the view, without granting the users permissions to directly access the underlying base tables of the view”. In other words, allowing data contributors to select which type of users they would like to allow to access their data creates a “view” for that data user (either hides or makes available specific data assets). This grants data contributors the Authority to Control their data resources. Of course, this concept is contingent on the ability to categorize data users (see Section Data Types for a more detailed discussion of this concept). 

Data that are deemed ‘Open by default’ will be available publicly to any user that enters the data portal and will be available without restriction to download directly. However, to access even Open data through an API, registration will be required to obtain a customized API key. 

Users wishing to access private data sources will be required to categorize themselves using GBADs predefined data user identifications. This will consist of creating a user profile, identifying what type of user you are and entering a verification method to do so. The verification method may consist of an ORCHID ID if an academic user. However, the mechanisms behind user verification are still under stipulation (we are still trying to figure out how we verify the identity of users from marginalized groups, private stakeholders etc).  These authorizations, both in terms of user information and the access rights of a data asset will be included in the metadata. 

Once the identity of a user can be verified, that user will be granted a view of the data and an API key that will allow them to access private data through an API call. Similarly, data in their view will be available through direct download. It should be noted that while FAIR principles are usually used in the context of Open data, data can be FAIRified within different system views and under the assumption that data are not Open by default. Our metadata will be Findable, Accessible, Interoperable and Reusable, as suggested by the FAIR guiding principles but within our system and as protected by different views. For example, Open data assets will be Findable to everyone, but data that are only available to specific data users will only be Findable to that user type. 

In general, each dataset brokered by GBADs will be equipped with a unique identifier which links it to its metadata. When a user accesses the data in some way (such as through an API call or direct download), the unique identifier and URL to the metadata portal will be returned. The user can then access the metadata easily. Likewise, users can begin their data search with the metadata search tool. The data API call will be provided somewhere on the metadata search engine (i.e. if you select a data set of interest, you will be provided with the metadata). 


Challenges in Data Sharing Mechanisms 
-------------------------------------

A challenge in the system view design is licensing difficulties in addressing the **R**eusability of a data resource. 
Concerns that arise are with the publication and reporting of results inspired by private data. If private data are 
used in a model or for other data driven decisions how will data be cited or properly attributed (or perhaps verified) 
without granting access to data or publishing results from models that used private data as input? It is important to 
understand the opinions of the data stakeholders in order to understand their wishes on how data are used. 

Another difficulty or possible limitation is that users with specific views will be unaware that certain data assets even exist. 

Vocabularies and Ontologies
---------------------------

Pre-existing vocabularies and ontologies will be accessed, refined, compared and extended upon to create a 
controlled vocabulary for GBADs.  Semantics will be accessed for each data source to ensure that the words 
used to describe data are consistent between data sources. 

- Vocabularies for data sources that don’t cite vocabulary standards will be obtained and words will be 
compared to pre-existing data standards such as AGROVOC (FAO’s controlled vocabulary) 
- Collected vocabularies will be compared for all data sources, to see how the description of terms compares to each other.
- Goal is to provide a standard for GBADs, increasing interoperability and quality of data, ultimately leading to 
superior models and estimates 
    - Also controlled vocabularies lead to better systems and allow for automation of tasks 

Agroportal is an ontology mapping tool that will allow GBADs to determine suitable ontologies and mapping between 
standardized vocabularies related to the agricultural sector.
- We also acknowledge that we cannot expect data contributors to change their vocabularies to follow that of GBADs 
(and if we did ask, it may discourage people from contributing data). This underlines the importance of vocabulary 
mappings. 

```{admonition} To Be Added
General discussion on how we see them developing for GBADS.
```

Provenance
----------

How information about data will be collected or accessed from donors and how this information will be evaluated, stored, 
and provide the basis for generating provenance information about all data brokered by GBADs.
 
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
 
Data access is in part governed by the provenance of the data. For example, it is important to understand who created and 
owns the data to determine whether the data are Reusable (FAIR principle 4). There may be specific restrictions to data 
access under licensing agreements that could determine how data can be used, and by whom.

```{note} 
E3 Metadata should acknowledge the provenance and purpose and any limitations or obligations in secondary use inclusive 
of issues of consent.
```

Provenance information for each data set will be stored in metadata, which will be made available to and searchable 
by all users of GBADs. A recognized provenance standard will be used to ensure that provenance information is Findable 
and Reusable.

Information Collection
----------------------

Surveys/forms that will collect information to be used for provenance and user identification.
- ORCID ID 
- Login information 
 
