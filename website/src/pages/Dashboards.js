import React from 'react';

import DashboardCard from '../components/DashboardCard';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';

import "./styles/Dashboards.css";

function Dashboards() {
  const DashInfo = [
    {
      title: (
        <>
        <Translate>Population</Translate>
        </>
        ),
      relatedLinks: [
          {"National Population": "https://gbadske.org/dashboards/population-v2/"},
          {"Ethiopia Sub-National Population": "https://gbadske.org/dashboards/ethiopia-population/"},
    ] 
    },
    {
      title: (
        <>
        <Translate>Biomass</Translate>
        </>
        ),
      relatedLinks: [
          {"Biomass": "https://gbadske.org/dashboards/biomass-v2/"},
    ]
     
    },
    {
      title: (
        <>
        <Translate>Analytics</Translate>
        </>
        ),
      relatedLinks: [
          {"Total Economic Value": "https://gbadske.org/dashboards/tev/"},
          {"Animal Health Loss Envelope": "https://gbadske.org/dashboards/ahle/"},
    ]
     
    },
    {
      title: (
        <>
        <Translate>Data Portal</Translate>
        </>
        ),
      relatedLinks: [
          {"GBADs API Explorer": "https://gbadske.org/dashboards/apiui/"},
    ]
     
    },
    {
      title: (
        <>
        <Translate>Other</Translate>
        </>
        ),
      relatedLinks: [
          {"Laying Hens": "https://gbadske.org/dashboards/layinghens/"},
    ]
     
    },
    {
      title: (
        <>
        <Translate>In Development</Translate>
        </>
        ),
      relatedLinks: [
          {"Data Visualizer": "https://gbadske.org/dashboards/visualizer/"},
          {"Ethiopia Data Stories": "https://gbadske.org/dashboards/datastories/"},
    ]
     
    },
    
      ]

  return (
    <Layout>
          <div className='lower-container'>
            <div className='dash-title-container'>
                <h1 style={{color: 'white', display: 'inline'}}>The Knowledge</h1>
                <h1 style={{color: '#f7931d' , display: 'inline'}}> Engine Dashboards</h1>
                <hr style={{width: '5%', textAlign: 'center', margin: 'auto', marginTop: '1%'}}/>
            </div>
            <div className="row homepage-highligh-row">
                {DashInfo.map((props, idx) => (
                <DashboardCard key={idx} {...props} />
                ))}
            </div>
          </div>
          <div>
          </div>
    </Layout>
  )
}

export default Dashboards;
