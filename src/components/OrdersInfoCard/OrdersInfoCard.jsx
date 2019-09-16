import React, { useState } from 'react'
import style from './OrdersInfoCard.module.css'
import OrdersBarList from './OrdersBar/OrdersBarList'
import CardHeader from '../common/CardHeader/CardHeader'
import Card from '../common/Card/Card'
import CardContent from '../common/CardContent/CardContent'

const OrdersInfoCard = () => (
  <div className={style.wrapper}>
    <Card>
      <CardHeader title="Orders">
        <div className={style.buttonsGroup}>
          <button>Today</button>
          <button>Monthly</button>
          <button>Annual</button>
        </div>
      </CardHeader>
      <CardContent flex="spaceBetween">
        <span className={`graph ${style.graph}`}></span>
        <OrdersBarList />
      </CardContent>
    </Card>
  </div>



)

export default OrdersInfoCard
