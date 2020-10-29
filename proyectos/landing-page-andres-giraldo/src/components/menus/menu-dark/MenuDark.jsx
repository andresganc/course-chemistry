
// MENU OSCURO 
// Control de colores

import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
//App Bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Iconos
import PaletteIcon from '@material-ui/icons/Palette';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

// Styles
import ladingPageStyles from './MenuDarkStyle';

const styles = makeStyles(ladingPageStyles);

function MenuDark() {

    // Menu icons
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Menu icons
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    //const classes = ((useStyles()), (styles()));      // Llamar estilo in line & Externo
    const classes = styles();   

    return (
        <Fragment>
            <AppBar position="static" color='transparent' className={classes.appBar}>
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.iconButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.typographyH6}>
                        Andres Giraldo
                    </Typography>
                    <Button className={classes.buttonMenu} color="inherit">Inicio</Button>
                    <Button className={classes.buttonMenu} color="inherit">Aserca de</Button>
                    <Button className={classes.buttonMenu} color="inherit">Tecnologias</Button>
                    <Button className={classes.buttonMenu} color="inherit">Servicios</Button>
                    <Button className={classes.buttonMenu} color="inherit">Portafolio</Button>
                    <Button className={classes.buttonMenu} color="inherit">Contactenos</Button>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        className={classes.iconButton}
                    >
                        <InvertColorsIcon />
                    </IconButton>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        className={classes.iconButton}
                    >
                        <PaletteIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

export default MenuDark;