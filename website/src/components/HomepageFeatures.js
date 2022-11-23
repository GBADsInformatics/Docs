import React from 'react';
import clsx from 'clsx';
import styles from './styles/HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';
const FeatureList = [
  {
    title: (
      <>
      <Translate>Find documentation for using our Data Portal, Knowledge Engine, and Software Tools</Translate>
      </>
      ),
    description: (
      <Translate>
        Our site has manuals, tutorials, videos, and presentations that will help with using our
        data portal acess through APIs and Dashboards and software tools in Python and R.
      </Translate>
    ),
    link:(
        <a href="docs/docs/Welcome" className={styles.homepageFeatureLink}><Translate>Explore our docs</Translate><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg></a>
    )
  },
  {
    title: (<Translate>Publications</Translate>),
    description: (
      <Translate>
        All papers, abstracts, and research presentations are found here as well as
        information on how to cite our work in formats that are friendly for 
        many publishing software and platforms.
      </Translate>
    ),
    link:(
      <a href="docs/publications/Intro" className={styles.homepageFeatureLink}><Translate>Check out our publications</Translate><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg></a>
  )
  },
  {
    title: (<Translate>GBADs Media</Translate>),
    description: (
      <Translate>
        Learn more about GBADs through our Youtube channel, and Github account!
      </Translate>
    ),
    link:(
      <a href="https://www.youtube.com/channel/UCdm3CD5v8YZdHtXbsq5WdWw" className={styles.homepageFeatureLink}><Translate>GBADs TV</Translate><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg></a>
  )
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md homepage-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div>{link}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row homepage-highligh-row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
