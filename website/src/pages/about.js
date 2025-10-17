import React from "react";
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './About.module.css';
import AboutCard from "../components/AboutComponents/AboutCard";
import Alumni from "../components/AboutComponents/Alumni";
import FundingImages from "../components/AboutComponents/FundingImages";
import PartnerProfiles from "../components/AboutComponents/PartnerProfiles";

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

const sections = [
    { title: "Our Team", component: <AboutCard /> },
    { title: "Past Members", component: <Alumni /> },
    { title: "Our Informatics Partners", component: <PartnerProfiles /> },
    { title: "Our Funders", component: <FundingImages data={funders} /> },
    { title: "Our Partners", component: <FundingImages data={partners} /> },
    { title: "Our Collaborators", component: <FundingImages data={collaborators} /> },
  ];


function Section({ title, subtitle, children }) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
        <hr className={styles.sectionDivider} />
      </div>
      <div className={clsx('container', styles.sectionContent)}>
        {children}
      </div>
    </section>
  );
}

export default function About() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="About">
      <main className={styles.aboutSection}>
        {sections.map((sec, idx) => (
            <Section key={idx} title={sec.title} subtitle={sec.subtitle}>
            {sec.component}
            </Section>
        ))}
        </main>
    </Layout>
  );
}