
import React, { useState, Fragment } from 'react';

// Componentes Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



function FormHookSuma() {

    //const [ numero1, setNumero1, numero2, setNumero2, resultado, setResultado ] =  useState(0);

    const [datos, setDatos] = useState({
        numero1: 0,
        numero2: 0,
        resultado: 0
    })
    
    const handleOnChange = (e) => {

        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })

      };

    
    const handleOnClick = () => {
        //setDatos ( resultado = numero1 + numero2);
        setDatos({ resultado: (parseInt(datos.numero1) + parseInt(datos.numero2)) })
    }
    

    return(
        <Fragment>
            <form action="">
                <h2> Formulario de Suma</h2>
                <TextField name="numero1" id="numero1" label="Numero 1" variant="filled" value={ datos.numero1 } onChange={ handleOnChange } />
                <TextField name="numero2" id="numero2" label="Numero 2" variant="filled" value={ datos.numero2 } onChange={ handleOnChange } />
                <h3> Resultado </h3>
                <h3> { datos.resultado } </h3>
                <Button onClick={ handleOnClick } variant="contained" color="primary">
                    Sumar
                </Button>
            </form>
        </Fragment>
    );
}

export default FormHookSuma;