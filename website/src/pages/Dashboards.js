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
      relatedLinks: [
          {"Population Dashboard Version 2": "https://www.gbadske.org/dashboards/population-v2/"},
          {"Population Dashboard Version 1": "https://gbadske.org/dashboards/population/"},
    ]
     
    },
    {
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

      relatedLinks: [{
        "Animal Health Loss Envelope Dashboard": "https://gbadske.org/dashboards/ahle/"
      }
    ]
    },
    {
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

        relatedLinks: [
          {"Biomass Dashboard Version 1": "https://gbadske.org/dashboards/biomass/"},
          {"Biomass Dashboard Version 2": "https://gbadske.org/dashboards/biomass-v2/"}
      ]
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
  
        relatedLinks: [{"Laying Hens Dashboard": "https://gbadske.org/dashboards/layinghens/"}]
      },
      {
        title: (
          <>
          <Translate>Ethiopia Sub-National Population</Translate>
          </>
          ),
          dolu: (
              <Translate>
                Date of Last Update: 2023-05-02
              </Translate>
            ),
        desc: (
          <Translate>
           This dashboard allows users to plot, map, and download data from the Ethiopia Central Statistics Agency
          </Translate>
        ),
        listitems:[],

        relatedLinks: [{"Ethiopia Sub-National Population": "https://gbadske.org/dashboards/ethiopia-population/"}]
      },
        {
          title: (
            <>
            <Translate>GBADs API User Interface</Translate>
            </>
            ),
            dolu: (
                <Translate>
                  Date of Last Update: 2023-05-02
                </Translate>
              ),
          desc: (
            <Translate>
              This dashboard allows users to visualize and download data available in the GBADs API
            </Translate>
          ),
          listitems:[],
  
          relatedLinks: [{"GBADs API User Interface": "https://www.gbadske.org/dashboards/apiui/"}]
        },
        {
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
          listitems:[],
  
          relatedLinks: [{"Data Visualizer": "https://www.gbadske.org/dashboards/visualizer/"},
                         {"Ethiopia Data Stories": "https://www.gbadske.org/dashboards/datastories/"}]
        },
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
          <div>
          </div>
    </Layout>
  )
}

export default Dashboards;
