import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './AboutComponents.module.css';

const AlumniMembers = [
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
    name:"Rehan Nagoor Mohideen",
    title:(<><Translate>Informatics Software Developer, University of Guelph</Translate></>),
    email:"rnagoorm@uoguelph.ca",
    link:"https://www.linkedin.com/in/rehan-nagoor-mohideen-6b3156202/",
    imageLink:"https://ca.slack-edge.com/T01292WLJAK-U026HE71SKW-665fdd7cd642-512"
  },
  {
    name:"Cassandre Pyne",
    title:(<><Translate>Research Assistant, University of Guelph</Translate></>),
    email:"pynec@uoguelph.ca",
    link:"https://www.uoguelph.ca/ib/node/1433",
    imageLink:"https://ca.slack-edge.com/T01292WLJAK-U031B1YBA9Y-317391afb231-512"
  },
];

export default function Alumni() {
  return (
    <div className={styles.grid}>
      {AlumniMembers.map((a, idx) => (
        <div key={idx} className={styles.card}>
          <img src={a.imageLink} alt={a.name} className={styles.image} />
          <h3 className={styles.name}>{a.name}</h3>
          <p className={styles.title}>{a.title}</p>
          <div className={styles.links}>
            <a href={a.link} target="_blank" rel="noopener noreferrer">
              🔗
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
