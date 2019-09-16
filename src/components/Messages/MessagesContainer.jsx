import React, { useState } from 'react'
import style from './Messages.module.css'
import Card from '../common/Card/Card'
import CardHeader from '../common/CardHeader/CardHeader'
import CardContent from '../common/CardContent/CardContent'
import Message from './Message'
import IconGroup from '../common/IconGroup/IconGroup'




const MessagesContainer = () => {
  const [messages, setMessages] = useState([
    {
      author: 'Monica Smith',
      visitDate: '1m ago',
      text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
      messageDate: 'Today 5:60 pm - 12.06.2014',
      color: 'green',
    },
    {
      author: 'John Angel',
      visitDate: '2m ago',
      text: 'There are many variations of passages of Lorem Ipsum available',
      messageDate: 'Today 2:23 pm - 11.06.2014',
    },
    {
      author: 'Jesica Ocean',
      visitDate: '5m ago',
      text: 'Contrary to popular belief, Lorem Ipsum',
      messageDate: 'Today 1:00 pm - 08.06.2014',
    },
    {
      author: 'Monica Jackson',
      visitDate: '5m ago',
      text: 'The jenerated Lorem Ipsum is therefore',
      messageDate: 'Yesterday 8:48 pm - 10.06.2014',
    },
    {
      author: 'Anna Legend',
      visitDate: '5m ago',
      text: 'All the Lorem Ipsum generators on the Internet tend to repeat',
      messageDate: 'Yesterday 8:48 pm - 10.06.2014',
    },
    {
      author: 'Damian Nowak',
      visitDate: '5m ago',
      text: 'The standard chunk of Lorem Ipsum used',
      messageDate: 'Yesterday 8:48 pm - 10.06.2014',
    },
    {
      author: 'Gary Smith',
      visitDate: '5m ago',
      text: '200 Latin words combined a handful',
      messageDate: 'Yesterday 8:48 pm - 10.06.2014',
    },
  ])
  return (
    <div className={style.wrapper}>
      <Card>
        <CardHeader title="Messages">
          <IconGroup />
        </CardHeader>
        <div className={style.messagesInfo}>
          <span>New messages</span>
          <span>You have 22 new messages and 16 waiting in draft folder</span>
        </div>
        <CardContent>
          <div className={style.messages}>
            {messages.map(message => <Message {...message} />)}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MessagesContainer
