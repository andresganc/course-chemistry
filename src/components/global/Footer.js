// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Footer.css';

class Footer extends Component {
  
  static PropTypes = {
    copyright: PropTypes.string
  };

  render() {
    const { copyright = '&copy; NC - Newsoft Computer / 2019'} = this.props;
    return (
      <div className="Footer">
        <h2>Footer</h2>  
        
        {/* 
        Footer con seguridad activa (No deja imprimir el simbolo &copy;)
        <p>{copyright}}</p>
        */}

        {/* Footer sin seguridad (deja imprimir el simbolo &copy;) */}
        <p dangerouslySetInnerHTML= {{ __html: copyright}}/>
      </div>
    );
  }
}

export default Footer;
