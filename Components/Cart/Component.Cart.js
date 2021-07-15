import React, {useContext} from 'react'
import Image from 'next/image'
import {GlobalContext} from '../../AppState/AppState'
import axios from 'axios'
import {API_DIR} from '../../Common/API'
import {useRouter} from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons/faTrashAlt'
import styles from '../../styles/Cart.module.css'
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus'

export const CartList = (props) => {
    const context = useContext(GlobalContext)
    const router = useRouter()

    const clear = (event) => {
        event.preventDefault()
        context.clearExport()
    }

    const increment = (event, product) => {
        event.preventDefault()
        context.incrementExport(product)
    }

    const decrement = (event, product) => {
        event.preventDefault()
        context.decrementExport(product)
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
        <div className={`container blank ${styles.divMargin}`}>
            <h2 className={`${styles.txtAlign}`}> Giỏ hàng </h2>

            <table className={`table ${styles.divTable}`}>
                <thead>
                    <tr className={`${styles.txtSize} ${styles.tableBorder}`}>
                        <th scope="col" className={`${styles.txtAlign}`}>#</th>
                        <th scope="col" className={`${styles.txtAlign}`}>Sản phẩm</th>
                        <th scope="col" className={`${styles.txtAlign}`}>Tên sản phẩm</th>
                        <th scope="col" className={`${styles.txtAlign}`}>Số lượng</th>
                        <th scope="col" className={`${styles.txtAlign}`}>Giá tiền</th>
                        <th scope="col" className={`${styles.txtAlign}`}>Xóa</th>
                    </tr>
                </thead>
                {
                    props.cart.map((value, index) => (
                        <tbody key={index}  className={`${styles.tableBorder}`}>
                            <tr className={`${styles.txtSize}`}>
                                <td className={`${styles.txtAlign}`}> {index + 1} </td>
                                <td className={`${styles.txtAlign}`}>
                                    <Image
                                        src={value.image}
                                        height={100}
                                        width={100}
                                        alt={value.name}
                                    />
                                </td>
                                <td className={`${styles.txtAlign}`}> {value.name} </td>
                                <td className={`${styles.txtAlign} ${styles.groupCont} ${styles.footerBorder}`}>
                                    <div>
                                        <span>
                                            <button
                                                className={`${styles.btnDelete}`}
                                                onClick={event => {decrement(event, value)}}
                                            >
                                                <FontAwesomeIcon icon={faMinus} className={`${styles.btnAdd}`} />
                                            </button>
                                        </span>

                                        <span className={`${styles.priceTxt}`}>
                                            {value.count}
                                        </span>

                                        <span>
                                            <button
                                                className={`${styles.btnDelete}`}
                                                onClick={event => {increment(event, value)}}
                                            >
                                                <FontAwesomeIcon icon={faPlus} className={`${styles.btnAdd}`} />
                                            </button>
                                        </span>
                                    </div>
                                </td>
                                <td className={`${styles.txtAlign}`}> {value.price * value.count}  </td>
                                <td className={`${styles.txtAlign}`}>
                                    <button
                                        className={`${styles.btnDelete}`}
                                        onClick={event => {
                                            const product = {
                                                product_id : value.product_id,
                                                count : value.count,
                                                price : value.price
                                            }
                                            onRemove(event, product)
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faTrashAlt}
                                            className={`${styles.iconDelete}`}
                                        />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }

                <tfoot>
                    <tr className={`${styles.txtSize} ${styles.txtBold} ${styles.tableBorder}`}>
                        <td colSpan="5" className={`${styles.txtAlign}`}> Tổng: </td>
                        <td className={`${styles.txtAlign}`}> {context.store.total} VNĐ</td>
                    </tr>
                    <tr className={`${styles.footerBorder}`}>
                        <td colSpan='3'/>
                        <td>
                            <button onClick={payment} className={`btn btn-danger btn-lg ${styles.btnMargin}`}> Thanh toán </button>
                            <button onClick={clear} className={`btn btn-danger btn-lg`}> Hủy  </button>
                        </td>
                        <td colSpan='2'/>
                    </tr>
                </tfoot>
            </table>




        </div>
    )
}


