
import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Rutas
import Pagina3 from '1-basic/routes/Pagina3';
import Pagina2 from '1-basic/routes/Pagina2';
import PaginaInicio from '1-basic/routes/PaginaInicio';
import NoFound from '1-basic/routes/PaginaNoFound';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/pagina3" component={Pagina3} />
                <Route exact path="/pagina2" component={Pagina2} />
                <Route exact path="/" component={PaginaInicio} />
                <Route component={NoFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
