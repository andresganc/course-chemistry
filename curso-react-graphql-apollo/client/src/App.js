import React, { Component, Fragment} from 'react';

//import logo from './logo.svg';
//import './App.css';

// Apollo provider - es similar al context API
// Context API: Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.
/* Apollo Provider:
Para conectar Apollo Client a React, deberá utilizar el ApolloProvidercomponente exportado desde @apollo/react-hooks. 
El ApolloProvideres similar a React Context.Provider. Envuelve su aplicación React y coloca al cliente en el contexto, 
lo que le permite acceder desde cualquier parte de su árbol de componentes.
*/

// Apollo Client tiene la configuracion para el funcionamiento
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

// Router con distruction {}
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Componentes
import Header from './components/Header';
import Clientes from './components/Clientes';
import NuevoCliente from './components/NuevoCliente';
import EditarCliente from './components/EditarCliente';

// CONFIG APOLLO CLIENT
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    addTypename: false
  }),
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router> 
          <Fragment> 
            <Header/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Clientes}/>
                <Route exact path="/cliente/nuevo" component={NuevoCliente}/>
                <Route exact path="/cliente/editar/:id" component={EditarCliente}/>
              </Switch>
            </div>
          </Fragment>  
        </Router> 
      </ApolloProvider>
    );
  }
}

export default App;
