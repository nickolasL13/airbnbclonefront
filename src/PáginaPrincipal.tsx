import React, { useState, useEffect } from 'react';
import Imovel from './backend/DTO/dtos';
import fetch from 'node-fetch';

export default function PaginaPrincipal() {
    const [dados, setDados] = useState<Array<Imovel>>();
    const [url, setUrl] = useState(process.env.URL!);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        async function consultarWebServer() {
            setErro(false);
            setCarregando(true);

            try {
                const resultado = await fetch(process.env.URL!);
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
    });

    return (
        <>
            <p> Bem-vindo ao Airbnb Clone!</p>
            {erro && <div>Ocorreu um erro!</div>}
            {carregando ? (
                <div>Carregando...</div>
            ) : (
                dados && (
                    dados.forEach((element) => {
                        <div>
                            <p>espaco: {element.espaco} </p>
                            <p>label: {element.label}</p>
                        </div>
                    })
                )
            )}
        </>
    );
}