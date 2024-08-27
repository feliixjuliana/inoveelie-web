import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input } from 'semantic-ui-react';
import { notifyError, notifySuccess } from "../util/Util";
import { useNavigate } from 'react-router-dom';


export default function CadastroUsuario() {

  const { state } = useLocation();
  const navigate = useNavigate();
  const [idUsuario, setIdUsuario] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmaPassword, setConfirmaPassword] = useState();

  useEffect(() => {
    if (state != null && state.id != null) {
      axios.get("http://localhost:8080/api/usuario/" + state.id)
        .then((response) => {
          setIdUsuario(response.data.id);
          setEmail(response.data.email);
          setPassword(response.data.password);
          setConfirmaPassword(response.data.confirmaPassword);
        })
    }

  }, [state])

  function salvar() {

    

    let usuarioRequest = {
      email: email,
      password: password,
      confirmaPassword: confirmaPassword


    }

    if (idUsuario != null) { //Alteração:
      axios.put("http://localhost:8080/api/usuario/" + idUsuario, usuarioRequest)
        .then((response) => { console.log('Usuário alterado com sucesso.') })
        .catch((error) => { console.log('Erro ao alter um usuário.') })

    } else { //Cadastro:
      axios.post("http://localhost:8080/api/usuario", usuarioRequest)
        .then((response) => {
          
          console.log('Usuário cadastrado com sucesso.') 
          notifySuccess('Para nossa alegria, suas informações foram aceitas, aguarde nosso código de ativação em seu e-mail!')
          navigate('/Codigo-conta');
         

        })
        .catch((error) => {  
          notifyError(error.response.data.message);
          
        });

    }

  }

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
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="input-container">
            <p>Digite sua Senha:</p>
            <Input
              fluid
              type="password"
              placeholder='Senha'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="input-container">
            <p>Repita a Senha:</p>
            <Input
              fluid
              type="password"
              placeholder='Senha'
              value={confirmaPassword}
              onChange={e => setConfirmaPassword(e.target.value)}
            />
          </div>

        </div>


        <div className="botoesdenaveg">
          <Button className="botaoentrar"
            onClick={() => salvar()}
          >
            Entrar

          </Button>
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