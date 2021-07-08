import React from 'react'
import {Header as Head} from '../Components/Header/Component.Header'
import {Footer} from '../Components/Footer/Component.Footer'
import {NavBar} from '../Components/NavBar/Component.NavBar'
import {HomePage} from '../Components/HomePage/Component.HomePage'

export default function Home(props) {

    return (
        <>
            <Head
                title = 'Trang Chủ'
            />

            <NavBar />

            <HomePage />

            <Footer />
        </>
    )
}




