import React from "react";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, GridColumn } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const options = [
    { key: 'Conserto', value: 'Conserto', text: 'Conserto' },
    { key: 'Confeccao', value: 'Confeccao', text: 'Confecção' },
]

export default function Home() {

    return (

        <div className="corpinhodapaginape">


            <div className="containerbrancope">
                <h1>Adicione as Informações</h1>
                <div className="logininicioelogo" id="inicioo">
                    <Grid columns={2}>
                        <Grid.Row>
                            <GridColumn>
                                <div className="input-container">
                                    <p>Tipo:</p>
                                    <FormSelect
                                        fluid
                                        options={options}
                                        placeholder='Selecione Aqui'
                                    />

                                    <p>Nome do Cliente:</p>
                                    <input type="text"></input>

                                    <p>Telefone:</p>
                                    <input type="text"></input>

                                    <p>Data de Entrega:</p>
                                    <input type="text"></input>

                                    <p>Valor:</p>
                                    <input type="text"></input>

                                    <p>Descrição: </p>
                                    <input type="text"></input>

                                    <p>Altura da Cava:</p>
                                    <input type="text"></input>
                                </div>
                            </GridColumn>


                            <GridColumn>
                                <div className="input-container">

                                    <p>Altura:</p>
                                    <input type="text" />

                                    <p>Busto:</p>
                                    <input type="text" />

                                    <p>Cintura:</p>
                                    <input type="text" />

                                    <p>Quadril:</p>
                                    <input type="text" />

                                    <p>Comprimento da Manga</p>
                                    <input type="text" />

                                    <p>Largura:</p>
                                    <input type="text" />

                                    <p>Comprimento da Saia:</p>
                                    <input type="text" />



                                </div>

                            </GridColumn>
                        </Grid.Row>
                    </Grid>
                </div>

                <div className="botoesdenaveg">
                    <Link to={'/home-usuario'}>
                        <Button className="botaovoltar">
                            Voltar
                        </Button>
                    </Link>

                    <Link to={'/Form-P-Materiais'}>
                        <Button className="botaovoltar">
                            Salvar Materiais
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

