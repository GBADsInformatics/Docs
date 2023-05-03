import React from 'react';
import clsx from 'clsx';
import styles from './styles/HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';

  
  export default function FundingImages(props) {
    return (
      <section className={styles.features}>
        <div className="container">
          {props.data.map((url, idx) => (
            <img key={idx} src={url} width={"20%"}/>
          ))}
        </div>
      </section>
    );
  }