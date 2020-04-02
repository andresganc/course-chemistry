
import React, {Component} from 'react';   // Component se usa para     
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// CREANDO COMPONENTES CON FUNCTION

// Creando un componente y llamandolo en el mismo index.js
// Sin usar el props
function Componente1 (props) {
  return <h2> Este es el componente 1 - Creado con function </h2>
}

// Creando un componente y llamandolo en el mismo index.js
// Usando el props
function Componente2 (props) {
return <h2> {props.title} </h2>
}

// Creando un componente y llamandolo en el mismo index.js
// Usando los props
// Usando Arrow Function (Esto es lo mismo que el componente 2 - Es creado de una forma diferente)
const Componente3 = (props) => <h2> { props.title } </h2>



// CREANDO COMPONENTES CON CLASES
// Es mas aconsejable porque tiene ciertas ventajas
// En las clases se usa el metodo render (Donde se tiene que devolver el elemento que se desea renderizar)
// el render no tiene parametros props por eso cuando se usa hay que usar this
class Componente4 extends Component {
  render() {
    return <h2> {this.props.title} </h2>
  }
}

// Componente para estudiar las props
// Las Props se ordenan en orden alfabetico 
class Componente5 extends Component {
  render() {

    // Ejemplo de ternaria para usar un props
    const textoSegunBool = this.props.boolean ? 'EL PROPS BOOLEAN ES VERDADERO' : 'EL PROPS BOOLEAN ES FALSO'
    const mappedNumbers = this.props.arrayOfNumbers.map (n => n * 2)   // multiplicar cada numero del array antes de multiplicarlos

    return (
      <div>
        <h2> { this.props.title } </h2>
        <p> { this.props.text } </p>
        <p> { this.props.number } </p>
        <p> { this.props.boolean } </p>   {/* No muestra nada (Pero si esta asignado el boolean) */}
        <p> { JSON.stringify(this.props.boolean) } </p>   {/* Si muestra el valor */}
        <p> { textoSegunBool } </p>
        <p> { this.props.arrayOfNumbers } </p>
        <p> { this.props.arrayOfNumbers.join(', ') } </p>   {/* Arrays Separados por una coma */}
        <p> { mappedNumbers.join(', ') } </p>   {/* Arrays Separados por una coma */}
        <p> { this.props.objectWithInfo.key1 } </p>
      </div>
    )
  }
}




ReactDOM.render(
  <React.StrictMode>
    <Componente1 />
    <Componente2 title=" Componente 2 (Creado con function). Usando los props (Propiedades) " />
    <Componente3 title=" Componente 3 (Creado con function). Usando los props (Propiedades) y creado con un Arrow function " />
    <Componente4 title=" Componente 4 (Creado con clases). Usando los this.props (Propiedades)." />
    
    <Componente5 
    arrayOfNumbers = {[ 2, 3, 10]}
    objectWithInfo = {{ key1:'Primer valor', key2:'Otro valor'}}
    title=" Componente 5 (Creado con clases). Usando los this.props." 
    number={2} 
    text="Props text" 
    boolean={true} 
    />

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
