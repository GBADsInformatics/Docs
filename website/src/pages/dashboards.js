import React from 'react';
import DashboardCard from '../components/DashboardComponents/DashboardCard';
import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import styles from './Dashboards.module.css';

function Dashboards() {
  const dashboardDesc = (
    <>
      <Translate>
        Welcome to the Global Burden of Animal Diseases Dashboard Landing Page! This page provides links to our interactive dashboards that we are using to explore data and results towards our goal of calculating the economic and health disease burden of animal diseases.
      </Translate>
      <br /><br />
      <Translate>
        The Population Dashboards provide access to livestock population data at national and subnational levels, while the Biomass Dashboard quantifies livestock biomass using different calculations. Analytical Dashboards show the results of our analytics and modelling efforts, such as the calculation of the Animal Health Loss Envelope and Total Economic Value. Explore the consistency of datasets with the FAOSTAT Visualizer dashboard and explore Data Stories through our Data Stories dashboards. To access and discover the datasets we are using in our calculations, use the Data Portal dashboards.
      </Translate>
      <br /><br />
      <Translate>
        Collaborate, stay updated, and contribute your own data to enhance animal health worldwide. Our dashboards empower data-driven decision-making and facilitate collaboration for improved animal health and well-being worldwide.
      </Translate>
    </>
  );

  const dashInfo = [
    {
      title: <Translate>Livestock Populations</Translate>,
      relatedLinks: [
        {
          "National Population": "https://gbadske.org/dashboards/population/",
          "information": "https://docs.google.com/document/d/1j-UTrxtb44kU_wAWDUeULKdd_BpQrI6pE36ka3PT7vg/edit"
        },
        {
          "Ethiopia Sub-National Population": "https://gbadske.org/dashboards/ethiopia-population/",
          "information": "https://docs.google.com/document/d/1LnQcWmpb8oYnKg_24Nkrtn1YosevPUWA1A0V7opxv6U/edit"
        }
      ]
    },
    {
      title: <Translate>Biomass</Translate>,
      relatedLinks: [
        { "Biomass": "https://gbadske.org/dashboards/biomass/" }
      ]
    },
    {
      title: <Translate>Analytics</Translate>,
      relatedLinks: [
        { "Animal Health Loss Envelope": "https://gbadske.org/dashboards/ahle/" },
        { "Antimicrobial Usage and Resistance": "https://gbadske.org/dashboards/amu/" },
        { "Ethiopia Case Study": "https://gbadske.org/dashboards/ahle-casestudy/" },
        { "Senegal Case Study": "https://gbadske.org/dashboards/senegal-casestudy/" },
        { "Total Economic Value": "https://gbadske.org/dashboards/tev/" }
      ]
    },
    {
      title: <Translate>Data</Translate>,
      relatedLinks: [
        { "GBADs API Explorer": "https://gbadske.org/dashboards/apiui/" },
        { "Senegal Data Ecosystem Map": "https://kumu.io/KassyRay/gbads-senegal-case-study-data-ecosystem-map#senegal-livestock-data-ecosystem-map" }
      ]
    },
    {
      title: <Translate>Community</Translate>,
      relatedLinks: [
        { "Usage Statistics": "https://gbadske.org/dashboards/users/" }
      ]
    },
    {
      title: <Translate>In Development</Translate>,
      relatedLinks: [
        { "Data Visualizer": "https://gbadske.org/dashboards/visualizer/" },
        { "Ethiopia Data Stories": "https://gbadske.org/dashboards/datastories/" },
        { "Census Data": "https://gbadske.org/dashboards/census/" }
      ]
    }
  ];

  return (
    <Layout>
      <div className={styles.lowerContainer}>
        <div className={styles.dashTitleContainer}>
          <h1>The Knowledge </h1>
          <h1>Engine Dashboards</h1>
          <hr />
        </div>

        <div className={styles.dashboardDescription}>
          <p>{dashboardDesc}</p>
        </div>

        <div className={styles.homepageHighlightRow}>
          {dashInfo.map((props, idx) => (
            <DashboardCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboards;
