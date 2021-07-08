import React, {useContext} from 'react'
import {Header as Head} from '../../Components/Header/Component.Header'
import {NavBar} from '../../Components/NavBar/Component.NavBar'
import {Footer} from '../../Components/Footer/Component.Footer'
import {GlobalContext} from '../../AppState/AppState'
import {useRouter} from 'next/router'
import {UserDetail} from '../../Components/User/Component.User'

export default function User(props) {


    return (
        <>

            <Head
                title = 'Người dùng'
            />

            <NavBar />

            <UserDetail />

            <Footer />

        </>
    )
}
