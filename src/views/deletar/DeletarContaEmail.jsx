import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from 'semantic-ui-react';
import { notifyError, notifySuccess } from '../util/Util';
import Loader from '../../Loader'; 

export default function DeletarContaEmail() {  // Nome do componente começando com letra maiúscula

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  function conferindo() {
    setLoading(true); 

    axios.post("http://localhost:8080/api/usuario/iniciar-exclusao-conta", null, {
      params: {
        email: email
      }
    })
    .then((response) => {
      notifySuccess('Aguarde nosso E-mail para a exclusão de conta.');
      navigate('/Deletando');
      setLoading(false);
    })
    .catch((error) => {
      notifyError("Uhmm... Não encontramos esse E-mail aqui!");
      console.error(error);
      setLoading(false);
    });
  }

  return (
    <div className="corpinhodocadastro">
      <div className="containerbranco">
        <h2> Informe seu E-mail </h2>
        <div className="inputcontainers">
          <div className="input-container">
            <p> </p>
            <Input
              fluid
              placeholder='Coloque-o aqui!'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          {loading && <Loader />} 
        </div>
        <div className="botoesdenaveg">
          <Button className="botaoentrar" onClick={conferindo}>
            Confirmar
          </Button>
          <Link to={'/home-usuario'}>
            <Button className="botaovoltar">
              Voltar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
