import React, { useEffect, useRef, useState } from "react";
import maintanceGif from '../assets/website-maintenance-gif-2.gif'
import "../style/Bank.css"
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import api from "../scripts/api";
import TransferBox from "../components/TransferBox";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";



const Bank = () => {
    const history = useNavigate();
    const hasFetched = useRef(false)
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
                setTransfers(response.data.info)
                console.log(response)
            } else {
                throw new Error(response);
                
            }
        } catch (e) {
            console.log(e)
        }
    }

     function formatDate(valid) {
                const dateFromMySQL = valid;
    
    
                const dateObject = new Date(dateFromMySQL);
    
    
                const formattedDate = format(dateObject, "dd/MM/yyyy", { locale: ptBR });

                return formattedDate
            }

    useEffect(() => {
        const controller = new AbortController();
     
            fetchInfo();
            fetchTransfers();
        
        
        return () => controller.abort();
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
                    {transfers.map((transfer, index) => (
                        <TransferBox 
                            key={index}
                            id={transfer.idTransferencias}
                            value={transfer.valor}
                            date={formatDate(transfer.data_hora)}
                            bank_value_pre={transfer.valor_banco}
                            user={transfer.nome}/>
                    ))}
                       

                    
                </div>
            </div>
        </div>
    )
}

export default Bank;