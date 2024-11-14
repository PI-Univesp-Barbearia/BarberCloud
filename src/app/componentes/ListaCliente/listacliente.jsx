import React, { useState, useEffect } from "react";
import './listacliente.css';
import { getFirestore, collection, getDocs } from "firebase/firestore";  // Importando funções do Firestore

function ListaClientes() {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const db = getFirestore();  // Inicializando o Firestore
        const getClientes = async () => {
            const querySnapshot = await getDocs(collection(db, 'clientes'));
            const listaClientes = [];
            querySnapshot.forEach((doc) => {
                listaClientes.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setClientes(listaClientes);  // Atualizando o estado com a lista de clientes
        };

        getClientes();  // Chama a função para buscar os clientes
    }, []);

    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr className="table-secondary">
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Telefone</th>
                </tr>
            </thead>
            <tbody>
                {
                    clientes.map((cliente) => {
                        return (
                            <tr key={cliente.id}>
                                <th scope="row">{cliente.id}</th>
                                <td>{cliente.nome}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.telefone}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default ListaClientes;
