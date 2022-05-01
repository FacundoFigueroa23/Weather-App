import React from 'react'
import Card from "./Card"
import styles from "./Cards.module.css"

export default function Cards(props) {
  return (
    <div className={styles.cities}>
      {
        props.cities.map( city => (
          <Card key={city.id}
                id={city.id}
                max={city.max}
                min={city.min}
                name={city.name}
                img={city.img}
                description={city.description}
                onClose={props.onClose}/>
          ))
      }
    </div>
  )
}