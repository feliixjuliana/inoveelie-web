import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, FormTextArea } from 'semantic-ui-react';

export default function CadastroUsuario() {

    return (
        <div className="corpinhodocadastro">
    
          <div className="containerbranco">
    
    
            <h2>  Novo Material </h2>
    
            <div className="inputcontainers">
              <div className="input-container">
                <p>Nome do Material: </p>
                <Input
                  fluid
                  placeholder='Nome'
                />
              </div>
    
              <div className="Form-container">
                <p>Descrição do Material</p>
                <FormTextArea
                  fluid
                  placeholder='Descrição'
                />
              </div>
    
              <div className="input-container">
                <p>Repita a Senha:</p>
                <Input
                  fluid
                  type="password"
                  placeholder='Senha'
                />
              </div>
    
            </div>
    
    
            <div className="botoesdenaveg">
              <Button className="botaoentrar"      
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