import React, {useContext} from 'react'
import {Header as Head} from '../../Components/Header/Component.Header'
import {NavBar} from '../../Components/NavBar/Component.NavBar'
import {Products} from '../../Components/Products/Component.Products'
import {Footer} from '../../Components/Footer/Component.Footer'
import axios from 'axios'
import {API_DIR} from '../../Common/API'

export default function Product(props) {

    return (
        <>
            <Head
                title = 'Sản Phẩm'
            />

            <NavBar />

            <Products data = {props.data} />

            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const data = await axios.get(`${API_DIR}/api/fetch`)

    return {
        props : { data : data.data.products},
    }
}




