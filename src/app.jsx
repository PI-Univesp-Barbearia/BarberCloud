import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*Paginas */
import Site from './site/site.jsx';
import Login from './app/login/login.jsx';


function App(){
    return <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Site/>} />
    <Route exact path='/app' element={<Login/>} />
    </Routes>
    </BrowserRouter>
}

export default App;
