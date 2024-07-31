import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input } from 'semantic-ui-react';

export default function CadastroUsuario() {

  const { state } = useLocation();
  const [idUsuario, setIdUsuario] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmaSenha, setConfirmaSenha] = useState();

  useEffect(() => {
    if (state != null && state.id != null) {
      axios.get("http://localhost:8080/api/usuario/" + state.id)
        .then((response) => {
          setIdUsuario(response.data.id);
          setEmail(response.data.email);
          setSenha(response.data.senha);
          setConfirmaSenha(response.data.confirmaSenha);
        })
    }

  }, [state])

  function salvar() {

    let usuarioRequest = {
      email: email,
      senha: senha,
      confirmaSenha: confirmaSenha


    }

    if ( idUsuario != null) { //Alteração:
      axios.put("http://localhost:8080/api/usuario/" + idUsuario, usuarioRequest)
        .then((response) => { console.log('Usuário alterado com sucesso.') })
        .catch((error) => { console.log('Erro ao alter um produto.') })
    } else { //Cadastro:
      axios.post("http://localhost:8080/api/usuario", usuarioRequest)
        .then((response) => { console.log('Usuário cadastrado com sucesso.') })
        .catch((error) => { console.log('Erro ao incluir o Usuário') })
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
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
          </div>

          <div className="input-container">
            <p>Repita a Senha:</p>
            <Input
              fluid
              type="password"
              placeholder='Senha'
              value={confirmaSenha}
              onChange={e => setConfirmaSenha(e.target.value)}
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