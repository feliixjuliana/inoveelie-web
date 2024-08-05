import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, FormTextArea } from 'semantic-ui-react';

export default function EsqueceuSenhaEmail() {

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
                  
                />
              </div>
    
            </div>
    
    
            <div className="botoesdenaveg">
            <Link to={'/Codigo-Recup'}>
              <Button className="botaoentrar"      
              >
                Confirmar
    
              </Button>
              </Link>
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