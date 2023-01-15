import React,{useContext} from 'react'
import { TodoContext } from '../contexts/TodoContext'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todos = () => {
  const { todos } = useContext(TodoContext)
  
  return (
    <div className='todo-list'>
      <TodoForm />
          <ul>
              {todos.map(todo =>
                <TodoItem todo={todo} key={todo.id} />
                )}
          </ul>  
    </div>
  )
}

export default Todos