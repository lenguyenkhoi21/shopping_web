import React, {useContext} from 'react'
import {GlobalContext} from '../../AppState/AppState'
import {useRouter} from 'next/router'

export const UserDetail = () => {
    const context = useContext(GlobalContext)
    const router = useRouter()

    const logout = (event) => {
        context.logout()
        router.push('/')
    }

    return (
        <div className={`container empty`}>
            <button onClick={logout}>  Đăng xuất </button>
        </div>
    )
}


