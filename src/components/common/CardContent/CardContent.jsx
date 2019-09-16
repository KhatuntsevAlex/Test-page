import React from 'react'
import style from './CardContent.module.css'

const CardContent = ({ children, flex }) => {
  return (
    <div className={`${style.cardContent} ${flex}`}>
      {children}
    </div>
  )
}

export default CardContent
