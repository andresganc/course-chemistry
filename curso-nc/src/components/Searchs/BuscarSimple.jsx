
import React from 'react';

// Styles
import StylesBuscar from '../../assets/styles/searchs/buscar';

// Assets
import ImagenBuscar from '../../assets/img/buscar.svg'; 

class Buscar extends React.Component {

    render(){

        return(
            <div>
                <img src={ImagenBuscar} alt="" width="30px" style={StylesBuscar.img} />
                <label style={StylesBuscar.label}  htmlFor=""> Buscar : </label>
                <input style={StylesBuscar.input}  type="text"/>
                <button style={StylesBuscar.button} > Buscar </button>
            </div>
        )

    }

}

export default Buscar;