import React, { useEffect, useState } from "react";
// import '../style/Explore.css'
import { useNavigate } from "react-router-dom";
import api from "../scripts/api";
import QuestBox from "../components/QuestBox";
import Card from "../components/QuestCardOverlay";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import SubmitQuest from "../components/SubmitQuest";
import ExploreQuestBox from "../components/ExploreQuestBox";



const Explore = () => {
    const history = useNavigate();
    const [quests, setQuests] = useState([]);
    const [showCard, setShowCard] = useState(false);
    const [submitScreen, setSubmitScreen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [date, setDate] = useState('');

    const handleShowCard = (id) => {
        for (let i = 0; i < quests.length; i++) {
            if (quests[i].id == id) {
                setSelectedCard(quests[i])
                setShowCard(true)
            }

        }
    }

    const subscribe = async (id_quest, cost) => {

        try {
            const response = await api.post('/subscribe', {
                quest_id: id_quest,
                inscricao: cost
            });
            console.log(response)
            if (response.status == 401) {
                history('/')
            } else if (response.status == 200) {
                console.log(response)
            }
        } catch (e) {
            
            if (e.response.status == 401) {
                history('/')
            } else {
                console.log(e)
            }
        }

    }
    
    
    useEffect(() => {
        console.log(showCard)
        

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
        <div className="Explore">
            {console.log("showCard:", showCard, "submitScreen:", submitScreen)}

            <div className="container">
                <div className="quests-box"> 
                    <h1>Explorar</h1>
                    {quests.map((quest, index) => (
                        <ExploreQuestBox
                            key={index}
                            title={quest.nome}
                            onButtonClick={subscribe}
                            cost={quest.custo}
                            id_quest={quest.id_quest}
                            />
                            
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Explore;