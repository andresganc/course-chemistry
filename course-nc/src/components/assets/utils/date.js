

export function getDate(separator =' '){

    // Fecha
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();


    // Dia de la semana en español
    const dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
    ];
      const numeroDia = new Date(newDate).getDay();
      const nombreDia = dias[numeroDia];

    // Mes del año en español 
    const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ]; 

    const numMonth = new Date(newDate).getMonth();
    const nameMonth = meses[numMonth];

    // Return con fecha en numeros
    //return `${date}${separator} ${month<10?`0${month}`:`${month}`}${separator}${year}`
    
    // Return con dia en nombre y fecha en numeros 
    //return `${nombreDia} ${date}${separator} ${month<10?`0${month}`:`${month}`}${separator}${year}`

    // Return con dia en nombre y mes en nombre
    return `${nombreDia} ${date}${separator} ${nameMonth} ${separator}${year}`
}

export function getDay(separator =' '){

    // Fecha
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    // Dia de la semana en español
    const dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
    ];
    
    const numeroDia = new Date(newDate).getDay();
    const nombreDia = dias[numeroDia];


    // Return con fecha en numeros
    //return `${date}${separator} ${month<10?`0${month}`:`${month}`}${separator}${year}`
    
    // Return con dia en nombre y fecha en numeros 
    //return `${nombreDia} ${date}${separator} ${month<10?`0${month}`:`${month}`}${separator}${year}`

    // Return con dia en nombre y mes en nombre
    return `${nombreDia}`
}