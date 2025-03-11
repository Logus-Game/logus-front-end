import React, { useEffect, useState } from "react";
import maintanceGif from '../assets/website-maintenance-gif-2.gif'
import "../style/Bank.css"
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import api from "../scripts/api";


const Bank = () => {
    const history = useNavigate();
    const [info, setInfo]  = useState();
    const [transfers, setTransfers] = useState([]);

    const fetchInfo = async () => {
        try {
        const response = await api.get('/user-data');
        console.log(response)
        if (response.status == 200) {
            setInfo(response.data['info'])
        } else {
            throw new Error(response);
            
        }
    } catch (e) {
        
        history('/')
    }
    }

    const fetchTransfers = async() => {
        try {
            const response = await api.get('/transfers');
            console.log(response)
            if (response.status == 200) {
                console.log(response)
            } else {
                throw new Error(response);
                
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        

        fetchInfo();
        fetchTransfers();
        
    }, [])
    return (
        <div className="Bank">

            <div className="container">
                <h1>Banco</h1>
                <div className="balance-box">
                    <div className="balance"><h1 className="h1-moedas">{info && info.moedas}</h1></div>
                </div>
                
                    <h1>Transferências</h1>
                    <div className="transfer-box">
                        <div className="item1"></div>
                        <div className="item2"></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Bank;