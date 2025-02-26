import React, { useContext, useEffect, useState } from 'react'
import IndividualTodo from './IndividualTodo'
import { TodoInitialState } from '../App'
const TodoList = () => {
    const { todos, setTodos } = useContext(TodoInitialState)
    useEffect(() => {
        console.log(todos)
    })
    return (
        <div className='flex flex-col gap-2 p-[1rem]'>
            {
                todos.length > 0 && todos.map((todo, index) => {
                    if (!todo.hidden) return <IndividualTodo key={todo?.todoId} todoId={todo?.todoId} description={todo?.description} isCompleted={todo?.isCompleted} index={index} />
                })
            }
        </div>
    )
}

export default TodoList