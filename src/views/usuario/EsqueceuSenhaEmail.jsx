import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, FormTextArea } from 'semantic-ui-react';
import { notifyError, notifySuccess } from "../util/Util";
import { useNavigate } from 'react-router-dom';

export default function EsqueceuSenhaEmail() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');


  function conferindo() {

    if (email !== '') {

      let authenticationRequest = {
        email: email
      }

      axios.post("http://localhost:8080/api/usuario", authenticationRequest)

        .then((response) => {
          // Se o username for válido, envia a requisição para recuperar a senha
          return axios.post("http://localhost:8080/recuperar-senha", null, {
            params: { email: email }
          });
        })
        .then((response) => {
          navigate("/Senha-Nova");
        })
        .catch((error) => {

          notifyError('Usuário não encontrado com esse e-mail')
        })
    }
  }

  return (
    <div className="corpinhodocadastro">

      <div className="containerbranco">


        <h2> E-mail Cadastrado </h2>

        <div className="inputcontainers">
          <div className="input-container">
            <p> </p>
            <Input
              fluid
              placeholder='Digite Aqui'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

        </div>


        <div className="botoesdenaveg">
          
            <Button className="botaoentrar"
            onClick={() => conferindo()}
            >
              Confirmar

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