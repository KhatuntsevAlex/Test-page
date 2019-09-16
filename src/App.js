import React from 'react';
import style from './App.module.css';
import TotalInfoCardList from './components/TotalInfoCard/TotalInfoCardList';
import OrdersInfoCard from './components/OrdersInfoCard/OrdersInfoCard';
import MessagesContainer from './components/Messages/MessagesContainer';
import UserProjectList from './components/UserProjectList/UserProjectList';
import TodoList from './components/TodoList/TodoList';
import Transactions from './components/Transactions/Transactions';
import getIcons from './assets/icons';


function App() {
  const {settings} = getIcons()
  return (
    <div className={style.App}>
       <TotalInfoCardList />
       <OrdersInfoCard />
       <div className={style.else}>
       <MessagesContainer />
       <UserProjectList />
       <TodoList />
       <Transactions />
       </div>
       <div className={`${style.settings} green`}>{settings}</div>
    </div>
  );
}

export default App;
