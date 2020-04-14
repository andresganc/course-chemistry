import React, { Component, Fragment } from 'react'
import { CLIENTE_QUERY } from '../queries/queries-clientes';
import { Query } from 'react-apollo';

// Components
import FormularioEditarCliente from './FormularioEditarCliente';

export default class EditarCliente extends Component {
    state = {}
    render() {
        
        // Tomar el ID del contacto a editar
        const { id } = this.props.match.params;
        //console.log(id);
        
        return (
            <Fragment>
                <h2 className="text-center">Editar Cliente</h2>
                <div className="row justify-content-center">
                    <Query query={ CLIENTE_QUERY } variables={{id}}>
                        {({ loading, error, data, refetch }) => {
                            if(loading) return 'Cargando...';
                            if(error) return `Error! ${error.message}`

                            console.log(data);
                            
                            return(
                                <FormularioEditarCliente
                                    cliente={data.getCliente}
                                    refetch={refetch}
                                />
                            )

                        }}
                    </Query>
                </div>
            </Fragment>
        );
    }
}
