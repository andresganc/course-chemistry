
import React, { Fragment } from 'react';

// Components Material UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// Iconos Material UI
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

// Componentes NC
import Container from 'containers/Container';

// Imagenes
import Usuarios from 'assets/img/user-01.png';


// Styles MaterialUI
import { makeStyles } from "@material-ui/core/styles";     // makeStyles solo se puede usar con componentes de funcion
//import { useStyles } from "@material-ui/core/styles";       // useStyles solo se puede usar con componentes de funcion
import { withStyles } from "@material-ui/core/styles";      // withStyles se puede usar con componentes de Funcion & de Clase (Tiene mas sobrecarga)
// Styles
import stylesMainjmp from 'assets/styles/main';

//const useStyles = makeStyles(stylesMainjmp);


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#8DD3E3',
        flexGrow: 1,
    },
    rootBottomNavigation: {
        backgroundColor: '#8DD3E3',
        width: '80%',
    },
    paperMain: {
        backgroundColor: '#8DD3E3',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper: {
        backgroundColor: '#8DD3E3',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));




function PageMain() {

    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    
    return (
        <div className="App">
            <Fragment>

                <Card className={classes.root}>
                    <CardContent>

                        <Grid container spacing={1}>

                            <Grid item xs={12} >
                                
                            </Grid>

                        </Grid>

                        <Grid container spacing={1}>

                            <Grid item xs={6} sm={4} md={3}>
                                <img src={Usuarios} alt="" width="80%" />
                                <BottomNavigation
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    showLabels
                                    className={classes.rootBottomNavigation}
                                    >
                                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                                </BottomNavigation>
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <img src={Usuarios} alt="" width="80%" />
                                <BottomNavigation
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    showLabels
                                    className={classes.rootBottomNavigation}
                                    >
                                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                                </BottomNavigation>
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <img src={Usuarios} alt="" width="80%" />
                                <BottomNavigation
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    showLabels
                                    className={classes.rootBottomNavigation}
                                    >
                                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                                </BottomNavigation>
                            </Grid>

                            <Grid item xs={6} sm={4} md={3}>
                                <img src={Usuarios} alt="" width="80%" />
                                <BottomNavigation
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    showLabels
                                    className={classes.rootBottomNavigation}
                                    >
                                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                                </BottomNavigation>
                            </Grid>

                        </Grid>

                        <Grid container spacing={1}>

                            <Grid item xs={12} >
                                
                            </Grid>

                        </Grid>


                    </CardContent>
                </Card>



            </Fragment>
        </div>
    );
}

export default PageMain;