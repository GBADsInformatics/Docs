import React from 'react';
import clsx from 'clsx';
import styles from './styles/HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';
const FeatureList = [
  {
    title: (
      <>
      <Translate>Data Portal API</Translate>
      </>
      ),
    description: (
      <Translate>
        This link takes you to our Data Portal API where you can learn how to make queries on the GBADs database tables.
      </Translate>
    ),
    link:(
        <a href="/ourapi" className={styles.homepageFeatureLink}><Translate>Explore our Data Portal API→</Translate></a>
    )
  },
  {
    title: (
      <>
      <Translate>Dashboards</Translate>
      </>
      ),
    description: (
      <Translate>
        Check out all of our Dashboards!
      </Translate>
    ),
    link:(
        <a href="dashboards" className={styles.homepageFeatureLink}><Translate>Explore our Dashboards→</Translate></a>
    )
  },
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
        <a href="docs/Welcome" className={styles.homepageFeatureLink}><Translate>Explore our docs→</Translate></a>
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
      <a href="publications/Intro" className={styles.homepageFeatureLink}><Translate>Check out our publications→</Translate></a>
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
      <a href="https://www.youtube.com/channel/UCdm3CD5v8YZdHtXbsq5WdWw" className={styles.homepageFeatureLink}><Translate>GBADs TV→</Translate></a>
  )
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4 padding-vert--md')}>
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
