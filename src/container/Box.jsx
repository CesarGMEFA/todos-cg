import React, { useContext } from 'react';

import AppContext from '../contexts/AppContext';
import AddTodoContext from '../contexts/AddTodoContext';
import ThemeContext from '../contexts/ThemeContext';

import useAddTodo from '../hooks/useAddTodo';
import useTheme from '../hooks/useTheme';

import ListTodos from './ListTodos';
import MobileOptions from './MobileOptions';
import DesktopOptions from './DesktopOptions';

import CreateTodos from '../components/CreateTodos';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import EmptyList from '../components/EmptyList';


function Box() {
  const { dataView } = useContext(AppContext);
  
  return (
    <section className='text-lg font-bold'>
      
      <Header />

      <AddTodoContext.Provider value={useAddTodo()}>
        <CreateTodos />
      </AddTodoContext.Provider>

      <ListTodos 
        onEmptyList={() => <EmptyList />}
        data={dataView}
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