import React from 'react';

// Componentes Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Iconos Material UI
import Borrar from '@material-ui/icons/Delete';
import Resta from '@material-ui/icons/Remove';



const useStyles = makeStyles({
    root: {
        minWidth: '23%',
        maxWidth: '50%',
        display: 'inline-block',
        margin: '10px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

    h3: {
        color: 'gray'
    },

    h4: {
        color: 'gray'
    }
});


function FormResta() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>

                <h4 className={classes.h4}>FORMULARIO RESTA</h4>

                <br />

                <TextField
                    id="filled-number"
                    label="Numero: 1"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />

                <br /> <br />

                <TextField
                    id="filled-number"
                    label="Numero: 2"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />

                <br />

                <h4 className={classes.h4}>Total:</h4>
                <h3 className={classes.h3}>0</h3>

            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<Borrar />}
                >
                    Borrar
            </Button>

                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<Resta />}
                >
                    Restar
      </Button>
            </CardActions>
        </Card>
    );
}

export default FormResta;