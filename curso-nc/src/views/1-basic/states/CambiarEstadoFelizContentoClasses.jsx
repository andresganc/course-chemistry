
import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class CambiarEstadoFelizContento extends Component {
  constructor(...props) {
    super(...props);
    this.state = { attitude: "feliz" };
  }

  changeStatus() {
    const { attitude } = this.state;
    attitude === "feliz"
      ? this.setState({ attitude: "contento" })
      : this.setState({ attitude: "feliz" });
  }

  render() {
    const { attitude } = this.state;
    return (
      <div className="App">
        <h1>Piensa en colores</h1>
        <h2>Nuestro Rodolfo hoy está {attitude}.</h2>
        <button onClick={() => this.changeStatus()}>Cambiar estado</button>
      </div>
    );
  }
}

export default CambiarEstadoFelizContento;