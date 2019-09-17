import React from 'react'
import style from './IconGroup.module.css'
import getIcons from '../../../assets/icons'

const IconGroup = () => {
  const { close, settings, collapse } = getIcons()
  return (
    <div className={style.wrapper}>
      <span>{collapse}</span>
      <span>{settings}</span>
      <span>{close}</span>
    </div>
  )
}
export default IconGroup