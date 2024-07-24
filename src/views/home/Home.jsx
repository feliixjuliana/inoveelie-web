import React from "react";
import { Container, Grid, Image } from 'semantic-ui-react';

export default function Home () {

   return(
       <div>

           <div style={{marginTop: '5%'}}>
               <Container>
                   <Grid columns={2} divided>
                       <Grid.Row>
                           <Grid.Column>
                               <Image src='..\..\..\public\Logofigmasemfundo.jpg' size='large' />
                           </Grid.Column>
                           <Grid.Column>
                              
                               <strong>Inove Elie</strong> <br/>
                               Sistema para ateliês de costura se organizarem  <br/> <br/>

                           </Grid.Column>
                       </Grid.Row>
                   </Grid>
               </Container>
           </div>
       </div>
   )
}
