import React from 'react'
import styles from '../../styles/MainPage.module.css'
import TextLoop from 'react-text-loop'

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

const Welcome4 = () => {
    return (
        <div className={`${styles.welcomeContainer}`}>
            <p className={`${styles.welcome}`}> 	&nbsp;  </p>
            <p className={`${styles.welcome}`}> Shop Now ! </p>
            <p className={`${styles.welcome}`}> 	&nbsp; </p>
        </div>
    )
}

const SecondContent = () => {
    return (
        <div className={`${styles.secondContent}`}>
            <p className={`${styles.firstContentTxt}`}> Được Chọn Lọc </p>
            <div className={`${styles.clearFix}`} />
            <p className={`${styles.firstContentTxt}`}> Từ Những </p>
            <div className={`${styles.clearFix}`} />
            <p className={`${styles.firstContentTxt}`}> Nguyên Liệu </p>
            <div className={`${styles.clearFix}`} />
            <p className={`${styles.firstContentTxt}`}> Tốt Nhất ! </p>
            <div className={`${styles.clearFix}`} />
        </div>
    )
}

const ThirdContent = () => {
    return (
        <div className={`${styles.thirdContentTxt}`}>
            <p className={`${styles.thirdContentTxt}`}> Dịch Vụ Giao Hàng </p>
            <div className={`${styles.clearFix}`} />
            <p className={`${styles.thirdContentTxt}`}> Nhanh </p>
            <div className={`${styles.clearFix}`} />
            <p className={`${styles.thirdContentTxt}`}> Tiện Lợi </p>
            <div className={`${styles.clearFix}`} />
        </div>
    )
}

export const HomePage = () => {

    return (
        <div className={`container blank ${styles.thirdBottom}`}>
            <div className={`${styles.marginMainpage}`}>
                <div>
                    <TextLoop springConfig={{ stiffness: 180, damping: 8 }} interval={5000}>
                        <Welcome1 />
                        <Welcome2 />
                        <Welcome3 />
                        <Welcome4 />
                    </TextLoop>
                    <div className={`${styles.firstContent}`} />

                </div>
                <div className={`${styles.clearFix}`} />

                <div className={`${styles.marginSecond}`}>
                    <SecondContent />
                    <div className={`${styles.poster1}`} />
                </div>
                <div className={`${styles.clearFix}`} />

                <div className={`${styles.thirdContentMargin}`}>
                    <ThirdContent />
                    <div className={`${styles.thirdContentImg}`} />
                </div>
                <div className={`${styles.clearFix}`} />
            </div>
        </div>
    )
}


