import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Input, Message, Segment } from 'semantic-ui-react';
import { notifyError } from '../../views/util/Util';
import { registerSuccessfulLoginForJwt } from '../util/AuthenticationService';
import Loader from '../../Loader';
import { GoogleLogin } from '@react-oauth/google';

export default function Home() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function entrar() {
        setLoading(true);

        if (username !== '' && password !== '') {

            let authenticationRequest = {
                username: username,
                password: password,
            }

            axios.post("http://localhost:8080/api/auth", authenticationRequest)
                .then((response) => {

                    registerSuccessfulLoginForJwt(response.data.token, response.data.expiration, response.data.username)
                    navigate("/home-usuario");
                    setLoading(false);

                })
                .catch((error) => {

                    notifyError('Usuário não encontrado');
                    setLoading(false);
                })
        }
    }

    return (

        <div className="corpinhodapagina">

            <header className="topo" id="topo">

                <div className="testandoalgo">

                    <div className="menuopcoes">
                        <nav className="navega"> <a href="#topo"><p className="textcadast">Login</p></a></nav>
                        <nav className="navega"> <a href="#produto"><p className="textcadast">Sobre Nós</p></a></nav>
                        <nav className="navega"> <a href="#assinatura"><p className="textcadast">Assinatura</p></a></nav>
                    </div>

                    <button className="direcaoteladecadastro">
                        <Link to={'/cadastro-usuario'}> <p className="textcadast">Cadastre-se Aqui</p></Link>
                    </button>

                </div>
            </header>

            <div className="logininicioelogo" id="inicioo">
                <Grid columns={2}>
                    <Grid.Row>
                        <div className="colunadalogo">
                            <div className="logo1" />
                            <h1>Inove Eliê</h1>
                            <p>Organize com facilidade seu ateliê.</p>
                        </div>


                        <div className="coluna">


                            <h2>Login</h2>

                            <div className="input-container">
                                <p>Digite seu:</p>
                                <Input
                                    fluid
                                    placeholder='E-mail'
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="input-container">
                                <p>Digite sua:</p>
                                <Input
                                    type="password"
                                    fluid
                                    placeholder='Senha'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>

                            <Link to={'/Esqueceu-Email'}>
                                <p className="Esqueceu">

                                    Esqueceu a Senha?</p></Link>

                            {loading && <Loader />}

                            <div className="areadosbotoeslogin">
                               
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        console.log(credentialResponse);
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                /> 
                                <Button
                                    onClick={() => entrar()}
                                > Entrar</Button>
                            </div>



                        </div>
                    </Grid.Row>
                </Grid>
            </div>

            <div className="desenhos">
                <div className="chamando" id="produto">

                </div>

                <div className="produto">

                    <p className="pi">
                        Inovando desde 2024, o projeto conhecido por Inove Eliê tem como objetivo facilitar a vida de ateliês. Com um controle de pedidos listado por ordem de data de entrega mais próxima, oferecemos não somente isso, como um controle de materiais e lista de contato de clientes.

                    </p>


                    <Grid className="cardsdeassinatura" columns={3}>
                        <Grid.Row>
                            <Grid.Column>
                                <div className="produtinhos">
                                    <h2>Pedidos</h2>
                                </div>
                            </Grid.Column>

                            <Grid.Column>
                                <div className="produtinhoss">
                                    <h2>Materiais</h2>
                                </div>
                            </Grid.Column>

                            <Grid.Column>
                                <div className="produtinhosss">
                                    <h2>Clientes</h2>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>


            <div className="chamando" id="assinatura">

            </div>


            <container className="assinatura">
                <h1 className="tituloassinaturas">
                    Benefícios Extras
                </h1>
                <p className="atexto">
                    Nosso serviço é 100% gratuito, contudo, caso queira que seus pedidos fiquem salvos após estarem concluídos, pois nosso sistema exclui ao enviar o comprovante para seu e-mail; recomendamos fazer a assinatura de memória em nuvem! Assim, poderás ter controle dos últimos pedidos feitos.
                </p>

                <Grid className="cardsdeassinatura" columns={2} >
                    <Grid.Row>
                        <Grid.Column>

                            <div className="planomensall">
                                <h1 className="assin">
                                    Plano Mensal
                                </h1>
                                <p className="planos">
                                    Acesso completo ao sistema por apenas R$ 8,90 por mês. Ideal para quem busca flexibilidade e funcionalidade sem compromissos de longo prazo.
                                </p>
                            </div>


                        </Grid.Column>
                        <Grid.Column>

                            <div className="planoanual">
                                <h1 className="assin">
                                    Plano Anual
                                </h1>
                                <p className="planos">
                                    Economize ainda mais com nosso plano anual, por apenas R$ 89,90. Garanta acesso contínuo e benefícios exclusivos ao longo de todo o ano.
                                </p>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </container>

        </div>
    )
}

