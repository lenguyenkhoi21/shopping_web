import React from 'react'
import Link from 'next/link'

export const HistoryComponent = (props) => {
    return (
        <div className={`container blank`}>
            {
                props.history.map((value, index) => (
                    <div key={index}>
                        <p> {value.bill_id} </p>
                        <p> {value.time} </p>
                        <p> {value.date} </p>
                        <div>
                            <Link href={`/user/history/${value.bill_id}`}>
                                <a> Chi tiết </a>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


