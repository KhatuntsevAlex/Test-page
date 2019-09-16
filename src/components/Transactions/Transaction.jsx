import React from 'react'
import StyledSpan from '../common/StyledSpan/StyledSpan'

const Transaction = ({ id, transaction, date, amount }) => (
  <tr>
    <td> {id}</td>
    <td>{transaction}</td>
    <td>{date}</td>
    <td>
      <StyledSpan color={amount === 125 ? 'orange' : 'green'}>{`$${amount.toFixed(2)}`}</StyledSpan>
    </td>
  </tr>
)


export default Transaction


