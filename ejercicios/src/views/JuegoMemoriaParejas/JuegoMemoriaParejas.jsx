import React, {Component} from 'react';

// Componentes
import Header from './components/Header';

// Styles
import StylesMain from './assets/styles/main';

class JuegoMemoriaParejas extends Component {
    render() {
        return(
            <div style={StylesMain.body}>
                <Header />
            </div>
        );
    }
}

export default JuegoMemoriaParejas;