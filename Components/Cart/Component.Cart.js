import React, {useContext} from 'react'
import Image from 'next/image'
import {GlobalContext} from '../../AppState/AppState'
import axios from 'axios'
import {API_DIR} from '../../Common/API'
import {useRouter} from 'next/router'

export const CartList = (props) => {
    const context = useContext(GlobalContext)
    const router = useRouter()

    const clear = (event) => {
        event.preventDefault()
        context.clearExport()
    }

    const payment = (event) => {
        event.preventDefault()

        const array = []
        context.store.cart.forEach(value => {
            array.push({
                product_id : value.product_id,
                count : value.count
            })
        })

        const payload = {
            cart : array,
            phone : context.store.user.phone,
            total : context.store.total
        }

        axios.post(`${API_DIR}/api/payment`, payload, {
            headers: {
                Authorization : `Bearer ${context.store.user.token}`
            }
        })
            .then(value => {
                if (value.data.message ==='Success') {
                    const navigate = () => {
                        router.push('/')
                    }
                    context.paymentExport(navigate)
                }
            })
            .catch(reason => {

            })
    }

    const onRemove = (event, product) => {
        event.preventDefault()
        context.removeFromCartExport(product)
    }

    return (
        <div className={`container blank`}>
            {
                props.cart.map((value, index) => (
                    <div key={index}  className={`border`}>
                        <p> Mã sản phẩm {value.product_id} </p>
                        <p> Tên sản phẩm: {value.name} </p>
                        <p> Đơn giá: {value.price} </p>
                        <p> Số lượng: {value.count} </p>
                        <Image src={value.image} height={200} width={200} alt={value.name} />
                        <div>
                            <button
                                onClick={event => {
                                    const product = {
                                        product_id : value.product_id,
                                        count : value.count,
                                        price : value.price
                                    }
                                    onRemove(event, product)
                                }}
                            >
                                Xóa khỏi giỏ hàng
                            </button>
                        </div>
                    </div>
                ))
            }

            <p> Tổng: {context.store.total} </p>
            <div>
                <button onClick={payment}> Thanh toán  </button>
            </div>

            <div>
                <button onClick={clear}> Hủy  </button>
            </div>
        </div>
    )
}


