import React from 'react';
import clsx from 'clsx';
import styles from './styles/HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import "./styles/AboutCard.css";

function PartnerProfiles(){

    const profiles = [
        {
            name:<h2><b><Translate>Flex Consulting Solutions Inc.</Translate></b></h2>,
            ourStory:<Translate>Flex Consulting Solutions Inc. is a software consulting company that provides a range of technology services aimed at improving the efficiency and productivity of businesses. With our solutions, businesses can streamline their workflows, reduce manual labor and human error, improve performance, and deliver optimal software experiences to their customers.</Translate>,
            logoLink: "https://flexconsulting.ca/imgs/FlexLogo.webp",
            ourAchievements: (
            <ul>
              <li><Translate>gbadske.org</Translate></li>
              <li><Translate>GBADs TAIL (Trusted Animal Information Portal)</Translate></li>
              <li><Translate>APIGBADsPublic</Translate></li>
              <li><Translate>TEV Dashboard</Translate></li>
              <li><Translate>Laying Hens Dashboard</Translate></li>
              <li><Translate>AWS Cloud Infrastructure for hosting websites and dashboards</Translate></li>
              <li><Translate>TranslateDocusaurus → A translation tool used to translate the gbadske.org site</Translate></li>
              <li><Translate>GitHub CI/CD Pipelines → Automatically build and deploy for 10+ projects</Translate></li>
              <li><Translate>Containerization of software → APIs, R Shiny apps, Plotly Dashboards</Translate></li>
              <li><Translate>KPI management → User logging and log enrichment</Translate></li>
              <li><Translate>AndurylPlus → A modified version of a data analysis R module to be used by researchers for livestock data analysis</Translate></li>
          </ul>
            ),
        }
    ]


    return(
    <section className={styles.features}>
        <div className="container">
          {profiles.map((profile, idx) => (
            <div className="partnerProfile" key={idx}>
              <div>
                <img src={profile.logoLink} />
              </div>
              <div className='profileBodyText'>
                {profile.name}
                <h3><b><u>Our Story</u></b></h3>
                <p>{profile.ourStory}</p>
                <h3><b><u>Our Achievements:</u></b></h3>
                {profile.ourAchievements}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}

export default PartnerProfiles;