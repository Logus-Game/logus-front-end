import React, { useEffect, useState } from "react";
import '../style/Quests.css'
import { useNavigate } from "react-router-dom";
import api from "../scripts/api";
import QuestBox from "../components/QuestBox";
import Card from "../components/Card";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import SubmitQuest from "../components/SubmitQuest";

// import "../style/Quests.css"

const Quests = () => {
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

    const handleSubmitQuest = () => {
        setShowCard(false)
        setSubmitScreen(false)
    }
    
    function formatDate(valid) {
            const dateFromMySQL = valid;


            const dateObject = new Date(dateFromMySQL);


            const formattedDate = format(dateObject, "dd/MM/yyyy", { locale: ptBR });
            return formattedDate
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
            {showCard && submitScreen == false ? <Card
                title={selectedCard.nome}
                description={selectedCard.descricao}
                reward={selectedCard.recompensa}
                score={selectedCard.pontuacao}
                valid={formatDate(selectedCard.validade)}
                status={selectedCard.estado}
                onClose={() => (setShowCard(false))} 
                onClickDone={()=>(setSubmitScreen(true))}/>: submitScreen && showCard && 
                <SubmitQuest 
                onSubmit={handleSubmitQuest}
                onClose={handleSubmitQuest}/>}
            <div className="container">
                <div className="quests-box">
                    <h1>Suas Quests</h1>
                    {quests.map((quest, index) => (
                        <QuestBox
                            key={index}
                            title={quest.nome}
                            valid={formatDate(quest.validade)}
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