import React from 'react';
import { useNavigate } from 'react-router-dom';
import './boasvindas.css';

function BoasVindas() {
    const navigate = useNavigate(); // Hook de navegação

    // Função para redirecionar o usuário para a agenda
    function entrar() {
        navigate('/app/agenda2'); // Redireciona para a página de agenda2
    }

    return (
        <div className='boasvindas-container'>
            <div className='boasvindas-content'>
                <h1 className='welcome-message'>Bem-vindo ao sistema de agendamento!</h1>
                <button onClick={entrar} className='btn-entrar'>
                    Entrar
                </button>
            </div>
        </div>
    );
}

export default BoasVindas;
