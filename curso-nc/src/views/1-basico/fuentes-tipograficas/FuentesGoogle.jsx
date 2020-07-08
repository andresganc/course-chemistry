
import React, { Fragment } from 'react';

// Componentes MAterial UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    h2: {
        fontFamily: "'Press Start 2P', cursive",
        fontSize: 50,
        color: "blue"
    },
    h3: {
        fontFamily: "'Galada', cursive",
        fontSize: 50,
        color: "red"
    } 
 });

function FuentesGoogle() {

    const classes = useStyles();

    return (
        <Fragment>

            <h2 className={classes.h2} > Fuentes Tipografica Google </h2>
            <h3 className={classes.h3} > Fuentes Tipografica Google </h3>


        </Fragment>
    );
}

export default FuentesGoogle;