
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

// Rutas
import Pagina3 from './views/1.basico/pages/Pagina3.jsx';
import Pagina2 from './views/1.basico/pages/Pagina2.jsx';
import PaginaInicio from './views/1.basico/pages/PaginaInicio.jsx';

var hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        <Route path="/pagina3" component={Pagina3} />
        <Route path="/pagina2" component={Pagina2} />
        <Route path="/" component={PaginaInicio} />
      </Switch>  
    </Router>  
  </React.StrictMode>,
  document.getElementById('root')
);


