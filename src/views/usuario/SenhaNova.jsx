import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, FormTextArea } from 'semantic-ui-react';
import {mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Loader'; 



export default function SenhaNova() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [loading, setLoading] = useState(false);
  //const [confirmaSenha, setConfirmaSenha] = useState('');



  function novSenha() {
    setLoading(true); 

    axios.post("http://localhost:8080/api/usuario/redefinir-senha", null, {
      params: {
        email: email,
        token: token,
        novaSenha: novaSenha,
        //confirmaSenha: confirmaSenha
      }
    })
    .then((response) => {
      notifySuccess('Sua senha foi alterada com sucesso');
      navigate("/");
      setLoading(false);
      // Notificação de sucesso
    })
    .catch((error) => {
      notifyError("Uhmm... Erro");
      console.error(error);
      setLoading(false);
      
      // Notificação de erro
    });
  }

    return (
        <div className="corpinhodocadastro">
    
          <div className="containerbranco">
    
    
            <h2>  Senha Nova </h2>
    
            <div className="inputcontainers">
            <div className="input-container">
                <p>Digite seu Email: </p>
                <Input
                  fluid
                  placeholder='Email:'
                  value = {email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="input-container">
                <p>Sua nova Senha:</p>
                <Input
                 type="password"
                  fluid
                  placeholder='Senha'
                  value = {novaSenha}
                  onChange={e => setNovaSenha(e.target.value)}
                  
                />
              </div>

              <div className="input-container">
                <p>Token</p>
                <Input
                 //type="password"
                  fluid
                  placeholder='Insira o Token'
                  value = {token}
                  onChange={e => setToken(e.target.value)}
                  
                />
              </div>

              {loading && <Loader />} 
            </div>
            
    
    
            <div className="botoesdenaveg">
              <Button className="botaoentrar"   
              onClick={() => novSenha()}      
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
