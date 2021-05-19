
import { Fragment } from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// Routes
import PageMenuInicio from 'pages/MenuInicio'
import PageContador from '../pages/Contador'
import PageContadorHoras from '../pages/ContadorHorasJonMircha'
import PageError from '../pages/ErrorPage'

const routes = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Redirect exact from='/' to='/menu-inicio' component={ PageMenuInicio } />
                    <Route exact path='/menu-inicio' component={ PageMenuInicio }  />
                    <Route exact path='/contador' component={ PageContador }  />
                    <Route exact path='/contador-horas' component={ PageContadorHoras }  />
                    <Route component={ PageError } exact />
                </Switch>
            </Router>
        </Fragment>  
    )
}

export default routes
