
// ESQUEMAS ANTIGUOS Y FORMA DE USAR UN SCHEMA CON .JS

import {buildSchema} from 'graphql';

/*
const schema = buildSchema(`
// Type Checking    
type Query {
        hola: String
    }
`);
*/


// Schema Cliente
const schema = buildSchema(`
    type Cliente {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        email: String
        edad: Int
        tipo: TipoCliente
        pedidos: [Pedido]
    }

    type Pedido {
        producto: String
        precio: Int
    }

    """ CATEGORIA: TipoCliente """
    enum TipoCliente {
        
        BASICO
        PREMIUM
    }
    
    type Query{
        getCliente(id: ID) : Cliente
    }

    """ Cliente Input: Campos para crear cliente nuevo"""
    input ClienteInput {
        id: ID
        nombre: String!
        apellido: String!
        empresa: String!
        email: String!
        edad: Int!
        tipo: TipoCliente!
        pedidos: [PedidoInput]
    }

    input PedidoInput {
        producto: String
        precio: Int
    }

    """ Mutation Cliente"""
    type Mutation {
        """ Te permite crear nuevos clientes"""
        # NombreResolver(Input con datos) : Valor que retorna
        crearCliente(input: ClienteInput) : Cliente
    }

`);

export default schema;

