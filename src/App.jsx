import { createContext, useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Heading from './Components/Heading'
import TodoList from './Components/TodoList'

export const TodoInitialState = createContext(null)

function App() {

  const [todos, setTodos] = useState([{
    todoId: 'TODO1',
    description: "I'm a sample Todo, you can add, edit, delete, mark as complete and incomplete with a new todo",
    isCompleted: false,
    dateAdded: new Date(),
    hidden: false
  }])

  return (
    <TodoInitialState.Provider value={{ todos, setTodos }}>
      <div className='flex flex-col items-center justify-center md:pt-[4rem] pb-[4rem] md:pl-[10rem] md:pr-[10rem]'>
        <Heading />
        <AddTodo />
        <TodoList />
      </div>
    </TodoInitialState.Provider>
  )
}

export default App
