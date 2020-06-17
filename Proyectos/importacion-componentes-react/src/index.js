import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Componentes Material UI


// Componentes MAterial Kit


// Componentes NC
import Prueba from './views/components/Prueba';


ReactDOM.render(
  <React.StrictMode>
    <Prueba />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
