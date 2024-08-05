import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, FormTextArea } from 'semantic-ui-react';

export default function CadastroUsuario() {

    return (
        <div className="corpinhodocadastro">
    
          <div className="containerbranco">
    
    
            <h2>  Confirme o Código </h2>
    
            <div className="inputcontainers">
              <div className="input-container">
                <p> </p>
                <Input
                  fluid
                  placeholder='Código'
                  
                />
              </div>
    
            </div>
    
    
            <div className="botoesdenaveg">
              <Button className="botaoentrar"      
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