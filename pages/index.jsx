import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Item from '../components/Item'
import { useEffect, useState } from 'react'

export default function Home() {

  
  const [gifts, setGifts] = useState([])

  useEffect(()=>{
      callGifts()
      function callGifts(){
        fetch('/api/gifts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response=>response.json())
        .then(async (response)=>{
          setGifts(await response)
        })
      }
  },[setGifts])
  

  return (
    <div className={styles.container}>
      <header>
          <Image
            className={styles.logo}
            src="/logotipoHorizontalKarolEGesio.svg"
            height={'100%'}
            width={350}
            alt="Karol&Gésio" />
      </header>
      <h1>
        Lista de presentes
      </h1>
      <p>
        Escolha o presente a baixo e assine
      </p>
        <div className={styles.list}>
          {gifts.map((gift, index) =>(
            gift.name == '' ?  
            <Item
              key={index}
              gift={gift}
              update={setGifts}
            />
            : null
          ))}
        </div>
      <footer>
        <span>Criado por NODA ■</span>
      </footer>
    </div>
  )
}
