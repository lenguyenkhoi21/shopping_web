import React, {useContext} from 'react'
import {Header as Head} from '../../Components/Header/Component.Header'
import {NavBar} from '../../Components/NavBar/Component.NavBar'
import {Footer} from '../../Components/Footer/Component.Footer'
import {UserDetail} from '../../Components/User/Component.User'
import {GlobalContext} from '../../AppState/AppState'
import {Authentication} from '../../Components/Authentication/Component.Authentication'

export default function User() {
    const context = useContext(GlobalContext)

    let view

    if (context.store.user.phone===null) {
        view = <Authentication />
    } else {
        view = <UserDetail />
    }

    return (
        <>

            <Head
                title = 'Người dùng'
            />

            <NavBar />

            {view}

            <Footer />
        </>
    )
}
