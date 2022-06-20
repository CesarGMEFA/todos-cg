import { useContext } from "react"
import AppContext from "../../contexts/AppContext"

const useDeleteTodo = () => {

  const { data, saveData } = useContext(AppContext)

  const deleteTodo = (text) => {
    const todoIndex = data.findIndex(todo => todo.text === text)
    const newTodos = [...data]
    newTodos.splice(todoIndex, 1)
    saveData(newTodos)
  }

  return {
    deleteTodo
  }
}

export default useDeleteTodo