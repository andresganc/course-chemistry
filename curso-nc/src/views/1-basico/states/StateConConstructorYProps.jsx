
import React, { Fragment, Component } from 'react';


class StateConConstructorYProps extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            estado: 0,
            name: "Andres",
            apellido: "Giraldo",
            Edad: 41
        }
    }
    
    render(){
        return(
            <Fragment>
                <h2> Estados con constructor y Props </h2>
                <h3> { this.state.name } </h3>
                <button> {this.props.texto} </button>
            </Fragment>
        );
    }
}

export default StateConConstructorYProps;