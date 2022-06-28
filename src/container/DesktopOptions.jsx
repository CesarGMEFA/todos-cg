import React from 'react';

import OptionsContext from '../contexts/OptionsContext';
import FiltersContext from '../contexts/FiltersContext';
import ClearCompletedContext from '../contexts/ClearCompletedContext';

import useTodoOptions from '../hooks/useTodoOptions';
import useFilters from '../hooks/useFilters';
import useClearCompleted from '../hooks/useClearCompleted';

import TodosBox from './TodosBox';

import TodoCounter from '../components/TodoCounter';
import TodoFilter from '../components/TodoFilter';
import ClearCompleted from '../components/ClearCompleted';

function DesktopOptions() {

  return (
    <OptionsContext.Provider value={useTodoOptions()}>
      <TodosBox>
        
        <TodoCounter />

        <FiltersContext.Provider value={useFilters()}>
          <TodoFilter />
        </FiltersContext.Provider> 

        <ClearCompletedContext.Provider value={useClearCompleted()}>
          <ClearCompleted />
        </ClearCompletedContext.Provider>

      </TodosBox>
    </OptionsContext.Provider>
  );
  
};

export default DesktopOptions;