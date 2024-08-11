import React from "react";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, GridColumn } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default function Home() {

    return (

        <div className="corpinhodapaginama">


            <div className="containerbrancope">
                <h1>Materiais Usados</h1>
                <div className="logininicioelogo" id="inicioo">

                    <div className="input-container">
                        <p>Procure os Materiais Cdastrados:</p>
                        <Form.Select
                            required
                            fluid
                            tabIndex='3'
                            placeholder='Selecione'
                            
                        />

                        <div className="quantidade">
                            <input type="text"  className="inputquant"/>
                            <button className="botaoConf"> Confirmar </button>
                        </div>
                    </div>
                </div>

                <div className="botoesdenaveg">
                    <Link to={'/Form-Pedidos'}>
                        <Button className="botaovoltar">
                            Voltar
                        </Button>
                    </Link>

                    <Button className="botaoentrar"
                    >
                        Salvar 

                    </Button>



                </div>
            </div>

        </div>
    )
}

