import React from 'react'
import style from './TodoList.module.css'
import StyledSpan from '../common/StyledSpan/StyledSpan'
import getIcons from '../../assets/icons'

const Todo = ({
  id,
  todo,
  expires,
}) => {
  const { clock } = getIcons()
  return (
    <div className={`${style.todo} bgGrey `}>
      <input type="checkbox" className={style.checkbox} id={`checkbox${id}`} />
      <label for={`checkbox${id}`}>{todo}</label>
      {expires && <StyledSpan color="green" cursor="cursorUnset">{`${clock}   ${expires}`}</StyledSpan>}
    </div>
  )
}

export default Todo
