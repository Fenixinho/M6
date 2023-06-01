import React from "react";
import '../styles/Card.css';

function Card(props){
    return(
        <div className="cardContainer">
            <img className="" />
            <div className="cardInfo">
                <h3>{props.ciutat}</h3>
                <p>Area: {props.area}</p>
            </div>
        </div>
    )
}

export default Card;
