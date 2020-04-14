// Archivo nuevo donde se importaran todos los schemas.graphql, resolvers

/*
====== Destructuring assignment {resolver} ======
La sintaxis de destructuring assignment es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos 
usando una sintaxis que equivale a la construcción de arreglos y objetos literales.
({a, b} = {a:1, b:2})
Algo particularmente útil que puedes hacer con destructuring assignment es leer una estructura completa en una sola sentencia, 
aunque también hay un monton de cosas interesantes que puedes hacer, como se muestra en los siguientes ejemplos.
import {resolver} from './resolvers'; 
*/

// Ya no lo usamos por que instalamos Apollo Server
//import { resolvers } from './resolvers';

import { importSchema } from 'graphql-import';                // Libreria para importar de archivos .graphql

// Ya no lo usamos por que instalamos Apollo Server
//import { makeExecutableSchema } from 'graphql-tools';          // Libreria para ejecutar Schemas

const typeDefs = importSchema('data/schema.graphql');       // Importamos el archivo schema.graphql

// Ya no lo usamos por que instalamos Apollo Server
//const schema = makeExecutableSchema({typeDefs, resolvers}); // Para crear el Schema con los TypeDefs y Resolvers

export { typeDefs} ;        // Exportacion como objeto {schema}

