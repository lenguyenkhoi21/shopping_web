import React, {useContext, useEffect, useState} from 'react'
import {Header as Head} from '../../../Components/Header/Component.Header'
import {Footer} from '../../../Components/Footer/Component.Footer'
import {NavBar} from '../../../Components/NavBar/Component.NavBar'
import {GlobalContext} from '../../../AppState/AppState'
import {Authentication} from '../../../Components/Authentication/Component.Authentication'
import {useRouter} from 'next/router'
import axios from 'axios'
import {API_DIR} from '../../../Common/API'
import {DetailHistoryComponent} from '../../../Components/History/Component.HistoryDetail'

export default function HistoryDetail() {
    const context = useContext(GlobalContext)
    const router = useRouter()
    const [detail, setDetail] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (context.store.user.phone !== null) {
            axios.get(`${API_DIR}/api/history/bill/detail/${router.query.history_id}`, {
                headers: {
                    Authorization : `Bearer ${context.store.user.token}`
                }
            })
                .then(value => {
                    if (value.data.message === 'Success') {
                        setDetail(value.data.detail)
                        setTotal(value.data.total)
                    }
                })
                .catch(reason => {

                })
        }
    }, [context.store.user.phone])


    let view

    if (context.store.user.phone===null) {
        view = <Authentication />
    } else {
        view = <DetailHistoryComponent total = {total} detail = {detail} />
    }

    return(
        <>
            <Head
                title = 'Chi tiết'
            />

            <NavBar />

            {view}

            <Footer />
        </>
    )
}

