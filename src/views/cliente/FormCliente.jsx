import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InputMask from "react-input-mask";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, FormTextArea } from 'semantic-ui-react';

export default function FormCliente() {

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
                  />
              </Input>
              </div>
    
            </div>
    
    
            <div className="botoesdenaveg">
              <Button className="botaoentrar"      
              >
                Salvar
    
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