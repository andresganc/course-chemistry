
// ====== Side Effect de mover el mouse y cambiar el color de fondo =======

import React, { Fragment, useState, useEffect } from 'react'


function PosicionMouseUseEffet() {
    
    const [ mostrar, setMostrar ] = useState(true)

    return (
        <Fragment>
            <h2> useEffect </h2>
            <p> Efecto secundrio de mover el mouse hasta la mitad y cambiar el color de fondo </p>
            <button onClick={ ()=> setMostrar(false) }> Dejar de mostrar </button>
            { mostrar ? <MouseColor /> : null }
        </Fragment>
    )
}


const MouseColor = () => {

    const [color, setColor] = useState("orange")

    // Funcion de cambiar el color al pasar el mouse mas de la mitad de la pantalla en horizonta
    useEffect(() => {
        function onMouseMove(e) {
            if (e.clientX < window.innerWidth / 2) {
                setColor('orange')
            } else {
                setColor('blue')
            }
        }
        window.addEventListener('mousemove', onMouseMove)
        console.log('EJECUTANDO')

        // Evento para limpiar los effectos secundarios cuando un componente ya no este activo
        /*
        Cuando dejamos de mostrar el cuadro de color si no hacemos esto. El seguiria ejecutando
        esta funcion y contaminando el programa y la memoria 
        El orden de ejecucion es primero limpia y despues ejecuta
        */
        return () => {
            console.log('LIMPIANDO')
            window.removeEventListener('mousemove', onMouseMove)
        }

    }, []);

    // Al final ponemos [] para que el addEventListener no se ejecute cada vez que cambie el estado

    console.log('Ocurrio el render')

    return <div style={{ width:'100vv', height:'500px', background: color, margin:'10px', borderRadius:'10px' }} />
}

export default PosicionMouseUseEffet
