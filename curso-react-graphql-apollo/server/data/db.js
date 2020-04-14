
import mongoose, {Schema} from 'mongoose';            // Importacion de libreria Mongoose

mongoose.Promise = global.Promise;          // Crear la conexion

// Conexion con la base de datos
// ('url', {opciones})

// Conexion Local
//mongoose.connect('mongodb://localhost/clientes', {useNewUrlParser: true});

// Conexion Remota
mongoose.connect('mongodb+srv://andresganc:mmdaa12345@nc-mongodb-clusternc-fggwa.gcp.mongodb.net/curso-clientes?retryWrites=true&w=majority', {useNewUrlParser: true});
/*
mongoose.connect('mongodb://andresganc:mmdaa12345@nc-mongodb-clusternc-fggwa.gcp.mongodb.net:27017/curso-clientes?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.connect('mongodb://username:password@host:port/database')
*/


// Clientes - Schema
const clientesSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    emails: Array,
    edad: Number,
    tipo: String,
    pedidos: Array
});

// Creacion del Modelo (Seria como la DB o Tabla)
// ('Nombre de la tabla', NombreDelSchema)
const Clientes = mongoose.model('clientes', clientesSchema );



// Usuarios - Schema
const usuariosSchema = new Schema({
    usuario: String,
    password: String
});

// Usuarios - Modelo
const Usuarios = mongoose.model('users', usuariosSchema);


// Export
export {Clientes, Usuarios};