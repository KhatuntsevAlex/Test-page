import React from 'react'
import style from './TotalStatistics.module.css'

const TotalStatistics = ({ total, name, color, percentage, icon, ...rest }) => {
  return (
    <div>
      <span className={style.total}>{total}</span>
      <div className={`${style.percentage} spaceBetween`}>
        {name && <span>{name}</span>}
        <span className={`${color} ${style.details}`}>
          {
            name && total
              ? `${percentage}% ${icon}`
              : `${icon} ${percentage}%`
          }
        </span>
      </div>
    </div>
  )
}

export default TotalStatistics
