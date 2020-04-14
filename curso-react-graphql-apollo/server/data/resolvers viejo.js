// Resolver para hola
//const root = {hola: ()=> "Hola Mundo desde GraphQL"};

// Mutatios para Cliente
class Cliente {
    constructor(id, {nombre, apellido, empresa, email, edad, tipo, pedidos}){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.empresa = empresa;
        this.email = email;
        this.edad = edad;
        this.tipo = tipo;
        this.pedidos = pedidos;
    }
}

// Base de datos en memoria
const clientesDB = {};

// Export Nuevo con schema.graphql, GraphQL Tools y GraphQL Import
export const resolvers = {
    // Query y Mutation Funciones de GraphQL Tools para hacer Mapeo
    Query: {
        getCliente : ({id}) => {
            return new Cliente(id, clientesDB[id]);
        },
    },
    Mutation: {
        crearCliente : ({input}) => {
            const id = require('crypto').randomBytes(10).toString('hex');
            clientesDB[id] = input;
            return new Cliente(id, input);
        }
    }
}

// Resolver antiguo sin schema.graphql, GraphQL Tools y GraphQL Import
// Resolver para cliente con Arrow Funtion =>
/*
const resolvers = {
    getCliente : ({id}) => {
        return new Cliente(id, clientesDB[id]);
    },
    crearCliente : ({input}) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        clientesDB[id] = input;
        return new Cliente(id, input);
    }
};
*/

// Export antiguo sin schema.graphql, GraphQL Tools y GraphQL Import
// export default resolvers;
