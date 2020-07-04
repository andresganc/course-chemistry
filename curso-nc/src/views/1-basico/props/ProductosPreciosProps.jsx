

import React, { Fragment } from "react";


// Componente
function PreciosProductos(props) {
    
    return (
        <Fragment>
            <h3>PRODUCTOS</h3>
            <h4>Producto 1 : {props.producto1}</h4>
            <h4>Precio 1 : $ {props.precio1}</h4>
            <h4>Producto 2 : {props.producto2}</h4>
            <h4>Precio 2 : $ {props.precio2}</h4>
            <br/>
            <button> SUMAR </button>
        </Fragment>
    );
}

export default PreciosProductos;