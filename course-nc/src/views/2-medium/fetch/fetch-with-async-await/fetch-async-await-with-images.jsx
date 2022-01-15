
import React, { Fragment, useState, useEffect } from 'react'

const FetchPromisesWithImages = () => {

    const [data, setData] = useState([])

    useEffect( async () => {

        try {

            const url = 'https://jsonplaceholder.typicode.com/albums/1/photos'
            let dataAPI = await fetch(url) 
            let dataJson = await dataAPI.json()
            console.log(dataJson)
            setData(dataJson)

        } catch (error) {
            
            console.log(error)

        }
        
    }, [])

    console.log(data)

    return (
        <Fragment>
            <h3> FETCH ASYNC AWAIT WITH IMAGES </h3>

            {
                data.map(record => (
                    <Fragment>
                        <div>
                            <div>
                                <h6> ID {record.id} </h6>
                                <p> Title: {record.title} </p>
                            </div>

                            <div>
                                <img src={record.thumbnailUrl} />
                            </div>
                        </div>
                    </Fragment>
                ))
            }
            
        </Fragment>
    )
}

export default FetchPromisesWithImages
