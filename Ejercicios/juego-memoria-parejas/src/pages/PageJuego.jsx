
import React, { Fragment } from 'react';

// Componentes
import Header from 'components/Header';
import Tablero from 'components/Tablero';
import Container from 'containers/Container';

// Styles MaterialUI
import { makeStyles } from "@material-ui/core/styles";     // makeStyles solo se puede usar con componentes de funcion
//import { useStyles } from "@material-ui/core/styles";       // useStyles solo se puede usar con componentes de funcion
import { withStyles } from "@material-ui/core/styles";      // withStyles se puede usar con componentes de Funcion & de Clase (Tiene mas sobrecarga)
// Styles
import stylesMainjmp from 'assets/styles/main';

const useStyles = makeStyles(stylesMainjmp);
//const useStyles = makeStyles(stylesMainjmp);
//const useStyles = withStyles(stylesMainJMP);


function PageMain() {
  return (
    <div className="App">
      <Fragment>
        <Header />
        <Tablero />
        <Container />
      </Fragment>
    </div>
  );
}

export default PageMain;