import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HighlightCard from '../components/HighlightCard';
import clsx from 'clsx';
import DashboardCard from '../components/DashboardCard';
import Translate, {translate} from '@docusaurus/Translate';

export default function Dashboards() {
  const {siteConfig} = useDocusaurusContext();

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
    <Layout description="Homepage">
      <main>
          <div className='container'>
            <br/>
            <center>
                <h1><u>The Knowledge Engine Dashboards</u></h1>
            </center>
            <div style={{display:"flex", flexDirection:"column", alignContent:"center", justifyContent:"center"}}>
                {DashInfo.map((props, idx) => (
                <DashboardCard key={idx} {...props} />
                ))}
            </div>
          </div>
    </main>
    </Layout>
  )
}
