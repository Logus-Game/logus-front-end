import React, { useState, useEffect, useRef } from "react";
import "../style/AddPlayerForm.css";

const AddPlayerForm = ({ onSubmit, setShowForm }) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    nivel: "",
    moedas: "",
    curso: "",
  });

  const [errors, setErrors] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [setShowForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Formato de e-mail inválido";
    }
    if (!formData.senha || formData.senha.length < 6)
      newErrors.senha = "Senha deve ter pelo menos 6 caracteres";
    if (!formData.nivel.trim()) newErrors.nivel = "Nível é obrigatório";
    if (formData.moedas === "" || Number(formData.moedas) < 0)
      newErrors.moedas = "Moedas deve ser um número maior ou igual a zero";
    if (!formData.curso) newErrors.curso = "Curso é obrigatório";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="add-player-overlay">
      <div className="add-player-container" ref={containerRef}>
        <button onClick={() => setShowForm(false)}>X</button>
        <h2 className="add-player-title">Adicionar Player</h2>
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
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className={`add-player-input ${errors.email ? "input-error" : ""}`}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            className={`add-player-input ${errors.senha ? "input-error" : ""}`}
          />
          {errors.senha && <span className="error-text">{errors.senha}</span>}

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
            name="moedas"
            placeholder="Número de Moedas"
            value={formData.moedas}
            onChange={handleChange}
            className={`add-player-input ${errors.moedas ? "input-error" : ""}`}
          />
          {errors.moedas && <span className="error-text">{errors.moedas}</span>}

          <select
            name="curso"
            value={formData.curso}
            onChange={handleChange}
            className={`add-player-input ${errors.curso ? "input-error" : ""}`}
          >
            <option value="">Selecione o curso</option>
            <option value="Inglês Básico">Inglês Básico</option>
            <option value="Inglês Intermediário">Inglês Intermediário</option>
            <option value="Inglês Avançado">Inglês Avançado</option>
          </select>
          {errors.curso && <span className="error-text">{errors.curso}</span>}

          <button type="submit" className="add-player-button">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlayerForm;