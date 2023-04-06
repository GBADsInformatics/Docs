import React from "react";
import clsx from 'clsx';
import 'animate.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import "./styles/AboutCard.css";
import Translate, {translate} from '@docusaurus/Translate';

const Members = [
    {
        name:"Theresa Bernardo",
        title:(<><Translate>Informatics Theme Lead, University of Guelph</Translate></>),
        email:"theresabernardo@gmail.com",
        link:"https://ovc.uoguelph.ca/population-medicine/faculty/Theresa-Bernardo",
        imageLink:"https://i.imgur.com/XU1RHia.jpg"
    },
    {
        name:"Deb Stacey",
        title:(<><Translate>Informatics Theme Lead, University of Guelph</Translate></>),
        email:"dastacey@uoguelph.ca",
        link:"https://www.uoguelph.ca/computing/people/deborah-stacey",
        imageLink:"https://www.uoguelph.ca/computing/sites/default/files/styles/large/public/Stacey%2C%20Deb%204676%20copy.jpg?itok=hq0d3_Yl"
    },
    {
        name:"Le Nguyen",
        title:(<><Translate>Postdoctoral Researcher, University of Guelph</Translate></>),
        email:"dlnguyen@gmail.com",
        link:"https://www.linkedin.com/in/le-nguyen-74a0046b/",
        imageLink:"https://i.imgur.com/DRyo9sb.jpg"
    },
    {
        name:"Kassy Raymond",
        title:(<><Translate>Informatics Technical Manager, University of Guelph</Translate></>),
        email:"kraymond@uoguelph.ca",
        link:"https://www.linkedin.com/in/kassy-raymond-2a477717a/",
        imageLink:"https://ca.slack-edge.com/T01292WLJAK-U012PQR8HL2-786d6d1b082f-512"
    },
    {
        name:"William Fitzjohn",
        title:(<><Translate>Informatics Software Developer, University of Guelph</Translate></>),
        email:"wfitzjoh@uoguelph.ca",
        link:"https://fitzjohn.dev/",
        imageLink:"https://ca.slack-edge.com/T01292WLJAK-U03BV1J62UQ-f51998eaab2d-512"
    },
    {
        name:"Matthew Szurkowski",
        title:(<><Translate>Informatics Software Developer, University of Guelph</Translate></>),
        email:"mszurkow@gmail.com",
        link:"https://mattszurkowski.com/",
        imageLink:"https://i.imgur.com/zCtJJNM.jpg"
    },
    {
        name:"Joshua Davidson",
        title:(<><Translate>Informatics Software Developer, University of Guelph</Translate></>),
        email:"joshuaidavidson2001@gmail.com",
        link:"https://www.linkedin.com/in/joshua-davidson-55236820b/",
        imageLink:"https://i.imgur.com/1s1KUer.jpg"
    },
    {
        name:"Amardeep Singh",
        title:(<><Translate>Informatics Software Developer, University of Guelph</Translate></>),
        email:"asingh80@uoguelph.ca",
        link:"https://www.linkedin.com/in/amardeep-/",
        imageLink:"https://ca.slack-edge.com/T01292WLJAK-U012PQR57QA-dbfcacd21d17-512"
    },
    {
        name:"Ian McKechnie",
        title:(<><Translate>Informatics Software Developer, University of Guelph</Translate></>),
        email:"9.mckechnie@gmail.com",
        link:"https://ianmckechnieca.wordpress.com/",
        imageLink:"https://i.imgur.com/zUDIg6t.jpg"
    },
    {
        name:"Rehan Nagoor Mohideen",
        title:(<><Translate>Informatics Software Developer, University of Guelph</Translate></>),
        email:"rnagoorm@uoguelph.ca",
        link:"https://www.linkedin.com/in/rehan-nagoor-mohideen-6b3156202/",
        imageLink:"https://ca.slack-edge.com/T01292WLJAK-U026HE71SKW-665fdd7cd642-512"
    },
    {
        name:"Kurtis Sobkowich",
        title:(<><Translate>Research Assistant, University of Guelph</Translate></>),
        email:"sobkowik@uoguelph.ca",
        link:"https://www.linkedin.com/in/kurtis-sobkowich/?originalSubdomain=ca",
        imageLink:"https://ca.slack-edge.com/T01292WLJAK-U033Y3GNHN3-faaabc98ca38-512"
    },
    {
        name:"Cassandre Pyne",
        title:(<><Translate>Research Assistant, University of Guelph</Translate></>),
        email:"pynec@uoguelph.ca",
        link:"https://www.uoguelph.ca/ib/node/1433",
        imageLink:"https://ca.slack-edge.com/T01292WLJAK-U031B1YBA9Y-317391afb231-512"
    },
    
  ];

function ACard({name, title, email, link, imageLink}) {
  const mailString = ("mailto:" + email);

  var imageStyle = {
    width: "300px",
    height: "300px",
    backgroundImage: `url(${imageLink})`,
    backgroundSize:"cover",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={clsx('col animate__animated animate__fadeInUp')}>
        <div className="text--center profile-main-container">
            <div className="profile-image-container" style={imageStyle}></div>
            <h3>{name}</h3>
            <p>{title}</p>
            <div className="link-containers">
                <a href={mailString}>
                    <img src="https://i0.wp.com/animalhealthmetrics.org/wp-content/plugins/team-members/inc/img/links/email.png?w=1154&ssl=1"/>
                </a>
                <a href={link} target="_blank">
                    <img src="https://i0.wp.com/animalhealthmetrics.org/wp-content/plugins/team-members/inc/img/links/website.png?w=1154&ssl=1"/>
                </a>
            </div>
        </div>
    </div>
  );
}

export default function AboutCard() {
  const {siteConfig} = useDocusaurusContext();
  return (
        <section>
            <div className="container profile-container">
                <div className="row justify-content-between">
                {Members.map((props, idx) => (
                    <ACard key={idx} {...props} />
                ))}
                </div>
            </div>
        </section>
  );
}
