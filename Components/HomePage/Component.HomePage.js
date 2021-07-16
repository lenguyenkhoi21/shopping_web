import React, {useCallback, useEffect, useState} from 'react'
import Image from 'next/image'
import styles from '../../styles/MainPage.module.css'

const Welcome1 = () => {
    return (
        <div className={`${styles.welcomeContainer}`}>
            <p className={`${styles.welcome}`}> Power  </p>
            <p className={`${styles.welcome}`}> Up </p>
            <p className={`${styles.welcome}`}> Your Brain </p>
        </div>
    )
}

const Welcome2 = () => {
    return (
        <div className={`${styles.welcomeContainer}`}>
            <p className={`${styles.welcome}`}> Make Your </p>
            <p className={`${styles.welcome}`}> Life </p>
            <p className={`${styles.welcome}`}> Beautiful</p>
        </div>
    )
}

const Welcome3 = () => {
    return (
        <div className={`${styles.welcomeContainer}`}>
            <p className={`${styles.welcome}`}> Welcome </p>
            <p className={`${styles.welcome}`}> To </p>
            <p className={`${styles.welcome}`}> KISS Store</p>
        </div>
    )
}




export const HomePage = () => {
    const [welcome, setWelcome] = useState({
        type : 1,
        view : <Welcome1 />
    })

    useEffect(() => {
        return () => {
            setInterval(()=> {

                const type = welcome.type
                console.log(`here ${type}`)
                switch (type) {
                    case 1:
                        setWelcome({type : 2, view : <Welcome2 />})
                        break

                    case 2:
                        setWelcome({type : 3, view : <Welcome3 />})
                        break

                    case 3:
                        setWelcome({type : 1, view : <Welcome1 />})
                        break
                }
            }, 1000)
        }
    }, [welcome.type])


    return (
        <div className={`container blank`}>
            <div className={`${styles.marginMainpage}`}>
                <div>
                    {welcome.view}
                    <div className={`${styles.firstContent}`} />
                </div>
            </div>
        </div>
    )
}


