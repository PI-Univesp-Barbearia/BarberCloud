import React from 'react';

function Banner(){
    return <section id="banner">
        <div className='container'>
            <div className='row'>

                <div className='col-lg-6 col-md-6'>
                    <h1>Bem-vindo ao BarberCloud: Agende seu corte de cabelo de forma inteligente</h1>
                    <h4>Faça seu agendamento agora</h4>
                    <a href='/' className='btn btn-dark btn-lg btn-banner'>Criar conta</a>
                    <a href='/app' className='btn btn-outline-light btn-lg btn-banner'>Fazer login</a>
                </div>

                <div className='col-lg-6 col-md-6'>
                    <img src="./images/corte-background.png" alt="corte de cabelo" />
                </div>

            </div>
        </div>
    </section>
}

export default Banner;