import React, {useContext, useState} from 'react'
import Link from 'next/link'
import styles from '../../styles/NavBar.module.css'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons/faSignInAlt'
import {GlobalContext} from '../../AppState/AppState'
import {faUser} from '@fortawesome/free-regular-svg-icons/faUser'
import {useRouter} from 'next/router'
import axios from 'axios'
import {API_DIR} from '../../Common/API'

export const NavBar = (props) => {
    const context = useContext(GlobalContext)
    const router = useRouter()

    const textChange = (event) => {

        if (router.route !== '/search') {
            router.push('/search')
        } else {
            const text = event.target.value

            axios.get(`${API_DIR}/api/search/${text}`)
                .then(value => {
                    if (value.data.message === 'Success') {
                        props.setData(value.data.products)
                    }
                })
                .catch(reason => {

                })
        }

    }

    const moveToSearch = (event) => {
        event.preventDefault()
        if (router.route !== '/search') {
            router.push('/search')
        }

    }

    return (
        <nav className={`navbar sticky-top navbar-expand-lg navbar-light bg-light`}>
            <div className={`container`}>
                <div className={`collapse navbar-collapse`}>
                    <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
                        <li className={`nav-item`}>
                            <Link href='/'>
                                <a className={`nav-link active ${styles.navHeader}`}> Trang chủ </a>
                            </Link>
                        </li>
                        <li className={`nav-item`}>
                            <Link href='/product'>
                                <a className={`nav-link active ${styles.navHeader}`}> Sản phẩm </a>
                            </Link>
                        </li>
                        <li className={`nav-item`}>
                            <Link href='/about'>
                                <a className={`nav-link active ${styles.navHeader}`}> Liên hệ </a>
                            </Link>
                        </li>
                    </ul>

                    <div className={`d-flex`}>
                        <div className={`align-self-center d-flex ${styles.iconSpace}`}>
                            <input
                                className={`form-control me-2`}
                                type='search'
                                placeholder='Tìm kiếm...'
                                name = 'search'
                                onClick={moveToSearch}
                                onChange={textChange}
                            />
                        </div>
                        <div className={`d-flex`}>
                            <div className={`align-self-center ${styles.iconSpace}`}>
                                <Link href={'/favorite'}>
                                    <a>
                                        <FontAwesomeIcon icon={faHeart} className={`${styles.icon}`} />
                                    </a>
                                </Link>
                            </div>

                            <div className={`align-self-center ${styles.iconSpace} ${styles.countParent}`}>
                                <Link href={'/cart'}>
                                    <a>
                                        <FontAwesomeIcon icon={faShoppingCart} className={`${styles.icon}`} />
                                        {
                                            context.store.totalItem === 0 ? null :
                                            <div className={`${styles.countBackGround}`}>
                                                <p className={`${styles.countNumber}`}> {context.store.totalItem} </p>
                                            </div>
                                        }
                                    </a>
                                </Link>


                            </div>

                            <div className={`align-self-center`}>
                                {
                                    context.store.user.phone === null ?
                                    <Link href={'/login'}>
                                        <a>
                                            <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} />
                                        </a>
                                    </Link> :
                                    <Link href={'/user'}>
                                        <a>
                                            <FontAwesomeIcon icon={faUser} className={styles.icon} />
                                        </a>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


