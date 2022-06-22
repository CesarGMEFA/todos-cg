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
    <section className='text-lg font-bold'>
      {/* w-3/4 */}
      <Header />

      <CreateTodos />

      <ListTodos>
        {data.map( (todo, index) => (
          <TodoItem 
            key={todo.id}
            text={todo.text}
            id={todo.id}
            completed={todo.completed}
          />
        ))}
      </ListTodos>
        
      { screen.width <= 600 ? <MobileOptions /> : <DesktopOptions /> }

    </section>
  )
}

export default Box