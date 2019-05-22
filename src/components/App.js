// Dependencias
import React, { Component } from 'react';

// Components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

// Data
import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="NC" items={items}/>  
        <Content/> 
        
        {/* ==== Footer cogiendo el valor de items ====*/}
        <Footer/>
        
        {/* 
        // Footer con texto manual
        <Footer copyright="&copy; React 2019" />       
        */}
      </div>
    );
  }
}

export default App;
