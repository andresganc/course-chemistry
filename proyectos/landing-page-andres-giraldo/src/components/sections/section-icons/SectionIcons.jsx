
import React, { Fragment } from 'react';

// Components Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function SectionIcons() {
    return (
        <Fragment>
            <Grid container xs={12} sm={12} md={12} spacing={2} justify="center">
                <Grid item xs={6} sm={6} md={3}>
                    <Paper >
                        Icon 1
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <Paper >
                        icon 2
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <Paper >
                        icon 2
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <Paper >
                        icon 2
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default SectionIcons;