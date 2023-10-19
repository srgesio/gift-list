import Image from 'next/image'

import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.container}>

            <header>
                <h1>Letícia & David</h1>
            </header>
        </div>
    )
}