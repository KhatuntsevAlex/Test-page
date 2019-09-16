import React from 'react'
import style from './Messages.module.css'

const Message = ({
  author,
  visitDate,
  text,
  messageDate,
  color,
}) => {

  return (
    <div className={style.message}>
      <div className="spaceBetween">
        <span className="noWrap">{author}</span>
        <span className={`${color} no-background-color noWrap`}>{visitDate}</span>
      </div>
      <p>
        <span>{text}</span>
      </p>
      <p>
        <span className="noWrap">{messageDate}</span>
      </p>
    </div>
  )
}

export default Message
