
// FUNCION FLECHA 
// Arrow Function = Funcion flecha

// Es una forma nueva de hacer compoonentes y salio en la version ES6 - Ecma Script 2015


import React, { Fragment } from 'react';

// SINTAXIS
const ComponenteArrowFunctions01 = () => <h2> Este es un componente Arrow Functions </h2>


const ComponenteArrowFunctions02 = () =>
    <Fragment>
        <h2> Este es un componente Arrow Functions </h2>
    </Fragment>


const ComponenteArrowFunctions03 = () => {
    return (
        <Fragment>
            <h2> Este es un componente Arrow Functions </h2>
            <button> </button>
        </Fragment>
    );
}


export default { ComponenteArrowFunctions01, ComponenteArrowFunctions02, ComponenteArrowFunctions03 };



