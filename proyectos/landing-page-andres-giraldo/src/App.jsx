
import React, { Fragment } from 'react';

// Componentes NC
import MenuDark from './components/menus/menu-dark/MenuDark';
import HeaderDarkPersonal from './components/headers/header-dark-personal/HeaderDarkPersonal';

// Components Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


// Styles
import AppStyles from './assets/styles/AppStyles';

const styles = makeStyles(AppStyles);


function App() {

  // Menu icons
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Menu icons
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //const classes = ((useStyles()), (styles()));      //Llamar 
  const classes = styles();
  return (

    <Fragment>

      {/* GRID CONTAINER ROOT */}
      <Grid container spacing={2} className={classes.gridContainerRoot}>

        <MenuDark />
        <HeaderDarkPersonal />

        <Grid container item xs={12} spacing={3}>
          <h2>Grid Container 2</h2>
        </Grid>

        <Grid container item xs={12} spacing={3}>
          <h2>Grid Container 3</h2>
        </Grid>

      </Grid>

    </Fragment>
  );
}

export default App;
