
import React, { Fragment } from 'react';

// Componentes MAterial UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    '@global': {
        h3:{
        fontFamily: "'Indie Flower', cursive",
        fontSize: '1em',
        color: "green"
        },
    },
    h1: {
        fontFamily: "'Press Start 2P', cursive",
        fontSize: '3em',
        color: "blue"
    },
    h2: {
        fontFamily: "'Galada', cursive",
        fontFamily: "'Ethnocentric', arial",
        fontSize: '2em',
        color: "red"
    },    

    button: {
        fontFamily: "'Indie Flower', cursive",
        fontSize: '1em',
        color: "gray"
    }
 });

function FuentesGoogle() {

    const classes = useStyles();

    return (
        <Fragment>

            <h1 className={classes.h1} > Fuentes Tipografica Google H1 </h1>
            <h2 className={classes.h2} > Fuentes Tipografica Google H2</h2>
            <h3> Fuente tipografica Google H3 </h3>
            <h3> Google fonts H3</h3>
            <button className={classes.button}> Button con fonts </button>

        </Fragment>
    );
}

export default FuentesGoogle;