import React, { useState } from 'react'
import Card from '../common/Card/Card'
import CardHeader from '../common/CardHeader/CardHeader'
import CardContent from '../common/CardContent/CardContent'
import IconGroup from '../common/IconGroup/IconGroup'
import getIcons from '../../assets/icons'
import StyledTable from '../common/StyledTable/StyledTable'
import UserProject from './UserProject'
import style from './UserProject.module.css'

const UserProjectList = () => {
  const { up, clock } = getIcons()
  const [userProjectList] = useState([
    {
      status: 'Pending...',
      date: '11:20pm',
      user: 'Samantha',
      value: 24,
      icon: up,
    },
    {
      status: 'Canceled',
      date: '10:40am',
      user: 'Monica',
      value: 66,
      icon: up,
    },
    {
      status: 'Pending...',
      date: '01:30pm',
      user: 'John',
      value: 54,
      icon: up,
    },
    {
      status: 'Pending...',
      date: '02:20pm',
      user: 'Agnes',
      value: 12,
      icon: up,
    },
    {
      status: 'Completed',
      date: '04:10am',
      user: 'Amelia',
      value: 66,
      icon: up,
    },
    {
      status: 'Pending...',
      date: '12:08am',
      user: 'Damlan',
      value: 23,
      icon: up,
    },
  ])
  const tableHeaders = ['Status', 'Data', 'User', 'Value']
  return (
    <div className={style.wrapper}>
      <Card>
        <CardHeader title="User project list">
          <IconGroup />
        </CardHeader>
        <CardContent>
          <StyledTable headers={tableHeaders}>
            <tbody>
              {userProjectList.map(item => <UserProject {...item} clock={clock} />)}
            </tbody>
          </StyledTable>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserProjectList
