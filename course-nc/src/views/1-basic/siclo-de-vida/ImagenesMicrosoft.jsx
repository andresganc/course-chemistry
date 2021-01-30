
import React, { Component } from "react";



class ImagenesMicrosoft extends Component {

  constructor(...props) {
    super(...props);
    this.state = { attitude: "feliz", repos: [], rndPhoto: "" };
  }

  
  componentDidMount() {
    fetch("https://api.github.com/users/Encamina/repos")
      .then(response => response.json())
      .then(resp => this.setState({ repos: resp }))
      .catch(err => console.log(err.message));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.attitude !== this.state.attitude) {
      fetch(`https://source.unsplash.com/featured/?microsoft`)
        .then(response => {
          this.setState({ rndPhoto: response.url });
        })
        .catch(err => console.log(err.message));
    }
  }

  changeStatus() {
    const { attitude } = this.state;
    attitude === "feliz"
      ? this.setState({ attitude: "contento" })
      : this.setState({ attitude: "feliz" });
  }

  render() {

    const { attitude, repos, rndPhoto } = this.state;

    return (
      <div>
        <div >
          <h1  > Piensa en colores </h1>
          <h2>Nuestro Rodolfo hoy está {attitude}.</h2>
          <button onClick={() => this.changeStatus()}>Cambiar estado</button>
          <hr />
        </div>
        <h2> Listado de repositorios de ENCAMINA: </h2>
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>{repo.full_name}</li>
          ))}
        </ul>
        <hr />
        <img id="photo" alt="imagen random" src={rndPhoto} />
        <hr />
      </div>
    );

  }
}

export default ImagenesMicrosoft;