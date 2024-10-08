import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Modal, Header } from 'semantic-ui-react';

export default function ListMaterial() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();


    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8080/api/material")
            .then((response) => {
                setLista(response.data)
            })
    }

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }

    async function remover() {

        await axios.delete('http://localhost:8080/api/material/' + idRemover)
            .then((response) => {

                console.log('Material removido com sucesso.')

                axios.get("http://localhost:8080/api/material")
                    .then((response) => {
                        setLista(response.data)
                    })
            })
            .catch((error) => {
                console.log('Erro ao remover o material.')
            })
        setOpenModal(false)
    }


    return (
        <div className='containerPrincipalCliente'>

            <div>

                <Container textAlign='justified' >


                    <Divider />

                    <div>
                    <Button
                            label='Voltar'
                            circular
                            color='pink'
                            floated='left'
                            as={Link}
                            to='/home-usuario'
                        />
                        <Button
                            label='Cadastre um Novo Material'
                            circular
                            color='pink'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/Form-Materiais'
                        />
                        <br /><br /><br />

                        <Table color='pink' sortable celled>

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nome</Table.HeaderCell>
                                    <Table.HeaderCell>Descrição</Table.HeaderCell>
                                    <Table.HeaderCell>Quantidade</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {lista.map(material => (

                                    <Table.Row key={material.id}>
                                        <Table.Cell>{material.nome}</Table.Cell>
                                        <Table.Cell>{material.descricao}</Table.Cell>
                                        <Table.Cell>{material.quantidade}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste material'
                                                icon>
                                                <Link to="/form-materiais" state={{ id: material.id }} style={{ color: 'green' }}> <Icon name='edit' /> </Link>
                                            </Button> &nbsp;

                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este material'
                                                icon
                                                onClick={e => confirmaRemover(material.id)}>
                                                <Icon name='trash' />
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                    </div>
                </Container>
            </div>
            <Modal
                basic
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={openModal}
            >
                <Header icon>
                    <Icon name='trash' />
                    <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
                </Header>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='remove' /> Não
                    </Button>
                    <Button color='green' inverted onClick={() => remover()}>
                        <Icon name='checkmark' /> Sim
                    </Button>
                </Modal.Actions>
            </Modal>

        </div>
    )
}