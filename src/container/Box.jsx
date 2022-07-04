import React, { useContext } from 'react';

import AppContext from '../contexts/AppContext';
import AddTodoContext from '../contexts/AddTodoContext';

import useAddTodo from '../hooks/useAddTodo';

import ListTodos from './ListTodos';
import MobileOptions from './MobileOptions';
import DesktopOptions from './DesktopOptions';

import CreateTodos from '../components/CreateTodos';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import EmptyList from '../components/EmptyList';


function Box() {
  const { data, dataView, saveData, setDataView } = useContext(AppContext);
  
  return (
    <section className='text-lg font-bold'>
      
      <Header />

      <AddTodoContext.Provider value={useAddTodo()}>
        <CreateTodos />
      </AddTodoContext.Provider>

      <ListTodos 
        onEmptyList={() => <EmptyList />}
        setDataView={setDataView}
        saveData={saveData}
        dataView={dataView}
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
      <p className='text-center mt-5 text-skin-text'>Drag and drop to reorder list</p>
    </section>
  );
};

export default Box;