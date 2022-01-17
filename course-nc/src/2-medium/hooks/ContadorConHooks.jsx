

import React, { Fragment, useState } from 'react';

function ContadorConHooks() {

    const [ contador, setContador ] =  useState(0);
    
    const incrementar = () => { 
        setContador( contador + 1 )
     }

    return (
        <Fragment>
            <h2> Contador con  Hooks : </h2>
            <h3> { contador } </h3>
            <button onClick={incrementar} > Incrementar </button>
        </Fragment>
    );

}

export default ContadorConHooks;