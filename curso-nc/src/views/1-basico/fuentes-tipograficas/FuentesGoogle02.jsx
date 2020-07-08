import React, { Fragment } from 'react';

// Componentes Material UI
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    h2: {
        fontFamily: "'Indie Flower', cursive",
        fontSize: 50,
        color: "blue"
    },

    button: {
        fontFamily: "'Indie Flower', cursive",
        fontSize: 20,
        color: "red"
    }
  
  });


function Fuentes02 (){

    const classes = useStyles();

    return (
        
        <Fragment>
            <h2 className={classes.h2}> Fuentes 02 </h2>
            <button className={classes.button}> Fuentes 02 </button>
        </Fragment>
    );
}

export default Fuentes02 ;