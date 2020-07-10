
import React, { Component, Fragment } from 'react';


class ContadorConClaseState extends Component {
    
    state = {
        numero: 0
    }

        
    render() {

        const contador = () => {

            this.setState({ numero: this.state.numero + 1 })

        }

        return(
            <Fragment>
                <h2> Contador : </h2>
                <h2> { this.state.numero } </h2>
                <button onClick={ contador } > Aumentar </button>
            </Fragment>
        );
    }
}

export default ContadorConClaseState;