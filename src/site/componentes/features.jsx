import React from 'react';

function Features(){
    return <section id="features">
        <div className='container'>
            <div className='row'>

                <div className='col-lg-4 col-md-6 feature-box'>
                    <i className="icon fa-solid fa-heart fa-3x"></i>
                    <h3>Facil de Usar</h3>
                    <p>"Nossa interface intuitiva garante que você consiga navegar e usar o sistema sem complicações, tornando o agendamento rápido e fácil."
                    </p>
                </div>

                <div className='col-lg-4 col-md-6 feature-box'>
                    <i className="icon fa-solid fa-earth-americas fa-3x"></i>
                    <h3>Em qualquer lugar</h3>
                    <p>"Agende seus horários de corte de cabelo a qualquer momento e de qualquer lugar, seja no trabalho, em casa ou até mesmo no transporte."</p>
                </div>

                <div className='col-lg-4 col-md-6 feature-box'>
                    <i className="icon fa-solid fa-table-columns fa-3x"></i>
                    <h3>Mobilidade</h3>
                    <p>"Com o nosso sistema, você tem o controle total dos agendamentos na palma da sua mão, proporcionando maior conveniência e praticidade no seu dia a dia."</p>
                </div>
    

            </div>
        </div>
    </section>
}

export default Features;