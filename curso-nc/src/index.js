
import React from 'react';
import ReactDOM from 'react-dom';

// Componentes
import HolaMundoCruel from './components/HolaMundo';
import ChaoMundo from './components/ChaoMundo';



ReactDOM.render(
  <React.StrictMode>
    <HolaMundoCruel />
    <ChaoMundo />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


