import React from 'react';

function Features(){
    return <section id="features">
        <div className='container'>
            <div className='row'>

                <div className='col-lg-4 col-md-6 feature-box'>
                    <i className="icon fa-solid fa-heart fa-3x"></i>
                    <h3>Facil de Usar</h3>
                    <p>O sistema possui uma interface muito simples e fácil de usar</p>
                </div>

                <div className='col-lg-4 col-md-6 feature-box'>
                    <i className="icon fa-solid fa-earth-americas fa-3x"></i>
                    <h3>Em qualquer lugar</h3>
                    <p>Faça o agendamento quando e de onde quiser</p>
                </div>

                <div className='col-lg-4 col-md-6 feature-box'>
                    <i className="icon fa-solid fa-table-columns fa-3x"></i>
                    <h3>Organização é tudo</h3>
                    <p>Tenha sua carteira de clientes sempre muito bem organizada</p>
                </div>
    

            </div>
        </div>
    </section>
}

export default Features;