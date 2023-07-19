import React from 'react';
import clsx from 'clsx';
import styles from './styles/HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import "./styles/AboutCard.css";

function PartnerProfiles(){

    const profiles = [
        {
            name: (
                <div className="about-titlePP">
                    <h2 className="specialTitlePP"><Translate>Flex Consulting</Translate></h2>
                    <h2 className="specialTitlePP team"><Translate>Solutions Inc.</Translate></h2>
                </div>
            ),
            ourStory: "Flex Consulting Solutions Inc. is a software consulting company that provides a range of technology services aimed at improving the efficiency and productivity of businesses. With our solutions, businesses can streamline their workflows, reduce manual labor and human error, improve performance, and deliver optimal software experiences to their customers.",
            logoLink: "https://flexconsulting.ca/imgs/FlexLogo.webp",
            ourAchievements: (
            <ul>
                <li>gbadske.org</li>
                <li>APIGBADsPublic</li>
                <li>GBADsDataSearchUI</li>
                <li>TEV Dashboard</li>
                <li>Laying Hens Dashboard</li>
                <li>AWS Cloud Infrastructure for hosting websites and dashboards</li>
                <li>TranslateDocusaurus → A translation tool used to translate the gbadske.org site</li>
                <li>GitHub CI/CD Pipelines → Automatically build and deploy for 10+ projects</li>
                <li>Containerization of software → APIs, R Shiny apps, Plotly Dashboards</li>
                <li>KPI management → User logging and log enrichment</li>
                <li>AndurylPlus → A modified version of a data analysis R module to be used by researchers for livestock data analysis</li>
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
                <h2><b>{profile.name}</b></h2>
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