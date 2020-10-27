import React, { Fragment } from 'react';

// Components Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Styles
import header from './assets/styles/landing-page';

// Styles in line 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function LandingPage() {
  const classes = useStyles(header);
  return (

    <Fragment>
      <Grid className={classes.header} container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <h2>Grid Container 1</h2>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Dev - Andres Giraldo
          </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
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
