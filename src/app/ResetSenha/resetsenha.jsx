import React from 'react';
import {Link} from 'react-router-dom';
import './resetsenha.css'


function ResetSenha(){
    return <div className='d-flex align-items-center text-center form-container'>
        <form className='form-signin'>
            <img className="mb-4" src="/images/logo-barber-cloud.png" alt="" height="90"/>
            <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">E-mail</label>
            </div>


            <button className="btn btn-primary w-100 py-2" type="submit">Enviar</button>

            <div className="login-links mt-5">
                <Link to='/app/novaconta' className='mx-3'>Criar uma conta</Link>
            </div>

            <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Alunos da Univesp</p>
            
        </form>
    </div>
}

export default ResetSenha;