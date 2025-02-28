
import React, { useRef } from "react";
import '../style/Card.css'
import menuIcon from '../assets/Hamburger_icon.svg.png'

const PlayerCardOverlay = ({onClose, id, title, email, level, coins, onClickEdit, edit, onClickDone}) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const levelRef = useRef();
    const coinsRef = useRef();

    return (
        <div className="Playe
        rCardOverlay">
            <div className="card-overlay">
                
        {edit ?
        <div className="content">
            <button onClick={onClose} className="close-button">[x]</button>
            <h2><input id='player-name' className='ipt-card-player' ref={nameRef} defaultValue={title}/></h2>
            <ul>
                <li>E-mail: <input type="text"  className='ipt-card-player' ref={emailRef} defaultValue={email}/></li>
                <li>Level: <input type="text"  className='ipt-card-player' ref={levelRef} defaultValue={level}/></li>
                <li>Moedas: <input type="text"  className='ipt-card-player' ref={coinsRef} defaultValue={coins} />moedas</li>
                
            </ul>
            
            <button className="cancel-button" onClick={() => {onClickEdit(id, edit)}}>Cancelar</button>
            <button className="done-button" onClick={() => {onClickDone(id, nameRef.current.value, emailRef.current.value, levelRef.current.value, coinsRef.current.value)}}>Concluído</button>
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