import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { Button, Input, Container, Divider, Icon, Table, Modal, Header  } from 'semantic-ui-react';
import { notifyError, notifySuccess } from '../util/Util';
import { getUsername } from '../util/AuthenticationService';
import Loader from '../../Loader'; 

export default function CadastroUsuario() {
  const { state } = useLocation();
  const [idUsuario, setIdUsuario] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmaPassword, setConfirmaPassword] = useState();
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);



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
    setLoading(true);

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
          setLoading(false);
        })
        .catch((error) => {
          console.log('Erro ao alterar suas informações!.');
          notifyError(
            'Uhmmm! Ocorreu um erro ao salvar suas alterações, tente novamente e se atente aos campos.',
          );
          setLoading(false);
        });
    }
  }

  function confirmaRemover() {
    setOpenModal(true)

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
          {loading && <Loader />} 
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

      
      <div className="excluir"
      onClick={() => confirmaRemover()}>
        
      </div>
      

      <Modal
                basic
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
            >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover sua conta? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='remove' /> Não
                    </Button>

                    <a href="/DeletarEmail">
                    <Button color='pink'>
                        <Icon name='checkmark' /> Sim
                    </Button>
                    </a>
                </Modal.Actions>
            </Modal>
    </div>
  );
}
