import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  
  // Constructor: clase inicial por donde arranca un objeto 
  constructor(){
    // El metodo super se debe usar en los constructores para tener acceso al metodo this
    super();

    this.state = {
      count: 0,
      number1: 0,
      number2: 0,
      result: 0
    };

    // Se usa para que el metodo handle tenga acceso al state, props, this etc.
    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // Metodo existente en el sistema
  // componentDidMount: Metodo que verifica si el componente ya cargo
  // La actualizacion se hace del compponente se hace por aqui
  componentDidMount() {
    this.setState({
      count: 1
    });
  }

  // Metodo creado por el usuario
  // Metodo que se crea para que realize las acciones de sumas, restas y reset
  // Por convencion los metodos que vayan a realizar acciones de click o change se deben de nombrar handledClick o handledChange
  handleCountClick(e){
    
    if (e.target.id === 'add'){
      this.setState({
        count: this.state.count + 1
      });
    } else if (e.target.id === 'subtract' && this.state.count > 0){
      this.setState({
        count: this.state.count - 1
      });
    } else {
      this.setState({
        count: 0
      });
    }
      
    // operaciones con resta en numeros negativos
    {/* 
    if (e.target.id === 'add'){
      this.setState({
        count: this.state.count + 1
      });
    }

    if (e.target.id === 'subtract'){
      this.setState({
        count: this.state.count - 1
      });
    }

    if (e.target.id === 'reset'){
      this.setState({
        count: this.state.count = 0
      });
    }
    */}
  }

  handleResultClick(){
    this.setState({
      result: this.state.number1 + this.state.number2
    });
  }

  handleInputChange(e){
    if (e.target.id === 'number1'){
      this.setState({
        number1: Number(e.target.value)
      });
    } else {
      this.setState({
        number2: Number(e.target.value)
      });    
    }
  }


  render() {
    return (
      <div className="Content">
        <h1>Contenido</h1>
        <p>Hola soy el contenido</p>

        <br></br>
        
        <h2>Contador</h2>
        <p>Estado del contador: {this.state.count}</p>

        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="subtract" onClick={this.handleCountClick}>-</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>

        <br></br>

        <h2>Calculadora</h2>

        <p>
          <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChange}/>
          +
          <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChange}/>   
          <button id="result" onClick={this.handleResultClick}>=</button>
          <p>Resultado: {this.state.result}</p>
        </p>

      </div>
    );
  }
}

export default Content;
