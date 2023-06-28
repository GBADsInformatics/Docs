import React from "react";
import "./styles/DashboardCard.css";
import clsx from 'clsx';

function DashboardCard(props){
  return (
        <div className={clsx('col col--4 padding-vert--md')}>
            <div className="text--center padding-horiz--md homepage-card">
                <div className="dash-text-container" style={{width: "75%"}}>
                    <h1 className="dash-title">{props.title}</h1>
                    <div className="align-ul-element">
                    {typeof props.relatedLinks !== 'undefined' &&
                      <ul style={{ listStyleType: "none", textAlign: 'center' }}>
                        {props.relatedLinks.map((link, idx) => (
                          <li key={idx}>
                            <a href={Object.values(link)[0]}>{Object.keys(link)[0]}</a>
                          </li>
                        ))}
                      </ul>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;