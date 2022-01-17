
import React, { Fragment, useState  } from 'react';


const useContador = () => {
    
    const [ contador, setContador ] =  useState(0);
    
    const incrementar = () => { 
        setContador( contador + 1 )
    }

    return { contador, incrementar }

}


function ContadorConHooksArrowFuera() {

    const { contador, incrementar } = useContador()

    return (
        <Fragment>
            <h2> Contador con  Hooks Arrow Fuera : </h2>
            <h3> { contador } </h3>
            <button onClick={incrementar} > Incrementar </button>
        </Fragment>
    );

}

export default ContadorConHooksArrowFuera;