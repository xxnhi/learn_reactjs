import React,{createContext, useEffect, useState} from 'react'

export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
   
  const [todos, setTodos] = useState([
    { id: 1, title: 'viec 1' },
    { id: 2, title: 'viec 2' },
    { id: 3, title: 'viec 3' },
        
  ])
    
    //useEffect
    useEffect(() => {
        console.log('getting todos')
        const todos = localStorage.getItem('todos')
        if (todos) setTodos(JSON.parse(todos))
    },[])


    useEffect(() => {
        console.log('saving todos')
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

    //Context data
    const todoContextData = {
        todos,
        addTodo,
        deleteTodo
    }
    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
      </TodoContext.Provider>
  )
}

export default TodoContextProvider