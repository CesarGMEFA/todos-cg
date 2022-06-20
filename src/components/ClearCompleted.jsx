import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext'

function ClearCompleted() {
  const { 
    clearCompleted,
  } = useContext(AppContext);

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