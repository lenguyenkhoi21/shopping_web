import React, {useContext, useEffect, useState} from 'react'
import {GlobalContext} from '../../AppState/AppState'
import {Authentication} from '../../Components/Authentication/Component.Authentication'
import {Header as Head} from '../../Components/Header/Component.Header'
import {NavBar} from '../../Components/NavBar/Component.NavBar'
import {Footer} from '../../Components/Footer/Component.Footer'
import axios from 'axios'
import {API_DIR} from '../../Common/API'
import {FavoriteList} from '../../Components/Favorite/Component.Favorite'


export default function Favorite() {
    const context = useContext(GlobalContext)
    const [favorite, setFavorite] = useState([])

    useEffect(() => {

        if (context.store.user.phone !== null ) {
            axios.get(`${API_DIR}/api/favorite/${context.store.user.phone}`, {
                headers: {
                    Authorization : `Bearer ${context.store.user.token}`
                }
            })
                .then(value => {
                    if (value.data.message==='Success') {
                        setFavorite(value.data.favorite)
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

        view = <FavoriteList favorite={favorite} setFavorite = {setFavorite}/>
    }

    return (
        <>
            <Head
                title = 'Danh sách yêu thích'
            />

            <NavBar />

            {view}

            <Footer />
        </>
    )
}

