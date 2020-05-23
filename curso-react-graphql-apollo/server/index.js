
// Creamos la configuracion de express (Como se instalo babel no es necesario hacer require)

// Configuracion del servidor express
import express from 'express';

// GraphQL y Apollo Server
// No se esta usando para usar Apollo-Express
//import graphqlHTTP from 'express-graphql';              // Dependencia para conectar Express con GraphQL
// Apollo Server Express
import { ApolloServer } from 'apollo-server-express';        // Dependencia para conectar Express con Apollo

//import schema from './data/schema';               // Importacion normal (no como objeto) - export default schema;
import { typeDefs } from './data/schema';               // Importacion como objeto - export {schema};
import { resolvers } from './data/resolvers';

// Almacenamos el server en una constante llamada app
const app = express();

// Constante donde almacenamos los Schemas(typeDefs) y los Resolvers usando Apollo Server 
const server = new ApolloServer({typeDefs, resolvers});

//Middleware para conectar Apollo Server - Express
server.applyMiddleware({app});

app.listen({port: 9998}, () => console.log(`El servidor esta corriendo http://localhost:9998${server.graphqlPath}`));



// YA NO USAMOS ESTE EXPRESS PORQUE VAMOS A USAR EL DE APOLLO
/*
// URL /
app.get('/', (req, res) => {
    res.send('Todo Listo');
});

// URL /graphql
app.use('/graphql', graphqlHTTP({
    // Schema que se va a usar
    //schema : schema,          // Forma antigua llave y valor
    schema,                     // Forma con nueva sintaxis con ESC6
    // Utilizar graphiql
    graphiql : true
}));

// Configuracion del puerto
app.listen(8000, () => console.log('El servidor esta funcionando'));
*/