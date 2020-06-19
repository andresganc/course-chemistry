

import React from 'react';

// Componentes Material UI
import Button from '@material-ui/core/Button';

// Icons Material UI
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';

class AumentarNumeroConBoton extends React.Component {
    state = {
        cuenta: 0
    };

    render(){
        return(
            <div>
                La cuenta es: {this.state.cuenta}
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={() => this.setState({ cuenta: this.state.cuenta + 1})}
                >
                    Aumentar
                </Button>
            </div>
        );
    }
}

export default AumentarNumeroConBoton;