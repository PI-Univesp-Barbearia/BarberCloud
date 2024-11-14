import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './novaconta.css';

import '../Config/firebase.js';
import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function NovaConta() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    function cadastrarUsuario(e) {
        e.preventDefault();  // Impede o recarregamento da página
        setMensagem('');

        if (!email || !senha) {
            setMensagem('Informe todos os campos');
            return;
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
            .then(resultado => {
                alert('Usuário cadastrado com sucesso');
                setEmail('');
                setSenha('');
            })
            .catch(erro => {
                if (erro.code === 'auth/email-already-in-use') {
                    setMensagem('O e-mail informado já está em uso');
                } else if (erro.code === 'auth/invalid-email') {
                    setMensagem('O e-mail informado é inválido');
                } else if (erro.code === 'auth/weak-password') {
                    setMensagem('A senha deve ter no mínimo 6 caracteres');
                } else {
                    setMensagem('Erro ao criar conta: ' + erro.message);
                }
            });
    }

    return (
        <div className='d-flex align-items-center text-center form-container'>
            <form className='form-signin'>
                <img className="mb-4" src="/images/logo-barber-cloud.png" alt="" height="90" />
                <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

                <div className="form-floating">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email}/>
                    <label htmlFor="floatingInput">E-mail</label>
                </div>

                <div className="form-floating">
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" value={senha} />
                    <label htmlFor="floatingPassword">Senha</label>
                </div>

                <button onClick={cadastrarUsuario} className="btn btn-primary w-100 py-2" type="button">Criar Conta</button>

                {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}

                <div className="login-links mt-5">
                    <Link to='/app' className='mx-3'>Já tenho uma conta</Link>
                </div>

                <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Alunos da Univesp</p>
            </form>
        </div>
    );
}

export default NovaConta;
