
import React, { Fragment, useState, useEffect } from 'react'

const FetchPromisesWithImages = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const loadingData = async () => {
            try {

                const url = 'https://jsonplaceholder.typicode.com/albums/1/photos'
                let dataAPI = await fetch(url)
                let dataJson = await dataAPI.json()
                console.log(dataJson)
                setData(dataJson)

            } catch (error) {

                console.log(error)

            }
        }

        loadingData()

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
                                <h4> ID {record.id} </h4>
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
