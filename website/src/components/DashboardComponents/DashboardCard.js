import React from 'react';
import clsx from 'clsx';
import { Info } from 'lucide-react'; // make sure lucide-react is installed
import styles from './DashboardCard.module.css';

export default function DashboardCard({ title, relatedLinks }) {
  return (
    <div className={clsx(styles.card, "animate__animated animate__fadeInUp")}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <ul className={styles.linksList}>
        {relatedLinks.map((link, idx) => (
          <li key={idx} className={styles.linkItem}>
            {Object.entries(link).map(([key, value], i) => {
              if (key === 'information') return null; // skip rendering the info URL itself
              return (
                <span key={i} className={styles.linkWithInfo}>
                  <a href={value} target="_blank" rel="noopener noreferrer">{key}</a>
                  {link.information && (
                    <button
                      className={styles.infoButton}
                      onClick={() => window.open(link.information, "_blank")}
                      aria-label="More information"
                    >
                      <Info size={16} />
                    </button>
                  )}
                </span>
              );
            })}
          </li>
        ))}
      </ul>
    </div>
  );
}
