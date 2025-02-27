
import React from "react";
import '../style/Card.css'
import menuIcon from '../assets/Hamburger_icon.svg.png'

const QuestCardOverlay = ({onClose, title, description, status, reward, score, valid, onClickDone}) => {
    return (
        <div className="QuestCardOverlay">
            <div className="card-overlay">
                <div className="content">
                <button onClick={onClose} className="close-button">[x]</button>
                <h2>{title}</h2>
                <p>Missão: {description}</p>
                <ul>
                    <li>Status: {status}</li>
                    <li>Recompensa: {reward} moedas</li>
                    {score && <li>Pontuação: {score} pontos</li>}
                    <li>Data de vencimento: {valid} </li>
                    
                </ul>
                {status=='Pendente...' &&
                <button className="done-button" onClick={onClickDone}>Concluir Quest</button>
                }
                </div>
            </div>
        </div>
    )
}

export default QuestCardOverlay;