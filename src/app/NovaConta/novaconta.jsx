import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importando useNavigate
import './novaconta.css';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Adicionando funções do Firestore

function NovaConta() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');  // Novo campo para o nome
    const [telefone, setTelefone] = useState('');  // Novo campo para o telefone
    const [mensagem, setMensagem] = useState('');

    const navigate = useNavigate();  // Inicializando o useNavigate

    function cadastrarUsuario(e) {
        e.preventDefault();  // Impede o recarregamento da página
        setMensagem('');

        if (!email || !senha || !nome || !telefone) {  // Verificando se todos os campos foram preenchidos
            setMensagem('Informe todos os campos');
            return;
        }

        const auth = getAuth();
        const db = getFirestore();  // Inicializando Firestore

        // Criando o usuário no Firebase Authentication
        createUserWithEmailAndPassword(auth, email, senha)
            .then(async (resultado) => {
                // Após criar o usuário no Auth, salvar os dados no Firestore
                await addDoc(collection(db, 'clientes'), {
                    nome: nome,
                    email: email,
                    telefone: telefone,
                    uid: resultado.user.uid,  // Armazenando o ID do usuário no Firebase Auth
                });

                alert('Usuário cadastrado com sucesso');
                
                // Redireciona para a página de login após o sucesso no cadastro
                navigate('/app');  // Alterando para a rota do login (ajuste conforme necessário)

                // Limpa os campos após o cadastro
                setEmail('');
                setSenha('');
                setNome('');
                setTelefone('');
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
                    <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="floatingName" placeholder="Nome" value={nome} />
                    <label htmlFor="floatingName">Nome</label>
                </div>

                <div className="form-floating">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" value={email}/>
                    <label htmlFor="floatingEmail">E-mail</label>
                </div>

                <div className="form-floating">
                    <input onChange={(e) => setTelefone(e.target.value)} type="text" className="form-control" id="floatingPhone" placeholder="Telefone" value={telefone} />
                    <label htmlFor="floatingPhone">Telefone</label>
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
