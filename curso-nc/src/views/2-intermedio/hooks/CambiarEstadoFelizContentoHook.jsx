
import React, { useState } from "react";

// Componentes Material UI
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      fontFamily: "sans-serif",
      textAlign: "center"
    },
    h1: {
      backgroundImage: "-webkit-linear-gradient(left, rgb(0, 87, 0), #69a3da, #ff0000)",
      color: "white",
      webkitBackgroundClip: "text",
      backgroundClip: "text"
    }
})

const CambiarEstadoFelizContento = () => {

  const classes = useStyles();
  //De esta forma definimos un nuevo elemento en el estado de este componente.
  //[nombre,asignador] siempre se instancia de esta forma par.
  //= useState('feliz') con esto decimos que es un objeto de estado y
  //le pasamos un valor por defecto, puede ser un entero, string, boleano... o incluso un objeto json.
  const [attitude, setAttitude] = useState("feliz");

  const changeStatus = () => {
    //Para cambiar el valor de nuestro objeto del estado,
    //simplemente llamamos a su "seteador"
    attitude === "feliz" ? setAttitude("contento") : setAttitude("feliz");
  };

  return (
    <div className="App" className={classes.root}>
      <h1 className={classes.h1}>Piensa en colores</h1>
      <h2>Nuestro Rodolfo hoy está {attitude}.</h2>
      <button onClick={changeStatus}>Cambiar estado</button>
    </div>
  );
};

export default CambiarEstadoFelizContento;
