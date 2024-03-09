import React from 'react';

import DashboardCard from '../components/DashboardCard';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';

import "./styles/Dashboards.css";

function Dashboards() {

  const dashboard_desc = <><Translate>Welcome to the Global Burden of Animal Diseases Dashboard Landing Page! This page provides links to our interactive dashboards that we are using to explore data and results towards our goal of calculating the economic and health disease burden of animal diseases.</Translate><br/><br/>
  <Translate>The Population Dashboards provide access to livestock population data at national and subnational levels, while the Biomass Dashboard quantifies livestock biomass using different calculations. Analytical Dashboards show the results of our analytics and modelling efforts, such as the calculation of the Animal Health Loss Envelope and Total Economic Value. Explore the consistency of datasets with the FAOSTAT Visualizer dashboard and explore Data Stories through our Data Stories dashboards. To access and discover the datasets we are using in our calculations, use the Data Portal dashboards.</Translate><br/><br/>
  <Translate>Collaborate, stay updated, and contribute your own data to enhance animal health worldwide. Our dashboards empower data-driven decision-making and facilitate collaboration for improved animal health and well-being worldwide.</Translate></>


  const DashInfo = [
    {
      title: (
        <>
        <Translate>Livestock Populations</Translate>
        </>
        ),
      relatedLinks: [
          {"National Population": "https://gbadske.org/dashboards/population/"},
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
          {"Biomass": "https://gbadske.org/dashboards/biomass/"},
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
          {"Ethiopia Case Study": "https://gbadske.org/dashboards/ahle-casestudy/"},
          {"Senegal Case Study": "https://gbadske.org/dashboards/senegal-casestudy/"},
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
        <Translate>Community</Translate>
        </>
        ),
      relatedLinks: [
          {"Usage Statistics": "https://gbadske.org/dashboards/users/"},
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
          {"Census Data": "https://gbadske.org/dashboards/census/"},
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
            <div style={{width:"75%", textAlign: "center", marginTop: "2.5%", backgroundColor:"#f1f1f1", padding: '2%', borderRadius: '25px'}}>
              <p>{dashboard_desc}</p>
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
