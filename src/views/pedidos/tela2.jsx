import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Loader from '../../Loader';

export default function Home() {
    const [listaMateriais, setListaMateriais] = useState([]);
    const [listaPedidos, setListaPedidos] = useState([]);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [quantityToSubtract, setQuantityToSubtract] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        carregarListas();
    }, []);

    function carregarListas() {
        setLoading(true);
        // Carregar materiais
        axios.get("http://localhost:8080/api/material")
            .then((response) => {
                setListaMateriais(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar materiais:", error);
                alert("Erro ao carregar materiais. Verifique o console para mais detalhes.");
            });

        // Carregar pedidos
        axios.get("http://localhost:8080/api/pedido")
            .then((response) => {
                setListaPedidos(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar pedidos:", error);
                alert("Erro ao carregar pedidos. Verifique o console para mais detalhes.");
            })
            .finally(() => setLoading(false));
    }

    function handleConfirmar() {
        if (!selectedMaterial || quantityToSubtract <= 0) {
            alert("Selecione um material e insira uma quantidade válida.");
            return;
        }

        axios.patch(`http://localhost:8080/api/material/${selectedMaterial.id}/subtrair`, null, {
            params: {
                valor: quantityToSubtract
            }
        })
        .then(() => {
            carregarListas(); // Recarregar as listas após a subtração
            setQuantityToSubtract(''); // Limpar o campo de quantidade
        })
        .catch(error => {
            console.error("Erro ao subtrair a quantidade:", error);
            alert("Erro ao subtrair a quantidade. Verifique o console para mais detalhes.");
        });
    }

    return (
        <div className="corpinhodapaginama">
            <div className="containerbrancope">
                <h1>Materiais Usados</h1>
                <div className="logininicioelogo" id="inicioo">
                    <div className="input-container">
                        <p>Procure os Materiais Cadastrados:</p>
                        <Form.Select
                            required
                            fluid
                            tabIndex='3'
                            placeholder='Selecione'
                            options={listaMateriais.map(material => ({
                                key: material.id,
                                text: material.nome,
                                value: material.id
                            }))}
                            onChange={(e, { value }) => {
                                const selected = listaMateriais.find(material => material.id === value);
                                setSelectedMaterial(selected);
                            }}
                        />

                        <div className="quantidade">
                            <input
                                type="number"
                                className="inputquant"
                                value={quantityToSubtract}
                                onChange={(e) => setQuantityToSubtract(e.target.value)}
                            />
                            <button className="botaoConf" onClick={handleConfirmar}> Confirmar </button>
                        </div>
                    </div>
                </div>

                <div className="botoesdenaveg">
                    {listaPedidos.map(pedido => (
                        <Link to="/Form-Pedidos" state={{ id: pedido.id }} key={pedido.id}>
                            <Button className="botaovoltar">
                                Voltar
                            </Button>
                        </Link>
                    ))}
                    <Button className="botaoentrar">
                        Salvar
                    </Button>
                </div>

                {loading && <Loader />}
            </div>
        </div>
    );
}
