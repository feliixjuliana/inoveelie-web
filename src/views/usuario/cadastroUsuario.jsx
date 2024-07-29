import React from "react";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default function CadastroUsuario() {
  return (
    <div className="corpinhodocadastro">

      <div className="containerbranco">


        <h2>  Cadastre-se  </h2>

        <div className="inputcontainers">
          <div className="input-container">
            <p>Digite seu E-mail:</p>
            <Input
              fluid
              placeholder='E-mail'
            />
          </div>

          <div className="input-container">
            <p>Digite sua Senha:</p>
            <Input
              fluid
              type="password"
              placeholder='Senha'
            />
          </div>

          <div className="input-container">
            <p>Repita a Senha:</p>
            <Input
              fluid
              type="password"
              placeholder='Senha'
            />
          </div>

        </div>


        <div className="botoesdenaveg">
          <Button className="botaoentrar">Entrar</Button>
          <Link to={'/'}>
            <Button className="botaovoltar">
              Voltar
            </Button>
          </Link>

        </div>

      </div>

    </div>
  );
}