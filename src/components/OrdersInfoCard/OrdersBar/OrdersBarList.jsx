import React, { useState } from 'react';
import style from './OrdersBar.module.css';
import OrdersBar from './OrdersBar';
import getIcons from '../../../assets/icons';

const OrdersBarList = () => {
  const { thunder, up, down, close, settings } = getIcons()
  const [items, setItems] = useState([
    {
      name: 'Total orders in period',
      total: '2,346',
      percentage: 48,
      icon: up,
      color: 'green',
    },
    {
      name: 'Orders in a last month',
      total: '4,422',
      percentage: 60,
      icon: down,
      color: 'green',
    },
    {
      name: 'Monthly income from orders',
      total: '9,180',
      percentage: 22,
      icon: thunder,
      color: 'green',
    },
  ])
  return (
    <div className={style.ordersBarGroup}>
      {items.map(item => <OrdersBar {...item} />)}
    </div>
  )
}

export default OrdersBarList
