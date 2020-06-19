import React, {Component} from 'react';

// Componentes
import Header from './components/Header';
import Tablero from './components/Tablero';

// Styles JSS & MaterialUI
import { createUseStyles } from 'react-jss'
import { makeStyles } from "@material-ui/core/styles";     // makeStyles solo se puede usar con componentes de funcion
//import { useStyles } from "@material-ui/core/styles";       // useStyles solo se puede usar con componentes de funcion
import { withStyles } from "@material-ui/core/styles";      // withStyles se puede usar con componentes de Funcion & de Clase (Tiene mas sobrecarga)
// Styles
import stylesMainjmp from './assets/styles/main';

const useStyles = makeStyles(stylesMainjmp);
//const useStyles = makeStyles(stylesMainjmp);
//const useStyles = withStyles(stylesMainJMP);

/*
class JuegoMemoriaParejas extends Component {
    render(){
    const classes = useStyles();
        return(
            <div className={classes.body}>
                <Header />
            </div>
        );
    }
}
*/


function JuegoMemoriaParejas() {
    
    const classes = useStyles();
    return(
        <div>
            <Header />
            <Tablero />
        </div>
    );
}


export default JuegoMemoriaParejas;