
import React, { Fragment, useState, useEffect } from 'react'

const FetchPromisesWithImages = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const url = 'https://jsonplaceholder.typicode.com/albums/1/photos'
        fetch(url)
        .then( response => response.json() )
        .then( dataAPI => setData(dataAPI) )
        .catch( err => console.log(err) )  
        
    }, [])

    console.log(data)

    return (
        <Fragment>
            <h3> FETCH PROMISES WITH IMAGES </h3>

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
