import React from 'react';
import Navbar from '../componentes/navbar/navbar.jsx';
import ListaClientes from '../componentes/ListaCliente/listacliente.jsx';



function Agenda2(props){
    return <div>
        <Navbar/>
        <div className='container-fluid titulo'>
            <h1>Cadastro de Clientes</h1>
        <ListaClientes/>
    </div>
    </div>
}


export default Agenda2;