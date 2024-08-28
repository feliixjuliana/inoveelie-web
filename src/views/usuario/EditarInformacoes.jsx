import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InputMask from 'react-input-mask';
import {
  Grid,
  Button,
  Container,
  Divider,
  Form,
  FormGroup,
  FormRadio,
  FormSelect,
  Icon,
  Input,
  FormTextArea,
} from 'semantic-ui-react';
import { notifyError, notifySuccess } from '../util/Util';
import { getUsername } from '../util/AuthenticationService';

export default function CadastroUsuario() {
  const { state } = useLocation();
  const [idUsuario, setIdUsuario] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmaPassword, setConfirmaPassword] = useState();
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();

  useEffect(() => {
    let username = getUsername();
    console.log('username é = ' + username);
    axios
      .get('http://localhost:8080/api/usuario/getUsuario/' + username)
      .then((response) => {

        console.log('teste');
        console.log('usuario é = ' + response.data);

        setIdUsuario(response.data.id);
        setEmail(response.data.email);
        setPassword(response.data.password);
        setConfirmaPassword(response.data.confirmaPassword);
        setNome(response.data.nome);
        setSobrenome(response.data.sobrenome);
      });
  }, [state]);

  function salvar() {

    let formData = new FormData();

    if (nome !== undefined) {
        formData.append('nome', nome);
    }
    if (sobrenome !== undefined) {
        formData.append('sobrenome', sobrenome);
    }

    console.log('Id Usuario = ' + idUsuario);
    if (idUsuario != null) {
      //Alteração:

      axios
        .post('http://localhost:8080/api/usuario/update/' + idUsuario, formData)
        .then((response) => {
          console.log('Cliente alterado com sucesso.');
          notifySuccess('Suas informações foram adicionadas com sucesso!');
        })
        .catch((error) => {
          console.log('Erro ao alterar suas informações!.');
          notifyError(
            'Uhmmm! Ocorreu um erro ao salvar suas alterações, tente novamente e se atente aos campos.',
          );
        });
    }
  }
  return (
    <div className="corpinhodocadastro">
      <div className="containerbranco">
        <h2> Editar Informações </h2>

        <div className="inputcontainers">
          <div className="input-container">
            <p>Nome: </p>
            <Input
              fluid
              placeholder
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="input-container">
            <p>Sobrenome:</p>
            <Input
              fluid
              placeholder
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </div>
        </div>

        <div className="botoesdenaveg">
          <Button className="" onClick={() => salvar()}>
            Salvar
          </Button>
          <Link to={'/home-usuario'}>
            <Button className="botaovoltar">Voltar</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
