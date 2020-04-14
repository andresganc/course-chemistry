import gpl from "graphql-tag";

export const CLIENTES_QUERY = gpl`{
  getClientes{
    id
    nombre
    apellido
    empresa
    edad
  }
}`;