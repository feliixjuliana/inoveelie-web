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
import Deletando from './views/deletar/Deletando';
import DeletarEmail from './views/deletar/DeletarContaEmail';


import { ProtectedRoute } from './views/util/ProtectedRoute';

import cadastroSucesso from './views/usuario/Felicitacoes';



function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path='/cadastro-usuario' element={ <CadastroUsuario/> } />
                <Route path='/home-usuario' element={ <ProtectedRoute><HomeInicial/></ProtectedRoute> } />
                <Route path='/Codigo-conta' element={ <AtivacaoConta/> } />
                <Route path='/Esqueceu-Email' element={ <EsqueceuSenha/> } />
                <Route path='/Codigo-Recup' element={ <SenhaRecuperar/> } />
                <Route path='/Senha-Nova' element={ <SenhaNova/> } />
                <Route path='/Edit-Infor' element={ <ProtectedRoute><EditarInfor/></ProtectedRoute> } />
                <Route path='/Form-Cliente' element={ <ProtectedRoute><FormCliente/></ProtectedRoute> } />
                <Route path='/List-Cliente' element={ <ProtectedRoute><ListCliente/> </ProtectedRoute>} />
                <Route path='/Form-Materiais' element={ <ProtectedRoute><FormMateriais/></ProtectedRoute> } />
                <Route path='/List-Materiais' element={ <ProtectedRoute><ListMateriais/> </ProtectedRoute>} />
                <Route path='/Form-Pedidos' element={ <ProtectedRoute><FormPedidos/> </ProtectedRoute>} />
                <Route path='/Form-P-Materiais' element={ <ProtectedRoute><FormPedidoMateriais/> </ProtectedRoute>} />
                <Route path='/Deletando' element={ <ProtectedRoute><Deletando/> </ProtectedRoute>} />
                <Route path='/DeletarEmail' element={ <ProtectedRoute><DeletarEmail/> </ProtectedRoute>} />

                <Route path='/Sucesso' element={ <cadastroSucesso/>} />




            </Routes>
        </>
    )
}

export default Rotas
