
import React, { Fragment } from 'react';

// Componentes
import Carta from "./Carta";

// Styles Material UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    tablero: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '700px',
        height: '600px',
        margin: '0 auto',
        justifyContent: 'space-around'
    }
})


function Tablero(props) {

    const classes = useStyles();
    const { history } = props;
    const cartas = [1, 2, 3, 4, 5];

    return (
        <Fragment>
            <div className={classes.tablero}>
                {
                    cartas.map((carta) => <Carta />)
                }
            </div>
            
        </Fragment>
    );
}

export default Tablero;