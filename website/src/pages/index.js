import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles/index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, 'header-container')}>
      <div className="container sub-header">
        <img src="img/informaticsLogo.png" alt={translate({message: "GBADs Informatics logo", description:"GBADs Informatics logo"})} className={styles.gbadHeaderLogo}></img>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Welcome">
            <Translate>New? Start here 📋</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description="Homepage">
      <HomepageHeader />
      <main className="features-section">
        <div className='overview-container'>
          <div className='brief-overview'>
              <p><Translate>The</Translate> <b><Translate>Global Burden of Animal Diseases</Translate></b> <Translate>(GBADs) is an international initiative that 
                aims to improve decision-making for animal health by integrating data from a variety 
                of sources and sharing tools for analysis. It will contribute to the United Nations’ 
                Sustainable Development Goals of zero hunger, good health and well-being, gender 
                equality, and responsible consumption and production. 
                GBADs has multiple theme groups, one of which is Informatics. 
                </Translate> <b><Translate>GBADs Informatics</Translate></b> <Translate>is dedicated to providing data, data products, data quality assessment, 
                and modelling products through data governance and secure Cloud services for all stakeholders.</Translate></p>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
