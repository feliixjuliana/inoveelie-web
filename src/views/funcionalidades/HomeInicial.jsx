import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input } from 'semantic-ui-react';

const options = [
    { key: 'editarPerfil', value: 'editarPerfil', text: 'Editar Perfil' },
    { key: 'Sair', value: 'Sair', text: 'Sair' }
]

export default function HomeInicial() {

    const navegando = useNavigate();

    const handleChange = (e, { value }) => {
        if (value === 'editarPerfil') {
            navegando('/Edit-Infor');
        } else {
            navegando('/');
        };

    }



    return (

        <div className="homeUsuario">

            <div className="rodapedoperfil">
                <FormSelect
                    fluid
                    options={options}
                    placeholder='Perfil'
                    onChange={handleChange}
                />
            </div>

            <div className="gradescolun">
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <div className="botoesderota">

                                <button className="pedidos"
                                >
                                    Cadastro de pedidos

                                </button>

                                <Link to={'/List-Materiais'}>
                                <button className="materiais">
                                    Materiais
                                </button>
                                </Link>

                                <Link to={'/List-Cliente'}>
                                <button className="clientes">
                                    Clientes
                                </button>
                                </Link>


                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="listadepedidos">

                            </div>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
        </div>


    );

}