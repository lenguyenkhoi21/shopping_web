import React, {useContext} from 'react'
import {GlobalContext} from '../../AppState/AppState'
import {useRouter} from 'next/router'
import Link from 'next/link'

export const UserDetail = () => {
    const context = useContext(GlobalContext)
    const router = useRouter()

    const logout = (event) => {
        context.logoutExport()
        router.push('/')
    }

    return (
        <div className={`container empty`}>
            <div>
                <Link href={'/user/history'}>
                    <a> Lịch sử </a>
                </Link>
            </div>

            <div>
                <button onClick={logout}>  Đăng xuất </button>
            </div>
        </div>
    )
}


