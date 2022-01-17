
import React, { Fragment, useState, useEffect } from 'react'

const FetchReactPromises = () => {

    const [data, setData] = useState([])

    
    useEffect(() => {

        apiData()
        
    }, [] )


    const apiData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(dataApi => setData(dataApi))
        
    }

    console.log(data)
    return (
        <Fragment>
            <h3> FETCH REACT - THEN </h3>
            { data.map(record => (
                <Fragment>
                    <p key={record.id}> Id: { record.id }, Name: { record.name }, Username: { record.username  } </p>
                    <p > Email: { record.email  } </p>
                </Fragment>
                
            )) }
        </Fragment>
    )
}

export default FetchReactPromises
