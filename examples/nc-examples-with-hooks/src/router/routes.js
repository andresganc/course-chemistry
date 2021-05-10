
import { Fragment } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Routes
import PageInicio from 'layouts/Layout'
import PageContador from '../pages/Contador'
import PageContadorHoras from '../pages/ContadorHorasJonMircha'
import PageError from '../pages/ErrorPage'

const routes = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path='/' component={ PageInicio } />
                    <Route exact path='/contador' component={ PageContador }  />
                    <Route exact path='/contador-horas' component={ PageContadorHoras }  />
                    <Route component={ PageError } exact />
                </Switch>
            </Router>
        </Fragment>  
    )
}

export default routes
