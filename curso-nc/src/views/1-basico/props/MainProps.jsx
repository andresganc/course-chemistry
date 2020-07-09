
import React, { Fragment } from 'react';

// Componentes con props
import ProductoPreciosProps from 'views/1-basico/props/ProductosPreciosProps';
import ButtonProps from 'views/1-basico/props/ButtonProps';


function PropsMain () {
    return (
        <Fragment>

            <ProductoPreciosProps producto1="CamiBuso" precio1="50.000" producto2="Pantalon" precio2="80.000" />
    
            <ButtonProps texto="Botocito" >
                
            </ButtonProps>

        </Fragment>
    );
}

export default PropsMain;