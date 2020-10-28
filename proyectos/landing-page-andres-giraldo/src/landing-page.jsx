import React, { Fragment } from 'react';

// Components Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Styles
import ladingPageStyles from './assets/styles/landing-page';

// Images
import AndresGiraldo from './assets/img/people-man-dark.jpg'

const useStyles = makeStyles(ladingPageStyles);


function LandingPage() {
  const classes = useStyles();
  return (

    <Fragment>
      <Grid container spacing={2} className={classes.gridContainerRoot}>
        
        <Grid container item xs={12} spacing={3} className={classes.gridContainerHeader}>
          <Grid item xs={12} spacing={3} className={classes.gridItemNav}>
            <AppBar position="static" color='transparent'>
              <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <h4>Andres Giraldo</h4>
              </Toolbar>
            </AppBar>
          </Grid>

          <Grid item xs={12} sm={6} md={6} spacing={3} className={classes.gridItemPerfil}>
            <h2>Andres Giraldo</h2>
            <h4>Desarrollador</h4>
            <h5>JavaScript</h5>
          </Grid>
          <Grid item xs={12} sm={6} md={6} spacing={3} className={classes.gridItemFotoPerfil}>
              <img src={AndresGiraldo} alt=""/>
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

export default LandingPage;
