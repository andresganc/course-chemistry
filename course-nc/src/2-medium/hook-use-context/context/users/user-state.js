
import React, { useReducer } from 'react';

// Reducers
import UserReducer from './user-reducer' 

// Context
import UserContext from './user-context'


const UserState = (props) => {

    const initialState = {
        users: [],
        selectUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)
    
    const getUsers = async () => {
        
        const url = 'https://reqres.in/api/users'
        let res = await fetch(url)
        let dataJson = await res.json()
        dispatch({
            type: 'GET_USERS',
            payload: dataJson.data
        })
        console.log(dataJson)

    }
    
    const getProfile = async (id) => {

        const url = "https://reqres.in/api/users/" + id
        let res = await fetch(url)
        let dataJson = await res.json()
        dispatch({
            type: 'GET_PROFILE',
            payload: dataJson.data
        })
        console.log(dataJson)

    }

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile,
        }} >
            { props.children }
        </UserContext.Provider>
    )

}

export default UserState


