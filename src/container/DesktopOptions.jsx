import React from 'react';
import OptionsContext from '../contexts/OptionsContext';
import FiltersContext from '../contexts/FiltersContext';

import useTodoOptions from '../utils/hooks/useTodoOptions';
import useFilters from '../utils/hooks/useFilters';

import TodosBox from './TodosBox';
import TodoCounter from '../components/TodoCounter';
import TodoFilter from '../components/TodoFilter';
import ClearCompleted from '../components/ClearCompleted';

function DesktopOptions() {

  const useOptions = useTodoOptions()
  const activeFilter = useFilters()

  return (
    <OptionsContext.Provider value={useOptions}>
      <TodosBox>
        <TodoCounter />
        <FiltersContext.Provider value={activeFilter}>
          <TodoFilter />
        </FiltersContext.Provider> 
        <ClearCompleted />
      </TodosBox>
    </OptionsContext.Provider>
  )
};

export default DesktopOptions;