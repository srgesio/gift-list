import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Thanks.module.css';

export default function Thanks() {
  return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.thanks}>
                    <h1>MUITO OBRIGADO!</h1>

                    <p>Agradecemos muito ♥</p>
                

                <Link href='/' passHref>
                    <button className={styles.action}>
                        Voltar para lista!
                    </button>
                </Link>
            </div>

            <Footer/>
        </div>
    )
}
