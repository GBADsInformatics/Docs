import React from 'react';

import DashboardCard from '../components/DashboardCard';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';

import "./styles/Dashboards.css";

function Dashboards() {
  const DashInfo = [
    {
      piclink: "http://gbadske.org/images/gbadsImage1.png",
      title: (
        <>
        <Translate>Data Sources</Translate>
        </>
        ),
        dolu: (
            <Translate>
              Date of Last Update: 2022-06-02
            </Translate>
          ),
      desc: (
        <Translate>
          The Animal Population dashboard displays animal populations by species per year per country (or region or for the world). Current data sources include:
        </Translate>
      ),
      listitems: ["FAOSTAT", "WOAH (formerly OIE) (2021-08-18)", "EUROSTAT"],
      linkText: (
        <Translate>
            Population Dashboard
        </Translate>
      ),
      link: "http://gbadske.org:8052/"
    },
    {
      title: (
        <>
        <Translate>Laying Hens Dashboard</Translate>
        </>
        ),
        dolu: (
            <Translate>
              Date of Last Update: 2023-03-14
            </Translate>
          ),
      desc: (
        <Translate>
          The Laying Hens dashboard displays data on the welfare of laying hens from the European Commission.
        </Translate>
      ),
      listitems:[],
      linkText: (
        <Translate>
            Laying Hens Dashboard
        </Translate>
      ),
      link: "http://35.182.244.40:8050/dash/"
    },
    {
        piclink: "http://gbadske.org/images/marketing_img.png",
        title: (
          <>
          <Translate>Models and Calculations</Translate>
          </>
          ),
          dolu: (
              <Translate>
                Date of Last Update: 2022-06-02
              </Translate>
            ),
        desc: (
          <Translate>
            The Biomass dashboard displays the results of various different ways to calculate biomass. Current calculations include: 
          </Translate>
        ),
        listitems: ["GBADs PPS calculation method", "WOAH AMR calculation method"],
        linkText: (
          <Translate>
              Biomass Dashboard
          </Translate>
        ),
        link: "http://gbadske.org:8053/"
      }
      ]

  return (
    <Layout>
          <div className='lower-container'>
            <br/>
            <center>
                <h1><u>The Knowledge Engine Dashboards</u></h1>
            </center>
            <div className="row homepage-highligh-row">
                {DashInfo.map((props, idx) => (
                <DashboardCard key={idx} {...props} />
                ))}
            </div>
          </div>
    </Layout>
  )
}

export default Dashboards;
