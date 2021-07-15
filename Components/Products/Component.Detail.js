import React, {useContext, useState} from 'react'
import Image from 'next/image'
import {GlobalContext} from '../../AppState/AppState'
import styles from '../../styles/ProductItem.module.css'
import {useRouter} from 'next/router'

export const DetailProduct = (props) => {
    const context = useContext(GlobalContext)
    const router = useRouter()

    const addToCart = (event, product) => {
        event.preventDefault()
        // const add = {
        //     product_id : product.product_id,
        //     name : product.name,
        //     price : product.price,
        // }
        const navigate = () => {
            router.push('/cart')
        }
        context.addToCartExport(product, navigate)
    }

    return (
        <div className={`container blank`}>
            <div className={`row ${styles.around}`}>
                <div className={`col-sm-3`}/>
                <div className={`col-sm-6`}>
                    <div className={`${styles.itemContainer}`}>
                        <div className={`${styles.image}`}>
                            <Image
                                src={props.product.image}
                                height={200}
                                width={200}
                                alt={props.product.name}
                                className={`${styles.imageBorder}`}
                            />
                        </div>

                        <div className={`${styles.content}`}>
                            <p className={`${styles.productName}`}> {props.product.name} </p>
                            <p>
                                <span className={`${styles.productSubtitle}`}> Mô tả: </span>
                                <span className={`${styles.productDescription}`}> {props.product.description} </span>
                            </p>
                            <p>
                                <span className={`${styles.productSubtitle}`}> Giá: </span>
                                <span className={`${styles.productPrice}`}>
                                    {props.product.price}
                                    <span> </span>
                                    <span className={`${styles.productCurrency}`}>VNĐ</span>
                                </span>
                            </p>
                            <div>
                                <button
                                    onClick={event => {addToCart(event, props.product)}}
                                    className={`btn btn-danger btn-lg`}
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-sm-3`}/>
            </div>

        </div>
    )
}

