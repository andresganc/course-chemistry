
import React, { Fragment } from 'react';

// Componentes NC
import MenuDark from './components/menus/menu-dark/MenuDark'

// Components Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';


// Images
import AndresGiraldo from './assets/img/people-man-dark.jpg';
import JavaScript from './assets/img/javascript.svg';

// Iconos
import AccountCircle from '@material-ui/icons/AccountCircle';
import PaletteIcon from '@material-ui/icons/Palette';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


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

        

        {/* GRID ITEM MENU */}
        <Grid item xs={12} spacing={2} className={classes.gridItemNav}>
          <MenuDark />
        </Grid>

        {/* GRID CONTAINER HEADER */}
        <Grid container item xs={12} spacing={3} className={classes.gridContainerHeader}>

          {/* GRID ITEM PERFIL*/}
          <Grid item xs={12} sm={6} md={6} spacing={3} className={classes.gridItemPerfil}>
            <h2>Andres Giraldo</h2>
            <h4>Desarrollador</h4>
            <img src={JavaScript} alt="JavaScript" width='60px' />
            <h5>JavaScript</h5>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className={classes.iconButton}
              >
                <FacebookIcon />
            </IconButton>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className={classes.iconButton}
              >
                <InstagramIcon />
            </IconButton>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className={classes.iconButton}
              >
                <GitHubIcon />
              </IconButton>
          </Grid>

          {/* GRID ITEM FOTO PERFIL*/}
          <Grid item xs={12} sm={6} md={6} spacing={3} className={classes.gridItemFotoPerfil}>
            <img src={AndresGiraldo} alt="" />
          </Grid>

        </Grid>

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
