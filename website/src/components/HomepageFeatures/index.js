import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>Data Portal API</Translate>,
    description: (
      <Translate>
        Access our Data Portal API to learn how to query the GBADs database.
      </Translate>
    ),
    link: (
      <a href="https://gbadske.org/api/dataportal/" className={styles.homepageFeatureLink}>
        <Translate>Explore our Data Portal API →</Translate>
      </a>
    ),
    image: "/img/offers/1.jpg"
  },
  {
    title: <Translate>Dashboards</Translate>,
    description: (
      <Translate>
        Check out all of our Dashboards!
      </Translate>
    ),
    link: (
      <a href="/dashboards" className={styles.homepageFeatureLink}>
        <Translate>Explore our Dashboards →</Translate>
      </a>
    ),
    image: "/img/offers/tev.png"
  },
  {
    title: <Translate>Documentation &amp; Tools</Translate>,
    description: (
      <Translate>
        Find guides and tutorials for using our data portal, APIs, dashboards, and analytical tools.
      </Translate>
    ),
    link: (
      <a href="/docs/Welcome" className={styles.homepageFeatureLink}>
        <Translate>Explore our docs →</Translate>
      </a>
    ),
    image: "/img/offers/2.jpg"
  },
  {
    title: <Translate>Publications</Translate>,
    description: (
      <Translate>
        Find papers, abstracts, and presentations, plus citation info for major publishing platforms.
      </Translate>
    ),
    link: (
      <a href="/publications/Intro" className={styles.homepageFeatureLink}>
        <Translate>Check out our publications →</Translate>
      </a>
    ),
    image: "https://i0.wp.com/animalhealthmetrics.org/wp-content/uploads/2019/08/3.-farmers-waiting-for-vaccination-1.jpg?fit=2560%2C1920&ssl=1"
  },
  {
    title: <Translate>GBADs Media</Translate>,
    description: (
      <Translate>
        Learn more about GBADs through our YouTube channel and GitHub account!
      </Translate>
    ),
    link: (
      <a
        href="https://www.youtube.com/channel/UCdm3CD5v8YZdHtXbsq5WdWw"
        className={styles.homepageFeatureLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Translate>GBADs TV →</Translate>
      </a>
    ),
    image: "/img/offers/3.jpg"
  },
];

function Feature({ title, description, link, image }) {
  return (
    <div className={clsx('col col--4 padding-vert--md')}>
      <div className={styles.homepageCard}>
        <img src={image} alt="" className={styles.shadowImage} />
        <div className={styles.tileContent_dKhT}>
          <h3>{title}</h3>
          <div className={styles.tileExtra}>
            <p>{description}</p>
            {link}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="top-padding">
          <Translate>Data and Tools for Better Animal Health Decisions</Translate>
        </h2>
        <p>
          <Translate>
            GBADs data is published through our Data Portal and Knowledge Engine, where you can access datasets, run analyses, and discover insights that support global animal health and sustainable development.
          </Translate>
        </p>
        <div className="row homepage-highlight-row">
          {FeatureList.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
