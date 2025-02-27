import React, { useEffect, useState } from "react";

import "../style/Players.css"
import { useNavigate } from "react-router-dom";
import api from "../scripts/api";
import PlayerBox from "../components/PlayerBox";
import PlayerCardOverlay from "../components/PlayerCardOverlay";


const Players = () => {
    const [players, setPlayers] = useState();
    const [edit, setEdit] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [showCard, setShowCard] = useState(false);
    const history = useNavigate();

    const handleShowCard = (id) => {
        
        for (let i = 0; i < players.length; i++) {
            if (players[i].id_usuario == id) {
                console.log("banana")
                setSelectedCard(players[i])
                setShowCard(true)
            }
            
        }
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
            onClose, id, title, email, level, coins, onClickEdit, edit
            {showCard && 
            <PlayerCardOverlay
            onClose={()=>{setShowCard(false)}}
            id={selectedCard.id_usuario}
            title={selectedCard.nome}
            email={selectedCard.email}
            level={selectedCard.nivel}
            coins={selectedCard.moedas}
            edit={edit}
            onClickEdit={() => {setEdit(!edit)}}
            />
            }
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
                        id={player.id_usuario}
                        onButtonClick={handleShowCard}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Players;