
import React, { Fragment } from 'react';

// Images
import MaterialUI from './img/material-ui.png';

// Componentes Material UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    '@global': {
        body: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }
    },

    card: {
        position: 'relative',
        width: '600px',
        height: '350px',
        margin: '20px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #d41e31, #491f8f)',
        '@global img': {
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '300px',
            transition: '0.5s',
            '&:hover' : {
                left: '80%',
                height: '400px'
            }
        },
    },

    content: {
        position: 'relative',
        width: '80%',
        left: '10%',
        padding: '20px, 20px, 20px, 40px',
        margin: '20px',
        opacity: '0',
        visibility: 'hidden',
        transition: '0.5s',        
        '&: hover' : {
            opacity: '1',
            visibility: 'visible',
            left: '5%'
        },        
        '@global h2': {
            color: '#9ACDFA',
            textTransform: 'uppercase',
            fontSize: '1.5em',
            lineHeight: '1em'
        },
        '@global p': {
            color: '#fff'
        }
    }
});

function StylesMakeStylesExterno() {

    const classes = useStyles();

    return(
        <Fragment>
            <div className={classes.card}>
                <div className={classes.content}>
                    <h2>
                        REACT
                    </h2>
                    <h2>
                        STYLES MATERIAL UI
                    </h2>
                    <p> 
                        <strong>Tipo:</strong> En linea
                    </p>
                    <p> 
                        <strong>Libreria:</strong> Styles Material UI
                    </p>
                    <p> 
                        <strong>Metodo:</strong> Metodo de gancho
                    </p>
                    <p> 
                        <strong>Notas:</strong> Los manejadores de estilos de Material UI son inspirados de las librerias
                        CSS in JS mas famosas y en especial esta se basa de la libreria JSS.
                    </p>

                </div>
                <img src={MaterialUI} alt=""></img>
            </div>
        </Fragment>
    );
}

export default StylesMakeStylesExterno;
