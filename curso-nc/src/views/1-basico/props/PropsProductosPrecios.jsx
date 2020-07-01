

import React, { Fragment } from "react";


// Componente
function PreciosProductos(props) {
    
    return (
        <Fragment>
            <h3>PRODUCTOS</h3>
            <h4>{props.producto1}</h4>
            <h5>{props.precio1}</h5>
            <h4>{props.producto2}</h4>
            <h5>{props.precio2}</h5>
            <br/>
            <button> SUMAR </button>
        </Fragment>
    );
}

export default PreciosProductos;