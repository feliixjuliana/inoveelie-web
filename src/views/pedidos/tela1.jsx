import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InputMask from 'react-input-mask';
import { Grid, GridColumn, Button, Form, FormSelect} from 'semantic-ui-react';
import { notifyError, notifySuccess } from '../../views/util/Util';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Loader'; 

/*const options = [
    { key: 'Conserto', value: 'Conserto', text: 'Conserto' },
    { key: 'Confeccao', value: 'Confeccao', text: 'Confecção' },
]*/

export default function Home() {

    const navigate = useNavigate();
    const { state } = useLocation();
    const [idPedido, setIdPedido] = useState();
    const [idTipo, setIdTipo] = useState();
    const [nomeCliente, setNomeCliente] = useState();
    const [numeroCliente, setNumeroCliente] = useState();
    const [dataEntrega, setDataEntrega] = useState();
    const [valor, setValor] = useState();
    const [descricao, setDescricao] = useState();
    const [alturaCava, setAlturaCava] = useState();
    const [busto, setBusto] = useState();
    const [cintura, setCintura] = useState();
    const [quadril, setQuadril] = useState();
    const [comprimentoManga, setComprimentoManga] = useState();
    const [largura, setLargura] = useState();
    const [comprimentoSaia, setComprimentoSaia] = useState();
    const [listaTipo, setListaTipo] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/pedido/" + state.id)
                .then((response) => {
                setIdPedido(response.data.id)
                setIdTipo(response.data.tipo.id)
                setNomeCliente(response.data.nomeCliente);
                setNumeroCliente(response.data.numeroCliente);
                setDataEntrega(formatarData(response.data.dataEntrega));
                setValor(response.data.valor);
                setDescricao(response.data.descricao);
                setAlturaCava(response.data.alturaCava);
                setBusto(response.data.busto);
                setCintura(response.data.cintura);
                setQuadril(response.data.quadril);
                setComprimentoManga(response.data.comprimentoManga);
                setLargura(response.data.largura);
                setComprimentoSaia(response.data.comprimentoSaia);
                })
        }

        axios.get("http://localhost:8080/api/tipoPedido")
       .then((response) => {
           const dropDownTipos = response.data.map(c => ({ text: c.descricao, value: c.id }));
           setListaTipo(dropDownTipos);
       })

    }, [state])

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    function salvar() {

        setLoading(true); 

        let pedidoRequest = {
            idTipo: idTipo,
            nomeCliente: nomeCliente,
            numeroCliente: numeroCliente,
            dataEntrega: dataEntrega,
            valor: valor,
            descricao: descricao,
            alturaCava: alturaCava,
            busto: busto,
            cintura: cintura,
            quadril: quadril,
            comprimentoManga: comprimentoManga,
            largura: largura,
            comprimentoSaia: comprimentoSaia
        }

        if (idPedido != null) { //Alteração:

            axios.put("http://localhost:8080/api/pedido/" + idPedido, pedidoRequest)
                .then((response) => { notifySuccess('Pedido alterado com sucesso.') 
                    setLoading(false);
                    navigate('/home-usuario');

                })
                .catch((error) => { notifyError('Erro ao alter um pedido.') 
                    setLoading(false);
                })

        } else { //Cadastro:

            axios.post("http://localhost:8080/api/pedido", pedidoRequest)
                .then((response) => {
                    notifySuccess('Pedido cadastrado com sucesso.')
                    navigate('/home-usuario');
                    setLoading(false);
                }

                )
                .catch((error) => {
                    if (error.response) {
                        notifyError(error.response.data.message);
                        console.error('Erro', error);
                        setLoading(false);
                    }
                })
        }
    }

    function enviarComprovante() {
        let pedidoRequest = {
            idTipo: idTipo,
            nomeCliente: nomeCliente,
            numeroCliente: numeroCliente,
            dataEntrega: dataEntrega,
        };

        axios.post('/pedidos/enviar-comprovante', pedidoRequest)
            .then((response) => {
                alert('Comprovante enviado com sucesso!');
                setLoading(false);
            })
            .catch((error) => {
                console.error('Erro ao enviar o comprovante:', error);
                alert('Falha ao enviar o comprovante.');
                setLoading(false);
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
                                        options={listaTipo}
                                        placeholder='Selecione Aqui'
                                        value={idTipo}
                                        onChange={(e,{value}) => {setIdTipo(value)}}

                                    />

                                    <p>Nome do Cliente:</p>
                                    <input type="text"
                                        value={nomeCliente}
                                        onChange={e => setNomeCliente(e.target.value)}></input>

                                    <p>Telefone:</p>
                                    <Form.Input type="text"
                                        value={numeroCliente}
                                        onChange={e => setNumeroCliente(e.target.value)}
                                        >
                                        
                                    </Form.Input>

                                    <p>Data de Entrega:</p>
                                    <Form.Input type="text"
                                        

                                    >
                                        <InputMask
                                        mask="99/99/9999"
                                        value={dataEntrega}
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
                                        value={alturaCava}
                                        onChange={e => setAlturaCava(e.target.value)}></input>
                                </div>
                            </GridColumn>


                            <GridColumn>
                                <div className="input-container">

                                    <p>Busto:</p>
                                    <input type="text"
                                        value={busto}
                                        onChange={e => setBusto(e.target.value)} />

                                    <p>Cintura:</p>
                                    <input type="text"
                                        value={cintura}
                                        onChange={e => setCintura(e.target.value)} />

                                    <p>Quadril:</p>
                                    <input type="text"
                                        value={quadril}
                                        onChange={e => setQuadril(e.target.value)} />

                                    <p>Comprimento da Manga</p>
                                    <input type="text"
                                        value={comprimentoManga}
                                        onChange={e => setComprimentoManga(e.target.value)} />

                                    <p>Largura:</p>
                                    <input type="text"
                                        value={largura}
                                        onChange={e => setLargura(e.target.value)} />

                                    <p>Comprimento da Saia:</p>
                                    <input type="text"
                                        value={comprimentoSaia}
                                        onChange={e => setComprimentoSaia(e.target.value)} />



                                </div>

                            </GridColumn>
                        </Grid.Row>
                    </Grid> {
                    loading && <Loader />} 
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

                    
                   
                </div>
            </div>
           
        </div>
    )
}