import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles/Highlights.module.css';
import HighlightCard from '../components/HighlightCard';
import clsx from 'clsx';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description="Homepage">
      <main>
          <div className={clsx('container', styles.cardsHolder)}>
            <HighlightCard/>
          </div>
      </main>
    </Layout>
  );
}
