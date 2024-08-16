import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from 'semantic-ui-react';

export default function AtivarUsuario() {
  const [codigoAtivacao, setCodigoAtivacao] = useState('');
  const [email, setEmail] = useState('');

  function confirmarAtivacao() {
    axios.post("http://localhost:8080/api/usuario/ativar", null, {
      params: {
        codigoAtivacao: codigoAtivacao,
        email: email
      }
    })
    .then((response) => {
      console.log('Usuário ativado com sucesso.');
      // Notificação de sucesso
    })
    .catch((error) => {
      console.log('Erro ao ativar o usuário.');
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
      </div>
    </div>
  );
}
