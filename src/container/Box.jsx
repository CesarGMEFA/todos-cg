import React, { useContext } from 'react';

import AppContext from '../contexts/AppContext';

import ListTodos from './ListTodos';
import MobileOptions from './MobileOptions';
import DesktopOptions from './DesktopOptions';

import CreateTodos from '../components/CreateTodos';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import EmptyList from '../components/EmptyList';


function Box() {
  const { 
    data,
  } = useContext(AppContext);
  
  return (
    <section className='text-lg font-bold'>
      
      <Header />

      <CreateTodos />

      <ListTodos 
        onEmptyList={() => <EmptyList />}
        data={data}
        render={
          todo => (
            <TodoItem 
              key={todo.id}
              text={todo.text}
              id={todo.id}
              completed={todo.completed}
            />
          )
        }
      />
        
      { screen.width <= 600 ? <MobileOptions /> : <DesktopOptions /> }

    </section>
  );
};

export default Box;