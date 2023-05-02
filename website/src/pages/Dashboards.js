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
              Date of Last Update: 2023-06-02
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
            Population Dashboard V1 
        </Translate>
      ),
      link: "https://gbadske.org/dashboards/population/",
      linkText: (
        <Translate>
            Population Dashboard V2 
        </Translate>
      )
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
      link: "https://gbadske.org/dashboards/layinghens/"
    },
    {
        piclink: "http://gbadske.org/images/marketing_img.png",
        title: (
          <>
          <Translate>Biomass</Translate>
          </>
          ),
          dolu: (
              <Translate>
                Date of Last Update: 2023-05-02
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
              Biomass Dashboard Version 1
          </Translate>
        ),
        link: "https://gbadske.org/dashboards/biomass/",
        linkText: (
          <Translate>
              Biomass Dashboard Version 2 
          </Translate>
        ),
        link: "https://gbadske.org/dashboards/biomass-v2/"
      },
      {
        piclink: "http://gbadske.org/images/marketing_img.png",
        title: (
          <>
          <Translate>Animal Health Loss Envelope</Translate>
          </>
          ),
          dolu: (
              <Translate>
                Date of Last Update: 2023-05-02
              </Translate>
            ),
        desc: (
          <Translate>
            The (First Analytics and University of Liverpool) Animal Health Loss Envelope dashboard provides analytics and visualizations for the Ethiopia Case Study, Antimicrobrial Resistance, and the Animal Health Loss Envelope. 
          </Translate>
        ),
        listitems:[],
        linkText: (
          <Translate>
              Animal Health Loss Envelope Dashboard
          </Translate>
        ),
        link: "https://gbadske.org/dashboards/ahle/"
      },
      {
        piclink: "http://gbadske.org/images/marketing_img.png",
        title: (
          <>
          <Translate>In Development</Translate>
          </>
          ),
          dolu: (
              <Translate>
                Date of Last Update: 2023-05-02
              </Translate>
            ),
        desc: (
          <Translate>
            Check out our dashboards that are currently under development
          </Translate>
        ),
        linkText: (
          <Translate>
              Data Visualizer 
          </Translate>
        ),
        link: "https://www.gbadske.org/dashboards/visualizer/",
        linkText: (
          <Translate>
              Ethiopia Data Stories 
          </Translate>
        ),
        link: "https://www.gbadske.org/dashboards/datastories/"
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
