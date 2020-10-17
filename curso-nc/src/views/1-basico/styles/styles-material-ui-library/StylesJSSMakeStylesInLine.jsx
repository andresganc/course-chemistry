
import React, { Fragment } from 'react';

// Componentes MAterial UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   h2: {
       fontSize: 50,
       color: "gray"
   },
   button: {
       backgroundColor: "red"
   } 
});

function StyleInLine() {

    const classes = useStyles();

    return(
        <Fragment>
            <h2 className={classes.h2} > Estilos en linea </h2>
            <button className={classes.button}> Estilos </button>
        </Fragment>
    );
}

export default StyleInLine;
