
import React, { Fragment } from 'react';

// Componentes Material UI
import Button from '@material-ui/core/Button';

// Componentes de Material Kit
//import ButtonMT from '../../components/CustomButtons/Button';

function Prueba () {
    return(
            <Fragment>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                
                {/* <ButtonMT type="button" color="warning">Warning</ButtonMT> */}
            </Fragment>
        
    );
}

export default Prueba;