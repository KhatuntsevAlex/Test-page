import React, { useState } from 'react'
import Card from '../common/Card/Card'
import CardHeader from '../common/CardHeader/CardHeader'
import IconGroup from '../common/IconGroup/IconGroup'
import CardContent from '../common/CardContent/CardContent'
import Todo from './Todo'
import style from './TodoList.module.css'

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: 'Buy a milk',
    },
    {
      id: 2,
      todo: 'Go to shop and find some products',
    },
    {
      id: 3,
      todo: 'Send documents to Mike',
      expires: '1 mins',
    },
    {
      id: 4,
      todo: 'Go to the doctor dr Smith',
    },
    {
      id: 5,
      todo: 'Plan vacation',
    },
    {
      id: 6,
      todo: 'Create new staff',
    },
    {
      id: 7,
      todo: 'Call to Anna for Dinner',
    },
  ])
  return (
    <div className={style.wrapper}>
      <Card>
        <CardHeader title="Small toto list" >
          <IconGroup />
        </CardHeader>
        <CardContent>
          {todos.map(todo => <Todo {...todo} />)}
        </CardContent>
      </Card>
    </div>
  )
}

export default TodoList
