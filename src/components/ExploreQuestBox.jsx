import React, { useEffect, useState } from "react";
import '../style/Box.css'
import pending from '../assets/pending-icon.png'
import complete from '../assets/complete-icon.png'
import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useLocation } from "react-router-dom";


const ExploreQuestBox = ({ title, cost, id_quest, onButtonClick }) => {
    const location = useLocation();

    useEffect(()=> {
        console.log(id_quest)
    },[])

    return (
        <div className="Box">
            
                <>
                    <div className="fr1"><span className="title">{title}</span></div>
                    <div className="fr2"><button onClick={() => { onButtonClick(id_quest, cost) }}>Inscrever Players</button></div>
                    <div className="fr3">Recompensa: {cost}</div>
                    <div className="fr4"><button>Ver quest</button></div>
                </>
            

        </div>

    )
}

export default ExploreQuestBox;