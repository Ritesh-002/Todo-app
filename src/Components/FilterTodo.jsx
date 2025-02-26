import React, { useContext } from 'react'
import { TodoInitialState } from '../App'

const FilterTodo = () => {

    const { todos, setTodos } = useContext(TodoInitialState)

    const handleFilterChange = (e) => {
        const filter = e.target.value

        if (filter === "Completed") {
            setTodos(todos.map(todo => ({
                ...todo,
                hidden: !todo.isCompleted
            })))
        } else if (filter === "Incomplete") {
            setTodos(todos.map(todo => ({
                ...todo,
                hidden: todo.isCompleted
            })))
        } else {
            setTodos(todos.map(todo => ({
                ...todo,
                hidden: false
            })))
        }
    }

    return (
        <select onChange={handleFilterChange} className='border-2 border-black p-1 rounded-sm cursor-pointer'>
            <option defaultValue="Default">Default</option>
            <option>Completed</option>
            <option>Incomplete</option>
        </select>
    )
}

export default FilterTodo