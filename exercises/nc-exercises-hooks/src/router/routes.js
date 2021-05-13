
import { Fragment } from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// Routes
import PageInicio from 'layouts/Layout'
import PageDashboard from 'pages/Dashboard'
import PageContador from '../pages/Contador'
import PageContadorHoras from '../pages/ContadorHorasJonMircha'
import PageError from '../pages/ErrorPage'

const routes = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Redirect exact from='/' to='/dashboard' component={ PageDashboard } />
                    <Route exact path='/dashboard' component={ PageDashboard }  />
                    <Route exact path='/contador' component={ PageContador }  />
                    <Route exact path='/contador-horas' component={ PageContadorHoras }  />
                    <Route component={ PageError } exact />
                </Switch>
            </Router>
        </Fragment>  
    )
}

export default routes
