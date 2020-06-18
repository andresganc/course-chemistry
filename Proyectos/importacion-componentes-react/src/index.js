import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Componentes NC
import Prueba from './views/components/Prueba';
import Carousel from 'views/components/Carousel';

ReactDOM.render(
  <React.StrictMode>
    <Prueba />
    <Carousel />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
