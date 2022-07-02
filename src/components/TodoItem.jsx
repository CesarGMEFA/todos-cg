import React, { useContext } from 'react';

import DeleteTodosContext from '../contexts/DeleteTodosContext';
import StatusTodos from '../contexts/StatusTodos';

function TodoItem({ text, id, completed }) {

  const { status } = useContext(StatusTodos);
  const { deleteTodo } = useContext(DeleteTodosContext);

  return (
    <li className='TodoItem flex items-center bg-skin-todos py-4 px-4 border-b-[.5px] border-gray-500 font-normal'>
      <div
        className={`rounded-full w-5 h-5 cursor-pointer center-col hover:border-color-gr
                    ${completed ? 'border-color-gr' : 'bg-circles'}`
                  }
        onClick={() => status(id)}
      >
        {completed 
          ? <div className='w-4 h-4 bg-icon-check bg-no-repeat bg-center' /> 
          : <div className='w-4 h-4 bg-skin-todos rounded-lg p-1' />
        }
      </div>
      <p className={`TodoItem_text cursor-default text-todos-text px-3 ${completed && 'line-through text-completed'}`}>
        {text}
      </p>
      <div className={`TodoItem_delete hidden bg-icon-close bg-no-repeat bg-center w-5 h-5 ml-auto cursor-pointer`}
           onClick={() => deleteTodo(id)}
      />
    </li>
  );
};

export default TodoItem;