import React, { Children } from 'react';

import StatusTodos from '../contexts/StatusTodos';
import DeleteTodosContext from '../contexts/DeleteTodosContext';
import FiltersContext from '../contexts/FiltersContext';

import useStatusTodos from '../utils/hooks/useStatusTodos';
import useDeleteTodo from '../utils/hooks/useDeleteTodo';
import useFilters from '../utils/hooks/useFilters';

function ListTodos(props) {

  const StatusState = useStatusTodos();
  const deleteTodo = useDeleteTodo();
  const activeFilter = useFilters();

  return (
    <StatusTodos.Provider value={StatusState}>
      <DeleteTodosContext.Provider value={deleteTodo}>
        <FiltersContext.Provider value={activeFilter}>
          <section className='rounded-t overflow-hidden shadow-lg'>
            { (!props.data.length) && props.onEmptyList() }
            <ul>
              {props.data.map( props.render )}
            </ul>
          </section>
        </FiltersContext.Provider>
      </DeleteTodosContext.Provider>
    </StatusTodos.Provider>
  );
};

export default ListTodos;