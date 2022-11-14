import React from "react";
import "./styles/HighlightCard.css";
import clsx from 'clsx';
import 'animate.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
    {
        title:(<><Translate>GBADs at the Big Data in Animal Health Webinar</Translate></>),
        subHeading:(<><Translate>Presentation at the Big Data in Animal Health Webinar</Translate></>),
        date:"2022-06",
        imageLink:"https://i.imgur.com/HEopvWH.png",
        text:(<><Translate>GBADs Informatics co-lead Theresa Bernardo presented at the Big Data in Animal Health webinar organised by the Health for Animals association. After  providing an overview of the technologies and apps showing the potentials that could be unleashed from animal health data, Theresa presented the GBADs program, its goals and progress so far. She also highlighted the need for quality and reproducible data to better leverage their use when estimating animal health investments.</Translate></>),
        learnMore:(
            <>
            <Translate>To learn more about this topic, you can watch the presentation here. More information about this event can be found in the Health for Animals website </Translate><a href="https://www.healthforanimals.org/resources/publications/publications/big-data-in-animal-health-webinar/"><Translate>here</Translate></a>.
            </>
        ),
    },
    {
        title:(<><Translate>GBADs Shout-Out at the Datasphere Initiative Launch</Translate></>),
        subHeading:(<><Translate>GBADs at the launch of the Datasphere Initiative</Translate></>),
        date:"2022-04",
        imageLink:"https://i.imgur.com/nwZWTom.png",
        text:(<><Translate>GBADs Informatics Technical Manager Kassy Raymond (also a Datasphere Initiative Fellow) was a panelist at the recent launch event for the Datasphere Initiative, where she described her work with GBADs to highlight why data quality, sharing, interoperability, reusability, and discoverability are important.</Translate></>),
        learnMore:(
            <>
            <Translate>Watch Kassy's talk</Translate> <a href="https://www.youtube.com/watch?v=GtuaIc1opyI&t=1s"><Translate>here</Translate></a> <Translate>from minutes 26-31, and learn more about the launch event</Translate> <a href="https://www.thedatasphere.org/datasphere-events/launch-of-datasphere-initiative/"><Translate>here</Translate></a>.
            </>
        ),
    },
    {
        title:(<><Translate>Graph Data in the Datasphere: How Graph Databases Can Help Us Understand the Data Connections in the Datasphere</Translate></>),
        subHeading:(<><Translate>Explainer blog on Graph Databases</Translate></>),
        date:"2022-03",
        imageLink:"https://miro.medium.com/max/1400/1*nkZelQJBV9TTl7eXAjpOrg.png",
        text:(<><Translate>GBADs Informatics team member Kassy Raymond published a blog explaining how graph databases can help us visualize data, reveal trends and patterns in the data, and facilitate trust through understanding data flows. Graph databases are in integral part of the GBADs knowledge engine, and will help us maximize our use of identified data sources.</Translate></>),
        learnMore:(
            <>
            <Translate>To learn more, read the blog</Translate> <a href="https://medium.com/@thedatasphere/graph-data-in-the-datasphere-how-graph-databases-can-help-us-understand-the-data-connections-in-bc524f6a1fce"><Translate>here</Translate></a>. <Translate>Information on how GBADs Informatics plans to use graph databses can be found in the</Translate> <a href="http://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/metadataStorage"><Translate>Data Governance Handbook</Translate></a>.
            </>
        ),
    },
    {
        title:(<><Translate>From FAIR to FAIRS</Translate></>),
        subHeading:(<><Translate>New publication from GBADs Informatics</Translate></>),
        date:"2022-02",
        imageLink:"https://i.imgur.com/Q0KkIR2.jpg",
        text:(<><Translate>Current GBADs Informatics team members Deborah Stacey and Theresa Bernardo and past team members Kenneth Wulff and Nidhip Chikhalla have recently published a paper titled \"From FAIR to FAIRS: Data security by design for the global burden of animal diseases\" in Agronomy Journal. Data and metadata should be FAIR - Findable, Accessible, Interoperable, and Reusable. This paper describes the need for GBADs to adopt an additional dimension, Security, taking FAIR to FAIRS. GBADs will need to securely manage an increasing amount of sensitive and private data. The Informatics team's plan for doing so is centered around data sharing in the cloud to \"facilitate our vision of a decentralized, nonhierarchical organization of data, tools, and models.\"</Translate></>),
        learnMore:(
            <>
            <Translate>To learn more, read the paper, which can be found at</Translate> <a href="https://doi.org/10.1002/agj2.21017"><Translate>this link</Translate></a>. <Translate>Discussion of guidelines for data governance can also be found in our</Translate> <a href="http://gbadskedoc.org/docs/Data-Governance-Handbook-for-GBADs/dataSharing"><Translate>Data Governance Handbook</Translate></a>.
            </>
        ),
    },
    {
        title:(<><Translate>GBADs at the Annual Forum of the National Farmed Animal Health and Welfare Council</Translate></>),
        subHeading:(<><Translate>Spreading the word about GBADs</Translate></>),
        date:"2021-10",
        imageLink:"https://animalhealthcanada.ca/v2/template/logo-en.png",
        text:(<><Translate>GBADs Informatics co-lead Theresa Bernardo, together with Liverpool colleague Ben Huntington, presented at the Annual Forum of the National Farmed Animal Health and Welfare Council (now known as Animal Health Canada). One of three invited talks at the forum, Theresa and Ben introduced the GBADs program, vision, and Informatics workflow to Canadian stakeholders.</Translate></>),
        learnMore:(
            <>
            <Translate>Watch their presentation</Translate> <a href="https://www.youtube.com/watch?v=BSH2qPg4bsM"><Translate>here</Translate></a>. <Translate>More details about the 2021 forum and future events can be found at the</Translate> <a href="https://animalhealthcanada.ca/forum-2021"><Translate>AHC website</Translate></a>.
            </>
        ),
    },
  ];
function HighlightCard(){
    return(
        <section>
        <div className="container">
            <div className="row justify-content-between">
            {FeatureList.map((props, idx) => (
                <Card key={idx} {...props} />
            ))}
            </div>
        </div>
        </section>
    );
}
function Card({title, subHeading, date, imageLink, text, learnMore}) {
  return (
    <div className={clsx('col cardStyle animate__animated animate__fadeInBottomLeft')}>
      <div className="text--center">
        <img src={imageLink} alt={title} style={{ maxWidth: '24rem' }}/>
      </div>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <h4>{subHeading}</h4>
        <h4>{date}</h4>
        <p>{text}</p>
        <p>{learnMore}</p>
      </div>
    </div>
  );
}
export default HighlightCard;
