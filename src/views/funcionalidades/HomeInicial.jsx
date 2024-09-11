import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Grid, Table, Form } from 'semantic-ui-react';

export default function HomeInicial() {
    const navegando = useNavigate();
    const [idUsuario, setIdUsuario] = useState();
    const [lista, setLista] = useState([]);
    const [statusOptions, setStatusOptions] = useState([]);
    const [dataSelecionada, setDataSelecionada] = useState('');

    // Obter datas únicas para o select
    const datasUnicas = [...new Set(lista.map(pedido => pedido.dataEntrega))];

    // Filtrar os pedidos com base na data selecionada
    const pedidosFiltrados = lista.filter(pedido => pedido.dataEntrega === dataSelecionada);

    useEffect(() => {
        carregarLista();
        carregarStatus();
    }, []);

    function carregarLista() {
        axios.get("http://localhost:8080/api/pedido")
            .then(response => {
                setLista(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar a lista de pedidos", error);
            });
    }

    function carregarStatus() {
        setStatusOptions([
            { key: 'Em andamento', value: 'Em andamento', text: 'Em andamento' },
            { key: 'Em aberto', value: 'Em aberto', text: 'Em aberto' },
            { key: 'Cancelado', value: 'Cancelado', text: 'Cancelado' }
        ]);
    }

    function handleStatusChange(pedidoId, statusNome) {
        axios.patch(`http://localhost:8080/api/pedido/${pedidoId}/status`, { status: statusNome })
            .then(() => {
                carregarLista();
            })
            .catch(error => {
                console.error("Erro ao atualizar o status do pedido", error);
            });
    }

    const handleChange = (e, { value }) => {
        if (value === 'editarPerfil') {
            navegando('/Edit-Infor', { state: { id: idUsuario } });
        } else {
            navegando('/');
        }
    };

    return (
        <div className="homeUsuario">
            <div className="rodapedoperfil">
                <a href="/">
                    <div className="voltar"></div>
                </a>
                <div className="ficamNaDireita">
                    <Link to={{ pathname: "/Edit-Infor", state: { id: idUsuario } }}>
                        <div className="perfil"></div>
                    </Link>
                </div>
            </div>

            <div className="gradescolun">
                <Grid columns={2} style={{ height: '100vh' }}>
                    <Grid.Row style={{ height: '100%' }}>
                        <Grid.Column>
                            <div className="botoesderota">
                                <Link to={'/Form-Pedidos'}>
                                    <button className="pedidos">Pedidos</button>
                                </Link>
                                <Link to={'/List-Materiais'}>
                                    <button className="materiais">Materiais</button>
                                </Link>
                                <Link to={'/List-Cliente'}>
                                    <button className="clientes">Clientes</button>
                                </Link>
                            </div>
                        </Grid.Column>
                        <Grid.Column style={{ overflowY: 'auto', height: '100%' }}>
                            <div className="listaPedidos">
                                <select className="selectdata" value={dataSelecionada} onChange={(e) => setDataSelecionada(e.target.value)}>
                                    <option value="">Selecione uma data</option>
                                    {datasUnicas.map(data => (
                                        <option key={data} value={data}>{data}</option>
                                    ))}
                                </select>

                                <Table color='pink' sortable celled style={{ width: '100%' }}>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Cliente</Table.HeaderCell>
                                            <Table.HeaderCell>Data da Entrega</Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center'>Status</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {pedidosFiltrados.map(pedido => (
                                            <Table.Row key={pedido.id}>
                                                <Table.Cell>
                                                    <Link to="/Form-Pedidos" state={{ id: pedido.id }} className="linkPedidos">
                                                        {pedido.nomeCliente}
                                                    </Link>
                                                </Table.Cell>
                                                <Table.Cell>{pedido.dataEntrega}</Table.Cell>
                                                <Table.Cell textAlign='center'>
                                                    <Form.Select
                                                        className="SelectStatus"
                                                        fluid
                                                        options={statusOptions}
                                                        placeholder='Selecione o status'
                                                        onChange={(e, { value }) => handleStatusChange(pedido.id, value)}
                                                        value={pedido.status || ''}
                                                    />
                                                </Table.Cell>
                                            </Table.Row>
                                        ))}
                                    </Table.Body>
                                </Table>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
}
