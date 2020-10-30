
import React, { Fragment } from 'react';

// Componentes material ui
import { makeStyles, makestyles } from '@material-ui/core/styles';

// Styles
import FuentesDesdeArchivoStyle from './styles/FuentesDesdeArchivoStyle';

const styles = makeStyles(FuentesDesdeArchivoStyle);

function FuentesDesdeArchivo() {
    
    const classes = styles();

    return(
        <Fragment>
            <h2>Hola mundo</h2>
        </Fragment>
    );
}

export default FuentesDesdeArchivo;

