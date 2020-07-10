
import React, { Component, Fragment } from 'react';


class Prueba extends Component {

    state = {
        numero1: 0,
        numero2: 0,
        resultado: 0
    }

    manejadorOnChange (event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return(
            <Fragment>
                <input value={ this.state.numero1 } onChange={ this.manejadorOnChange }  type="text"/>
                <input value={ this.state.numero2 } type="text"/>
            </Fragment>
        );
    }
}

export default Prueba