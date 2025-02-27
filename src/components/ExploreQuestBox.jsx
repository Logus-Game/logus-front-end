import React, { useEffect, useState } from "react";
import '../style/Box.css'
import pending from '../assets/pending-icon.png'
import complete from '../assets/complete-icon.png'
import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useLocation } from "react-router-dom";


const ExploreQuestBox = ({ title, cost, id, onButtonClick }) => {
    const location = useLocation();

    return (
        <div className="Box">
            
                <>
                    <div className="fr1"><span className="title">{title}</span></div>
                    <div className="fr2"><button onClick={() => { onButtonClick(id) }}>Se Inscrever</button></div>
                    <div className="fr3">Inscrição: {cost}</div>
                    <div className="fr4"><button onClick={() => { onButtonClick(id) }}>Ver quest</button></div>
                </>
            

        </div>

    )
}

export default ExploreQuestBox;