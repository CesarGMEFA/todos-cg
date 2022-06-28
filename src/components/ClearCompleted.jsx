import React, { useContext } from 'react';

import ClearCompletedContext from '../contexts/ClearCompletedContext';

function ClearCompleted() {
  const { 
    clearCompleted,
  } = useContext(ClearCompletedContext);

  return (
    <React.Fragment>
      <button type='button' 
        className={screen.width > 375 
          ? 'font-bold text-sm text-completed'
          : 'font-bold'
        } 
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </React.Fragment>
  )
}

export default ClearCompleted