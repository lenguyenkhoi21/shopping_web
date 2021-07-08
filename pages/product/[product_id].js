import React, {useContext} from 'react'
import axios from 'axios'
import {API_DIR} from '../../Common/API'
import {Header as Head} from '../../Components/Header/Component.Header'
import {Footer} from '../../Components/Footer/Component.Footer'
import {NavBar} from '../../Components/NavBar/Component.NavBar'
import {DetailProduct} from '../../Components/Products/Component.Detail'

export default function Detail(props) {
    return (
        <>
            <Head
                title = {props.data.name}
            />

            <NavBar />

            <DetailProduct product = {props.data} />

            <Footer />
        </>
    )
}

export async function getStaticPaths() {
    const data = await axios.get(`${API_DIR}/api/fetch/number`)
    const paths = []

    for (let i = 1; i <= data.data.count; i++) {
        paths.push({params: {product_id: i.toString()}})
    }

    return {paths : paths, fallback: true}
}

export async function getStaticProps({ params }) {
    const data = await axios.get(`${API_DIR}/api/fetch/${params.product_id}`)

    return {
        props : { data : data.data},
        revalidate: 1
    }
}




