
import React from "react";
import '../style/Card.css'
import menuIcon from '../assets/Hamburger_icon.svg.png'

const PlayerCardOverlay = ({onClose, id, title, email, level, coins, onClickEdit, edit}) => {
    return (
        <div className="Playe
        rCardOverlay">
            <div className="card-overlay">
                
        {edit ?
        <div className="content">
            <button onClick={onClose} className="close-button">[x]</button>
            <h2><input value={title}/></h2>
            <ul>
                <li>E-mailbanana: {email}</li>
                <li>Level: {level}</li>
                <li>Moedas: {coins} moedas</li>
                
            </ul>
            
            <button className="done-button" onClick={() => {onClickEdit(id, edit)}}>Editar Jogador</button>
            </div>
            :
            <div className="content">
            <button onClick={onClose} className="close-button">[x]</button>
            <h2>{title}</h2>
            <ul>
                <li>E-mail: {email}</li>
                <li>Level: {level}</li>
                <li>Moedas: {coins} moedas</li>
                
            </ul>
            
            <button className="done-button" onClick={() => {onClickEdit(id)}}>Editar Jogador</button>
            </div>
        }
        
                
                
            </div>
        </div>
    )
}

export default PlayerCardOverlay;