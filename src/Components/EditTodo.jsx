import React, { useContext } from 'react'
import { TodoInitialState } from '../App'

const EditTodo = ({ isCompleted, todoId, isEditing, setIsEditing, editContent, setEditContent }) => {
    const { todos, setTodos } = useContext(TodoInitialState)
    const handleEditClick = () => {
        setIsEditing(!isEditing)
    }
    const handleSaveClick = () => {
        setIsEditing(!isEditing)
        setTodos(prevTodos =>
            prevTodos.map((todo) => todo.todoId == todoId ? { ...todo, description: editContent } : todo)
        )
    }
    return (
        <>
            {
                isEditing ? <button className='bg-blue-700 h-6 w-6 rounded-sm text-white cursor-pointer ml-2' onClick={handleSaveClick}>S</button> : <button disabled={isCompleted} className={`${isCompleted ? 'bg-green-400 cursor-not-allowed' : 'bg-green-700 cursor-pointer'} h-6 w-6 rounded-sm text-white`} onClick={handleEditClick}>E</button>
            }
        </>
    )
}

export default EditTodo