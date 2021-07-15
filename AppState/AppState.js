import React, {createContext, useCallback, useReducer} from 'react'
import {
    typeAddToCart,
    typeClear,
    typeDecrement,
    typeIncrement,
    typeLogin,
    typeLogout, typePayment,
    typeRemoveFromCart
} from '../Common/TypeDispatch'


export const GlobalContext = createContext()

export const AppState = (props) => {

    const payment = (navigate, state) => {
        navigate()
        return {...state, cart : [], total : 0, totalItem: 0}
    }

    const increment = (product, state) => {
        const array = state.cart
        const exist = array.find(item => {
            return product.product_id === item.product_id
        })

        let total = 0
        array.forEach(item => {
            if (item.product_id === exist.product_id) {
                item.count++
            }
            total += item.count * item.price
        })
        const totalItem = state.totalItem + 1
        return {...state, cart : array, total : total, totalItem : totalItem}

    }

    const decrement = (product, state) => {
        const array = state.cart
        const exist = array.find(item => {
            return product.product_id === item.product_id
        })

        let total = 0
        let isMinus = false
        array.forEach(item => {
            if (item.product_id === exist.product_id && item.count - 1 > 0) {
                item.count--
                isMinus = true
            }
            total += item.count * item.price
        })
        let totalItem
        if (isMinus) {
            totalItem = state.totalItem - 1
        } else {
            totalItem = state.totalItem
        }

        return {...state, cart : array, total : total, totalItem : totalItem}
    }

    const add = (product, navigate, state) => {
        navigate()
        const array = state.cart
        const exist = array.find(item => {
            return product.product_id === item.product_id
        })

        if (exist === undefined) {
            array.push({...product, count : 1 })
            let total = 0
            array.forEach(item => {
                total += item.count*item.price
            })
            const totalItem = state.totalItem + 1
            const res = {...state, cart : array, total : total, totalItem : totalItem}
            return res
        } else {
            let total = 0
            array.forEach(item => {
                if (item.product_id === exist.product_id) {
                    item.count++
                }
                total += item.count * item.price
            })
            const totalItem = state.totalItem + 1
            const res = {...state, cart : array, total : total, totalItem : totalItem}
            return res
        }
    }

    const clear = (state) => {
        return {...state, total : 0, cart: [], totalItem : 0}
    }

    const remove = (product, state) => {
        const total = state.total - (product.price * product.count)
        const totalItem = state.totalItem - product.count
        const array = state.cart.filter(value => value.product_id !== product.product_id)
        return {...state, cart : array, total : total, totalItem : totalItem}
    }

    const login = (account, state) => {
        return {...state, user : {phone : account.phone, token : account.token}}
    }

    const logout = (state) => {
        return {...state, user : {phone : null, token : null}}
    }

    const Reducer = useCallback(
        (state, action) => {
            switch (action.type) {
                case `${typePayment}`:
                    return payment(action.navigate, state)

                case `${typeIncrement}`:
                    return increment(action.product, state)

                case `${typeDecrement}`:
                    return decrement(action.product, state)

                case `${typeClear}`:
                    return clear(state)

                case `${typeRemoveFromCart}`:
                    return remove(action.product, state)

                case `${typeAddToCart}`:
                    return add(action.product, action.navigate ,state)

                case `${typeLogin}`:
                    return login(action.account, state)

                case `${typeLogout}`:
                    return logout(state)

                default:
                    return state
            }
        }, []
    )

    const initialState = {
        cart : [],
        total : 0,
        totalItem : 0,
        user : {
            phone : null,
            token : null
        }
    }

    const [store, dispatch] = useReducer(Reducer, initialState)

    const clearExport = () => {
        dispatch({ type : `${typeClear}` })
    }

    const removeFromCartExport = (product) => {
        dispatch({ type : `${typeRemoveFromCart}`, product : product })
    }

    const addToCartExport = (product, navigate) => {
        dispatch({ type : `${typeAddToCart}`, product : product, navigate : navigate })
    }

    const loginExport = (account) => {
        dispatch({ type : `${typeLogin}`, account : account})
    }

    const logoutExport = () => {
        dispatch({type : `${typeLogout}`})
    }

    const paymentExport = (navigate) => {
        dispatch({type : `${typePayment}`, navigate : navigate})
    }

    const incrementExport = (product) => {
        dispatch({type : `${typeIncrement}`, product : product })
    }

    const decrementExport = (product) => {
        dispatch({type : `${typeDecrement}`, product : product})
    }

    const state = {
        store,
        loginExport,
        logoutExport,
        addToCartExport,
        removeFromCartExport,
        clearExport,
        paymentExport,
        incrementExport,
        decrementExport
    }

    return (
        <GlobalContext.Provider value={state}>
            {props.children}
        </GlobalContext.Provider>
    )
}


