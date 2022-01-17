
import React, { Fragment } from 'react';

// Componentes Material UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Images
import ErrorPage404 from 'assets/img/404-page-01.png';

// Styles externos
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function ErrorPageStatic01() {

    const classes = useStyles();

    return (
        <Fragment>
            <Grid container spacing={12}>

                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={6} xl={2}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={6} xl={2}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>

            </Grid>
        </Fragment>
    );
}

export default ErrorPageStatic01;