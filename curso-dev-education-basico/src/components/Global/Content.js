// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Content.css';

class ContentBody extends Component {

  static PropTypes = {
    body: PropTypes.object.isRequired
  };
  
  render() {
    const {body} = this.props;

    return (
      <div className="Content">
        {body}  
      </div>
    );
  }
}

export default ContentBody;