import React, { useContext } from 'react'
import FiltersContext from '../contexts/FiltersContext'
import AppContext from '../contexts/AppContext'

function TodoFilter() {

  const { 
    all,
    active, 
    completed
  } = useContext(FiltersContext)

  return (
    <section 
      className={
        screen.width <= 375  
        ? 'flex items-center justify-evenly bg-skin-todos py-4 px-4 mt-5 text-skin-text rounded shadow-lg'
        : 'text-skin-text text-base ml-16 mr-12'
      } 
    >
      <span className='cursor-pointer hover:text-skin-blue' onClick={all}>All</span>
      <span className='cursor-pointer mx-5 hover:text-skin-blue' onClick={active} >Active</span>
      <span className='cursor-pointer hover:text-skin-blue' onClick={completed} >Completed</span>
    </section>
  )
}

export default TodoFilter