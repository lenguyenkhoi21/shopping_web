import React from 'react'
import {Header as Head} from '../../Components/Header/Component.Header'
import {NavBar} from '../../Components/NavBar/Component.NavBar'
import {Footer} from '../../Components/Footer/Component.Footer'

export default function About(props) {
    return (
        <>
            <Head
                title = 'Liên hệ'
            />

            <NavBar />

            <div className={`container empty`}>

            </div>

            <Footer />
        </>
    )
}

