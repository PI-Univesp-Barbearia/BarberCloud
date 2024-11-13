import React from 'react';

function Precos(){
    return <section id="precos">
        <div className="container">

            <div className="row text-center">
                <div className="titulo">
                    <h2>Preços e Planos</h2>
                    <p>Escolha o serviço que melhor atende às suas necessidades</p>
                </div>
            </div>

            <div className='row text-center'>

            <div className='col-lg-4'>
                <div className="card">
                    <div className='card-header'>
                        <h3>Basico</h3>
                    </div>
                    <div className='card-body d-flex flex-column justify-content-between '>
                        <h2>R$ 89,90<small className='text-muted'> /mês</small></h2>
                            <ul>
                                <li>Corte quantas vezes quiser no mês</li>
                                <li>Corte de cabelo simples</li>
                                <li>Agendamento online</li>
                                <li>Produtos de finalização essenciais</li>
                            </ul>
                        <button type='button' className='btn btn-lg btn-outline-primary'>Entre em contato</button>
                    </div>
                </div>
            </div>

            <div className='col-lg-4'>
                <div className="card">
                    <div className='card-header'>
                        <h3>Padrão</h3>
                    </div>
                    <div className='card-body d-flex flex-column justify-content-between'>
                        <h2>R$ 129,90<small className='text-muted'> /mês</small></h2>
                            <ul>
                                <li>Corte quantas vezes quiser no mês</li>
                                <li>Corte de cabelo e barba</li>
                                <li>Lavagem completa com massagem capilar</li>
                                <li>Produtos premium</li>
                                <li>Agendamento online</li>
                            </ul>
                        <button type='button' className='btn btn-lg btn-outline-primary'>Entre em contato</button>
                    </div>
                </div>
            </div>

            <div className='col-lg-4'>
                <div className="card">
                    <div className='card-header'>
                        <h3>Premium</h3>
                    </div>
                    <div className='card-body d-flex flex-column justify-content-between'>
                        <h2>R$ 189,90<small className='text-muted'> /mês</small></h2>
                            <ul>
                                <li>Corte quantas vezes quiser no mês</li>
                                <li>Corte personalizado e barba completa</li>
                                <li>Lavagem profunda com hidratação</li>
                                <li>Produtos de alta performance</li>
                                <li>Agendamento online</li>
                                <li>Drink ou café especial incluído</li>
                            </ul>
                        <button type='button' className='btn btn-lg btn-outline-primary'>Entre em contato</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>;
  }

export default Precos;