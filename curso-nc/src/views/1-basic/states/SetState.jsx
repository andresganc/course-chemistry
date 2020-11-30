
import React, { Component, Fragment } from 'react';


class SetState extends Component {
    
    state = {
        nombre: "Andres",
        apellido: "Giraldo",
        edad: 0
    }
    
    render() {
        return(
            <Fragment>
               <h3> { this.state.nombre } </h3> 
               <h3> { this.state.apellido } </h3>
               <p> { this.state.edad } </p> 

               <h3> { this.setState.nombre = "Sebastian" } </h3>
               <h3> { this.setState.apellido = "Giraldo" } </h3>
               <p> { this.setState.edad = 5 } </p>
            </Fragment>
        );
    }
}

export default SetState;