import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, 'header-container')}>
      <div className={clsx('container sub-header hero-section', styles.homeLogoAndText)}>
        <img src="img/GBADsLogoRedesign.webp" alt={translate({message: "GBADs Informatics logo", description:"GBADs Informatics logo"})} className={styles.gbadHeaderLogo}></img>
        <div className={clsx(styles.heroText)}>
            <h2>Explore Animal Health Data with GBADs</h2>
            <p><Translate>GBADs Informatics provides the data, tools, and infrastructure to improve animal health decision-making. Explore how you can access, analyze, and share information that supports the United Nations’ Sustainable Development Goals.</Translate></p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="Homepage">
      <HomepageHeader />
      <main className="features-section">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
