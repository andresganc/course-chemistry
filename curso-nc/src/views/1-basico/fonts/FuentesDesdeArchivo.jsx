
import React, { Fragment } from 'react';

// Componentes material ui
import { makeStyles } from '@material-ui/core/styles';


// Fonts
//import './fonts/Exo_2/Exo2-VariableFont_wght.ttf';

// Styles
import FuentesDesdeArchivoStyle from './styles/FuentesDesdeArchivoStyle';
//import './styles/FuentesDesdeArchivoStyle.css'

const styles = makeStyles(FuentesDesdeArchivoStyle);

function FuentesDesdeArchivo() {
    
    const classes = styles();

    return(
        <Fragment>
            <h2 className="H2"> Hola Andres Giraldo </h2>
            <h2 className={classes.H2Style}> Hola Andres Giraldo - Por JS MaterialUI Style</h2>
        </Fragment>
    );
}

export default FuentesDesdeArchivo;

