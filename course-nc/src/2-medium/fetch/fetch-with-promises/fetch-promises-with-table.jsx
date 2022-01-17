
import React, { Fragment, useState, useEffect } from 'react'

const FetchPromisesWithTable = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then( response => response.json() )
        .then( dataAPI => setData(dataAPI) )
        .catch( err => console.log(err))
        
    }, [])

    console.log(data)

    return (
        <Fragment>
            <h3> FETCH PROMISES WITH TABLE </h3>
            <table>
                <thead>
                    <th>ID</th>
                    <th>USER</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                </thead>
                <tbody>
                    {
                        data.map(record => (
                            <Fragment>

                                <tr>
                                    <td> {record.id} </td>
                                    <td> {record.username} </td>
                                    <td> {record.name} </td>
                                    <td> {record.email} </td>
                                </tr>

                            </Fragment>
                        ))
                    }
                </tbody>
            </table>

        </Fragment>
    )
}

export default FetchPromisesWithTable
