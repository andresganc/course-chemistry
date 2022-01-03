
import React, { Fragment, useState, useEffect } from 'react'

const FetchAsyncReactNormal = () => {

    const [data, setData] = useState([])

    
    useEffect(() => {

        apiData()
        
    }, [] )


    const apiData = async () => {
        const api = 'https://jsonplaceholder.typicode.com/users'
        const result = await fetch(api)
        const getResult = await result.json()
        setData(getResult)
        //.then(response => response.json())
        //.then(dataPersonage => setPersonage(dataPersonage))
        
    }

    console.log(data)
    return (
        <Fragment>
            <h3> FETCH ASYNC AWAIT REACT - MODE NORMAL </h3>
            { data.map(record => (
                <Fragment>
                    <p key={record.id}> Id: { record.id }, Name: { record.name }, Username: { record.username  } </p>
                    <p > Email: { record.email  } </p>
                </Fragment>
                
            )) }
        </Fragment>
    )
}

export default FetchAsyncReactNormal
