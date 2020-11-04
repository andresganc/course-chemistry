
import React, { Fragment } from 'react';

// Components Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

// Iconos
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

// Images
import AndresGiraldo from './assets/img/people-man-dark.jpg';
import JavaScript from './assets/img/javascript.svg';

// STYLES
// css
import './assets/styles/HeaderDarkPersonalStyles.css';
// js
import HeaderDarkPersonalStyles from './assets/styles/HeaderDarkPersonalStyles.js';

const styles = makeStyles(HeaderDarkPersonalStyles);


function HeaderDarkPersonal() {

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
            <Grid container item xs={12} sm={12} md={12} spacing={3} className={classes.gridContainerHeader}>
                {/* GRID ITEM PERFIL*/}
                <Grid item xs={12} sm={12} md={6} spacing={3} className={classes.gridItemPerfil}>
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
                <Grid item xs={12} sm={12} md={6} spacing={3} className={classes.gridItemFotoPerfil}>
                    <img src={AndresGiraldo} alt="" />
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default HeaderDarkPersonal;