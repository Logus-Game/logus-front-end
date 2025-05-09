import React, { useState } from "react";
import "../style/AddQuestForm.css";

const AddQuestForm = ({ onSubmit, setShowForm }) => {
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    curso: "",
    nivel: "",
    custo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }
    if (!formData.descricao.trim()) {
      newErrors.descricao = "Descrição é obrigatória";
    }
    if (!formData.curso.trim()) {
      newErrors.curso = "Curso é obrigatório";
    }
    if (!formData.nivel.trim()) {
      newErrors.nivel = "Nível é obrigatório";
    }
    if (formData.custo === "" || isNaN(Number(formData.custo)) || Number(formData.custo) < 0) {
      newErrors.custo = "Custo deve ser um número maior ou igual a zero";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="add-player-overlay">
      <div className="add-player-container">
      <button onClick={() => setShowForm(false)}>X</button>
        <h2 className="add-player-title">Adicionar Quest</h2>
        <form onSubmit={handleSubmit} className="add-player-form">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            className={`add-player-input ${errors.nome ? "input-error" : ""}`}
          />
          {errors.nome && <span className="error-text">{errors.nome}</span>}

          <input
            type="text"
            name="descricao"
            placeholder="Descrição"
            value={formData.descricao}
            onChange={handleChange}
            className={`add-player-input ${errors.descricao ? "input-error" : ""}`}
          />
          {errors.descricao && <span className="error-text">{errors.descricao}</span>}

          <input
            type="text"
            name="curso"
            placeholder="Curso"
            value={formData.curso}
            onChange={handleChange}
            className={`add-player-input ${errors.curso ? "input-error" : ""}`}
          />
          {errors.curso && <span className="error-text">{errors.curso}</span>}

          <input
            type="text"
            name="nivel"
            placeholder="Nível"
            value={formData.nivel}
            onChange={handleChange}
            className={`add-player-input ${errors.nivel ? "input-error" : ""}`}
          />
          {errors.nivel && <span className="error-text">{errors.nivel}</span>}

          <input
            type="number"
            name="custo"
            placeholder="Custo"
            value={formData.custo}
            onChange={handleChange}
            className={`add-player-input ${errors.custo ? "input-error" : ""}`}
          />
          {errors.custo && <span className="error-text">{errors.custo}</span>}

          <button type="submit" className="add-player-button">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuestForm;
