import React, { useContext, useState } from 'react'
import { TodoInitialState } from '../App'

const SortTodo = () => {
    const { todos, setTodos } = useContext(TodoInitialState)
    const handleSortClick = (e) => {
        const value = e.target.value
        if (value == 'Sort By') {
            setTodos((prevTodos) => [...prevTodos].sort((a, b) =>
                parseInt(a.todoId[a.todoId.length - 1]) - parseInt(b.todoId[b.todoId.length - 1])
            ))
        } else if (value == 'Latest') {
            setTodos((prevTodos) => [...prevTodos].sort((a, b) =>
                b.dateAdded.getTime() - a.dateAdded.getTime()
            ))
        } else if (value == 'Date added') {
            setTodos((prevTodos) => [...prevTodos].sort((a, b) =>
                a.dateAdded.getTime() - b.dateAdded.getTime()
            ))
        } else if (value == 'C to U') {
            setTodos((prevTodos) => {
                const temp = prevTodos.filter((todo) => todo.isCompleted)
                const newTemp = prevTodos.filter((todo) => !todo.isCompleted)
                return [...temp, ...newTemp]
            })
        } else if (value == 'U to C') {
            setTodos((prevTodos) => {
                const temp = prevTodos.filter((todo) => todo.isCompleted)
                const newTemp = prevTodos.filter((todo) => !todo.isCompleted)
                return [...newTemp, ...temp]
            })
        }
    }
    return (
        <select onChange={handleSortClick} className='p-2 border-2 border-black rounded-sm cursor-pointer'>
            <option defaultValue="Sort by">Sort By</option>
            <option>Latest</option>
            <option>Date added</option>
            <option>C to U</option>
            <option>U to C</option>
        </select>
    )
}

export default SortTodo