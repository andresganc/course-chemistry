// Creamos la configuracion de express (Como se instalo babel no es necesario hacer require)

// Configuracion del servidor express
import express from 'express';
// GraphQL
import graphqlHTTP from 'express-graphql';          // Dependencia para conectar Express con GraphQL
//import schema from './data/schema';               // Importacion normal (no como objeto) - export default schema;
import {schema} from './data/schema';               // Importacion como objeto - export {schema};

// Resolvers
//import resolvers from './data/resolvers';       // Ya no se usa resolver porque se trabaja desde el schema.graphql

// Ya no se usa resolver porque se trabaja desde el schema.graphql 
//const root = resolvers;     // Le pasamos el mismo nombre de root para no cambiarlo en el index

// Almacenamos el server en una constante llamada app
const app = express();

// URL /
app.get('/', (req, res) => {
    res.send('Todo Listo');
});

/* 
// Resolver para hola

//const root = {hola: ()=> "Hola Mundo desde GraphQL"};

// Cliente para mutations
class Cliente {
    constructor(id, {nombre, apellido, empresa, email}){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.empresa = empresa;
        this.email = email;
    }
}

// Base de datos en memoria
const clientesDB = {};

// Resolver para cliente con Arrow Funtion =>
const root = {cliente: ()=>{
    return{
        "id": 1,
        "nombre": "Andres",
        "apellido": "Giraldo",
        "empresa": "NC",
        "email": "info@newsoftcomputer.com"
    }
    },
    crearCliente : ({input}) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        clientesDB[id] = input;
        return new Cliente(id, input);
    }
};
*/


// URL /graphql
app.use('/graphql', graphqlHTTP({
    // Schema que se va a usar
    //schema : schema,          // Forma antigua llave y valor
    schema,                     // Forma con nueva sintaxis con ESC6
    // El resolver se pasa como rootValue
    // rootValue: root,     // Ya no se usa resolver porque se trabaja desde el schema.graphql 
    // Utilizar graphiql
    graphiql : true
}));

// Configuracion del puerto
app.listen(8000, () => {
    console.log('El servidor esta funcionando')
})