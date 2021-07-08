import React, {useContext} from 'react'
import {GlobalContext} from '../../AppState/AppState'
import {Authentication} from '../../Components/Authentication/Component.Authentication'
import {Header as Head} from '../../Components/Header/Component.Header'
import {NavBar} from '../../Components/NavBar/Component.NavBar'
import {Footer} from '../../Components/Footer/Component.Footer'
import {CartList} from '../../Components/Cart/Component.Cart'

export default function Cart() {
    const context = useContext(GlobalContext)

    let view = null

    if (context.store.user.phone===null) {
        view = <Authentication />
    } else {
        view =  <CartList cart = {context.store.cart} />
    }

    return (
        <>
            <Head
                title = 'Giỏ hàng'
            />

            <NavBar />

            {view}

            <Footer />
        </>
    )
}

