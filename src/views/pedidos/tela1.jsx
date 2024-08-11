import React from "react";
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, GridColumn } from 'semantic-ui-react';
import { Link } from "react-router-dom";
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
    const [busto, setBusto] = useState();
    const [cintura, setCintura] = useState();
    const [quadril, setQuadril] = useState();
    const [alturaManga, setAlturaManga] = useState();
    const [alturaCava, setAlturaCava] = useState();
    const [largura, setLargura] = useState();
    const [comprimentoSaia, setComprimentoSaia] = useState();

  
    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/api/pedido/" + state.id)
                .then((response) => {
                    setIdPedido(response.data.id)
                    setTipoPedido(response.data.tipoPedido)
                    setNomeCliente(response.data.nomeCliente)
                    setNumeroCliente(response.data.numeroCliente)
                    setDataEntrega(response.data.dataEntrega)
                    setDescricao(response.data.descricao)
                    setValor(response.data.valor)
                    setBusto(responde.data.busto)
                    setCintura(responde.data.cintura)
                    setQuadril(response.data.quadril)
                    setAlturaManga(response.data.alturaManga)
                    setAlturaCava(response.data.alturaCava)
                    setLargura(response.data.largura)
                    setComprimentoSaia(response.data.comprimentoSaia)
                })
        }
    }, [state])
  
    function salvar() {
  
        let pedidoRequest = {
            tipoPedido: tipoPedido,
            nomeCliente: nomeCliente,
            numeroCliente: numeroCliente,
            dataEntrega: dataEntrega,
            descricao: descricao,
            valor: valor,
            busto: busto,
            cintura: cintura,
            quadril: quadril,
            alturaManga: alturaManga,
            alturaCava: alturaCava,
            largura: largura,
            comprimentoSaia: comprimentoSaia
            
        }
  
        if (idPedido != null) { //Alteração:
  
            axios.put("http://localhost:8080/api/pedido/" + idPedido, pedidoRequest)
                .then((response) => { console.log('Pedido alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um pedido.') })
  
        } else { //Cadastro:
  
            axios.post("http://localhost:8080/api/pedido", pedidoRequest)
                .then((response) => { notifySuccess('Pedido cadastrado com sucesso.') 
                  navigate('/home-usuario');
  
                }
                     
              )
                .catch((error) => { if (error.response) {
                    notifyError(error.response.data.message)
                    }
                     })
        }
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
                                    <input type="text"
                                    value={numeroCliente}
                                    onChange={e => setNumeroCliente(e.target.value)}></input>

                                    <p>Data de Entrega:</p>
                                    <input type="text"
                                    value={dataEntrega}
                                    onChange={e => setDataEntrega(e.target.value)}></input>

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

                                    <p>Altura:</p>
                                    <input type="text" 
                                    value={altura}
                                    onChange={e => setAltura(e.target.value)}/>

                                    <p>Busto:</p>
                                    <input type="text" 
                                    value={busto}
                                    onChange={e => setBusto(e.target.value)}/>

                                    <p>Cintura:</p>
                                    <input type="text" 
                                    value={cintura}
                                    onChange={e => setCintura(e.target.value)}/>

                                    <p>Quadril:</p>
                                    <input type="text" 
                                    value={quadril}
                                    onChange={e => setQuadril(e.target.value)}/>

                                    <p>Comprimento da Manga</p>
                                    <input type="text" 
                                    value={alturaManga}
                                    onChange={e => setAlturaManga(e.target.value)}/>

                                    <p>Largura:</p>
                                    <input type="text" 
                                    value={largura}
                                    onChange={e => setLargura(e.target.value)}/>

                                    <p>Comprimento da Saia:</p>
                                    <input type="text" 
                                    value={comprimentoSaia}
                                    onChange={e => setComprimentoSaia(e.target.value)}/>



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
            </div>

        </div>
    )
}

