
//Ahora importamos también useEffect
import React, { useState, useEffect } from "react";


const ImagenesMicrosoftHook = () => {
  const [attitude, setAttitude] = useState("feliz");
  const [repos, setRepos] = useState([]);
  const [rndPhoto, setPhoto] = useState("");

  //UseEffect() es como crear un watcher que se ejecuta siempre que se crea o cambia el objeto vigilado
  //y se crea de la siguiente forma: useEffec(función_a_ejecutar,elemento_vigilado)
  //si le pasamos un array vacío, entiende que no tiene que vigilar a nadie y solo
  //se ejecutará una única vez (como el componentDidMount y componentWillUnmount)
  useEffect(() => {
    fetch("https://api.github.com/users/Encamina/repos")
      .then(response => response.json())
      .then(resp => setRepos(resp))
      .catch(err => console.log(err.message));
  }, []);

  //Además del caso anterior que nuestro efecto solo se ejecutará una única vez
  //vamos a hacer un efecto para que se ejecute cada vez que cambie el objeto de attitude
  //pensar que esto se puede "suscribir" como ahora a un objeto del estado, pero también
  //a una prop, por ejemplo.
  useEffect(() => {
      fetch(`https://source.unsplash.com/featured/?microsoft`)
        .then(response => {
          setPhoto(response.url);
        })
        .catch(err => console.log(err.message));
    },
    [attitude]
  );

  const changeStatus = () => {
    // Condicionador declarativo (No uso de if imperativo)
    attitude === "feliz" ? setAttitude("contento") : setAttitude("feliz");
  };

  return (
    <div>
      <div className="App">
        <h1>Piensa en colores</h1>
        <h2>Estoy {attitude}.</h2>
        <button onClick={changeStatus}> Cambiar estado </button>
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
};

export default ImagenesMicrosoftHook;