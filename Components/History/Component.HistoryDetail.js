import React from 'react'

export const DetailHistoryComponent = (props) => {
    return (
        <div className={`container blank`}>
            {
                props.detail.map((value, index) => (
                    <div key={index}>
                        <p> Sản phẩm: {value.product_name} </p>
                        <p> Số lượng: {value.count} </p>
                        <p>  Đơn giá: {value.price} </p>
                        <p> Tổng chi tiết: {value.sum} </p>

                    </div>
                ))
            }
            <p> Tổng: {props.total} </p>
        </div>
    )
}


