import React, {useContext, useState} from 'react'
import Image from 'next/image'
import {GlobalContext} from '../../AppState/AppState'

export const DetailProduct = (props) => {
    const context = useContext(GlobalContext)
    const [count, setCount] = useState(0)

    const addToCart = (event, product) => {
        event.preventDefault()
        // const add = {
        //     product_id : product.product_id,
        //     name : product.name,
        //     price : product.price,
        // }

        context.addToCartExport(product)
    }

    return (
        <div className={`container blank`}>
            <p> {props.product.name} </p>
            <p> {props.product.description} </p>
            <p> {props.product.price} </p>
            <Image src={props.product.image} height={200} width={200} alt={props.product.name} />
            <div>
                <button onClick={event => {addToCart(event, props.product)}}> Thêm vào giỏ hàng </button>
            </div>
            <p> Tổng: {count} </p>
        </div>
    )
}

