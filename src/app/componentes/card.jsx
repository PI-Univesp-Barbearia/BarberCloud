import React from 'react';


function Card(props){
    return <div>
        <h2>{props.nome}</h2>
        <p>{props.email}</p>
        <p>{props.telefone}</p>
        <p>{props.id}</p>
        </div>
}

export default Card;