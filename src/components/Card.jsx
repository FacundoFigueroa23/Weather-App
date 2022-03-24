import React from 'react'
import styles from "./Card.module.css"

export default function Card(props) {
  return (
    <div className={styles.city}>
      <button className={styles.btn} onClick={() => props.onClose(props.id)}>X</button>
      <h3 className={styles.name}>{props.name}</h3>
      <section className={styles.body}>
        <div>
          <h5>Min</h5>
          {props.min}°
        </div>
        <div>
          <h5>Max</h5>
          {props.max}°
        </div>
        <img className={styles.img} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Weather icon"/>
      </section>
    </div>
  )
}