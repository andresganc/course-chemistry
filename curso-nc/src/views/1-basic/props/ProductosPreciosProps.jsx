
import React, { Fragment } from "react";


// Componente
function PreciosProductos(props) {
    
    return (
        <Fragment>
            
            <body>
                <header> Header </header>
                <section>
                    <h2> Producto1: { props.producto1 } </h2>
                    <h3> Precio1: { props.precio1 } </h3>

                    <br/>

                    <h2> Producto2: { props.producto2 } </h2>
                    <h3> Precio2: { props.precio2 } </h3>

                </section>
            </body>
        </Fragment>
    );
}

export default PreciosProductos;