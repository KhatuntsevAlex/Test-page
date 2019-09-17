import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Card from '../common/Card/Card'
import CardHeader from '../common/CardHeader/CardHeader'
import IconGroup from '../common/IconGroup/IconGroup'
import CardContent from '../common/CardContent/CardContent'
import TransactionsTable from './TransactionsTable'
import style from './TransactionsContainer.module.css'
import { getItems } from '../../redux/reducers/transactions'
import Map from './Map'

const TransactionsContainer = ({ items, isReady, getItems: getTransactions }) => {

  useEffect(() => {
    if (!items) getTransactions()
  }, [items, getTransactions])

  return (
    <div className={style.wrapper}>
      <Card>
        <CardHeader title="Transactions worldwide">
          <IconGroup />
        </CardHeader>
        <CardContent flex={isReady && 'spaceBetween'}>
          {isReady
            ? <>
              <div className={style.tableWrapper}>
                <TransactionsTable transactions={items} />
              </div>
              <Map transactions={items} />
            </>
            : <span className={style.loading}>{'Loading...'}</span>
          }
        </CardContent>
      </Card>
    </div>
  )
}

const mapStateToProps = ({ transactions: { items, isReady } }) => ({
  items,
  isReady,
})

export default connect(mapStateToProps, { getItems })(TransactionsContainer)
