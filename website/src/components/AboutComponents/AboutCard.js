import React from "react";
import styles from './AboutComponents.module.css';

// Members list
const Members = [
  {
    name: "Theresa Bernardo",
    title: "Informatics Theme Lead, University of Guelph",
    email: "theresabernardo@gmail.com",
    link: "https://ovc.uoguelph.ca/population-medicine/faculty/Theresa-Bernardo",
    imageLink: "https://i.imgur.com/XU1RHia.jpg",
  },
  {
    name: "Deb Stacey",
    title: "Informatics Theme Lead, University of Guelph",
    email: "dastacey@uoguelph.ca",
    link: "https://www.uoguelph.ca/computing/people/deborah-stacey",
    imageLink: "https://www.uoguelph.ca/computing/sites/default/files/styles/large/public/Stacey%2C%20Deb%204676%20copy.jpg?itok=hq0d3_Yl",
  },
  {
    name: "Le Nguyen",
    title: "Postdoctoral Researcher, University of Guelph",
    email: "dlnguyen@gmail.com",
    link: "https://www.linkedin.com/in/le-nguyen-74a0046b/",
    imageLink: "https://i.imgur.com/DRyo9sb.jpg",
  },
  {
    name: "Kassy Raymond",
    title: "Informatics Technical Manager, University of Guelph",
    email: "kraymond@uoguelph.ca",
    link: "https://www.linkedin.com/in/kassy-raymond-2a477717a/",
    imageLink: "https://github.com/kassyray.png",
  },
  {
    name: "William Fitzjohn",
    title: "Director, Flex Consulting Solutions",
    email: "william@flexconsulting.ca",
    link: "https://flexconsulting.ca/",
    imageLink: "https://ca.slack-edge.com/T01292WLJAK-U03BV1J62UQ-f51998eaab2d-512",
  },
  {
    name: "Matthew Szurkowski",
    title: "Director, Flex Consulting Solutions",
    email: "matthew@flexconsulting.ca",
    link: "https://flexconsulting.ca/",
    imageLink: "https://github.com/MatthewSzurkowski.png",
  },
  {
    name: "Ian McKechnie",
    title: "Informatics Software Developer, University of Guelph",
    email: "9.mckechnie@gmail.com",
    link: "https://ianmckechnieca.wordpress.com/",
    imageLink: "https://i.imgur.com/zUDIg6t.jpg",
  },
  {
    name: "Kurtis Sobkowich",
    title: "Research Assistant, University of Guelph",
    email: "sobkowik@uoguelph.ca",
    link: "https://www.linkedin.com/in/kurtis-sobkowich/?originalSubdomain=ca",
    imageLink: "https://ca.slack-edge.com/T01292WLJAK-U033Y3GNHN3-faaabc98ca38-512",
  },
];

// Individual card
function ACard({ name, title, email, link, imageLink }) {
  return (
    <div className={`animate__animated animate__fadeInUp ${styles.card}`}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageLink})` }}
      />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.title}>{title}</p>
      <div className={styles.links}>
        <a href={`mailto:${email}`} aria-label={`${name} email`}>
          <img src="/img/icons/email.svg" alt="Email" />
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`${name} profile`}>
          <img src="/img/icons/link.svg" alt="Website" />
        </a>
      </div>
    </div>
  );
}

export default function AboutCard() {
  return (
    <div className={styles.grid}>
      {Members.map((props, idx) => (
        <ACard key={idx} {...props} />
      ))}
    </div>
  );
}
