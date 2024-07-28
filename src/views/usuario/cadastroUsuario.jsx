import React from "react";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default function CadastroUsuario() {
  return (
    <div className="corpinhodocadastro">

      <div className="containerbranco">
                        

                        <h2>Cadastre-se Aqui!!</h2>
                     
                        <div className="input-container">
                            <p>Digite seu E-mail</p>
                            <Input
                            fluid
                            placeholder='E-mail'
                            />
                        </div>

                        <div className="input-container">
                            <p>Digite sua Senha</p>
                            <Input
                            fluid
                            placeholder='Senha'
                            />
                        </div>

                        <div className="input-container">
                            <p>Repita a Senha:</p>
                            <Input
                            fluid
                            placeholder='Senha'
                            />
                        </div>


                        <div className="botoesdenaveg">
                        <Button >Entrar</Button>
                            <Button > 
                                <Link to={'/'}> Voltar
                                </Link>
                            </Button>

                        </div>
                     
      </div>
    
    </div>
  );
}