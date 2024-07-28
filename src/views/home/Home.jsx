import React from "react";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input } from 'semantic-ui-react';

export default function Home () {

   return(
    <body className="corpinhodahome">
        

       <div className="corpomenor">

              <container className="menuopcoes">
                <form method="get" action=".produto"
               ><button type="submit" class="produ">Produto</button></form>

                <form method="get" action=".a">
                <button type="submit" className="assin">Assinatura</button>
                </form>
              </container>


               <Container className="logininicíoelogo">
                   <Grid columns={2}>
                       <Grid.Row>
                           <div className="colunadalogo">
                               <div className="logo1"/>
                               <h1 >Inove Elie</h1>
                                 <p>INOVE ELIÊ, ORGANIZE COM FACILIDADE O SEU ATELIÊ.</p>
                           </div>


                           <div className="coluna">
                        

                                <h2>Login</h2>
                             
                                <p>Digite seu E-mail</p>
                                <Input
                                    fluid
                                    placeholder='Digite seu E-mail'
                                    
                                />


                                <p>Digite sua senha</p>
                                <Input
                                    fluid

                                    placeholder='Digite sua senha'
                                    
                                />

                              <p className="Esqueceu"> Esqueceu a Senha?</p>


                              <Button >Entrar</Button>
                              <Button >Entrar Com o Google</Button>
                              <Button >Criar Conta</Button>
                               

                           </div>
                       </Grid.Row>
                   </Grid>
               </Container>

               <div className="produto">

                
                <h1 className="ph">
                    Saiba Mais Sobre Nós
                </h1>

                <p className="pi">
                    Nós sabemos que está complicado organizar a agenda do ateliê, assim como saber quais pedidos estão próximos ou não. Pior ainda!! Será que você ainda tem aquele material?? Complicado, certo? Porém, com a Inove Eliê você tem a solução disso tudo com apenas alguns clicks. Trazendo tecnologia para seu ateliê, além de facilitar seu trabalho e organização.Somos uma empresa especializada em inovação, por isso trouxemos alguns recursos gratuitos para você!
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




            <container className="assinatura">
                <h1 className="tituloassinaturas">
                    Assinaturas
                </h1>
                <p className="atexto">
                Descubra os planos flexíveis de assinatura para acessar nosso Sistema completo de Gerenciamento de Ateliê de Costura e eleve sua produtividade a novos patamares. Oferecemos duas opções de assinatura para atender às suas necessidades:
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
    </body>
   )
}
