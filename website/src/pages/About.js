import React from "react";
import clsx from 'clsx';
import 'animate.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import "./styles/About.css";
import AboutCard from "../components/AboutCard";
import Translate, {translate} from '@docusaurus/Translate';
import Alumni from "../components/Alumni";
import FundingImages from "../components/FundingImages";

const funders = [
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/funders/aciar.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/funders/ADHB.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/funders/bmgf.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/funders/brooke.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/funders/dfid.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/funders/EC-logo1.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/funders/Ireland-ministry.webp"
];

const partners = [
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/pennstate.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/cirad.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/n8.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/cefas.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/iica.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/Griffiths-University.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/kstate.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/liverpool.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/guelph-1.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/WOAH-OIE-1.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/Logo_w_IHME-02.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/fao.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/washington.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/uf.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/ilri.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/zurich.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/PT-Mitra-Asia-Lestari-Logo.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/csiro.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/murdoch.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/sciensano.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/partners/Logo-BRIN-English_landscape.webp"
];

const collaborators = [
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/collaborators/AHI_Parent_Logo_2019_FINAL.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/collaborators/First_Analytics.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/collaborators/GBoCR_H_RGB.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/collaborators/kreavet.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/collaborators/logo_ceres-e1620310461516.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/collaborators/NVI.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/collaborators/Pirbright-logo_RGB_Large_Transparent-e1618928672256.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/collaborators/SVA_logo_rgb-300-dpi.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/collaborators/University-of-Bern.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/collaborators/Universitycollegedublinlogo.webp",
  "https://gbads-documentation.s3.ca-central-1.amazonaws.com/gbads-funders-partners-collaborators/collaborators/UU_logo_EN_RGB.webp"
];

function About(){
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout description="About">
        <main className="about-section">
          <div className="about-title">
            <h1 id="specialTitle"><Translate>Our</Translate></h1>
            <h1 id="specialTitle" className="team"><Translate>Team</Translate></h1>
          </div>
          <hr id="aboutHr"/>
            <div className={clsx('container')}>
                <AboutCard/>
            </div>
            <div className="about-title">
              <h1 id="specialTitle"><Translate>Past</Translate></h1>
              <h1 id="specialTitle" className="team"><Translate>Members</Translate></h1>
            </div>
            <hr id="aboutHr"/>
            <div className={clsx('container')}>
              <Alumni/>
            </div>
            <div className="about-title">
              <h1 id="specialTitle"><Translate>Our</Translate></h1>
              <h1 id="specialTitle" className="team"><Translate>Funders</Translate></h1>
            </div>
            <hr id="aboutHr"/>
            <div className={clsx('container')}>
              <FundingImages data={funders}/>
            </div>

            <div className="about-title">
              <h1 id="specialTitle"><Translate>Our</Translate></h1>
              <h1 id="specialTitle" className="team"><Translate>Partners</Translate></h1>
            </div>
            <hr id="aboutHr"/>
            <div className={clsx('container')}>
              <FundingImages data={partners}/>
            </div>

            <div className="about-title">
              <h1 id="specialTitle"><Translate>Our</Translate></h1>
              <h1 id="specialTitle" className="team"><Translate>Collaborators</Translate></h1>
            </div>
            <hr id="aboutHr"/>
            <div className={clsx('container')}>
              <FundingImages data={collaborators}/>
            </div>

        </main>
        </Layout>
    );
}

export default About;
