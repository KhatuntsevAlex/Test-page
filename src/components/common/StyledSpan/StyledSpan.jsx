import React from 'react'
import style from './StyledSpan.module.css'

const StyledSpan = ({ children, color, cursor }) => (
  <span className={`${color ? color : style.initial} ${cursor && cursor} ${style.wrapper} noWrap`}>
    {children}
  </span>
)

export default StyledSpan
