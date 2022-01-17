
import React, { Fragment, useEffect, useContext } from 'react'

// Context
import UserContext from '../../context/users/user-context.js'

const UsersList = () => {

    const { users, getUsers } = useContext( UserContext )

    useEffect(() => {

        getUsers()
        
    }, [])

    return (
        <Fragment>
            <h3> Users </h3>
            
            {
                users.map( record => (
                    <Fragment>
                        <a>
                            <p key={record.id}> ID : {record.id} </p>
                            <p key={record.id}> Nombre : {record.first_name} </p>
                            <img src={record.avatar}/>
                        </a>
                    </Fragment>
                ))
            }
            
        </Fragment>
    )
}

export default UsersList
