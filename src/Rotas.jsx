import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './views/home/Home';
import CadastroUsuario from './views/usuario/CadastroUsuario';
import HomeInicial from './views/funcionalidades/HomeInicial';
import FormMateriais from './views/materiais/FormMateriais';
import ListMateriais from './views/materiais/ListMateriais';
import AtivacaoConta from './views/usuario/AtivacaodeConta';
import EsqueceuSenha from './views/usuario/EsqueceuSenhaEmail';
import SenhaRecuperar from './views/usuario/CodigoRecuperar';
import SenhaNova from './views/usuario/SenhaNova';



function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path='/cadastro-usuario' element={ <CadastroUsuario/> } />
                <Route path='/tela-home-usuario' element={ <HomeInicial/> } />
                <Route path='/Form-Materiais' element={ <FormMateriais/> } />
                <Route path='/List-Materiais' element={ <ListMateriais/> } />
                <Route path='/Codigo-conta' element={ <AtivacaoConta/> } />
                <Route path='/Esqueceu-Email' element={ <EsqueceuSenha/> } />
                <Route path='/Codigo-Recup' element={ <SenhaRecuperar/> } />
                <Route path='/Senha-Nova' element={ <SenhaNova/> } />

            </Routes>
        </>
    )
}

export default Rotas
