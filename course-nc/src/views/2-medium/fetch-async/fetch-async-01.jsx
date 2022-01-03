
import React, { Fragment, useState, useEffect } from 'react'

const FetchAsync01 = () => {

    const [personage, setPersonage] = useState([])

    
    useEffect(() => {

        apiPersonage()
        
    }, [] )


    const apiPersonage = async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(dataPersonage => setPersonage(dataPersonage))
        
    }

    console.log(personage)
    return (
        <Fragment>
            <h3> FETCH ASYNC AWAIT - REACT </h3>
            { personage.map(data => (
                <Fragment>
                    <p key={data.id}> { data.id }, { data.title  } </p>
                    <p > { data.body  } </p>
                </Fragment>
                
            )) }
        </Fragment>
    )
}

export default FetchAsync01
