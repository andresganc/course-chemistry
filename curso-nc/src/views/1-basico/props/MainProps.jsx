
import React, { Fragment } from 'react';

// Componentes con props
import ProductosPreciosProps  from 'views/1-basico/props/ProductosPreciosProps';
import ButtonProps from 'views/1-basico/props/ButtonProps';

function PropsMain () {
    return (
        <Fragment>

            <ProductosPreciosProps
            producto1="Memoria USB 32 Gb : "
            precio1="15000"
            producto2="Memoria USB 64 Gb : "
            precio2={30000}
            >
            </ProductosPreciosProps>

            <ButtonProps
            colordefondo="gray"
            >
              Boton
            </ButtonProps>
        </Fragment>
    );
}

export default PropsMain;