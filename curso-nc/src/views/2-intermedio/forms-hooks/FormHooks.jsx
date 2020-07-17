
import React, { useState, Fragment } from 'react';

// Componentes Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



function FormHooks() {

    const [ numero1, setNumero1, numero2, setNumero2, resultado, setResultado ] =  useState(0);

    
    const [inputValues, setInputValues] = useState({
        numero1: 0, 
        numero2: 0,
        resultado: 0
    });
    

    /*
    const handleOnChange = (event) => {
        //event => ({ [event.target.name]: event.target.value });
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    }
    */

    const handleOnChange = event => {
        setInputValues(event.target.value);
      };
    

    /*
    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
      });
    */  

    const handleOnClick = () => {
        setResultado ( resultado = numero1 + numero2);
    }
    

    return(
        <Fragment>
            <form action="">
                <h2> Formulario de Suma</h2>
                <TextField name="numero1" id="numero1" label="Numero 1" variant="filled" value={ numero1 } onChange={ handleOnChange } />
                <TextField name="numero2" id="numero2" label="Numero 2" variant="filled" value={ numero2 } onChange={ handleOnChange } />
                <h3> Resultado </h3>
                <h3> { resultado } </h3>
                <Button onClick={ handleOnClick } variant="contained" color="primary">
                    Sumar
                </Button>
            </form>
        </Fragment>
    );
}

export default FormHooks;