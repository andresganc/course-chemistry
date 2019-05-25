// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {

    // Forma normal de obtener valores
    /*
    const title = this.props.title;
    const items = this.props.items;
    */

    // Forma nueva de obtener valores con ES6 cundo hay varios
    const {title, items} = this.props;

    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h2 className="App-title">{title}</h2>

          <ul className="Menu">
            {
              items && items.map(
                (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
              )
            }
          </ul>

        </header>
        
      </div>
    );
  }
}

export default Header;
