import React from "react";
import clsx from 'clsx';
import 'animate.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import "./styles/AboutCard.css";
import Translate, {translate} from '@docusaurus/Translate';

const Members = [
    {
        name:"Grace Patterson",
        title:(<><Translate>Postdoctoral Research Associate, University of Guelph</Translate></>),
        email:"thaxton.grace@gmail.com",
        link:"https://www.linkedin.com/in/gracetpatterson/",
        imageLink:"https://ca.slack-edge.com/T01292WLJAK-U0257RGS596-7089c11c7bd4-512"
    },
    {
        name:"Neila Ben Sassi",
        title:(<><Translate>Postdoctoral Research Associate</Translate></>),
        email:"nbensass@uoguelph.ca",
        link:"https://www.researchgate.net/profile/Neila-Ben-Sassi",
        imageLink:"https://i.imgur.com/vA8dDXb.jpg"
    },
    {
        name:"Sky Truong",
        title:(<><Translate>Informatics Software Developer, University of Guelph</Translate></>),
        email:"truongy@uoguelph.ca",
        link:"https://www.linkedin.com/in/pham-sky-truong-9baa23112/",
        imageLink:"https://ca.slack-edge.com/T01292WLJAK-U01V9C6H5QW-01ea306fe185-512"
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

export default function Alumni() {
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
