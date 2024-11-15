import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


function Navbar(){
    return <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
    
    <div className="container fluid">

        <a className="navbar-brand" href="/">
            <img src="/images/logo-barber-cloud.png" alt="" className="logo-navbar" height="50"/>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">      
            <li className="nav-item">
                <Link to='/app/agenda2'className="nav-link" aria-current="page">Clientes</Link> 
            </li>    
            <li className="nav-item">
                <Link to='/app/agendabarbeiro'className="nav-link" aria-current="page">Agenda</Link> 
            </li>
            </ul>
        </div>  
      </div>
    </nav>
}

export default Navbar;