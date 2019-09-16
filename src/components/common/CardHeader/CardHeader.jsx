import React from 'react'
import style from './CardHeader.module.css'

const CardHeader = ({ title, children }) => (
  <>
    <div className={`${style.cardHeader} spaceBetween`}>
      <span>{title}</span>
      {children}
    </div>
    {/* <hr className="line" /> */}
  </>
)

export default CardHeader
