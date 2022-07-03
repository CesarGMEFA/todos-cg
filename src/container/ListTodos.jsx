import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import StatusTodos from '../contexts/StatusTodos';
import DeleteTodosContext from '../contexts/DeleteTodosContext';
import FiltersContext from '../contexts/FiltersContext';

import useStatusTodos from '../hooks/useStatusTodos';
import useDeleteTodo from '../hooks/useDeleteTodo';
import useFilters from '../hooks/useFilters';

function ListTodos(props) {

  const StatusState = useStatusTodos();
  const deleteTodo = useDeleteTodo();
  const activeFilter = useFilters();

  const [ state, setState ] = useState(props.data);

  return (
    <StatusTodos.Provider value={StatusState}>
      <DeleteTodosContext.Provider value={deleteTodo}>
        <FiltersContext.Provider value={activeFilter}>

          <section className='rounded-t overflow-hidden shadow-lg'>
            { (!props.data.length) && props.onEmptyList() }
            <ul>
              <ReactSortable 
                animation={150} 
                chosenClass='selectedDragDrop' 
                dragClass='opacity-0'
                list={state} 
                setList={ setState }
                onEnd={
                  () => console.log('inserted')
                }
                group='todos-list'
                store={
                  {
                    // We get the order of the list
                    get: (sortable) => {
                      const order = localStorage.getItem(sortable.options.group.name);
                      return order ? order.split('|') : [];
                    },

                    // We keep the order of the list
                    set: (sortable) => {
                      const order = sortable.toArray()
                      localStorage.setItem(sortable.options.group.name, order.join('|'));
                    }
                  }
                }
              >
                {state.map( props.render )}
              </ReactSortable>
            </ul>
          </section>
          
        </FiltersContext.Provider>
      </DeleteTodosContext.Provider>
    </StatusTodos.Provider>
  );
};

export default ListTodos;