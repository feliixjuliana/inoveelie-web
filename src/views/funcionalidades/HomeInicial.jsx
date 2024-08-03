import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input } from 'semantic-ui-react';

const options = [
    { key: 'Editar Perfil', value: 'Editar Perfil', text: 'Editar Perfil' },
    { key: 'Sair', value: 'Sair', text: 'Sair' }
]

navigate("/List-Materiais", { state: { key: "listademateriais", value: 'listademateriais' } });

export default function HomeInicial() {

    const navegando = useNavigate();

    const handleChange = (e, { value }) => {
        if (value === 'editarPerfil') {
            navegando('/editar-perfil');
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
                                value={listademateriais}>
                                    Cadastro de pedidos

                                </button>

                                <button className="materiais">
                                    Materiais
                                </button>

                                <button className="clientes">
                                    Clientes
                                </button>


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