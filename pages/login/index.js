import React from 'react'
import {Header as Head} from '../../Components/Header/Component.Header'
import {NavBar} from '../../Components/NavBar/Component.NavBar'
import {Footer} from '../../Components/Footer/Component.Footer'
import {Authentication} from '../../Components/Authentication/Component.Authentication'

export default function Login() {
    return (
        <>
            <Head
                title = 'Đăng nhập'
            />

            <NavBar />


            <Authentication />

            <Footer />
        </>
    )
}

