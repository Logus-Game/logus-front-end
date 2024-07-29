import React from "react";
import '../style/Box.css'
import pending from '../assets/pending-icon.png'
import complete from '../assets/complete-icon.png'


const QuestBox = ({title, description, status, reward, score, id, onButtonClick}) => {
    return (
        <div className="Box">
            <div className="fr1"><span className="title">{title}</span></div>
            <div className="fr2">{status === 1 ? (<>
                Completa! <img className="status" src={complete} alt="" /></>
            ): (<>
                Pendente... <img className="status" src={pending} alt="" /></>
            )}</div>
            <div className="fr3">{description.length >=18  ? (
                description.slice(0,17)[16] === ' ' ? description.slice(0,16) : description.slice(0,17)
            ) : (
                description
            )}...</div>
            <div className="fr4"><button onClick={()=>(onButtonClick(id))}>Ver quest</button></div>
            
            
        </div>
    )
}

export default QuestBox;