import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import SubmissionCard from "../components/SubmissionCard";
import SubmissionModal from "../components/SubmissionModal";
import "../style/SubmissionsPage.css";

const SubmissionsPage = () => {
    const history = useNavigate();
    const [selectedSubmission, setSelectedSubmission] = useState(null);
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const token = Cookies.get("token");
        if (!token) {
            history("/");
        } else {
            fetchSubmissions(token);
        }
    }, []);

    const fetchSubmissions = async (token) => {
        try {
            const response = await fetch("http://localhost:5000/submissions/pending", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setSubmissions(data.submissions);
            } else {
                console.error("Erro ao buscar submissões:", await response.json());
            }
        } catch (error) {
            console.error("Erro ao conectar com API:", error);
        }
    };

    return (
        <div className="SubmissionsPage">
            <h1>Submissões</h1>
            <div className="submissions-grid">
                {submissions.map((submission) => (
                    <SubmissionCard
                        key={submission.id}
                        submission={{
                            id: submission.id,
                            title: submission.quest_nome,
                            description: submission.descricao_conclusao,
                            user: submission.usuario_nome,
                            provaUrl: submission.prova_url,
                            recompensa: submission.recompensa,
                            data: submission.data_submissao
                        }}
                        onView={() => setSelectedSubmission(submission)}
                    />
                ))}
            </div>

            {selectedSubmission && (
                <SubmissionModal
                    submission={selectedSubmission}
                    onClose={() => setSelectedSubmission(null)}
                />
            )}
        </div>
    );
};

export default SubmissionsPage;
