// Linea de creacion de componentes imrc: Ctrl + Espaciadora

// Linea de componente con Class componente (Componentes con siclos de vida)
//import React, { Component } from 'react'

// Linea de componente sin Class componente (Componentes sin siclos de vida)
import React, {Fragment} from 'react';
import { Query, Mutation } from 'react-apollo';

// Querys
import { CLIENTES_QUERY } from '../queries/queries-clientes';
// Mutations
import { ELIMINAR_CLIENTE } from '../mutations/mutations-clientes';

// Componente Normal
/*
const Contactos = () => {
    //return ()         Se quita porque el componente no va a tener state
}
*/
// Link
import { Link } from "react-router-dom";

// Componente cuando todo va a hacer un return (En vez de {} se ponene () )
const Contactos = () => (
    //return ()         Se quita porque el componente no va a tener state
    <Query query={CLIENTES_QUERY} pollInterval={1000}>
        {({ loading, error, data, startPolling, stopPolling }) => {
            if (loading) return "Cargando...";
            if (error) return `Error: ${error.message}`;
            console.log(data.getClientes);

            return (
                <Fragment>
                    <h2 className="text-center">Listado Clientes</h2>
                    <ul className="list-group mt-4">
                        {data.getClientes.map(item => {
                            const {id} = item;
                            
                            return(
                            <li key={item.id} className="list-group-item">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-8 d-flex justify-content-between alingn-items-center">
                                        {item.nombre} {item.apellido} - {item.empresa}
                                    </div>
                                    <div className="col-md-4 d-flex justify-content-end">
                                        <Link to={`/cliente/editar/${item.id}`} className="btn btn-success d-block d-md-inline-block rm-2">
                                            Editar Cliente
                                        </Link>
                                        <Mutation mutation={ELIMINAR_CLIENTE}>
                                            {eliminarCliente => (
                                                <button 
                                                type="button" 
                                                className="btn btn-danger d-block d-md-inline-block mr-2"
                                                onClick={() => {
                                                    if(window.confirm('Realmente deseas eliminar este cliente ?' + " ID Cliente : " + item.id )){
                                                        //console.log(item.id)
                                                        eliminarCliente({
                                                        variables: {id}
                                                    })
                                                    }
                                                }}
                                                >
                                                    &times; Eliminar
                                                </button>
                                            )}
                                        </Mutation>
                                    </div>
                                </div>

                            </li>
                            )    
                    })}
                    </ul>
                </Fragment>
            )
        }}
    </Query>
)

export default Contactos;

