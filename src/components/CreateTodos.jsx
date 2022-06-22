import React from "react";

import AppContext from "../contexts/AppContext";

import { FiPlusCircle } from "react-icons/fi";

function CreateTodos() {
	const [ text, setText ] = React.useState("");
	const { addTodo } = React.useContext(AppContext);

	const onChange = (e) => {
		setText(e.target.value);
	}

	function onAdd(e) {
		e.preventDefault();
		addTodo(text);
		setText("");
	}
	
	return (
		<div className="flex items-center my-5 bg-skin-todos py-1 px-4 rounded shadow-lg">
			<i className="border-circles border-2 h-5 flex mr-0.5 rounded-full w-5" />
			<form onSubmit={onAdd} className='w-full flex'>
				<input 
					value={text}
					onChange={onChange}
					className=" Create_input text-skin-text bg-skin-todos outline-none px-3 py-1 w-4/5"
					placeholder="Create a new todo..."
					maxLength={30}
				/>
				{/* <div className={`block bg-icon-close bg-no-repeat bg-center w-5 h-5 ml-auto cursor-pointer rotate-45`}/> */}
				<button 
					type="submit"
					className="Create_add hidden ml-auto"
				>
					<FiPlusCircle />
				</button>
			</form>
		</div>
	);
}

export default CreateTodos;