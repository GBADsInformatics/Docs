---
sidebar_position: 14
---

# Appendices


## Appendix A: FAIRS(S) Data Sharing Principles

FAIR Principles, as described in [https://www.go-fair.org/fair-principles/](https://www.go-fair.org/fair-principles/).

**Findable**

The first step in (re)using data is to find them. Metadata and data should be easy to find for both humans and computers. Machine-readable metadata are essential for automatic discovery of datasets and services, so this is an essential component of the FAIRification process.

    F1. (Meta)data are assigned a globally unique and persistent identifier

    F2. Data are described with rich metadata (defined by R1 below)

    F3. Metadata clearly and explicitly include the identifier of the data they describe

    F4. (Meta)data are registered or indexed in a searchable resource

**Accessible**

Once the user finds the required data, she/he needs to know how can they be accessed, possibly including 
authentication and authorisation.

    A1. (Meta)data are retrievable by their identifier using a standardised communications protocol

        A1.1 The protocol is open, free, and universally implementable

        A1.2 The protocol allows for an authentication and authorisation procedure, where necessary

    A2. Metadata are accessible, even when the data are no longer available

**Interoperable**

The data usually need to be integrated with other data. In addition, the data need to interoperate with applications or workflows for analysis, storage, and processing.

    I1. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.

    I2. (Meta)data use vocabularies that follow FAIR principles

    I3. (Meta)data include qualified references to other (meta)data

**Reusable**

The ultimate goal of FAIR is to optimise the reuse of data. To achieve this, metadata and data should be well-described so that they can be replicated and/or combined in different settings.

    R1. (Meta)data are richly described with a plurality of accurate and relevant attributes

        R1.1. (Meta)data are released with a clear and accessible data usage license

        R1.2. (Meta)data are associated with detailed provenance

        R1.3. (Meta)data meet domain-relevant community standards

## Appendix B: CARE Data Sharing Principles

CARE principles are grounded in “people and purpose” while FAIR principles are “data focused”. This means that CARE principles address the gaps in FAIR principles in terms of the rights and interest of Indigenous peoples and their world views. 

The CARE principles by GIDA are as follows (ref):

**Collective Benefit**

Data ecosystems should be designed and function in ways that enable Indigenous Peoples to derive benefit from the data.

    C1: For inclusive development and innovation

        Governments and institutions must actively support the use and reuse of data by Indigenous 
        nations and communities by facilitating the establishment of the foundations for Indigenous 
        innovation, value generation, and the promotion of local self-determined development processes. 

    C2: For improved governance and citizen engagement

        Data enrich the planning, implementation, and evaluation processes that support the service and 
        policy needs of Indigenous communities. Data also enable better engagement between citizens, 
        institutions, and governments to improve decision-making. Ethical use of open data has the 
        capacity to improve transparency and decision-making by providing Indigenous nations and 
        communities with a better understanding of their peoples, territories, and resources. It 
        similarly can provide greater insight into third-party policies and programs affecting 
        Indigenous Peoples. 

    C3: For improved governance and citizen engagement

        Indigenous data are grounded in community values, which extend to society at large. Any value 
        created from Indigenous data should benefit Indigenous communities in an equitable manner and 
        contribute to Indigenous aspirations for wellbeing.

**Authority to Control**

Indigenous Peoples’ rights and interests in Indigenous data must be recognised and their authority to control such data be empowered. Indigenous data governance enables Indigenous Peoples and governing bodies to determine how Indigenous Peoples, as well as Indigenous lands, territories, resources, knowledges and geographical indicators, are represented and identified within data.

    A1: Recognizing rights and interests

        Indigenous Peoples have rights and interests in both Indigenous Knowledge and Indigenous data. 
        Indigenous Peoples have collective and individual rights to free, prior, and informed consent 
        in the collection and use of such data, including the development of data policies and protocols 
        for collection.

    A2: Data for governance

        Indigenous Peoples have the right to data that are relevant to their world views and empower 
        self-determination and effective self-governance. Indigenous data must be made available and 
        accessible to Indigenous nations and communities in order to support Indigenous governance. 

    A3: Governance of data

        Indigenous Peoples have the right to develop cultural governance protocols for Indigenous data 
        and be active leaders in the stewardship of, and access to, Indigenous data especially in the 
        context of Indigenous Knowledge.

**Responsibility**

Those working with Indigenous data have a responsibility to share how data is used to support Indigenous Peoples’ self-determination and collective benefit.

    R1: For positive relationships

        Indigenous data use is unviable unless linked to relationships built on respect, reciprocity, 
        trust, and mutual understanding, as defined by the Indigenous Peoples to whom those data 
        relate. Those working with Indigenous data are responsible for ensuring that the creation, 
        interpretation, and use of those data uphold, or are respectful of, the dignity of Indigenous 
        nations and communities. 

    R2: For expanding capability and capacity

        Use of Indigenous data invokes a reciprocal responsibility to enhance data literacy within 
        Indigenous communities and to support the development of an Indigenous data workforce and 
        digital infrastructure to enable the creation, collection, management, security, governance, 
        and application of data. 

    R3: For Indigenous languages and worldviews

        Resources must be provided to generate data grounded in the languages, worldviews, and 
        lived experiences (including values and principles) of Indigenous Peoples.

**Ethics**

Indigenous Peoples’ rights and well-being should be the primary concern at all stages of the data life cycle and across the data ecosystem.
 
    E1: For minimizing harm and maximizing benefit

        Ethical data are data that do not stigmatize or portray Indigenous Peoples, cultures, 
        or knowledges in terms of deficit. Ethical data are collected and used in ways that 
        align with Indigenous ethical frameworks and with rights affirmed in UNDRIP. Assessing 
        ethical benefits and harms should be done from the perspective of the Indigenous Peoples, 
        nations, or communities to whom the data relate. 

    E2: For justice

        Ethical processes address imbalances in power, resources, and how these affect the 
        expression of Indigenous rights and human rights.  Ethical processes must include 
        representation from relevant Indigenous communities. 

    E3: For future use

        Data governance should take into account the potential future use and future harm 
        based on ethical frameworks grounded in the values and principles of the relevant 
        Indigenous community. Metadata should acknowledge the provenance and purpose and 
        any limitations or obligations in secondary use inclusive of issues of consent.
 

## Appendix C: Metadata Terms

GBADs uses schema.org for metadata. A complete list of metadata terms can be found in Table 1: 



 
## Appendix D: JSON Metadata Template

This section contains a JSON metadata template, with all metadata terms (Table 1).

```
{
  "@context": {
  },
  "@id": "",
  "@type": "",
  "URI": "",
  "title": "",
  "accessRights":"",
  "accrual":{
  	"accrualMethod":"",
  	"accrualPeriodicity":"",
  },
  "bibliographicCitation": "",
  "creator": {
  	"creatorCorporate": "",
  	"creatorPersonal": "",
  },
  "creationDate":"",
  "coverage": {
  	"temporalCoverage":"",
  	"spatialCoverage":""
  },
  "date": {
  	"available": "",
  	"created": "",
  	"dateAccepted": "",
  	"dateCopyrighted": "",
  	"dateSubmitted": "",
  	"issued": "",
  	"modified": ""
  },
  "dataID":"",
  "description": "",
  "distribution": "",
  "documentation": "",
  "endorsedBy": "",
  "relation":{
  	"format": "",
  	"hasFormat": "",
  	"hasPart": "",
  	"hasVersion": "",
  	"isFormatOf": "",
  	"isPartOf": "",
  	"isReplacedBy": "",
  	"isRequiredBy": "",
  	"isVersionOf": "",
  	"relationIsTranslationOf": "",
  	"relationHasTranslation": "",
  	"replaces": "",
  	"requires": ""
  },
  "subject": {
  	"subjectClassification": "",
  	"subjectKeywords": "",
  	"subjectThesaraus": ""
  },
  "language":"",
  "license":"",
  "mediator":"",
  "modified":"",
  "provenance":"",
  "publisher":"",
  "references":"",
  "rights":"",
  "rightsHolder":"",
  "source": "",
  "methodology": "",
  "metadataInformation": "",
  "vocabularyEncodingScheme": ""
}
```

## Appendix E: Licensing Agreements

We have curated a list of data licensing agreements for reference: 

### Creative Commons (CC)

CC offers 6 different types of licenses: CC-BY, CC BY-SA, CC BY-NC, CC BY-NC,SA, CC BY-ND, CC BY-NC-ND

Each license as defined by CC: 

| CC Type | Explanation |
| :------------ | -----------------------------------: |
| CC BY | This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use. |
| CC BY-SA | This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use. If you remix, adapt, or build upon the material, you must license the modified material under identical terms. |
| CC BY-NC | This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format for noncommercial purposes only, and only so long as attribution is given to the creator. |
| CC BY-NC-SA | This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format for noncommercial purposes only, and only so long as attribution is given to the creator. If you remix, adapt, or build upon the material, you must license the modified material under identical terms. |
| CC BY-ND | This license allows reusers to copy and distribute the material in any medium or format in unadapted form only, and only so long as attribution is given to the creator. The license allows for commercial use. |
| CC BY-NC-ND | This license allows reusers to copy and distribute the material in any medium or format in unadapted form only, for noncommercial purposes only, and only so long as attribution is given to the creator. |
| | |

Including the aforementioned licenses, creative commons offers a public domain dedication tool, CC0. In this, a creator forfeits their rights to their work and allows “reusers to distribute, remix, adapt, and build upon the material in any medium or format, with no conditions.”  

Any individual with original content can use CC licenses simply by including copyright text and licensing information, with a link to the license that the work is protected by. 

### Open Data Commons Open Database Licenses (ODbL)

```{admonition} To Be Added
The full ODbL 1.0 here, and a summary here.
```
In general, it is very similar to the CC BY-SA license, but it requires that you ‘Keep open’ meaning:
“If you redistribute the database, or an adapted version of it, then you may use technological measures that restrict 
the work (such as DRM) as long as you also redistribute a version without such measures.”

### FAO Licensing 

FAO data licensing information is included in the “Open Data Licensing for Statistical Databases Policy” document 
[reference to be added: FAO Data Licensing Information], which builds upon the CC BY-NC-SA 3.0 IGO. 

The following corporate databases are under this license: 
- Agricultural Market Information Systems 
- Global Information System on Water and Agriculture 
- FAOSTAT 
- FISHSTAT 
- Gender and lands rights database 
- Food Price Monitoring and Analysis Tool 
- Global Individual Food Consumption 
- SDG Data Portal 

### World Bank Licensing

Similar to the FAO, the World Bank is licensed under a CC license (CC BY 4.0) with additional terms and conditions, 
which can be found here [reference to be added].  

### Open Government Licenses

- [Canada](https://open.canada.ca/en/open-government-licence-canada)


## Appendix G: Data Standards 

- [FAIR Sharing Standards](https://fairsharing.org/standards/?q=&selected_facets=expanded_onto_domains_exact:%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Resource%20metadata)

- [Provenance vocabularies](http://trdf.sourceforge.net/provenance/ns.html)

```{admonition} To Be Added
Including known data sources, all definitions, data standards surveyed, explanation of technical standards and mechanisms, 
vocabularies identified or constructed (probably just links to these since they maybe large), licenses and site that 
explain more about these licenses, types of users and how we will identify, authenticate, and authorize them, meta-data 
adopted or developed by GBADs.
```

| Metadata Term | Standard |
| :------------ | -------: |
| date | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) |
| language | [ISO 639-2](http://loc.gov/standards/iso639-2/php/code_list.php) |
| spatialCoverage | [TGN](http://www.getty.edu/research/tools/vocabularies/tgn/)  [GeoNames](https://www.geonames.org/) |
| subject, subjectClassification, subjectThesaurus | [AGROVOC](http://aims.fao.org/agrovoc/releases)  [Agroportal](http://agroportal.lirmm.fr/) |
| accrualMethod | [DCMI Type Vocabulary - Accrual Method ](https://www.dublincore.org/specifications/dublin-core/collection-description/accrual-method/) |
| accrualPeriodicity | [DCMI Type Vocabulary - Accrual Periodicity](https://www.dublincore.org/specifications/dublin-core/collection-description/frequency/) |
| | |


## Appendix H: GATHER checklist

| GATHER Checklist Item | GBADs Comments and Refinements |
| :-------------------- | -----------------------------: |
| Objectives and Funding | |
| 1. Define the indicator(s), populations  (including age, sex, and geographic entities),  and time period(s) for which estimates were made. | GBADs is concerned with animal, not human, disease  estimates. Therefore, the indicator populations are  still important but also pertaining to species,  disease type, and potentially other indicators  such as economic models or estimates and climate  and weather information.  Definitions of geographic entities (spatialCoverage)  and time period(s) (temporalCoverage) remain  consistent with the original GATHER checklist. |
| 2. List the funding sources for the work. | |
| Data Inputs For all data inputs from multiple sources that are synthesized as part of the study: | |
| 3. Describe how the data were identified and how the data were accessed. | |
| 4. Specify the inclusion and exclusion criteria. Identify all ad-hoc exclusions. | |
| 5. Provide information on all included data sources and their main characteristics. For each data source used, report reference information or contact name/institution, population represented, data collection method, year(s) of data collection, sex and age range, diagnostic criteria or measurement method, and sample size, as relevant. | GBADs metadata will have a unique identifier. This should provide a simple method to access all of this information, which will be provided in the metadata of each data attribute. |
| | |

## Appendix I: Data Audits

### Data and Data Management Audits and Reviews

Audits are an integral part of our data governance plan; they allow our organization to draw insights about how the data are being managed, whether our data needs are being met and provide information about our current data holdings. For GBADs, audits occur in the form of regular reporting to funders.

Assessing the data that GBADs brokers will allow us to understand which types of data are rich and which are lacking. In preliminary stages of data ecosystem development, it will also allow auditors to determine whether descriptive metadata can be supplemented with more terms and whether the system supports FAIR and CARE guiding principles. We anticipate private data, so review protocols will be developed to ensure that the data are being viewed as expected. 

Regular audits will provide information about whether the Data Governance Plan is clear and well documented; mechanisms behind data location, storage, metadata creation, data ownership and data stewardship should be clear and easily adhered to if plans and policies are clear and well-documented. If audits reveal inconsistencies in how data are being managed, the management of data can be corrected. 

Regular data audits will address these 5 core questions:

1. What data assets currently exist? 
2. Where are these assets located? 
3. How have these been managed to date? 
4. Which of thse assets need to be maintained in the long term?
5. Do current data management practices place these assets at risk? 

Our system supports the privacy and security of our private data stakeholders therefore we will include the following additional questions:  

6. Who has access to which data assets? 
7. Who are our private data stakeholders and are current data management practices adequately protecting our private data stakeholders? 

This section provides information about our data audit plan, and how the results of the audit will feed into our data governance and management plan. Regular audits will allow us to progressively improve the quality of metadata and data that pass through our system. The audit will include reviewing feedback from data users and contributors to formally incorporate suggestions in future versions of our system and improve metadata creation and management to support FAIR data. 
