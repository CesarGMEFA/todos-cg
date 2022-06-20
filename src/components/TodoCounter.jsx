import React, { useContext } from 'react'
import OptionsContext from '../contexts/OptionsContext';

function TodoCounter() {
  
  const { nonComplete } = useContext(OptionsContext);
  
  return (
    <React.Fragment>
      <p className={screen.width > 375 ? 'font-bold text-sm text-completed'
                    : 'font-bold'
                  }
      >
      {nonComplete} items left
      </p>
    </React.Fragment>
  )
}

export default TodoCounter