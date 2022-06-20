import React from 'react';
import useStatusTodos from '../utils/hooks/useStatusTodos';
import useDeleteTodo from '../utils/hooks/useDeleteTodo';
import StatusTodos from '../contexts/StatusTodos';
import DeleteTodosContext from '../contexts/DeleteTodosContext';


function ListTodos({children}) {

  const StatusState = useStatusTodos();
  const deleteTodo = useDeleteTodo()

  return (
    <StatusTodos.Provider value={StatusState}>
      <DeleteTodosContext.Provider value={deleteTodo}>
        <section className='rounded-t overflow-hidden shadow-lg'>
          <ul>
            {children}
          </ul>
        </section>
      </DeleteTodosContext.Provider>
    </StatusTodos.Provider>
  );
}

export default ListTodos