import React, {useContext, useState} from 'react'
import styles from '../../styles/Authentication.module.css'
import {GlobalContext} from '../../AppState/AppState'
import axios from 'axios'
import {API_DIR} from '../../Common/API'
import { useRouter } from "next/router"

export const Authentication = () => {
    const router = useRouter()
    const context = useContext(GlobalContext)

    if (context.store.user.store !== null) {

    }

    const [account, setAccount] = useState({
        phone : '',
        password : ''
    })

    const onChanged = (evt) => {
        const value = evt.target.value
        setAccount({
            ...account,
            [evt.target.name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`${API_DIR}/api/login`, account)
            .then(value => {
                if (value.data.message === 'Success') {
                    const user = {
                        phone : value.data.phone,
                        token : value.data.token
                    }
                    context.loginExport(user)
                    if (router.route === '/login') {
                        router.push('/')
                    }
                }
            })
            .catch(reason => {

            })
    }
    return (
        <div className={`container empty`}>
            <div className={`row ${styles.around}`}>
                <div className={`col-sm-4`} />
                <div className={`col-sm-4 g-4 align-items-center`}>
                    <div>
                        <div className={`${styles.inputTxt}`}>
                            <div className={`col-auto`}>
                                <label className={`col-form-label`} > Số điện thoại </label>
                            </div>
                            <div className={`col-auto  ${styles.inputSize}`}>
                                <input type='text' className={`form-control`} onChange={onChanged} name='phone' />
                            </div>
                            <br/>
                            <div className={`col-auto`}>
                                <label className={`col-form-label`} > Mật Khẩu </label>
                            </div>
                            <div className={`col-auto ${styles.inputSize}`}>
                                <input type='password' className={`form-control`} onChange={onChanged} name='password' />
                            </div>
                        </div>

                        <div className={`col-auto ${styles.btnContainer}`}>
                            <button
                                type='submit'
                                className={`btn btn-primary mb-3 ${styles.btnLogin}`}
                                onClick={handleSubmit}>
                                Đăng Nhập
                            </button>

                            <button
                                type='submit'
                                className={`btn btn-primary mb-3 ${styles.btnLogout}`}
                                onClick={handleSubmit}>
                                Đăng Ký
                            </button>
                        </div>

                    </div>
                </div>
                <div className={`col-sm-4`} />
            </div>


        </div>
    )
}


