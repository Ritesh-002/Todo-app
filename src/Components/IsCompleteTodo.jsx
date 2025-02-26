import React, { useContext, useEffect, useState } from 'react'
import { TodoInitialState } from '../App'

const IsCompleteTodo = ({ todoId, isCompleted }) => {
    const { todos, setTodos } = useContext(TodoInitialState)
    const handleIsCompletedChange = () => {
        setTodos(prevTodos =>
            prevTodos.map((todo) =>
                todo.todoId == todoId ? {
                    ...todo, isCompleted: !todo.isCompleted
                } : todo)
        )
    }
    useEffect(() => {
        console.log("isCompleted: ", isCompleted)
    })
    return (
        <input className='h-6 w-6 cursor-pointer' defaultChecked={isCompleted} onChange={handleIsCompletedChange} type="checkbox" />
    )
}

export default IsCompleteTodo