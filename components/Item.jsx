import { useState } from 'react'
import styles from '../styles/Item.module.css'

export default function Item(props){
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')


    function newGift(id,gift){
        fetch(`/api/gifts/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(gift)
        }).then(async()=>{
        await fetch('/api/gifts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            }).then(response=>response.json())
            .then((response)=>{
            props.update(response)
            })
        })
    }


    return(
        <div className={styles.item}>
            <div className={styles.itemName}>
                <h3>{props.gift.product}</h3>
                <span>{props.gift.description}</span>
            </div>
                <div className={styles.action}>

                <div className={styles.itemInput}>
                    <input
                        className={styles.inputSign}
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        type="text"
                        placeholder='Nome Completo'/>
                    <input 
                        className={styles.inputContact}
                        type="text" 
                        placeholder='(84) 99999-9999'
                        value={contact}
                        onChange={e=>setContact(e.target.value)} />
                </div>
                <div>
                    <button
                        onClick={()=>{
                            newGift(props.gift.id, {
                                name,
                                contact
                            })
                        }}
                    >
                        Assinar
                    </button>
                </div>
            </div>
            </div>
    )
}