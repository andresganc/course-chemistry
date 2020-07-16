
import React, { Fragment } from 'react';

// Componentes Material UI
import ButtonMU from '@material-ui/core/Button';

// Componentes de Material Kit
import ButtonMK from 'components/CustomButtons/Button';


function Prueba () {
    return(
            <Fragment>
                <ButtonMU variant="contained" color="secondary">
                    Secondary
                </ButtonMU>
                
                <ButtonMK type="button" color="warning">
                    Warning
                </ButtonMK>
            </Fragment>
        
    );
}

export default Prueba;