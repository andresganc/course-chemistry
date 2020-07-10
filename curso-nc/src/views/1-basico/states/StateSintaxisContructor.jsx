
import React, { Component, Fragment } from 'react';


class StateSintaxisConstructor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "Andres",
            edad: 10
        }
    }

    render() {
        return (
            <Fragment>
                <h2> { this.props.texto } </h2>
                <h2> { this.state.nombre } </h2>
                <h2> { this.state.edad } </h2>
            </Fragment>
        );
    }
}

export default StateSintaxisConstructor;