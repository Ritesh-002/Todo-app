import React, { useContext, useEffect, useRef, useState } from 'react'
import DeleteTodo from './DeleteTodo'
import IsCompleteTodo from './IsCompleteTodo'
import { TodoInitialState } from '../App'
import EditTodo from './EditTodo.jsx'

const IndividualTodo = ({ todoId, description, isCompleted, index }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [editContent, setEditContent] = useState(description)

    const handleSetEditContent = (e) => {
        setEditContent(e.target.value)
    }

    return (
        <div className={`${isCompleted ? 'bg-red-200' : ''} flex items-center justify-between border-2 rounded-sm border-blue-950 md:w-[700px] p-2`}>
            <div className="flex items-center gap-3 w-full overflow-hidden">
                <IsCompleteTodo todoId={todoId} isCompleted={isCompleted} />
                {isEditing ? (
                    <input
                        value={editContent} onChange={handleSetEditContent} type="text" className='border-2 rounded-sm border-black p-1 flex-grow w-full overflow-hidden'
                    />
                ) : (
                    <p className=' w-full'>{description}</p>
                )}
            </div>

            <div className='flex gap-2'>
                <EditTodo isCompleted={isCompleted} todoId={todoId} isEditing={isEditing} setIsEditing={setIsEditing} editContent={editContent} setEditContent={setEditContent} />
                <DeleteTodo todoId={todoId} />
            </div>
        </div>
    )
}

export default IndividualTodo