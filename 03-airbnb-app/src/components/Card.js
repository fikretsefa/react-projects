import React from "react";


export default function Card(props) {
    let badgeText
    if(props.openspots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.country === "USA"){
        badgeText = "Online"
    }

    return (
        <>
            <div className="card">                
                {/* {props.openspots === 0 && <div className="card--badge">SOLD OUT</div>} */}
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img className="card--image" src={require(`../images/${props.img}.png`)} />
                <div className="card--stats">
                    <img className="card--star" src={require("../images/star.png")} />
                    <span>{props.rating}</span>
                    <span className="gray"> ({props.reviewCount}) - </span>
                    <span className="gray">{props.country}</span>
                    <p className="bold">{props.header}</p>
                    <p>{props.title}</p>
                </div>

            </div>
        </>
    )
}