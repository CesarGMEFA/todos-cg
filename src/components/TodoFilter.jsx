import React, { useContext } from 'react';

import FiltersContext from '../contexts/FiltersContext';

import { clickColor } from '../utils/clickColor';
clickColor();

function TodoFilter() {
  const { 
    all,
    active, 
    completed
  } = useContext(FiltersContext);

  return (
    <section 
      className={
        screen.width <= 600  
        ? 'flex items-center justify-evenly bg-skin-todos py-4 px-4 mt-5 text-skin-text rounded shadow-lg'
        : 'text-skin-text text-base ml-16 mr-12'
      } 
    >
      <span className='todoFilter cursor-pointer' onClick={all}>All</span>
      <span className='todoFilter cursor-pointer mx-5' onClick={active} >Active</span>
      <span className='todoFilter cursor-pointer' onClick={completed} >Completed</span>
    </section>
  );
};

export default TodoFilter;