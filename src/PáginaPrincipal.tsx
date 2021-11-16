import React, { useState, useEffect } from 'react';
import Imovel from './backend/DTO/dtos';
import fetch from 'node-fetch';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PaginaPrincipal() {
    const [dados, setDados] = useState<Array<Imovel>>();
    const [url, setUrl] = useState(process.env.URL!);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(false);
    const [elements, setElements] = useState<Array<JSX.Element>>([]);

    useEffect(() => {
        async function consultarWebServer() {
            setErro(false);
            try {
                setCarregando(false);
                const resultado = await fetch('http://localhost:5000');
                if (resultado.ok) {
                    const dados: Array<Imovel> = await resultado.json();
                    setDados(dados);
                } else {
                    setErro(true);
                }
            } catch (error) {
                setErro(true);
            } finally {
                setCarregando(false);
            }
        }

        consultarWebServer();
    }, [url]);

    useEffect(() => {
        function Elements(dados: Array<Imovel>) {
            let element = [];
            for (let i of dados) {
                element.push(
                    <>
                        <Container>
                            <Button variant="light">
                                <p>idCasa: {i.iId}</p>
                                <p>label: {i.label}</p>
                                <p>espaco: {i.espaco}</p>
                                <p>Maximo de Hóspedes: {i.nHospedes}</p>
                                <p>Quartos: {i.nQuartos}</p>
                            </Button>
                        </Container>

                    </>
                );
            }

            setElements(element);
        }

        Elements(dados || []);
    }, [dados]);

    return (
        <>
            <p> Bem-vindo ao Airbnb Clone!</p>
            {erro && <div>Ocorreu um erro!</div>}
            {carregando ? (
                <div>Carregando...</div>
            ) : (
                dados && (<div> <ButtonGroup vertical> {elements} </ButtonGroup></div>)
            )}
        </>
    );
}