import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InputMask from "react-input-mask";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, FormTextArea } from 'semantic-ui-react';
import {mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Loader'; 

export default function FormCliente() {

  const navigate = useNavigate();
  const { state } = useLocation();
  const [idCliente, setIdCliente] = useState();
  const [nomeCliente, setNomeCliente] = useState();
  const [numeroCliente, setNumeroCliente] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      if (state != null && state.id != null) {
          axios.get("http://localhost:8080/api/cliente/" + state.id)
              .then((response) => {
                  setIdCliente(response.data.id)
                  setNomeCliente(response.data.nomeCliente)
                  setNumeroCliente(response.data.numeroCliente)
              })
      }
  }, [state])

  function salvar() {
    setLoading(true); 

      let clienteRequest = {
          nomeCliente: nomeCliente,
          numeroCliente: numeroCliente,
      }

      if (idCliente != null) { //Alteração:

          axios.put("http://localhost:8080/api/cliente/" + idCliente, clienteRequest)
              .then((response) => { console.log('Cliente alterado com sucesso.') 
                setLoading(false);
              })
              .catch((error) => { console.log('Erro ao alter um cliente.') 
                setLoading(false);
              })

      } else { //Cadastro:

          axios.post("http://localhost:8080/api/cliente", clienteRequest)
              .then((response) => { notifySuccess('Cliente cadastrado com sucesso.') 
                navigate('/List-Cliente');
                setLoading(false);

              }
                   
            )
              .catch((error) => { if (error.response) {
                  notifyError(error.response.data.message)
                  setLoading(false);
                  }
                   })
      }
  }

    return (
        <div className="corpinhodocadastro">
    
          <div className="containerbranco">
    
    
            <h2>  Adicione o Cliente </h2>
    
            <div className="inputcontainers">
              <div className="input-container">
                <p>Nome: </p>
                <Input
                  fluid
                  placeholder='Nome'
                  value = {nomeCliente}
                  onChange={e => setNomeCliente(e.target.value)}
                />
              </div>
    
              <div className="Form-container">
                <p>Número: </p>
                <Input
                  fluid
                                  >
                  <InputMask
                  mask="(99)9 9999-9999"
                  placeholder= '(00)0 0000-0000'
                  value={numeroCliente}
                  onChange={e => setNumeroCliente(e.target.value)}
                  />
              </Input>
              </div>
    
            </div>
    
    
            <div className="botoesdenaveg">
              <Button className="botaoentrar"
              onClick={() => salvar()}      
              >
                Salvar
    
              </Button>
              <Link to={'/List-Cliente'}>
                <Button className="botaovoltar">
                  Voltar
                </Button>
              </Link>
    
            </div>
    
          </div>
    
        </div>
      );
    }