import React, { useContext } from 'react'
import { TodoInitialState } from '../App'

const DeleteTodo = ({ todoId }) => {
    const { todos, setTodos } = useContext(TodoInitialState)
    const handleDeleteTodo = () => {
        setTodos(todos.filter((todo) => todo.todoId != todoId))
    }
    return (
        <button className='bg-red-700 h-6 w-6 rounded-sm text-white cursor-pointer' onClick={handleDeleteTodo}>X</button>
    )
}

export default DeleteTodo