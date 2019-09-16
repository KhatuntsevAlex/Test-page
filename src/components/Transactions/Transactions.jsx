import React from 'react'
import Card from '../common/Card/Card'
import CardHeader from '../common/CardHeader/CardHeader'
import IconGroup from '../common/IconGroup/IconGroup'
import CardContent from '../common/CardContent/CardContent'
import TransactionsTable from './TransactionsTable'
import style from './Transactions.module.css'

const Transactions = () => {
  return (
    <div className={style.wrapper}>
      <Card>
        <CardHeader title="Transactions worldwide">
          <IconGroup />
        </CardHeader>
        <CardContent flex="spaceBetween">
          <div className={style.tableWrapper}>
            <TransactionsTable />
          </div>
          <span className={`graph ${style.graph}`}></span>
        </CardContent>
      </Card>
    </div>
  )
}

export default Transactions
