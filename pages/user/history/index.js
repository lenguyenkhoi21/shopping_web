import React, {useContext, useEffect, useState} from 'react'
import {Header as Head} from '../../../Components/Header/Component.Header'
import {Footer} from '../../../Components/Footer/Component.Footer'
import {NavBar} from '../../../Components/NavBar/Component.NavBar'
import {GlobalContext} from '../../../AppState/AppState'
import axios from 'axios'
import {API_DIR} from '../../../Common/API'
import {HistoryComponent} from '../../../Components/History/Component.History'
import {Authentication} from '../../../Components/Authentication/Component.Authentication'

export default function History(props) {
    const context = useContext(GlobalContext)
    const [history, setHistory] = useState([])

    useEffect(() => {

        if (context.store.user.phone !== null) {
            axios.get(`${API_DIR}/api/history/bill/${context.store.user.phone}`, {
                headers: {
                    Authorization : `Bearer ${context.store.user.token}`
                }
            })
                .then(value => {
                    if (value.data.message==='Success') {
                        setHistory(value.data.billList)
                    }
                })
                .catch(reason => {

                })

        }

        return () => {

        }
    }, [context.store.user.phone])

    let view = null

    if (context.store.user.phone===null) {
        view = <Authentication />
    } else {
        view = <HistoryComponent history = {history} />
    }


    return (
        <>
            <Head
                title = 'Lịch sử'
            />

            <NavBar />

            {view}

            <Footer />
        </>
    )
}

