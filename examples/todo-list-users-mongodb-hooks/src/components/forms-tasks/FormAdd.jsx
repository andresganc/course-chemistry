
import React, { Fragment } from 'react'

// Components Material UI 
import Button from '@material-ui/core/Button';

// Icons
import SaveIcon from '@material-ui/icons/Save';


function FormAdd(props) {

    const handleSubmit = e => {
        e.preventDefault();
        
        props.onSubmit();
        /*
        props.onSubmit({
            
            id: Math.floor(Math.random() * 10000),
            //text: input
            
        });
        */
        
        
       console.log('Hola');
    };

    return (
        <Fragment>
            <h3> Formulario Add </h3>
            
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                    onClick={handleSubmit}   
                >
                    Agregar tarea
                </Button>
            
        </Fragment>
    )
}

export default FormAdd
