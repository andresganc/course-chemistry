
import React, { Fragment } from 'react';

// Componentes Material UI
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    modak: {
        fontFamily: "'Modak', cursive",
        fontSize: "50px"
    },
    monoton: {
        fontFamily: "'Monoton', cursive",
        fontSize: "50px"
    },
    yellowtail: {
        fontFamily: "'Yellowtail', cursive",
        fontSize: "50px"
    },
    eater: {
        fontFamily: "'Eater', cursive",
        fontSize: "50px"
    }
});

function FuentesGoogle() {

    const classes = useStyles();

    return (
        <Fragment>
            <h2 className={classes.modak} > Fuentes Tipograficas </h2>
            <h2 className={classes.monoton} > Fuentes Tipograficas </h2>
            <h2 className={classes.yellowtail} > Fuentes Tipograficas </h2>
            <h2 className={classes.eater} > Fuentes Tipograficas </h2>
        </Fragment>
    );
}

export default FuentesGoogle;