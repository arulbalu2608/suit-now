import React from 'react'
import styles from './style.module.scss'

const Button = (props) => {
  const { label ,className } = props
  return (
    <button className={styles[className]}>
      {label}
    </button>
  )
}

export default Button