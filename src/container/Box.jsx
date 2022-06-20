import React, { useContext } from 'react';

import AppContext from '../contexts/AppContext';

import ListTodos from './ListTodos';
import MobileOptions from './MobileOptions';
import DesktopOptions from './DesktopOptions';

import CreateTodos from '../components/CreateTodos';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';


function Box() {
  const { 
    data,
  } = useContext(AppContext)
  console.log(screen.width)
  
  return (
    <section className='min-w-max text-lg font-bold'>

      <Header />

      <CreateTodos />

      <ListTodos>
        {data.map( (todo, index) => (
          <TodoItem 
            key={index}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ListTodos>
        
      { screen.width <= 500 ? <MobileOptions /> : <DesktopOptions /> }

    </section>
  )
}

export default Box