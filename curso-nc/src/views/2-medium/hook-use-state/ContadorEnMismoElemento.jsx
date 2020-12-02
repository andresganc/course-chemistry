
import React, { Fragment, useState } from 'react'

function ContadorEnMismoElemento() {
    
    const [contador, setcontador] = useState(0)
    
    return (
        <Fragment>
            <h2> Contador en el mismo elemento </h2>
            <h3> { contador } </h3>
            <button onClick={ () => setcontador(contador + 1) }> Contador + </button>
            <button onClick={ () => setcontador(contador - 1) }> Contador - </button>
        </Fragment>
    )
}

export default ContadorEnMismoElemento
