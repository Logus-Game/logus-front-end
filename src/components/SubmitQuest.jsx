
import React from "react";
import '../style/Card.css'
import menuIcon from '../assets/Hamburger_icon.svg.png'

const SubmitQuest = ({onSubmit, onClose}) => {
    return (
        <div className="SubmitQuest">
            <div className="card-overlay">
                <div className="content">
                <button onClick={onClose} className="close-button">[x]</button>
                <h2>Submeter Quest</h2>
                <p>Data de realização:</p>
                <input type="date" name="" id="" />
                <p>Descrição:</p>
                <textarea name="" id=""></textarea>
                <p>Anexo:</p>
                <input type="file" />
                
                <button className="done-button" onClick={onSubmit}>Concluir Quest</button>
                </div>
            </div>
        </div>
    )
}

export default SubmitQuest;