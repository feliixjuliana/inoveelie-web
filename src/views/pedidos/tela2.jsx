import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Button, Form, Table, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Loader from '../../Loader'; 

export default function Home() {


    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        setLoading(true);

        axios.get("http://localhost:8080/api/pedido")
            .then((response) => {
                setLista(response.data)
            })
    }

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

                  {lista.map(pedido => (
                             
                    <Link to="/Form-Pedidos" state={{ id: pedido.id }} key={pedido.id}> 
                    <Button className="botaovoltar">
                    Voltar
                </Button> 
                    </Link>
                   
                  ))}
                   

                    <Button className="botaoentrar"
                    
                    >
                        Salvar 

                    </Button>

                </div>

                {loading && <Loader />} 
            </div>

        </div>
    )
}

