import React from 'react';

function Testemunho(){
    return <section id="testemunho">
        <div className="container">

        <div id="carouselExampleInterval" className="carousel carousel-dark  slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <h2>"A melhor experiência em barbearia que já tive! O ambiente é acolhedor, e os barbeiros realmente entendem o que estão fazendo. Saí completamente satisfeito com o meu corte!".</h2>
                        <em>Marcio Martins - São Paulo</em>  
                    </div>      

                    <div className="carousel-item" data-bs-interval="5000">
                        <h2>"Serviço impecável! Desde a recepção até o corte final, fui bem atendido. É muito fácil agendar pelo site, e os horários são sempre cumpridos. Recomendo para quem quer qualidade e pontualidade.".</h2> 
                        <em>João Silva - São Paulo</em>  
                    </div>      

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        
        </div>
    </section>;
  }

export default Testemunho;