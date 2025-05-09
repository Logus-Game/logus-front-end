import React, { useEffect, useState } from "react";
import '../style/Quests.css'
import { useNavigate } from "react-router-dom";
import api from "../scripts/api";
import QuestBox from "../components/QuestBox";
import { format, formatDate } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import SubmitQuest from "../components/SubmitQuest";
import QuestCardOverlay from "../components/QuestCardOverlay";
import ExploreQuestBox from "../components/ExploreQuestBox";
import AddQuestForm from "../components/AddQuestForm";


const AdminQuests = () => {
    const history = useNavigate();
    const [quests, setQuests] = useState([]);
    const [showCard, setShowCard] = useState(false);
    const [submitScreen, setSubmitScreen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [date, setDate] = useState('');
    const [showForm, setShowForm] = useState(false);
    

    const handleShowCard = (id) => {
        for (let i = 0; i < quests.length; i++) {
            if (quests[i].id == id) {
                setSelectedCard(quests[i])
                setShowCard(true)
            }

        }
    }

    const handleAddQuest = async (questData) => {
        try {
            const response = await api.post('/quests', questData);
            if (response.status === 201) {
                alert('Quest adicionada com sucesso!');
                setShowForm(false);
                const newQuest = response.data;
                setQuests(prev => [...prev, newQuest]);
            }
        } catch (e) {
            console.error('Erro ao adicionar quest:', e);
            alert('Erro ao adicionar quest');
        }
    };
    

    const handleSubmitQuest = async (id_quest, id_user, recompensa, event) => {
        event.preventDefault();

        try {
            const response = await api.patch(`/subscribe`, {
                quest_id: id_quest,
                id_user: id_user,
                recompensa: recompensa
            });
            console.log(response)
            if (response.status == 401) {
                history('/')
            } else if (response.status == 200) {

            }
        } catch (e) {
            if (e.response.status == 401) {
                history('/')
            } else {
                console.log(e)
            }
        }
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
        <div className="AdminQuests">

             <button onClick={() => setShowForm(true)}>Inserir Quest</button>
            
            {showForm && <AddQuestForm onSubmit={handleAddQuest} setShowForm={setShowForm} />}

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
                    <h1>Quests</h1>
                    {quests.map((quest, index) => (
                        <ExploreQuestBox
                        key={index}
                        title={quest.nome}
                        cost={quest.custo}
                        id_quest={quest.id_quest}
                        />
                    ))}

                </div>
            </div>

        </div>
    )
}

export default AdminQuests;
