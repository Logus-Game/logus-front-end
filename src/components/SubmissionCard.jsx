import React from "react";
import "../style/SubmissionCard.css";

const SubmissionCard = ({ submission, onView }) => {
  return (
    <div className="SubmissionCard">
      <div className="SubmissionCard-text">
        <h3>{submission.title}</h3>
        <span className="SubmissionCard-text-description">{submission.descricao_conclusao}</span>
        <span className="SubmissionCard-text-user">Submetido por {submission.user}</span>
      </div>
      <div className="SubmissionCard-button">
        <button onClick={onView}>Ver</button>
      </div>
    </div>
  );
};

export default SubmissionCard;
