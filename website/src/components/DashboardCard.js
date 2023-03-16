import React from "react";
import "./styles/DashboardCard.css";
import clsx from 'clsx';

function DashboardCard(props){
    console.log(props.piclink);

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
                        <a href={props.link}>{props.linkText}</a>
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
                    <ul>
                    {props.listitems.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                    </ul>
                    <a href={props.link}>{props.linkText}</a>
                </div>
            </div>
        </div>
    );
                    }
}

export default DashboardCard;