import React, { useEffect, useState } from "react";
import '../style/Box.css'
import pending from '../assets/pending-icon.png'
import complete from '../assets/complete-icon.png'
import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useLocation } from "react-router-dom";


const TransferBox = ({ id, value, date, bank_value_pre, user }) => {
    const location = useLocation();

    return (
        <div className="Box">
                
                <>
                    <div className="fr1">ID: {id}</div>
                    <div className="fr2"><span className="value">Valor: {value}</span></div>
                    <div className="fr3"><span className="date">Data: {date}</span> </div>
                    <div className="fr4"><span className="valor">usuario: {user}</span></div>
                </>
            

        </div>

    )
}

export default TransferBox;