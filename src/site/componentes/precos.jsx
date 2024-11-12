import React from 'react';

function Precos(){
    return <section id="precos">
        <div className="container">

            <div className="row text-center">
                <div className="titulo">
                    <h2>Preços</h2>
                    <p>Conheça nossos planos</p>
                </div>
            </div>

            <div className='col-lg-4'>
                <div className="card">
                    <div className='card-header'>
                        <h3>Plano Básico</h3>
                    </div>
                    <div className='card-body'>
                        <h2>R$ 50,00</h2>
                        <p>Por mês</p>
                        <button type='button' className='btn btn-dark btn-lg btn-preco'>Assinar</button>
                    </div>
                </div>
            </div>

        </div>
    </section>;
  }

export default Precos;