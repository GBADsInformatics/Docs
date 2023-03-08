import React from "react";
import "./styles/DashboardCard.css";

function DashboardCard(props){
    console.log(props.piclink)
    return(
        <div className="container main-dash-container">
            <div className="dash-pic-container">
                <img src={props.piclink} width="80%" height="100%"/>
            </div>
            <div className="dash-text-container">
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
    );
}

export default DashboardCard;