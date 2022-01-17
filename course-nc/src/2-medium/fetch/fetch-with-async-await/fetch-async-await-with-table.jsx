
import React, { Fragment, useState, useEffect } from 'react'

const FetchPromisesWithTable = () => {

    const [data, setData] = useState([])

    useEffect(async () => {

        try {

            const url = 'https://jsonplaceholder.typicode.com/users'
            let dataAPI = await fetch(url)
            let dataJson = await dataAPI.json()
            console.log(dataJson)
            setData(dataJson)
            
        } catch (error) {
            
            console.log(error)

        }

        

    }, [])

    return (
        <Fragment>
            <h3> FETCH ASYNC AWAIT WITH TABLE </h3>
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
