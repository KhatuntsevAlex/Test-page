import React from 'react'
import StyledTable from '../common/StyledTable/StyledTable'
import Transaction from './Transaction'

const TransactionsTable = ({ transactions }) => {
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
