import React from 'react'
import style from './StyledTable.module.css'

const StyledTable = ({ children, headers }) => (
  <table className={style.wrapper}>
    <thead>
      <tr>
        {headers.map(header => <th>{header}</th>)}
      </tr>
    </thead>
    {children}
  </table>
)


export default StyledTable
