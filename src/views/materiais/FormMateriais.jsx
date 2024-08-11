import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, FormTextArea } from 'semantic-ui-react';
import {mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';
import { useNavigate } from 'react-router-dom';

export default function FormMateriais() {

  const navigate = useNavigate();
  const { state } = useLocation();
  const [idMaterial, setIdMaterial] = useState();
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [quantidade, setQuantidade] = useState();

  useEffect(() => {
      if (state != null && state.id != null) {
          axios.get("http://localhost:8080/api/material/" + state.id)
              .then((response) => {
                  setIdMaterial(response.data.id)
                  setNome(response.data.nome)
                  setDescricao(response.data.descricao)
                  setQuantidade(response.data.quantidade)
              })
      }
  }, [state])

  function salvar() {

      let materialRequest = {
          nome: nome,
          descricao: descricao,
          quantidade: quantidade
      }

      if (idMaterial != null) { //Alteração:

          axios.put("http://localhost:8080/api/material/" + idMaterial, materialRequest)
              .then((response) => { console.log('Material alterado com sucesso.') })
              .catch((error) => { console.log('Erro ao alter um material.') })

      } else { //Cadastro:

          axios.post("http://localhost:8080/api/material", materialRequest)
              .then((response) => { notifySuccess('Cliente cadastrado com sucesso.') 
                navigate('/list-materiais');

              }
                   
            )
              .catch((error) => { if (error.response) {
                  notifyError(error.response.data.message)
                  }
                   })
      }
  }

    return (
        <div className="corpinhodocadastro">
    
          <div className="containerbranco">
    
    
            <h2>  Novo Material </h2>
    
            <div className="inputcontainers">
              <div className="input-container">
                <p>Nome: </p>
                <Input
                  fluid
                  placeholder='Nome'
                  value = {nome}
                  onChange={e => setNome(e.target.value)}
                />
              </div>
    
              <div className="Form-container">
                <p>Descrição:</p>
                <Input
                  fluid
                  placeholder='Descrição'
                  value = {descricao}
                  onChange={e => setDescricao(e.target.value)}
                />
              </div>
    
              <div className="input-containerquantidade">
                <p className="quant">Quantidade:</p>
                <Input className="inputquant"
                  fluid
                  placeholder='Metros'
                  value = {quantidade}
                  onChange={e => setQuantidade(e.target.value)}
                />
              </div>
    
            </div>
    
    
            <div className="botoesdenaveg">
              <Button className="botaoentrar"    
              onClick={() => salvar()}  
              >
                Salvar
    
              </Button>
              <Link to={'/List-Materiais'}>
                <Button className="botaovoltar">
                  Voltar
                </Button>
              </Link>
    
            </div>
    
          </div>
    
        </div>
      );
    }