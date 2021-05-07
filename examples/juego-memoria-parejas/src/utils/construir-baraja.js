
import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './font-awesome-classes';

// Constante que almacena el numero de cartas maximo 
const NUMERO_DE_CARTAS = 20;

export default () => {

    // Array donde se alamacenan los iconos
    const fontAwesomeClasses = FontAwesomeClasses();
    
    // Array donde se van a almacenar los iconos, referencia del objeto carta, Y si fue adivinada
    let cartas = [];

    // Hace esto mientras no sobre pase el numero de cartas maximo
    while (cartas.length < NUMERO_DE_CARTAS){
        
        // Hacemos un random no mayor al numero total de iconos fontAwesomeClasses
        const index = Math.floor(Math.random() * fontAwesomeClasses.length);
        
        // Extraemos el icono con el comando splice (El que el index tenga asignado por el random) 
        const carta = {
            icono: fontAwesomeClasses.splice(index, 1)[0],
            fueAdivinada: false
        };

        cartas.push(carta);         // Con el comando push se empuja el objeto carta a la baraja
        cartas.push({...carta})     // Se clona y se empuja el objeto para que no tengan la misma referencia y se abran los 2 

        return shuffle(cartas);
    }

};