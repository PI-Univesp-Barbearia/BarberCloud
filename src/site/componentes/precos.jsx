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

            <div className='row text-center'>

            <div className='col-lg-4'>
                <div className="card">
                    <div className='card-header'>
                        <h3>Corte infantil</h3>
                    </div>
                    <div className='card-body'>
                        <h2>R$ 30,00<small className='text-muted'> /Por corte</small></h2>
                        <p>Traga seu filho para se aventurar na beleza</p>
                        <button type='button' className='btn btn-lg btn-outline-primary'>Agendar</button>
                    </div>
                </div>
            </div>

            <div className='col-lg-4'>
                <div className="card">
                    <div className='card-header'>
                        <h3>Corte Básico</h3>
                    </div>
                    <div className='card-body'>
                        <h2>R$ 50,00<small className='text-muted'> /Por corte</small></h2>
                        <p>Por Corte</p>
                        <button type='button' className='btn btn-lg btn-outline-primary'>Agendar</button>
                    </div>
                </div>
            </div>

            <div className='col-lg-4'>
                <div className="card">
                    <div className='card-header'>
                        <h3>Corte com Tesoura</h3>
                    </div>
                    <div className='card-body'>
                        <h2>R$ 80,00<small className='text-muted'> /Por corte</small></h2>
                        <p>Por Corte</p>
                        <button type='button' className='btn btn-lg btn-outline-primary'>Agendar</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>;
  }

export default Precos;