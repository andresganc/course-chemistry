

import React, { Fragment, useState, useEffect, useRef } from 'react'


// COMPONENTE A AGREGAR O ELIMINAR
const Componente = ({ componentes, eliminarComponentes, editarComponentes, completeComponentes }) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        editarComponentes(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <ButtonAdd edit={edit} onSubmit={submitUpdate} />;
    }

    return componentes.map((componente, index) => (
        <Fragment>
            <div
            className={componente.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
            >
                <div key={componente.id} onClick={() => completeComponentes(componente.id)}>
                    {componente.text}
                </div>
                <button onClick={() => setEdit({ id: componente.id, value: componente.text })}> Editar </button>
                <button onClick={() => eliminarComponentes(componente.id)}> Eliminar </button>
            </div>
        </Fragment>
    ));

}


// BOTONES QUE GENERAN LA ACCION DE AGREGAR Y ELIMINAR COMPONENTES
const ButtonAdd = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        //props.onSubmit();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
        console.log("Componente agregado: Ok");
    }

    return (
        <form onSubmit={handleSubmit}>
        {props.edit ? (
            <Fragment>
                <input
                    placeholder='Editar tarea'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='todo-input edit'
                />
                <button onClick={handleSubmit}> Editar componente </button>
            </Fragment>
        ) : (
            <Fragment>
                <input
                    placeholder='Agregar tarea'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    className='todo-input'
                    ref={inputRef}
                />
                <button onClick={handleSubmit}> Agregar componente </button>
            </Fragment>
        )}
        </form>
    );
}



// COMPONENTE CONTENEDOR
function AddDeleteEditCompOneFile() {

    const [componentes, setComponentes] = useState([]);

    const addComponents = componente => {

        if (!componente.text || /^\s*$/.test(componente.text)) {
            return;
        }

        const newComponentes = [componente, ...componentes];
        setComponentes(newComponentes);
        console.log('id agregado :', componente);
        console.log('Total ids anteriores :', ...componentes);

    }

    const eliminarComponentes = id => {
        const removedArr = [...componentes].filter(componente => componente.id !== id);
        setComponentes(removedArr);
        console.log('id eliminado :', id);
        console.log('Total ids anteriores :', ...componentes);
    }

    const completeComponentes = id => {
        let updatedComponentes = componentes.map(componente => {
          if (componente.id === id) {
            componente.isComplete = !componente.isComplete;
          }
          return componente;
        });
        setComponentes(updatedComponentes);
    };


    const editarComponentes = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setComponentes(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    return (
        <div>
            <h3> EJERCICIO ADD - DELETE - EDIT COMPONENTES DINAMICAMENTE </h3>
            <ButtonAdd onSubmit={addComponents} />
            <Componente componentes={componentes} completeComponentes={completeComponentes} eliminarComponentes={eliminarComponentes} editarComponentes={ editarComponentes } />
        </div>
    )
}

export default AddDeleteEditCompOneFile
