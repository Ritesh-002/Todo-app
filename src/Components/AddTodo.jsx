import React, { useContext, useEffect, useState } from 'react'
import { TodoInitialState } from '../App'
import SortTodo from './SortTodo'
import FilterTodo from './FilterTodo'

const AddTodo = () => {
    const [count, setCount] = useState(2)
    const [description, setDescription] = useState('')
    const { todos, setTodos } = useContext(TodoInitialState)

    const handleSetDescription = (e) => {
        const newVal = e.target.value
        setDescription(newVal)
    }
    const handleAddTodo = () => {
        if (description.length == 0) {
            return
        }
        if (todos.length == 0) {
            setCount(0)
            setTodos([{
                todoId: `TODO1`,
                description,
                isCompleted: false,
                dateAdded: new Date(),
                hidden: false
            }])
            return
        }
        setTodos([
            ...todos,
            {
                todoId: `TODO${count}`,
                description,
                isCompleted: false,
                dateAdded: new Date(),
                hidden: false
            }
        ])
        setDescription('')
        setCount((prevCount) => prevCount + 1)
    }

    const handleOnKeyDown = (e) => {
        if (e.key == "Enter") {
            handleAddTodo()
        }
    }

    return (
        <div className='flex gap-5 p-[1rem] justify-between flex-wrap'>
            <FilterTodo />
            <input className='md:w-85 border-2 rounded-sm p-2 border-black' value={description} onChange={handleSetDescription} type="text" placeholder='Input list' onKeyDown={handleOnKeyDown} />
            <button className='cursor-pointer border-2 border-blue-950 text-white bg-blue-950 p-2 w-16 rounded-sm' onClick={handleAddTodo}>Add</button>
            <SortTodo />
        </div>
    )
}

export default AddTodo