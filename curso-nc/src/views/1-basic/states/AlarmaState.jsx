
import React from 'react';

// Assets
import ImagenAlarmaFalse from '../../assets/img/alarm-azul.png';
import ImagenAlarmaTrue from '../../assets/img/alarm-notifications.png';

class EstadoAlarma extends React.Component {
    
    state = {
        estadoAlarma: false
     }

     cambiarEstado = () => {

         if (this.state.estadoAlarma == false ) {

            this.setState({
                estadoAlarma: true
            });

         }else if  (this.state.estadoAlarma == true ) {

            this.setState({
                estadoAlarma: false
            });
     }

    }
    // Metodo Render
    render() {

        if(this.state.estadoAlarma == false ) {

            return(
            <div>
            <img src={ImagenAlarmaFalse} alt="" width="20px"/>
            <button onClick={this.cambiarEstado}> Me gusta </button>
            </div>
            );

        }else if (this.state.estadoAlarma == true){

            return(
            <div>
            <img src={ImagenAlarmaTrue} alt="" width="20px"/>
            <button onClick={this.cambiarEstado}> No me gusta </button>
            </div>
            );
        }
    }
}
export default EstadoAlarma;