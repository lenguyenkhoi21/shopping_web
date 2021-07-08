import React, {useContext} from 'react'
import {GlobalContext} from '../../AppState/AppState'
import axios from 'axios'
import {API_DIR} from '../../Common/API'

export const FavoriteList = (props) => {
    const context = useContext(GlobalContext)

    const handleClick = (event, product_id, setFavorite) => {
        const payload = {
            phone : context.store.user.phone,
            product_id : product_id,
            status : false
        }

        axios.patch(`${API_DIR}/api/favorite`, payload,{
            headers: {
                Authorization : `Bearer ${context.store.user.token}`
            }
        })
            .then(value => {
                if (value.data.message === 'Success') {

                    axios.get(`${API_DIR}/api/favorite/${context.store.user.phone}`, {
                        headers: {
                            Authorization : `Bearer ${context.store.user.token}`
                        }
                    })
                        .then(value1 => {
                            if (value1.data.message==='Success') {
                                setFavorite(value1.data.favorite)
                            }
                        })
                        .catch(reason => {

                        })
                }
            })
            .catch(reason => {

            })
    }
    return (
        <div className={`container empty`}>
            {
                props.favorite.map((item, index) => (
                    <div key={index}>
                        <p>{item.product_id}</p>
                        <p>{item.product_name}</p>
                        <button onClick={(event => {handleClick(event, item.product_id, props.setFavorite)})}> Xóa </button>
                    </div>
                ))
            }
        </div>
    )
}


