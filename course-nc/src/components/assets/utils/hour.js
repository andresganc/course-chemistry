
import React, { Fragment, useState, useEffect } from 'react'

// NC Components base
import H4 from 'components/h4'

const Hour = () => {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <Fragment>
              
            <H4 textGray900> {`${dateTime.toLocaleTimeString()}`} </H4>

            {/* 
            Fecha & Hora
            <Typography> {`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`} </Typography>
            */}
        </Fragment>
    )
}

export default Hour



/* 
// JS
export function getHour(){

    // Hora
    let newDate = new Date()
    let hours = newDate.getHours()
    let minutes = newDate.getMinutes()
    let seconds = newDate.getSeconds()

    if (hours < 10) hours = 0 + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    //$("#HoraActual").text(hours+ ":" +minutes+ ":" +seconds);
    

    var formatHour = hours + ':' + minutes + ':' + seconds;
    return formatHour

    //setTimeout(getHour(), 1000);
}
*/