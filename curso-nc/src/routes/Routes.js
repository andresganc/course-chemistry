
import React from 'react';

import { Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

// Rutas
import Pagina3 from '../views/1.basico/pages/Pagina3.jsx';
import Pagina2 from '../views/1.basico/pages/Pagina2.jsx';
import PaginaInicio from '../views/1.basico/pages/PaginaInicio.jsx';

var hist = createBrowserHistory();

function Routes() {
    return (
        <Router history={hist} >
            <Switch>
                <BrowserRouter>
                    <Route exact path="/pagina3" component={Pagina3} />
                    <Route exact path="/pagina2" component={Pagina2} />
                    <Route exact path="/" component={PaginaInicio} />
                    <Route exact path={History} />
                </BrowserRouter>
            </Switch>
        </Router>

    );
}

export default Routes;

