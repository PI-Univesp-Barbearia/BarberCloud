import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './resetsenha.css';

import '../Config/firebase.js';
import "firebase/auth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ResetSenha() {
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [sucesso, setSucesso] = useState('');

    function recuperarSenha(e) {
        e.preventDefault();  // Impede o recarregamento da página
        setMensagem('');
        setSucesso('');

        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMensagem('');
                setSucesso('Email enviado com sucesso');
                setEmail('');

                setTimeout(() => {
                    setSucesso('');
                }, 2000);
            })
            .catch(erro => {
                if (erro.code === 'auth/user-not-found') {
                    setMensagem('E-mail não cadastrado');
                } else if (erro.code === 'auth/invalid-email') {
                    setMensagem('O e-mail informado é inválido');
                } else {
                    setMensagem('Erro ao enviar email: ' + erro.message);
                }
            });
    }

    return (
        <div className='d-flex align-items-center text-center form-container'>
            <form className='form-signin'>
                <img className="mb-4" src="/images/logo-barber-cloud.png" alt="" height="90" />
                <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

                <div className="form-floating">
                    <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com" 
                        value={email}
                    />
                    <label htmlFor="floatingInput">E-mail</label>
                </div>

                <button onClick={recuperarSenha} className="btn btn-primary w-100 py-2 mt-3" type="button">Enviar</button>

                {mensagem && <div className="alert alert-danger mt-2" role="alert">{mensagem}</div>}
                {sucesso && <div className="alert alert-success mt-2" role="alert">{sucesso}</div>}

                <div className="login-links mt-5">
                    <Link to='/app/novaconta' className='mx-3'>Criar uma conta</Link>
                </div>

                <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Alunos da Univesp</p>
            </form>
        </div>
    );
}

export default ResetSenha;
