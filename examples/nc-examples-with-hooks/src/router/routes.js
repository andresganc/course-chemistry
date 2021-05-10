
import { Fragment } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Routes
import PagInicio from 'layouts/Layout'
import PagContadorHoras from '../pages/ContadorHorasJonMircha'
import PageError from '../pages/ErrorPage'

const routes = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path='/' component={ PagInicio } />
                    <Route exact path='/contador-horas' component={ PagContadorHoras }  />
                    <Route exact path='/contador' component={ PagContadorHoras }  />
                    <Route component={ PageError } exact />
                </Switch>
            </Router>
        </Fragment>  
    )
}

export default routes
