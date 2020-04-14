
import React from 'react';

// Assets
import Alarma from '../../assets/img/alarm-azul.png';
import AlarmaNotificacion from '../../assets/img/alarm-notifications.png';


class Estados extends React.Component {

    state = {
        alarmMostrar: true
    }

    render() {

        if (this.state.alarmMostrar === false) {
            return (
                <div>
                    <h2>Alarma</h2>
                    <a href="#">
                    <img src={Alarma} alt="Alarma" width="24px" />
                    </a>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>Alarma Notificacion</h2>
                    <img src={AlarmaNotificacion} alt="Alarma notificacion" width="24px" />
                </div>
            );
        }
    }

}

export default Estados;