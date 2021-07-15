import React, {useState} from 'react'
import {Header as Head} from '../../Components/Header/Component.Header'
import {NavBar} from '../../Components/NavBar/Component.NavBar'
import {Footer} from '../../Components/Footer/Component.Footer'
import {SearchComponent} from '../../Components/Search/Component.Search'

function Search() {
    const [data, setData] = useState([])

    return (
        <>
            <Head
                title = 'Tìm kiếm'
            />

            <NavBar setData = {setData} />

            <SearchComponent products = {data} />

            <Footer />
        </>
    )
}

export default Search
