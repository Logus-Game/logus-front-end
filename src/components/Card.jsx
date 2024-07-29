
import React from "react";
import '../style/Card.css'
import menuIcon from '../assets/Hamburger_icon.svg.png'

const Card = ({ show, onClose, title, description, status, reward, score}) => {
    return (
        <div className="Card">
            <div className="card-overlay">
                <div className="content">
                <button onClick={onClose} className="close-button">[x]</button>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                    <li>{status}</li>
                    <li>{reward}</li>
                    <li>{score}</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;