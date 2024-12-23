
import React, { useRef } from "react";
import '../style/Card.css'
import menuIcon from '../assets/Hamburger_icon.svg.png'

const SubmitQuest = ({ id, onSubmit, onClose }) => {
    const descRef = useRef();
    return (
        <div className="SubmitQuest">
            <div className="card-overlay">
                <div className="content">
                    <button onClick={onClose} className="close-button">[x]</button>
                    <h2>Submeter Quest</h2>
                    <form onSubmit={(e)=>{onSubmit(id, descRef.current.value,e)}}>
                        <div>Data de realização: <br/>
                            <input type="date" name="" id="submit-date" />
                        </div>
                        <div>Descrição <br/>
                            <textarea name="" id="submit-description" ref={descRef}></textarea>
                        </div>
                        <div>Anexo: <br/>
                            <input id="submit-file" type="file" />
                        </div>
                        <button className="done-button" onClick={(e)=>{onSubmit(id, descRef.current.value,e)}}>Concluir Quest</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubmitQuest;