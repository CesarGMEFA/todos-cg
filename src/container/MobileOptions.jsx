import React from 'react';

import FiltersContext from '../contexts/FiltersContext';
import ClearCompletedContext from '../contexts/ClearCompletedContext';

import useFilters from '../hooks/useFilters';
import useClearCompleted from '../hooks/useClearCompleted';

import TodoOptions from './TodoOptions';

import TodoCounter from '../components/TodoCounter';
import ClearCompleted from '../components/ClearCompleted';
import TodoFilter from '../components/TodoFilter';

function MobileOptions() {

  const activeFilter = useFilters()
  
  return (
    <React.Fragment>
      <TodoOptions>
        <TodoCounter />
        <ClearCompletedContext.Provider value={useClearCompleted()}>
          <ClearCompleted />
        </ClearCompletedContext.Provider>
      </TodoOptions>

      <FiltersContext.Provider value={activeFilter}>
        <TodoFilter />
      </FiltersContext.Provider> 
    </React.Fragment>
  )
}

export default MobileOptions