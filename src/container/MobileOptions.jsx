import React from 'react';

import FiltersContext from '../contexts/FiltersContext';

import useFilters from '../utils/hooks/useFilters';

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
        <ClearCompleted />
      </TodoOptions>

      <FiltersContext.Provider value={activeFilter}>
        <TodoFilter />
      </FiltersContext.Provider> 
    </React.Fragment>
  )
}

export default MobileOptions