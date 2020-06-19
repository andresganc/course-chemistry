
import React, { Component } from 'react';
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
    '@global': {
        header: {
            border: '1px solid black',
            marginBottom: '10px',
            justifyContent: 'spacBetween',
            alingContent: 'center'
        }
    },
    root: {
        flexGrow: 1,
        display: 'flex',
        margin: '0 auto'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    image: {
        display: 'flex',
        margin: '0 auto',
    }
       
}));



function Header() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <header className={classes["@global"]}>
                <div>
                    <img src={ImgHeader} alt="" width="70%" height="30%" className={classes.image} />
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
        </div>
    );

}

export default Header;