import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './login.css';


import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import '../Config/firebase.js';


function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sucesso, setSucesso] = useState('');
    const navigate = useNavigate(); // Hook para redirecionamento de página

    function LoginUsuario(){
        const auth = getAuth();
        signInWithEmailAndPassword (auth, email, senha)
            .then(function(firebaseUser){
                setSucesso('S');
                navigate('/app/agenda');
            })
            .catch(function(error){
                setSucesso('N');
            });
    }

    function alterarEmail(evento){
        setEmail(evento.target.value);
    }

    function alterarSenha(evento){
        setSenha(evento.target.value);
    }

    return <div className='d-flex align-items-center text-center form-container'>
        <form className='form-signin'>
            <img className="mb-4" src="./images/logo-barber-cloud.png" alt="" height="90"/>
            <h1 className="h3 mb-3 fw-normal">Login</h1>

            <div className="form-floating">
                <input onChange={alterarEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">E-mail</label>
            </div>

            <div className="form-floating">
                <input onChange={alterarSenha} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Senha</label>
            </div>

            <button onClick={LoginUsuario} className="btn btn-primary w-100 py-2" type="button">Acessar</button>

            {sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">Email ou senha inválidos</div> :null}

            <div className="login-links mt-5">
                <Link to='/app/resetsenha' className='mx-3'>Esqueci minha senha</Link> 
                <Link to='/app/novaconta' className='mx-3'>Criar uma conta</Link>
            </div>

            <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Alunos da Univesp</p>

        </form>
    </div>
}

export default Login;