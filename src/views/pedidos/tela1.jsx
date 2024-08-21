import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InputMask from "react-input-mask";
import { Grid, GridColumn, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, FormTextArea } from 'semantic-ui-react';
import { mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';
import { useNavigate } from 'react-router-dom';

const options = [
    { key: 'Conserto', value: 'Conserto', text: 'Conserto' },
    { key: 'Confeccao', value: 'Confeccao', text: 'Confecção' },
]

export default function Home() {

    const navigate = useNavigate();
    const { state } = useLocation();
    const [idPedido, setIdPedido] = useState();
    const [tipoPedido, setTipoPedido] = useState();
    const [nomeCliente, setNomeCliente] = useState();
    const [numeroCliente, setNumeroCliente] = useState();
    const [dataEntrega, setDataEntrega] = useState();
    const [descricao, setDescricao] = useState();
    const [valor, setValor] = useState();
    const [medidas, setMedidas] = useState({
        busto: '',
        cintura: '',
        quadril: '',
        alturaManga: '',
        alturaCava: '',
        largura: '',
        comprimentoSaia: ''
    });


    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/pedido/" + state.id)
                .then((response) => {
                    setIdPedido(response.data.id)
                setTipoPedido(response.data.tipoPedido)
                setNomeCliente(response.data.cliente.nome);
                setNumeroCliente(response.data.cliente.numero);
                setDataEntrega(response.data.dataEntrega);
                setDescricao(response.data.descricao);
                setValor(response.data.valor);
                setMedidas(response.data.medida);
                })
        }
    }, [state])

    function salvar() {

        let pedidoRequest = {
            tipoPedido: tipoPedido,
            dataEntrega: dataEntrega,
            descricao: descricao,
            valor: valor,
            cliente: {
                nome: nomeCliente,
                numero: numeroCliente
            },
            medida: medidas

        }

        if (idPedido != null) { //Alteração:

            axios.put("http://localhost:8080/api/pedido/" + idPedido, pedidoRequest)
                .then((response) => { console.log('Pedido alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um pedido.') })

        } else { //Cadastro:

            axios.post("http://localhost:8080/api/pedido", pedidoRequest)
                .then((response) => {
                    notifySuccess('Pedido cadastrado com sucesso.')
                    navigate('/home-usuario');

                }

                )
                .catch((error) => {
                    if (error.response) {
                        notifyError(error.response.data.message);
                        console.error('Erro', error);

                    }
                })
        }
    }

    function enviarComprovante() {
        let pedidoRequest = {
            tipoPedido: tipoPedido,
            nomeCliente: nomeCliente,
            numeroCliente: numeroCliente,
            dataEntrega: dataEntrega,
        };

        axios.post('/pedidos/enviar-comprovante', pedidoRequest)
            .then(() => {
                alert('Comprovante enviado com sucesso!');
            })
            .catch((error) => {
                console.error('Erro ao enviar o comprovante:', error);
                alert('Falha ao enviar o comprovante.');
            });
    }

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
                                        value={tipoPedido}
                                        onChange={e => setTipoPedido(e.target.value)}

                                    />

                                    <p>Nome do Cliente:</p>
                                    <input type="text"
                                        value={nomeCliente}
                                        onChange={e => setNomeCliente(e.target.value)}></input>

                                    <p>Telefone:</p>
                                    <Form.Input type="text"
                                        value={numeroCliente} >
                                        <InputMask
                                            mask="(99) 9 9999-9999"
                                            maskChar={null}
                                            onChange={e => setNumeroCliente(e.target.value)}
                                        />
                                    </Form.Input>

                                    <p>Data de Entrega:</p>
                                    <Form.Input type="text"
                                        value={dataEntrega}

                                    >
                                        <InputMask
                                            mask="99/99/9999"
                                            maskChar={null}

                                            onChange={e => setDataEntrega(e.target.value)}
                                        />

                                    </Form.Input>

                                    <p>Valor:</p>
                                    <input type="text"
                                        value={valor}
                                        onChange={e => setValor(e.target.value)}></input>

                                    <p>Descrição: </p>
                                    <input type="text"
                                        value={descricao}
                                        onChange={e => setDescricao(e.target.value)}></input>

                                    <p>Altura da Cava:</p>
                                    <input type="text"
                                        value={medidas.alturaCava}
                                        onChange={e => setMedidas(e.target.value)}></input>
                                </div>
                            </GridColumn>


                            <GridColumn>
                                <div className="input-container">

                                    <p>Busto:</p>
                                    <input type="text"
                                        value={medidas.busto}
                                        onChange={e => setMedidas(e.target.value)} />

                                    <p>Cintura:</p>
                                    <input type="text"
                                        value={medidas.cintura}
                                        onChange={e => setMedidas(e.target.value)} />

                                    <p>Quadril:</p>
                                    <input type="text"
                                        value={medidas.quadril}
                                        onChange={e => setMedidas(e.target.value)} />

                                    <p>Comprimento da Manga</p>
                                    <input type="text"
                                        value={medidas.alturaManga}
                                        onChange={e => setMedidas(e.target.value)} />

                                    <p>Largura:</p>
                                    <input type="text"
                                        value={medidas.largura}
                                        onChange={e => setMedidas(e.target.value)} />

                                    <p>Comprimento da Saia:</p>
                                    <input type="text"
                                        value={medidas.comprimentoSaia}
                                        onChange={e => setMedidas(e.target.value)} />



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
                        onClick={() => salvar()}
                    >
                        Salvar

                    </Button>

                </div>

                <div className="botoesdenaveg">
                    <Button className="botaoentrar"
                        onClick={enviarComprovante}

                    >
                        Comprovante

                    </Button>
                </div>
            </div>

        </div>
    )
}

