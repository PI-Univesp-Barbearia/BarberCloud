import React from 'react';
import Menu from './componentes/menu.jsx';
import Banner from './componentes/banner.jsx';
import Features from './componentes/features.jsx';
import Testemunho from './componentes/testemunho.jsx';
import Precos from './componentes/precos.jsx';

function Site(){
    return <div>
        <Menu/>
        <Banner/>
        <Features/>
        <Testemunho/>
        <Precos/>
    </div>
}

export default Site;