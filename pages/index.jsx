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
      <div className={styles['banner-container']}>
      <img
        src="/led.jpeg"
        alt="Leticia e David"
        className={styles['banner-image']}
      />
    </div>
      <h1>
      Chá de Casa Nova
      </h1>

      <div className={styles.message}>
        <p>
          Alguns itens da lista possuem um link de sugestão. <br />
          Caso prefira, pode ficar a vontade para procurar em outras lojas.
        </p>
        <p>
          <b>
            Endereços para entrega:
          </b><br /><br />
          Rua Monsenhor Pegado, 100 - Barro Vermelho, Natal/RN <br />
          CEP: 59030-420
        </p>
        <p>
          Ou
        </p>
        <p>
        Avenida Bom Pastor, 28 - Bom Pastor, Natal/RN <br />
          CEP: 59052-080
        </p>
      </div>
      <p>
        Escolha um presente desejado
      </p>
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
