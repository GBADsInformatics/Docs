---
sidebar_position: 13
---
Examples
========

```{admonition} Description of this section needed
Provide a scenario and meta-data for each type of data outlined in the Data Ownership section
```

Scenario 1: Metadata for corporate data 
----------------------------------------

Metadata for FAO data that are already available through the GBADs portal. Metadata is for 
Live Animals > Ethiopia > Stocks > Chickens > 1961 - 2018. 

This metadata makes the following assumptions: 
- The date of creation is when FAO revised their agricultural data domain methodologies 
- [Reference](http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf)

```
{
  "@context": {
    //Each metadata term would go here, with a reference (URL) 
    //to the context, or description of the term
    //We are still deciding on standards, and creating our own (which can be 
    //registered), so this is left largely blank, for now.
    "spatialCoverage":"https://www.geonames.org/countries/",
    "temporalCoverage":"https://www.iso.org/iso-8601-date-and-time-format.html"

  },
  "@id": "http://www.fao.org/faostat/en/#data/QA",
  "@type":"https://schema.org/Dataset",
  "URI": "http://www.fao.org/faostat/en/#data/QA",
  "title": "FAO Chicken, Live Animals",
  "accessRights":"Open",
  "accrual":{
  	"accrualMethod":"loan",
  	"accrualPeriodicity":"Annual",
  },
  "creator": {
    "@type": "creatorCorporate",
  	"URL":"http://www.fao.org/",
  },
  "coverage": {
  	"temporalCoverage":"1961/2018",
  	"spatialCoverage":"ET"
  },
  "date": {
  	"created":"2016",
  	"dateSubmitted":"2020-10-09",
    "modified": "2020-03-04"
  },
  "description":"Number of live chickens in Ethiopia from 1961 to 2020, as calculated and recorded by the FAO.",
  "distribution":"directDownload",
  "relation":{
  	"format":"csv, json"
  },
  "subject": {
 	"subjectClassification":"",
  	"subjectKeywords": "Chicken, FAO, Live Animals",
  	"subjectThesaraus":"http://aims.fao.org/vest-registry/vocabularies/agrovoc"
  },
  "language":"English",
  "license":"http://www.fao.org/tenure/resources/results/details/en/c/CA7570EN/#querystring=JmVuZHN0cmluZz0x",
  "provenance":[
    "http://fenixservices.fao.org/faostat/static/documents/QA/QA_Update_History.pdf",
    "http://fenixservices.fao.org/faostat/static/documents/Q/Q_Revision_Note_e.pdf"
  ],
  "publisher":"http://www.fao.org/faostat/",
  "source":"http://www.fao.org/faostat/en/#data/QA",
  "methodology":"http://fenixservices.fao.org/faostat/static/documents/QA/QL_methodology_e.pdf",
  "metadataInformation":"http://www.fao.org/faostat/en/#data/QA",
  "vocabularyEncodingScheme": "http://aims.fao.org/vest-registry/vocabularies/agrovoc"

}
```

Scenario 2: Metadata for modified data 
--------------------------------------

In the cases where raw data was modified in some way, like through modelling, metadata must reflect that data are 
created through transformations of some kind. The provenance information of the raw data must also be provided 
including links or references to computer programs that created the data. Related publications must also be cited 
or referenced. Please note that GBADs does not have data for this scenario yet and this metadata is fabricated to 
enhance the understanding of the metadata and data governance strategy.

```{admonition} To Be Added
Metadata
```

Scenario 3: Metadata from Indigenous contributors
-------------------------------------------------

In this scenario the data are contributed by Indigenous Peoples or communities and the metadata will reflect the data and 
privacy restrictions that should be used to comply with CARE.

```{admonition} To Be Added
Metadata
```


