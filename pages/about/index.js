import React from 'react'
import {Header as Head} from '../../Components/Header/Component.Header'
import {NavBar} from '../../Components/NavBar/Component.NavBar'
import {Footer} from '../../Components/Footer/Component.Footer'
import {AboutDetail} from '../../Components/About/Component.About'

export default function About(props) {
    return (
        <>
            <Head
                title = 'Liên hệ'
            />

            <NavBar />

            <AboutDetail />

            <Footer />
        </>
    )
}

