import React from "react";
import { Container, Grid, Image } from 'semantic-ui-react';

export default function Home () {

   return(
       <div style='background-color #'>

           <div style={{marginTop: '5%'}}>

              <container className="menuopcoes">
              <lu>
                <form method="get" action="#ini"
               ><button type="submit" id="inicio" class="inicio">Bangtan Sonyeondan</button></form>

               <form method="get" action="#geral"
               ><button type="submit" id="informa" class="informa">Informações</button></form>

               <form method="get" action="#int"
               ><button type="submit" id="interg" class="interg">Integrantes</button></form>
            </lu>
              </container>
               <Container>
                   <Grid columns={2} divided>
                       <Grid.Row>
                           <Grid.Column>
                               <Image src='..\..\..\public\Logofigmasemfundo.jpg' size='large' />
                           </Grid.Column>
                           <Grid.Column>
                            
                              
                               <strong>Inove Elie</strong> <br/>
                               Sistema para ateliês de costura se organizarem, tela home  <br/> <br/>

                           </Grid.Column>
                       </Grid.Row>
                   </Grid>
               </Container>
           </div>
       </div>
   )
}
