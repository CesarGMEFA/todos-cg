import React from 'react';

import OptionsContext from '../contexts/OptionsContext';

import useTodoOptions from '../hooks/useTodoOptions';

function TodoOptions({ children }) {

  const useOptions = useTodoOptions();

  return (
    <OptionsContext.Provider value={useOptions}>
      <section className='flex items-center justify-between rounded-b overflow-hidden shadow-lg bg-skin-todos text-completed text-sm py-4 px-5'>
        {children}
      </section>
    </OptionsContext.Provider>
  )
}

export default TodoOptions