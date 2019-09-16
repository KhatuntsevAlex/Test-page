import React, { useState } from 'react'
import StyledTable from '../common/StyledTable/StyledTable'
import Transaction from './Transaction'

const TransactionsTable = () => {
  const [transactions] = useState([
    {
      id: 1,
      transaction: 'Security doors',
      date: '16 jun 2014',
      amount: 483,
    },
    {
      id: 2,
      transaction: 'Wardrobes',
      date: '10 jun 2014',
      amount: 327,
    },
    {
      id: 3,
      transaction: 'Set of tools',
      date: '12 jun 2014',
      amount: 125,
    },
    {
      id: 4,
      transaction: 'Panoramic pictures',
      date: '22 jun 2014',
      amount: 344,
    },
    {
      id: 5,
      transaction: 'Phones',
      date: '24 jun 2014',
      amount: 235,
    },
    {
      id: 6,
      transaction: 'Monitors',
      date: '26 jun 2014',
      amount: 100,
    },
  ])
  const tableHeaders = ['No.', 'Transaction', 'Date', 'Amount']
  return (
    <StyledTable headers={tableHeaders}>
      <tbody>
        {transactions.map(item => <Transaction {...item} />)}
      </tbody>
    </StyledTable>
  )
}

export default TransactionsTable
