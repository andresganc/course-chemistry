
import React, { Fragment } from 'react'

// Context
import UserState from './context/users/user-state.js'

//Components
import Profile from './components/users/Profile'
import UsersList from './components/users/UsersList'

function useContextAPIUser() {
    return (
        <Fragment>
            <UserState>
                <h2> API USECONTEXT</h2>
                <Profile />
                <UsersList />
            </UserState>
        </Fragment>
    )
}

export default useContextAPIUser
