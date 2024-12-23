import React, { useEffect, useState } from "react";

import "../style/Players.css"
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import api from "../scripts/api";
import PlayerBox from "../components/PlayerBox";


const Players = () => {
    const [players, setPlayers] = useState();
    const history = useNavigate();

    const handleLogout = () => {
        Cookies.remove('token')
        history('/')
    }

    useEffect(() => {
        const fetchInfo = async () => {

            try {
                const response = await api.get('/players');
                console.log(response)
                if (response.status == 401) {
                    history('/')
                } else if (response.status == 200) {
                    setPlayers(response.data['info'])
                }
            } catch (e) {
                if (e.response.status == 401) {
                    history('/')
                } else if (e.response.status == 403) {
                    history('/quests')
                }
            }

        }

        fetchInfo();
    }, [])
    return (
        <div className="Players">
            <div className="container">
                <h1>Players</h1>
                <div className="box-players">
                    {players && players.map((player, index)=> (
                        <PlayerBox 
                        key={index}
                        title={player.nome}
                        email={player.email}
                        level={player.nivel}
                        coins={player.moedas}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Players;