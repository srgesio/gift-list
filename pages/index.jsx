import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Item from '../components/Item'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function Home() {


  const [gifts, setGifts] = useState([])

  useEffect(() => {
    callGifts()
    function callGifts() {
      fetch('/api/gifts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json())
        .then(async (response) => {
          setGifts(await response)
        })
    }
  }, [setGifts])


  return (
    <div className={styles.container}>
      <Header />
      <h1>
        Lista de presentes
      </h1>
      <p>
        Escolha um presente desejado
      </p>

      <div className={styles.message}>

        <p>
          Alguns itens da lista possuem um link de sugestão. <br />
          Caso prefira, pode ficar a vontade para procurar em outras lojas.
        </p>
        <p>
          <b>
            Endereço para entrega:
          </b><br />
          Rua dos Tororós, 337 - Alecrim, Natal/RN <br />
          CEP: 59032-550
        </p>
        <h4>

          Veja também:
        </h4>
        <Link href='http://casamentokel.vercel.app' passHref>
          <button className={styles.otherList}>
            Klara & Leonardo
          </button>
        </Link>
      </div>
      <div className={styles.signedList}>
        {gifts.map((gift, index) => (
          gift.name != '' ?
            <Item
              key={index}
              gift={gift}
              update={setGifts}
              sign={true}
            />
            : null
        ))}
      </div>
      <div className={styles.list}>
        {gifts.map((gift, index) => (
          gift.name == '' ?
            <Item
              key={index}
              gift={gift}
              update={setGifts}
            />
            : null
        ))}
      </div>

      <Footer />
    </div>
  )
}
