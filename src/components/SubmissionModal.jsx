import React from "react";
import "../style/SubmissionModal.css";
import Cookies from 'js-cookie';

const SubmissionModal = ({ submission, onClose, onApprove, onReject }) => {

    const handleApprove = async () => {
        const token = Cookies.get('token');
        try {
            const res = await fetch(`http://localhost:5000/submissions/${submission.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ status: "Aprovado" }),
            });

            if (res.ok) {
                alert("Submissão aprovada!");
                onClose(); 
            } else {
                const data = await res.json();
                alert("Erro ao aprovar: " + data.error);
            }
        } catch (e) {
            console.error("Erro na aprovação", e);
        }
    };

    return (
        <div className="SubmissionModal-overlay">
            <div className="SubmissionModal">
                <h2>{submission.quest}</h2>
                <div className="SubmissionModal-prop">
                    <span>Usuário: {submission.usuario}</span>
                    <span>Recompensa: {submission.recompensa || 'X moedas'}</span>
                    <span>Data de conclusão: {submission.data_conclusao || 'dd/mm/aaaa'}</span>
                    <span>Descrição: {submission.descricao_conclusao}</span>
                    <span>Provas:</span>
                </div>
                {submission.prova_url && <img src={submission.prova_url} alt="Prova" />}
                <div className="modal-actions">
                    <button className="approve" onClick={handleApprove}>Aprovar</button>
                    <button className="reject" onClick={onReject}>Recusar</button>
                    <button onClick={onClose}>Fechar</button>
                </div>
            </div>
        </div>
    );
};

export default SubmissionModal;
