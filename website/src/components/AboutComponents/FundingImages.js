import React from 'react';
import styles from './AboutComponents.module.css';

export default function FundingImages({ data }) {
  return data.map((url, idx) => (
    <div key={idx} className={styles.logoContainer}>
      <img src={url} alt={`Logo ${idx}`} className={styles.logo} />
    </div>
  ));
}
