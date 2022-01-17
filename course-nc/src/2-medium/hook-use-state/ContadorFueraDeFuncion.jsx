
import React, { Fragment, useState } from 'react'

// funcion hook con estados propios con funcion interna que cuenta
const useContador = () => {
    const [contador, setcontador] = useState(0)

    const funContadorPositivo = () => {
        setcontador(contador + 1);
    }

    const funContadorNegativo = () => {
        setcontador(contador - 1);
    }

    return { funContadorPositivo, funContadorNegativo, contador };
}


function ContadorFueraDeFuncion() {

    // Llammos el hook creado por nosotros useContador y 
    // almacenamos la funcion contadora y el state contador
    const { funContadorPositivo, funContadorNegativo, contador } = useContador();

    return (
        <Fragment>
            <h2> Contador fuera de la funcion </h2>
            <h3> { contador } </h3>
            <button onClick={funContadorPositivo}> Contador + </button>
            <button onClick={funContadorNegativo}> Contador - </button>
        </Fragment>
    )
}

export default ContadorFueraDeFuncion
