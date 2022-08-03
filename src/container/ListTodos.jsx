import React, { useState, useContext } from 'react';
import { ReactSortable } from 'react-sortablejs';

import StatusTodos from '../contexts/StatusTodos';
import DeleteTodosContext from '../contexts/DeleteTodosContext';
import FiltersContext from '../contexts/FiltersContext';
import AppContext from '../contexts/AppContext';

import useStatusTodos from '../hooks/useStatusTodos';
import useDeleteTodo from '../hooks/useDeleteTodo';
import useFilters from '../hooks/useFilters';

function ListTodos({  dataView, render, onEmptyList, saveData, setDataView }) {

  // const { saveData, setData, setDataView } = useContext(AppContext);
  const StatusState = useStatusTodos();
  const deleteTodo = useDeleteTodo();
  const activeFilter = useFilters();

  // const [ state, setState ] = useState(data);
  
  return (
    <StatusTodos.Provider value={StatusState}>
      <DeleteTodosContext.Provider value={deleteTodo}>
        <FiltersContext.Provider value={activeFilter}>

          <section className='rounded-t overflow-hidden shadow-lg'>
            { (!dataView.length) && onEmptyList() }
            <ul>
              <ReactSortable 
                animation={150} 
                chosenClass='selectedDragDrop' 
                dragClass='opacity-0'
                list={dataView} 
                setList={setDataView}
                group='todos-list'
              >
                {dataView.map( render )}
              </ReactSortable>
            </ul>
          </section>
          
        </FiltersContext.Provider>
      </DeleteTodosContext.Provider>
    </StatusTodos.Provider>
  );
};

export default ListTodos;