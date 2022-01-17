
import React from 'react';

// Componentes Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Componentes
import FormSuma from '../forms/FormSuma'; 
import FormResta from '../forms/FormResta';
import FormMultiplicacion from '../forms/FormMultiplicacion';
import FormDivision from '../forms/FormDivision';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: 'black'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        color: 'white'
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        backgroundColor: 'white'
    }
});

function SectionForm() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <FormSuma />
                <FormResta />
                <FormMultiplicacion />
                <FormDivision />
            </CardContent>
            <CardActions>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Copyright NC - Newsoft Computer
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Autores: Jenny Gomez - Andres Giraldo
                </Typography>
                <Button className={classes.button} size="small">Newsoft Computer</Button>
            </CardActions>
        </Card>
    );
}

export default SectionForm;