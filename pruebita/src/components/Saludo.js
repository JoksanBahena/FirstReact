import React from 'react';

export default function Saludo(props) {
    console.log(props);

    const {texto} = props;
    return (
        <>
        <h1>Hola <strong>Joksan</strong></h1>
        <h3>{texto}</h3>
        </>
    )
}