import React from 'react';
import Menu from './componentes/menu.jsx';
import Banner from './componentes/banner.jsx';
import Features from './componentes/features.jsx';
import Testemunho from './componentes/testemunho.jsx';
import Precos from './componentes/precos.jsx';
import Footer from './componentes/footer.jsx';

function Site(){
    return <div>
        <Menu/>
        <Banner/>
        <Features/>
        <Testemunho/>
        <Precos/>
        <Footer/>
    </div>
}

export default Site;