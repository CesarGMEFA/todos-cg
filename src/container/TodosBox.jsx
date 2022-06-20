import React from 'react'

function TodosBox(props) {
  return (
    <section className='flex justify-between items-center bg-skin-todos shadow-lg p-3 rounded-b'>
      {props.children}
    </section>
  )
}

export default TodosBox