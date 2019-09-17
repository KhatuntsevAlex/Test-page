import React from 'react'
import StyledSpan from '../common/StyledSpan/StyledSpan'

const Transaction = ({ num, transaction, date, amount }) => (
  <tr>
    <td> {num}</td>
    <td>{transaction}</td>
    <td>{date}</td>
    <td>
      <StyledSpan color={amount === '$125,00' ? 'orange' : 'green'} cursor="cursorUnset">{amount}</StyledSpan>
    </td>
  </tr>
)

export default Transaction


