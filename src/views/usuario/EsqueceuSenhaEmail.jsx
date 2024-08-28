import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, FormTextArea } from 'semantic-ui-react';
import { notifyError, notifySuccess } from "../util/Util";
import { useNavigate } from 'react-router-dom';
import Loader from '../../Loader'; 



export default function EsqueceuSenhaEmail() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);


  function conferindo() {
    setLoading(true); 

    axios.post("http://localhost:8080/api/usuario/recuperar-senha", null, {
      params: {
        email: email
      }
    })
    .then((response) => {
      notifySuccess('Aguarde nosso E-mail para a mudança de senha.');
      navigate('/')
      setLoading(false);
      // Notificação de sucesso
    })
    .catch((error) => {
      notifyError("Uhmm... Não encontramos esse Email aqui!");
      console.error(error);
      setLoading(false);
      
      // Notificação de erro
    });
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
      {loading && <Loader />} 
    </div>
  );
}