import React, { useEffect, useState } from "react";
import '../style/Quests.css'
import Cookies from 'js-cookie';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../scripts/api"
import api from "../scripts/api";
import QuestBox from "../components/QuestBox";
import Card from "../components/Card";

// import "../style/Quests.css"

const Quests = () => {
    const history = useNavigate();
    const [quests, setQuests] = useState([]);
    const [showCard, setShowCard] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleShowCard = (id) => {
        for (let i = 0; i < quests.length; i++) {
            if (quests[i].id == id) {
                setSelectedCard(quests[i])
                setShowCard(true)
            }

        }
    }
    useEffect(() => {

        const fetchQuests = async () => {

            try {
                const response = await api.get('/quests');
                console.log(response)
                if (response.status == 401) {
                    history('/')
                } else if (response.status == 200) {
                    setQuests(response.data['quests'])
                }
            } catch (e) {
                if (e.response.status == 401) {
                    history('/')
                }
            }
            
        }

        fetchQuests();



    }, [])
    return (
        <div className="Quests">
            {showCard && <Card
                title={selectedCard.nome}
                description={selectedCard.descricao}
                reward={selectedCard.recompensa}
                score={selectedCard.pontuacao}
                status={selectedCard.estado}
                onClose={() => (setShowCard(false))} />}
            <div className="container">
                <div className="quests-box">
                    <h1>Suas Quests</h1>
                    {quests.map((quest, index) => (
                        <QuestBox
                            key={index}
                            title={quest.nome}
                            description={quest.descricao}
                            status={quest.estado}
                            score={quest.pontuacao}
                            reward={quest.recompensa}
                            id={quest.id}
                            onButtonClick={handleShowCard} />
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Quests;