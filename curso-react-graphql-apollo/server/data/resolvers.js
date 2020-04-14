
import mongoose from 'mongoose';
import {Clientes} from './db';
import { rejects } from 'assert';

// Export Nuevo con schema.graphql, GraphQL Tools y GraphQL Import
export const resolvers = {
    // Query y Mutation Funciones de GraphQL Tools para hacer Mapeo
    Query: {
        // Resolver para obtener todos los clientes (getClientes)
        getClientes: () => {
            return Clientes.find({})
        },
        // Resolver para obtener clientes con un limite de registros (getClientesLimite)
        getClientesLimite: (root, {limite}) => {
            return Clientes.find({}).limit(limite)
        },
        // Resolver para obtener un cliente por su id (getCliente)
        getCliente : (root, {id}) => {
            return new Promise((resolve, object) => {
                Clientes.findById(id, (error, cliente) => {
                    if(error) rejects(error)
                    else resolve(cliente)
                });
            });
        },
    },
    Mutation: {
        crearCliente : (root, {input}) => {
            const nuevoCliente = new Clientes ({
                nombre : input.nombre,
                apellido : input.apellido,
                empresa : input.empresa,
                emails : input.emails,
                edad : input.edad,
                tipo : input.tipo,
                pedidos : input.pedidos
            });
            // Propiedad del id
            nuevoCliente.id = nuevoCliente._id;

            // Con el Promise guardamos en la base de datos de MongoDB
            return new Promise((resolve, Object) => {
                nuevoCliente.save((error) => {      // Se hace un CallBack para saber si se inserto o no se inserto el registro
                    if(error) rejects(error)        // Si hay error hacemos un rejects lo nos muestra en consola
                    else resolve(nuevoCliente)      // De lo contrario hacemos un resolve y Guardaria
                });
            });
        },
        actualizarCliente: (root, {input}) => {
            return new Promise((resolve, object) => {
                Clientes.findOneAndUpdate({ _id: input.id}, input, {new: true}, (error, cliente) => {
                    if(error) rejects(error)
                    else resolve(cliente)
                });
            });
        },
        eliminarCliente: (root, {id}) => {
            return new Promise((resolve, object) => {
                //Clientes.remove   // Se puede usar remove tambien
                Clientes.findOneAndRemove({_id: id}, (error) => {
                    if (error) rejects(error)
                    else resolve("Se elimino correctamente")
                });
            });
        }
    }
}
