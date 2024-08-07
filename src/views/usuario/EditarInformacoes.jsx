import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, FormTextArea } from 'semantic-ui-react';

export default function CadastroUsuario() {

    return (
        <div className="corpinhodocadastro">
    
          <div className="containerbranco">
    
    
            <h2>  Editar Informações </h2>
    
            <div className="inputcontainers">
              <div className="input-container">
                <p>Nome: </p>
                <Input
                  fluid
                  placeholder
                />
              </div>
    
              <div className="input-container">
                <p>Sobrenome:</p>
                <Input
                  fluid
                  placeholder
                />
              </div>
    
              <div className="input-container">
                <p>Email: </p>
                <Input 
                  fluid
                  placeholder
                />
              </div>
    
            </div>
    
    
            <div className="botoesdenaveg">
              <Button className="botaoentrar"      
              >
                Salvar Edição
    
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