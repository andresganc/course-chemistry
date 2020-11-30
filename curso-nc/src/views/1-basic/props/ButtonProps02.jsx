

import React, { Fragment, Component } from 'react';

// Styles Material UI
import { makeStyles } from '@material-ui/core/styles';



class PropsButton extends Component {

    
    //const {texto, colordefondo} = this.props
      
    render() {
        return (
            <Fragment>
                <button
                    
                    style={{
                        backgroundColor: `${this.props.colordefondo}`
                    }}
                > { props.texto } </button>
            </Fragment>
        );
    }
}

export default PropsButton;