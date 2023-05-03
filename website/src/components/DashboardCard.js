import React from "react";
import "./styles/DashboardCard.css";
import clsx from 'clsx';

function DashboardCard(props){
    // console.log(props.piclink);
    // console.log(props.relatedLinks);

    if (props.listitems.length==0){
        return (
            <div className={clsx('col col--4 padding-vert--md')}>
                <div className="text--center padding-horiz--md homepage-card">
                    {/* <div className="dash-pic-container">
                        <img src={props.piclink} width="80%" height="100%"/>
                    </div> */}
                    <div className="dash-text-container" style={{width: "75%"}}>
                        <h1 className="dash-title">{props.title}</h1>
                        <p className="dash-dolu">{props.dolu}</p>
                        <p className="dash-desc">{props.desc}</p>
                        {typeof props.relatedLinks !== 'undefined' &&
              <ul style={{ listStyleType: "none" }}>
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
        );
    }
    else{
    return(
        <div className={clsx('col col--4 padding-vert--md')}>
            <div className="text--center padding-horiz--md homepage-card">
                {/* <div className="dash-pic-container">
                    <img src={props.piclink} width="80%" height="100%"/>
                </div> */}
                <div className="dash-text-container" style={{width: "75%"}}>
                    <h1 className="dash-title">{props.title}</h1>
                    <p className="dash-dolu">{props.dolu}</p>
                    <p className="dash-desc">{props.desc}</p>
                    <ul tyle={{listStyleType: "none"}}>
                    {props.listitems.map((item, idx) => (
                        <li style={{fontWeight: "bold"}} key={idx}>{item}</li>
                    ))}
                    </ul>
                    {typeof props.relatedLinks !== 'undefined' &&
              <ul style={{ listStyleType: "none" }}>
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
    );
                    }
}

export default DashboardCard;