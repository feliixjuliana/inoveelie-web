import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './views/home/Home';
import CadastroUsuario from './views/usuario/CadastroUsuario';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path='/cadastro-usuario' element={ <CadastroUsuario/> } />
            </Routes>
        </>
    )
}

export default Rotas
