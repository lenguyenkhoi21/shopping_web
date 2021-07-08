import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'

export const Products = (props) => {
    const router = useRouter()
    const handleOnClick = (event, value) => {
        event.preventDefault()
        router.push(`/product/${value.product_id}`)
    }

    return (
        <div className={`container blank`}>
            {
                props.data.map((value, index) => (
                    <div key={index}>
                        <p> {value.name} </p>
                        <Image src={value.image} height={200} width={200} alt={value.name} />
                        <div>
                            <button onClick={(event => {handleOnClick(event, value)})}> Chi tiết </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}




