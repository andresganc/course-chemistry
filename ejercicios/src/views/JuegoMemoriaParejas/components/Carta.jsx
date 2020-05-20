
import React from 'react';

// Styles Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    carta: {
        width: '125px',
        height: '125px',
        backgroundColor: '#ffb300'
    }
})

function Carta(){
    const classes = useStyles();
    return(
        <div className={classes.carta}>

        </div>
    );
}

export default Carta;