---
sidebar_position: 3
---
Technical Data Standards
========================

Technical data standards are an important element of the data governance strategy, as they ensure that data are Findable 
and Interoperable and that comparisons and mappings between different data sources can be established.
 
Standards for data, including metadata terms, attributes, structure and standardized naming conventions, enables data to 
be catalogued and insights to be drawn on data assets. For example, standard, well defined naming conventions allow for 
data to be queried. We are able to keep track of what types of data we have and in which areas more data is required. With 
standard vocabularies between data sources, mappings between sources can be created, allowing us to understand the relationship 
between data sources and provide insight on the quality and trustworthiness of these data sources. 
 
Technical data standards exist in each of the following categories: (meta)data structure, (meta)data content (vocabularies) 
and meta(data) format. 

Metadata Content
----------------

To annotate metadata terms, standard vocabularies are employed (see Appendix D). For example, all dates reported in the metadata are...

Metadata Terms 
--------------

Metadata terms are adapted from the 
- [International System for Agricultural Science and Technology (AGRIS) Application Profile (AP)](http://www.fao.org/3/ae909e/ae909e05.htm#P460_23819)
- [Dublin Core Metadata Initiative (DCMI)](https://dublincore.org/specifications/dublin-core)
- [Agricultural Metadata Element Set (AgMES)](https://fairsharing.org/FAIRsharing.vd694s)
   - This standard has been deprecated although the FAO still cites it.

An index of metadata standards can be found at the [Metadata Standards Catalog](https://rdamsc.bath.ac.uk/scheme-index).

GBADs will further extend and refine terms to fulfill specific needs for the governance and provenance of data collected by or 
handled by the GBADs data portal system. 
 
Metadata Structure
------------------

Metadata schemas will be stored in the [JSON-LD](https://json-ld.org/) format. JSON-LD is a structured data format that supports the 
implementation of linked data. Google’s [structured metadata tool](https://search.google.com/structured-data/testing-tool/) will be 
used as metadata is created, revised and edited through our data lifecycle.

There are 3 main types of metadata, each serving a specific purpose in the lifecycle of the data (Riley, 2017) (Table 1).  Descriptive 
metadata includes information about the data source used for finding and understanding a resource. This includes information about the 
context of the data, including information about provenance, if applicable. Descriptive metadata provides information that will allow 
for the data to be Findable and Interoperable. Administrative metadata includes two subsets of metadata: technical and rights metadata. 
Riley (2017) describes administrative metadata as metadata that are used for the management of a given data resource. Rights metadata 
provides information about the licensing and copyright information of a given source while technical metadata provides information about 
the file type and size of the data. Structural metadata describes the relationships between parts of resources to others. This might 
include information about how data are arranged or viewed, hierarchical relationships or the sequence of data objects. For the contexts 
of GBADs, structural metadata is also important in storing information about the Accessibility of private data sources. This is discussed 
in section [FIXME ADD SECTION] of the Handbook. 

Table 1: Types of metadata and definitions. Table adapted from Riley, 2017. 
| Type of Metadata | Definition | Example Properties | Primary Uses |
| :--------------- | ---------- | ------------------ | ------------ |
| Descriptive metadata | For finding and understanding a resource; for data quality. | Title, Author, Subject, Genre, Publication Date | Findability, Display, Interoperability |
| - Administrative metadata- Technical metadata - Rights metadata | - For decoding and rendering files - Long term management of files - Intellectual property rights attached to content | Technical: file type, file size, creation date/time Rights: Copyright status, License terms, Rights holder | Interoperability, Digital object management, Preservation |
| Structural metadata | Relationships of parts of resources to one another. | Sequence, Place in hierarchy | Navigation |
| | | | |

Metadata can include different terms depending on the context of the source. Table 2 has a list of all possible terms that metadata 
could include as well as their URIs. When a metadata term is used, the URI of that term must be accounted for in the `@ context` section 
of the JSON-LD script. This allows for the definition of the term to be traced back to a standardized definition. 
 
Each data asset in the system must be at minimum described with the following terms (the first set of terms before the blank line in Table 2): URI, 
accessRights, accrualMethod, contributor, coverage, date, dateSubmitted, description, format, identifier, language, mediator, provenance, spatial, 
temporal, title, type, subjectThesaurus, subjectClassification. 
 
When data are modified by GBADs or are from the output of a model, this must be accredited in the metadata. In these cases, the following 
terms may be used: modified, alternative, replaces, isPartof, isFormat, hasFormat, hasPart, isRequiredBy, isVersionOf, hasVersion, provenance, 
requires. For example, in the scenario that GBADs has acquired a data asset that was changed from one vocabulary to another metadata terms 
isVersionOf, provenance, requires and modified would be used to reflect the changes. 

Table 2: All possible metadata terms and respective URIs. 

```json
{
  "@context": {
    "URI": "",
    "accessRights": "http://purl.org/dc/terms/accessRights",
    "accrualMethod": "http://purl.org/dc/terms/accrualMethod",
    "contributor": "http://purl.org/dc/terms/contributor",
    "coverage": "http://purl.org/dc/terms/coverage",
    "date": "http://purl.org/dc/terms/date",
    "dateSubmitted": "http://purl.org/dc/terms/dateSubmitted",
    "description": "http://purl.org/dc/terms/description",
    "format": "http://purl.org/dc/terms/format",
    "identifier": "http://purl.org/dc/terms/identifier",
    "language": "http://purl.org/dc/terms/language",
    "mediator": "http://purl.org/dc/terms/mediator",
    "provenance": "http://purl.org/dc/terms/provenance",
    "rights": "http://purl.org/dc/terms/rights",
    "spatial": "http://purl.org/dc/terms/spatial",
    "temporal": "http://purl.org/dc/terms/temporal",
    "title": "http://purl.org/dc/terms/title",
    "type": "http://purl.org/dc/terms/type",
"subjectThesaurus": "http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectThesaurus",
"subjectClassification": "http://www.fao.org/3/ae909e/ae909e00.htm#TopOfPage#subjectClassification",

    "accrualPeriodicity": "http://purl.org/dc/terms/accrualPeriodicity",
    "accrualPolicy": "http://purl.org/dc/terms/accrualPolicy", 
    "alternative": "http://purl.org/dc/terms/alternative",
    "audience": "http://purl.org/dc/terms/audience",
    "available": "http://purl.org/dc/terms/available",
    "bibliographicCitation": "http://purl.org/dc/terms/bibliographicCitation",
    "conformsTo": "http://purl.org/dc/terms/conformsTo",
    "created": "http://purl.org/dc/terms/created",
    "creator": "http://purl.org/dc/terms/creator",
    "dateAccepted": "http://purl.org/dc/terms/dateAccepted",
    "dateCopyrighted": "http://purl.org/dc/terms/dateCopyrighted",
    "extent": "http://purl.org/dc/terms/extent",
    "hasFormat": "http://purl.org/dc/terms/hasFormat",
    "isFormatOf": "http://purl.org/dc/terms/isFormatOf",
    "hasPart": "http://purl.org/dc/terms/hasPart",
    "isPartOf": "http://purl.org/dc/terms/isPartOf",
    "hasVersion": "http://purl.org/dc/terms/hasVersion",
    "isVersionOf": "http://purl.org/dc/terms/isVersionOf",
    "isReferencedBy": "http://purl.org/dc/terms/isReferencedBy",
    "replaces": "http://purl.org/dc/terms/replaces",
    "isReplacedBy": "http://purl.org/dc/terms/isReplacedBy",
    "requires": "http://purl.org/dc/terms/requires",
    "isRequiredBy": "http://purl.org/dc/terms/isRequiredBy",
    "license": "http://purl.org/dc/terms/license",
    "modified": "http://purl.org/dc/terms/modified",
    "references": "http://purl.org/dc/terms/references",
    "rightsHolder": "http://purl.org/dc/terms/rightsHolder",
    "source": "http://purl.org/dc/terms/source",
    "subject": "http://purl.org/dc/terms/subject",
    "tableOfContents": "http://purl.org/dc/terms/tableOfContents"
  }
```

Rich metadata with terms describing the process of how the original data was obtained, recorded and collected provides context 
about the data quality and which data sources can be combined with others. Table 3 provides metadata terms that were adapted 
from GATHER guidelines. When a data contributor provides a data source, they will be required to fill out a form to provide 
context about the data provided. The responses on the form will generate the descriptive metadata for that data source. The 
terms that are used to describe data assets will depend on the nature of the data source; for example, not all data sources 
will contain information about disease. 

As more metadata is created, controlled vocabularies will be created or adapted for each term. 

Table 3: Metadata terms and definitions adapted from GATHER guidelines

| Term | Definition |
| :--- | ---------: |
| species | Species classification of organism  |
| disease | If based on reported disease, provide diseases that were included in study |
| inclusionCriteria | Demographic, clinical or geographic inclusion |
| exclusionCriteria | Demographic, clinical, or geographic exclusion |
| dataCollectionMethod | How was data collected? Survey? Field study?  |
| ageRange | Age of study subjects. |
| sex | Provide sex(es) of species included. |
| sampleSize | Sample size |
| measurementMethod | How the outcome of interest was measured. |
| diagnosticCriteria | How the disease was diagnosed.  |
| definedBias | Identify and describe any categories of input data that have potentially important biases. |
| fileFormat | Format of data file (csv, json etc.)  |
| analysisMethod | How the outcome of interest was analyzed - should also provide link to GitHub if applicable  |
| studyDesign | Information about research design. Terms such as cohort study, randomized trial, cost benefit analysis, descriptive study, diagnostic study etc. are expected.  |
| | |

