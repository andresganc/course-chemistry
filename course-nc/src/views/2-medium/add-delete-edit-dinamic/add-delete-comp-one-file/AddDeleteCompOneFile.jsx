
import React, { Fragment, useState } from 'react'


// COMPONENTE A AGREGAR O ELIMINAR
const Componente = ({ componentes, eliminarComponentes }) => {

    return componentes.map ((componente) => (
        <Fragment>
            <h4 > Componente prueba </h4>
            <button onClick={() => eliminarComponentes(componente.id)}> Eliminar </button>
        </Fragment>
    ));         
    
}


// BOTONES QUE GENERAN LA ACCION DE AGREGAR Y ELIMINAR COMPONENTES
const ButtonAdd = (props) => {

    const handleSubmit = e => {        
        e.preventDefault();
        //props.onSubmit();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            //text: input
        });
        console.log("Componente agregado: Ok");
    }

    return(
        <Fragment>
            <button onClick={ handleSubmit }> Agregar componente </button>
        </Fragment>
    );
}



// COMPONENTE CONTENEDOR
function AddDeleteCompOneFile() {
    
    const [componentes, setComponentes] = useState([]);

    const addComponents = e => {

        const newComponentes = [e, ...componentes];
        setComponentes(newComponentes);
        console.log('id agregado :', e);
        console.log('Total ids anteriores :', ...componentes);

    }

    const eliminarComponentes = id => {
        const removedArr = [...componentes].filter(componente => componente.id !== id);
        setComponentes(removedArr);
        console.log('id eliminado :', id);
        console.log('Total ids anteriores :', ...componentes);
    }
    
    return (
        <div>
            <h3> EJERCICIO ADD - DELETE COMPONENTES DINAMICAMENTE </h3>
            <ButtonAdd onSubmit={ addComponents }/>
            <Componente componentes={componentes} eliminarComponentes={ eliminarComponentes } />
        </div>
    )
}

export default AddDeleteCompOneFile
