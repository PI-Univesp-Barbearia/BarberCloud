import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";  
import Navbar from "../componentes/navbar/navbar";
import './novocliente.css';

function ListaAgendamentos() {

    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const getAgendamentos = async () => {
            const querySnapshot = await getDocs(collection(db, 'Agendamentos'));
            const listaAgendamentos = [];
            querySnapshot.forEach((doc) => {
                listaAgendamentos.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            // Ordena os agendamentos pela data em ordem crescente
            listaAgendamentos.sort((a, b) => {
                const dateA = new Date(a.data);
                const dateB = new Date(b.data);
                return dateA - dateB;  // Ordena de forma crescente
            });

            setAgendamentos(listaAgendamentos);
        };

        getAgendamentos();
    }, []);

    // Função para formatar a data no formato brasileiro (DD/MM/YYYY)
    const formatarData = (data) => {
        const date = new Date(data);
        return date.toLocaleDateString("pt-BR"); // Formato brasileiro: DD/MM/YYYY
    };

    return (
        <div className="page-container">
            <Navbar/>
            <h1 className="mt-5">Lista de Agendamentos</h1>
            <div className="table-container">
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr className="table-secondary">
                            <th scope="col">Nome</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Data</th>
                            <th scope="col">Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agendamentos.map((agendamento) => (
                            <tr key={agendamento.id}>
                                <td>{agendamento.nome}</td>
                                <td>{agendamento.telefone}</td>
                                <td>{formatarData(agendamento.data)}</td> {/* Aplica a formatação na data */}
                                <td>{agendamento.hora}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListaAgendamentos;
