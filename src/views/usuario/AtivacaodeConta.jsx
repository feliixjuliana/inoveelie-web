import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from 'semantic-ui-react';
import { notifyError, notifySuccess } from "../util/Util";
import { useNavigate } from 'react-router-dom';
import Loader from '../../Loader'; 

export default function AtivarUsuario() {

  const navigate = useNavigate();
  const [codigoAtivacao, setCodigoAtivacao] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  function confirmarAtivacao() {

    setLoading(true); 

    axios.post("http://localhost:8080/api/usuario/ativar", null, {
      params: {
        codigoAtivacao: codigoAtivacao,
        email: email
      }
    })
    .then((response) => {
      console.log('Usuário ativado com sucesso.');
      notifySuccess('Para nossa alegria, seu código foi confirmado! Aproveite sua conta.')
      navigate('/');
      setLoading(false);
      // Notificação de sucesso
    })
    .catch((error) => {
      console.log('Erro ao ativar o usuário.');
      setLoading(false);
      // Notificação de erro
    });
  }

  return (
    <div className="corpinhodocadastro">
      <div className="containerbranco">
        <h2>Confirme o Código</h2>

        <div className="inputcontainers">
          <div className="input-container">
            <Input
              fluid
              placeholder='Código'
              value={codigoAtivacao}
              onChange={(e) => setCodigoAtivacao(e.target.value)}
            />
          </div>
          <div className="input-container">
            <Input
              fluid
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="botoesdenaveg">
          <Button className="botaoentrar" onClick={confirmarAtivacao}>
            Confirmar
          </Button>
          <Link to={'/'}>
            <Button className="botaovoltar">
              Voltar
            </Button>
          </Link>
        </div>
        {loading && <Loader />} 
      </div>
    </div>
  );
}