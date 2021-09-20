
import React, { Component, Fragment } from 'react';


class EventosEnClases extends Component {
    
    render() {

        const reaccion = () => {
            window.alert(" Me encanta ");
        }

        return(
            <Fragment>
                <button onClick={ reaccion } > Lanzador de eventos </button>
            </Fragment>
        );
    }
}

export default EventosEnClases;