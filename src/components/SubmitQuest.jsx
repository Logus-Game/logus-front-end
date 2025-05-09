
import React, { useRef } from "react";
import '../style/Card.css'
import menuIcon from '../assets/Hamburger_icon.svg.png'

const SubmitQuest = ({ id, onSubmit, onClose }) => {
    const descRef = useRef();
    const fileRef = useRef();

    return (
        <div className="SubmitQuest">
            <div className="card-overlay">
                <div className="content">
                    <button onClick={onClose} className="close-button">[x]</button>
                    <h2>Submeter Quest</h2>
                    <form onSubmit={(e) => onSubmit(id, descRef.current.value, fileRef.current.files[0], e)}>
                        <div>Data de realização: <br />
                            <input type="date" id="submit-date" />
                        </div>
                        <div>Descrição <br />
                            <textarea id="submit-description" ref={descRef}></textarea>
                        </div>
                        <div>Anexo: <br />
                            <input id="submit-file" type="file" ref={fileRef} />
                        </div>
                        <button className="done-button">Concluir Quest</button>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default SubmitQuest;