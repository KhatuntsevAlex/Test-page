import React, { useState } from 'react';
import TotalInfoCard from './TotalInfoCard';
import style from './TotalInfoCard.module.css';
import getIcons from '../../assets/icons';

const TotalInfoCardList = () => {
  const { thunder, up, down, close, settings } = getIcons()
  const [items, setItems] = useState([
    {
      name: 'Income',
      period: 'Monthly',
      total: '40 886,200',
      totalName: 'Total incoms',
      percentage: 98,
      icon: thunder,
      color: 'blue',
    },
    {
      name: 'Orders',
      period: 'Annual',
      total: '275,800',
      totalName: 'New orders',
      percentage: 20,
      icon: up,
      color: 'olive',
    },
    {
      name: 'Visits',
      period: 'Today',
      total: '106,120',
      totalName: 'New visits',
      percentage: 44,
      icon: up,
      color: 'green',
    },
    {
      name: 'User activity',
      period: 'Low value',
      total: '80,600',
      totalName: 'In first month',
      percentage: 38,
      icon: down,
      color: 'red',
    },
  ])
  return (<>
    {/* <div className={style.topCardGroup}> */}
    {items.map(item => <TotalInfoCard {...item} />)}
    {/* </div> */}</>
  )
}

export default TotalInfoCardList
