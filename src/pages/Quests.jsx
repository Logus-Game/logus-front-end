import React, { useEffect, useState } from "react";
import '../style/Quests.css'
import { useNavigate } from "react-router-dom";
import api from "../scripts/api";
import QuestBox from "../components/QuestBox";
import { format, formatDate } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import SubmitQuest from "../components/SubmitQuest";
import QuestCardOverlay from "../components/QuestCardOverlay";



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

    const handleSubmitQuest = async (id, desc, provaFile, event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append("desc", desc);
        formData.append("prova", provaFile);
    
        try {
            const response = await api.patch(`/quests/status/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
    
            if (response.status === 201) {
                alert("Submissão enviada com sucesso!");
            }
        } catch (e) {
            console.error("Erro na submissão:", e);
        }
    
        setShowCard(false);
        setSubmitScreen(false);
    };
    

    function formatDate(valid) {
        const dateFromMySQL = valid;


        const dateObject = new Date(dateFromMySQL);


        const formattedDate = format(dateObject, "dd/MM/yyyy", { locale: ptBR });
        return formattedDate
    }
    useEffect(() => {
        console.log(showCard)


        const fetchQuests = async () => {

            try {
                const response = await api.get(location.pathname.includes('admin') ? '/quests': '/user_quests');
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
            {console.log("showCard:", showCard, "submitScreen:", submitScreen)}

            {showCard && !submitScreen ? <QuestCardOverlay
                title={selectedCard.nome}
                description={selectedCard.descricao}
                reward={selectedCard.recompensa}
                score={selectedCard.pontuacao}
                valid={formatDate(selectedCard.validade)}
                status={selectedCard.estado}
                onClose={() => (setShowCard(false))}
                onClickDone={() => (setSubmitScreen(true))} /> : submitScreen && showCard &&
            <SubmitQuest
                id={selectedCard.id}
                onSubmit={handleSubmitQuest}
                onClose={() => (setSubmitScreen(false))} />}
            <div className="container">
                <div className="quests-box">
                    <h1>Suas Quests</h1>
                    {quests.map((quest, index) => (
                        <QuestBox
                            key={index}
                            title={quest.nome}
                            status={quest.estado}
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
