import React, { useEffect, useState } from "react";
import '../style/Box.css'
import pending from '../assets/pending-icon.png'
import complete from '../assets/complete-icon.png'
import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


const PlayerBox = ({ title, email, level, coins, onButtonClick }) => {
    
    return (
        <div className="Box">
            <div className="fr1"><span className="title">{title}</span></div>
            <div className="fr4"><button>Ver player</button></div>


        </div>
    )
}

export default PlayerBox;