// src/pages/Home.jsx
import React from "react";
import "./style.css"
import imagem from "../../assets/imagens/Membro LUPP.png"

const Cadastro = () => {
  return (
    <div className="cadastro-page">
      <div className="cadastro-container">
        <div className="form-section">
          
          <form className="cadastro-form">
            <div className="form-group">
              <label htmlFor="nome">NOME</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                placeholder="Digite seu nome completo"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">E-MAIL</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Digite seu e-mail"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="telefone">TELEFONE</label>
              <input 
                type="tel" 
                id="telefone" 
                name="telefone" 
                placeholder="(00) 00000-0000"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input 
                type="text" 
                id="cpf" 
                name="cpf" 
                placeholder="000.000.000-00"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="senha">SENHA</label>
              <input 
                type="password" 
                id="senha" 
                name="senha" 
                placeholder="Crie uma senha segura"
              />
            </div>
            
            <button type="submit" className="cadastro-button">
              CADASTRAR
            </button>
          </form>
        </div>

        <div className="membro-lupp-section">
          <div className="coroa-container">
            {/* Substitua pelo seu ícone de coroa ou imagem */}
            <div className="coroa-icon"><img src={imagem} width="500px" alt="Logo dos membros" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;