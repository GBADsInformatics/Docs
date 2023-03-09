import React from "react";
import clsx from 'clsx';
import 'animate.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import "./styles/About.css";
import AboutCard from "../components/AboutCard";
import Translate, {translate} from '@docusaurus/Translate';

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
        </main>
        </Layout>
    );
}

export default About;
