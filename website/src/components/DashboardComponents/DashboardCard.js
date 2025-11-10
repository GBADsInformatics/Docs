import React from 'react';
import clsx from 'clsx';
import { Info } from 'lucide-react';
import styles from './DashboardCard.module.css';

export default function DashboardCard({ title, relatedLinks }) {
  return (
    <div className={clsx(styles.card, "animate__animated animate__fadeInUp")}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <ul className={styles.linksList}>
        {relatedLinks.map((link, idx) => {
          const entries = Object.entries(link).filter(([key]) => key !== 'information' && key !== 'disabled');
          const disabled = link.disabled;

          return (
            <li key={idx} className={clsx(styles.linkItem, disabled && styles.disabledLinkItem)}>
              {entries.map(([key, value], i) => (
                <span key={i} className={styles.linkWithInfo}>
                  {disabled ? (
                    <span className={styles.disabledText}>{key}</span>
                  ) : (
                    <a href={value} target="_blank" rel="noopener noreferrer">
                      {key}
                    </a>
                  )}

                  {link.information && (
                    <button
                      className={clsx(styles.infoButton, disabled && styles.disabledButton)}
                      onClick={() => !disabled && window.open(link.information, "_blank")}
                      aria-label="More information"
                      disabled={disabled}
                    >
                      <Info size={16} />
                    </button>
                  )}
                </span>
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
