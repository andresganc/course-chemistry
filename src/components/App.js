import React, { Component } from 'react';


// Components
import Header from './inicio/Header';
import Content from './inicio/Content';
import Footer from './inicio/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>  
        <Content/> 
        <Footer/>       
      </div>
    );
  }
}

export default App;
