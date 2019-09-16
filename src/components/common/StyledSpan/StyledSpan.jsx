import React from 'react'
import style from './StyledSpan.module.css'

const StyledSpan = ({ children, color }) => (
  <span className={`${style.wrapper} ${color ? color : style.initial} noWrap`}>
    {children}
  </span>
)

export default StyledSpan
