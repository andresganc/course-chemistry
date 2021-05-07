
import React, { Fragment } from 'react';

// Components Material UI
import { Link } from 'react-router-dom';
import { red } from '@material-ui/core/colors';

// Components Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

// Imagenes
import ImgPortada from 'assets/img/game-card-memory-01.png';

const useStyles = makeStyles((theme) => ({

    root_grid: {
        margin: "auto",
        alignContent: "center",
        textAlign: "center"
    },
    root_card_main: {
        backgroundColor: "#eaeaea",
        maxWidth: "100%",
    },



    root_card: {
        maxWidth: 500,
    },
    media_card: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand_card: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen_card: {
        transform: 'rotate(180deg)',
    },
    avatar_card: {
        backgroundColor: red[500],
    },
}));

function HeaderMain() {

    const classes = useStyles();

    return (
        <Fragment>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                    
                    <Card className={classes.root_card_main}>    

                        <Grid className={classes.root_grid} item xs={6} sm={6} md={6}>
                            <img src={ImgPortada} alt="" width="60%" className={classes.root_card_main} />
                        </Grid>

                        <Grid className={classes.root_grid} item xs={6} sm={6} md={6}>
                            <h2> MEMORY DUO </h2>
                            <h3> Juego de memoria - Encuentra la pareja en menos turnos </h3>
                        </Grid>

                    </Card>
                    
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default HeaderMain;