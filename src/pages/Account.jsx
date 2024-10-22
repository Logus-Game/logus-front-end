import React, { useEffect, useState } from "react";

import "../style/Account.css"
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import api from "../scripts/api";


const Account = () => {
    const [info, setInfo] = useState();
    const history = useNavigate();

    const handleLogout = () => {
        Cookies.remove('token')
        history('/')
    }

    useEffect(()=> {
        const fetchInfo = async () => {

            try {
                const response = await api.get('/user-data');
                console.log(response)
                if (response.status == 401) {
                    history('/')
                } else if (response.status == 200) {
                    setInfo(response.data['info'])
                }
            } catch (e) {
                if (e.response.status == 401) {
                    history('/')
                }
            }

        }

        fetchInfo();
    },[])
    return (
        <div className="Account">
            <div className="container">
                <h1>Sua Conta</h1>
                <div className="account-info">
                    <div className="game-info">
                    <div className="qtd-moedas">
                        <h3>Suas Moedas</h3>
                        <h1 className="h1-moedas">{info && info.moedas}</h1>
                    </div>
                    <div className="nivel">
                        <h2>Nível</h2>
                        <h1 className="h1-nivel">{info && info.nivel}</h1>
                    </div></div>
                    <div className="personal-info">
                        <div className="account-email">
                            <p>Email: </p> {info && info.email}
                        </div>
                        <div className="account-password">
                            <p>Senha: </p>*****
                        </div>
                        <div onClick={handleLogout} className="logout">
                            <p className="logout">Sair</p>
                        </div>
                    </div>
                </div>
                </div>            
        </div>
    )
}

export default Account;