
import React, { Fragment } from 'react';

// Components Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// Componentes NC
import MenuDark from './components/menus/menu-dark/MenuDark';
import HeaderDarkPersonal from './components/headers/header-dark-personal/HeaderDarkPersonal';
import SectionIcons from './components/sections/section-icons/SectionIcons';


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
      <Grid container spacing={2} className={classes.gridContainerRoot} justify="center">

        <Grid container item xs={12} spacing={1}>
          <MenuDark />
          <HeaderDarkPersonal />
        </Grid>
          <br/>
        <Grid container item xs={12} spacing={1} justify="center">
          <SectionIcons />
        </Grid>

      </Grid>

    </Fragment>
  );
}

export default App;
