import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Item from '../components/Item'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
      <Header/>
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
        <h3>Presentes assinados</h3>
        <p>Veja o que outros escolheram</p>
        <div className={styles.signedList}>
          {gifts.map((gift, index) =>(
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
      <Footer/>
    </div>
  )
}
