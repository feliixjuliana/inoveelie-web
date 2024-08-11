import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './views/home/Home';
import CadastroUsuario from './views/usuario/cadastroUsuario';
import HomeInicial from './views/funcionalidades/HomeInicial';
import FormMateriais from './views/materiais/FormMateriais';
import ListMateriais from './views/materiais/ListMateriais';
import AtivacaoConta from './views/usuario/AtivacaodeConta';
import EsqueceuSenha from './views/usuario/EsqueceuSenhaEmail';
import SenhaRecuperar from './views/usuario/CodigoRecuperar';
import SenhaNova from './views/usuario/SenhaNova';
import EditarInfor from './views/usuario/EditarInformacoes';
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormPedidos from './views/pedidos/tela1';
import FormPedidoMateriais from './views/pedidos/tela2';



function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path='/cadastro-usuario' element={ <CadastroUsuario/> } />
                <Route path='/home-usuario' element={ <HomeInicial/> } />
                <Route path='/Codigo-conta' element={ <AtivacaoConta/> } />
                <Route path='/Esqueceu-Email' element={ <EsqueceuSenha/> } />
                <Route path='/Codigo-Recup' element={ <SenhaRecuperar/> } />
                <Route path='/Senha-Nova' element={ <SenhaNova/> } />
                <Route path='/Edit-Infor' element={ <EditarInfor/> } />
                <Route path='/Form-Cliente' element={ <FormCliente/> } />
                <Route path='/List-Cliente' element={ <ListCliente/> } />
                <Route path='/Form-Materiais' element={ <FormMateriais/> } />
                <Route path='/List-Materiais' element={ <ListMateriais/> } />
                <Route path='/Form-Pedidos' element={ <FormPedidos/> } />
                <Route path='/Form-P-Materiais' element={ <FormPedidoMateriais/> } />




            </Routes>
        </>
    )
}

export default Rotas
