// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// /*Paginas */
// import Site from './site/site.jsx';
// import Login from './app/login/login.jsx';
// import NovaConta from './app/NovaConta/novaconta.jsx';
// import ResetSenha from './app/ResetSenha/resetsenha.jsx';
// import Agenda from './app/Agenda/agenda.jsx';
// import Agenda2 from './app/Agenda/agenda2.jsx';
// import NovoCliente from './app/NovoCliente/novocliente.jsx';


// /*A Agenda2 comtempla o que foi feito no curso do 99 coders e na Agenda contempla o que foi feito sozinho contem o calendario */
// function App(){
//     return <BrowserRouter>
//     <Routes>
//     <Route exact path='/' element={<Site/>} />
//     <Route exact path='/app' element={<Login/>} />
//     <Route exact path='/app/novaconta' element={<NovaConta/>} />
//     <Route exact path='/app/resetsenha' element={<ResetSenha/>} />
//     <Route exact path='/app/agenda' element={<Agenda/>} />
//     <Route exact path='/app/agenda2' element={<Agenda2/>} />
//     <Route exact path='/app/novocliente' element={<NovoCliente/>} />
//     </Routes>
//     </BrowserRouter>
// }

// export default App;


import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

/* Páginas */
import Site from './site/site.jsx';
import Login from './app/login/login.jsx';
import NovaConta from './app/NovaConta/novaconta.jsx';
import ResetSenha from './app/ResetSenha/resetsenha.jsx';
import Agenda from './app/Agenda/agenda.jsx';        // Cliente
import Agenda2 from './app/Agenda/agenda2.jsx';      // Barbeiro
import ListaAgendamentos from './app/NovoCliente/novocliente.jsx';
import BoasVindas from './site/boasvindas.jsx';

/* Função Principal */
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota principal do site */}
                <Route exact path="/" element={<Site />} />

                {/* Rotas do Cliente */}
                <Route exact path="/app" element={<Login />} />
                <Route exact path="/app/novaconta" element={<NovaConta />} />
                <Route exact path="/app/resetsenha" element={<ResetSenha />} />
                <Route exact path="/app/agenda" element={<Agenda />} />      {/* Calendário para clientes */}

                {/* Rota de listagem de clientes e agenda - Acesso do Barbeiro */}
                <Route exact path="/app/agenda2" element={<Agenda2 />} />    {/* Lista de clientes e agendamentos */}
                
                {/* Rota de Novo Cliente (Cadastro ou visualização de agendamento para clientes) */}
                <Route exact path="/app/agendabarbeiro" element={<ListaAgendamentos />} />   {/* Aba para o barbeiro visualizar os agendamentos */}
                <Route path="/boasvindas" element={<BoasVindas />} />
                {/* Redireciona para a página inicial caso a rota não exista */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
