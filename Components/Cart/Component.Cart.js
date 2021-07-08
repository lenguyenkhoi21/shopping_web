import React, {useContext} from 'react'
import Image from 'next/image'
import {GlobalContext} from '../../AppState/AppState'

export const CartList = (props) => {
    const context = useContext(GlobalContext)
    return (
        <div className={`container blank`}>
            {
                props.cart.map((value, index) => (
                    <div key={index}  className={`border`}>
                        <p> Mã sản phẩm {value.product_id} </p>
                        <p> Tên sản phẩm: {value.name} </p>
                        <p> Đơn giá: {value.price} </p>
                        <p> Số lượng: {value.count} </p>
                        {/*<Image src={value.image} height={200} width={200} alt={value.name} />*/}
                    </div>
                ))
            }

            <p> Tổng: {context.store.total} </p>
        </div>
    )
}


