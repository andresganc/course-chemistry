
import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        backgroundColor: '#8DD3E3',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function Container(props) {

    const classes = useStyles();

    return (
        <Fragment>
            <Grid container spacing={1}>
                <Grid item xs={props.xs} sm={props.sm} md={props.md}>
                    <Paper className={classes.paper}>  </Paper>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Container;

