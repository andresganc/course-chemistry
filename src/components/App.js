// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

// Data
import items from '../data/menu';

class App extends Component {
  static PropTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const {children} = this.props;

    return (
      <div className="App">
        <Header title="NC" items={items}/>  
        
        <Content body={children}/> 
        
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
