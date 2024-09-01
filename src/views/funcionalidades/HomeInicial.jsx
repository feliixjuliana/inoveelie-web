import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Grid, Button, Table,  FormSelect, Icon } from 'semantic-ui-react';

const options = [
    { key: 'editarPerfil', value: 'editarPerfil', text: 'Editar Perfil' },
    { key: 'Sair', value: 'Sair', text: 'Sair' }
]

export default function HomeInicial() {

    const navegando = useNavigate();
    const [idUsuario, setIdUsuario] = useState();
    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();
    const [dataSelecionada, setDataSelecionada] = useState('');

    // Obter datas únicas para o select
    const datasUnicas = [...new Set(lista.map(pedido => pedido.dataEntrega))];

    // Filtrar os pedidos com base na data selecionada
    const pedidosFiltrados = lista.filter(pedido => pedido.dataEntrega === dataSelecionada);

    const handleChange = (e, { value }) => {
        if (value === 'editarPerfil') {
            navegando('/Edit-Infor', { state: { id: idUsuario } });
        } else {
            navegando('/');
        };

    }

    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/pedido")
            .then((response) => {
                setLista(response.data)
            })
    }

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
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

                                <Link to={'/Form-Pedidos'}>
                                    <button className="pedidos"
                                    >
                                        Pedidos

                                    </button>
                                </Link>

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
                            <div className="listaPedidos">
                                <select className="selectdata" value={dataSelecionada} onChange={(e) => setDataSelecionada(e.target.value)}>
                                    <option value="">Selecione uma data</option>
                                    {datasUnicas.map(data => (
                                        <option key={data} value={data}>{data}</option>
                                    ))}
                                </select>

                                <Table color='pink' sortable celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Cliente</Table.HeaderCell>
                                            <Table.HeaderCell>Entrega</Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {pedidosFiltrados.map(pedido => (
                                            <Table.Row key={pedido.id}>
                                                <Table.Cell>{pedido.nomeCliente}</Table.Cell>
                                                <Table.Cell>{pedido.dataEntrega}</Table.Cell>
                                                <Table.Cell textAlign='center'>
                                                    <Button
                                                        inverted
                                                        circular
                                                        color='pink'
                                                        title='Clique aqui para editar os dados deste material'
                                                        icon>
                                                        <Link to="/Form-Pedidos" state={{ id: pedido.id }} style={{ color: 'pink' }}> <Icon name='edit' /> </Link>
                                                    </Button> &nbsp;
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