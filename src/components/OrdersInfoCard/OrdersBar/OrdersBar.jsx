import React from 'react'
import TotalStatistics from '../../common/TotalStatistics/TotalStatistics'
import Progress from './Progress/Progress'
import style from './OrdersBar.module.css'

const OrdersBar = ({
  name,
  total,
  percentage,
  icon,
  color,
}) => (
    <div className={style.wrapper}>
      <TotalStatistics total={total} name={name} color={color} percentage={percentage} icon={icon} />
      <Progress color={color} value={percentage} />
    </div>

  )

export default OrdersBar
