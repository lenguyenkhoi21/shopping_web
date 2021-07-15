import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/ProductDetail.module.css'

export const SearchComponent = (props) => {

    return (
        <div  className={`container blank`}>
            <div className={`row ${styles.around}`}>
                {
                    props.products.map((value, index) => (
                        <div key={index} className={`col-sm-4 ${styles.productItemContainer}`}>
                            <Link href={`/product/${value.product_id}`}>
                                <a>
                                    <div className={`${styles.productItem}`}>
                                        <div className={`${styles.ImageMargin}`}>
                                            <Image src={value.image} height={200} width={200} alt={value.name} />
                                        </div>
                                        <p className={`${styles.productName}`}> {value.name}  </p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


