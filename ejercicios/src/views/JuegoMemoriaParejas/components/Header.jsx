
import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components Material UI
import Button from '@material-ui/core/Button';
// App Bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Assets Material UI
import AutorenewIcon from '@material-ui/icons/Autorenew';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


// Assets Juego Memoria Parejas 
import ImgHeader from '../assets/img/header-01.jpg'


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
  


function Header () {
    
        const classes = useStyles();
        return(
            <header>

                <div>
                    <img src={ImgHeader} alt="" width="70%" height="30%" />
                </div>

                <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        NC - Juego Memoria Parejas - React
                    </Typography>
                    <Button color="inherit">Intentos : 0</Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<AutorenewIcon />}
                        className="boton-reiniciar"
                    >
                        Reiniciar
                    </Button>
                    </Toolbar>
                </AppBar>
                </div>

            </header>
        );
    
}

export default Header;