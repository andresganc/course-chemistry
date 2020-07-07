
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Routes
import PageMain from 'pages/PageMain';
import PageJuego from 'pages/PageJuego';
import PageRecords from 'pages/PageRecords';
import PageSucces from 'pages/PageSucces';
import PageError from 'pages/PageError';

function routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/succes" component={PageSucces} />
                <Route exact path="/records" component={PageRecords} />
                <Route exact path="/juego" component={PageJuego} />
                <Route exact path="/" component={PageMain} />
                <Route component={PageError} />
            </Switch>
        </BrowserRouter>
    );
}

export default routes;