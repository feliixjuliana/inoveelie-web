import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './views/home/Home';
import CadastroUsuario from './views/usuario/CadastroUsuario';
import HomeInicial from './views/funcionalidades/HomeInicial';
import FormMateriais from './views/materiais/FormMateriais';
import ListMateriais from './views/materiais/ListMateriais';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path='/cadastro-usuario' element={ <CadastroUsuario/> } />
                <Route path='/tela-home-usuario' element={ <HomeInicial/> } />
                <Route path='/Form-Materiais' element={ <FormMateriais/> } />
                <Route path='/List-Materiais' element={ <ListMateriais/> } />
            </Routes>
        </>
    )
}

export default Rotas
