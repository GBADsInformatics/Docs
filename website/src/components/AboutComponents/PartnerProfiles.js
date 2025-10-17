import React from 'react';
import styles from './AboutComponents.module.css';
import Translate from '@docusaurus/Translate';

function PartnerProfiles() {
  const profiles = [
    {
      name: "Flex Consulting Solutions Inc.",
      ourStory: (
        <Translate>
          Flex Consulting Solutions Inc. is a software consulting company that provides
          a range of technology services aimed at improving the efficiency and
          productivity of businesses. With our solutions, businesses can streamline
          workflows, reduce manual labor and human error, improve performance, and
          deliver optimal software experiences to their customers.
        </Translate>
      ),
      logoLink: "https://flexconsulting.ca/imgs/FlexLogo.webp",
      ourAchievements: [
        "gbadske.org",
        "GBADs TAIL (Trusted Animal Information Portal)",
        "APIGBADsPublic",
        "TEV Dashboard",
        "Laying Hens Dashboard",
        "AWS Cloud Infrastructure for hosting websites and dashboards",
        "TranslateDocusaurus → A translation tool used to translate the gbadske.org site",
        "GitHub CI/CD Pipelines → Automatically build and deploy for 10+ projects",
        "Containerization of software → APIs, R Shiny apps, Plotly Dashboards",
        "KPI management → User logging and log enrichment",
        "AndurylPlus → A modified version of a data analysis R module to be used by researchers for livestock data analysis"
      ],
    },
  ];

  return (
    <section className={styles.partnerSection}>
      <div className="container">
        {profiles.map((profile, idx) => (
          <div key={idx} className={styles.partnerCard}>
            <div className={styles.partnerLogo}>
              <img src={profile.logoLink} alt={`${profile.name} logo`} />
            </div>
            <div className={styles.partnerContent}>
              <h2 className={styles.partnerName}>{profile.name}</h2>
              <p className={styles.partnerStory}>{profile.ourStory}</p>
              <h3 className={styles.partnerAchievementsTitle}>
                <u><Translate>Achievements</Translate>:</u>
              </h3>
              <ul className={styles.partnerAchievements}>
                {profile.ourAchievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PartnerProfiles;
