import React, {useContext, useState} from 'react'
import styles from '../../styles/Authentication.module.css'
import {GlobalContext} from '../../AppState/AppState'
import axios from 'axios'
import {API_DIR} from '../../Common/API'
import { useRouter } from "next/router"

export const Authentication = () => {
    const router = useRouter()
    const context = useContext(GlobalContext)
    const [isSignup, setIsSignup] = useState(false)
    const [error, setError] = useState(false)
    const [registerAccount, setRegisterAccount] = useState({
        phone : '',
        name : '',
        email : '',
        password : '',
        verifiedPassword : ''
    })
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

    const onChangedSignup = (evt) => {
        const value = evt.target.value
        setRegisterAccount({
            ...registerAccount,
            [evt.target.name]: value
        })
    }

    const handleSignup = (event) => {
        event.preventDefault()

        if (registerAccount.password === registerAccount.verifiedPassword) {
            const acc = {
                phone: registerAccount.phone,
                email: registerAccount.email,
                password : registerAccount.password,
                name: registerAccount.name
            }
            axios.post(`${API_DIR}/api/signup`, acc)
                .then(value => {
                    if (value.data.message === 'Success') {
                        setError(false)
                        const login = {
                            phone : registerAccount.phone,
                            password: registerAccount.password
                        }

                        axios.post(`${API_DIR}/api/login`, login)
                            .then(res => {
                                if (res.data.message === 'Success') {
                                    router.push('/')
                                    context.loginExport(login)
                                }
                            })
                            .catch(reason => {
                                setError(true)
                            })
                    }
                })
                .catch(reason => {
                    setError(true)
                })
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post(`${API_DIR}/api/login`, account)
            .then(value => {
                if (value.data.message === 'Success') {
                    setError(false)
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
                console.log(reason)
                setError(true)
            })
    }

    const changeScreen = (event) => {
        event.preventDefault()
        if (isSignup) {
            setRegisterAccount({
                phone : '',
                name : '',
                email : '',
                password : '',
                verifiedPassword : ''
            })
            setError(false)
        } else {
            setAccount({
                phone : '',
                password : ''
            })
            setError(false)
        }
        setIsSignup(!isSignup)
    }

    if (isSignup) {

        return (
            <div className={`container empty`}>
                <div className={`container empty`}>
                    <div className={`row ${styles.around}`}>
                        <div className={`col-sm-4`} />
                        <div className={`col-sm-4 g-4 align-items-center`}>
                            <div>
                                <h1 className={`${styles.txtCenter}`}> Đăng ký </h1>
                                <div className={`${styles.inputTxt}`}>
                                    <div className={`col-auto`}>
                                        <label className={`col-form-label`} > Số điện thoại </label>
                                    </div>
                                    <div className={`col-auto  ${styles.inputSize}`}>
                                        <input
                                            type='text'
                                            className={`form-control`}
                                            onChange={onChangedSignup}
                                            name='phone'
                                        />
                                    </div>
                                    <br/>

                                    <div className={`col-auto`}>
                                        <label className={`col-form-label`} > Email </label>
                                    </div>
                                    <div className={`col-auto  ${styles.inputSize}`}>
                                        <input
                                            type='email'
                                            className={`form-control`}
                                            onChange={onChangedSignup}
                                            name='email'
                                        />
                                    </div>
                                    <br/>

                                    <div className={`col-auto`}>
                                        <label className={`col-form-label`} > Tên </label>
                                    </div>
                                    <div className={`col-auto  ${styles.inputSize}`}>
                                        <input
                                            type='text'
                                            className={`form-control`}
                                            onChange={onChangedSignup}
                                            name='name'
                                        />
                                    </div>
                                    <br/>

                                    <div className={`col-auto`}>
                                        <label className={`col-form-label`} > Mật Khẩu </label>
                                    </div>
                                    <div className={`col-auto ${styles.inputSize}`}>
                                        <input
                                            type='password'
                                            className={`form-control`}
                                            onChange={onChangedSignup}
                                            name='password' />
                                    </div>
                                    <br/>

                                    <div className={`col-auto`}>
                                        <label className={`col-form-label`} > Nhập lại mật khẩu </label>
                                    </div>
                                    <div className={`col-auto ${styles.inputSize}`}>
                                        <input
                                            type='password'
                                            className={`form-control`}
                                            onChange={onChangedSignup}
                                            name='verifiedPassword'
                                        />
                                    </div>
                                </div>

                                <div className={`col-auto ${styles.btnContainer}`}>
                                    <button
                                        type='submit'
                                        className={`btn btn-primary mb-3 ${styles.btnLogin}`}
                                        onClick={handleSignup}>
                                        Đăng Ký
                                    </button>

                                    <button
                                        type='submit'
                                        className={`btn btn-primary mb-3 ${styles.btnLogout}`}
                                        onClick={changeScreen}>
                                        Đăng Nhập
                                    </button>
                                </div>

                                <div className={styles.clearFix} />

                                <div className={`col-auto ${styles.errorText}`}>
                                    { error ? <p> Có lỗi xảy ra, vui lòng thử lại !</p> : null}
                                </div>

                            </div>
                        </div>
                        <div className={`col-sm-4`} />
                    </div>
                </div>
            </div>
        )
    } else {

        return (
            <div className={`container empty`}>
                <div className={`row ${styles.around}`}>
                    <div className={`col-sm-4`} />
                    <div className={`col-sm-4 g-4 align-items-center`}>
                        <div>
                            <h1 className={`${styles.txtCenter}`}> Đăng nhập </h1>
                            <div className={`${styles.inputTxt}`}>
                                <div className={`col-auto`}>
                                    <label className={`col-form-label`} > Số điện thoại </label>
                                </div>
                                <div className={`col-auto  ${styles.inputSize}`}>
                                    <input
                                        type='text'
                                        className={`form-control`}
                                        onChange={onChanged}
                                        name='phone'
                                    />
                                </div>
                                <br/>
                                <div className={`col-auto`}>
                                    <label className={`col-form-label`} > Mật Khẩu </label>
                                </div>
                                <div className={`col-auto ${styles.inputSize}`}>
                                    <input
                                        type='password'
                                        className={`form-control`}
                                        onChange={onChanged}
                                        name='password'
                                    />
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
                                    onClick={changeScreen}>
                                    Đăng Ký
                                </button>
                            </div>

                            <div className={styles.clearFix} />

                            <div className={`col-auto ${styles.errorText}`}>
                                { error ? <p> Có lỗi xảy ra, vui lòng thử lại !</p> : null}
                            </div>

                        </div>
                    </div>
                    <div className={`col-sm-4`} />
                </div>
            </div>
        )
    }


}


