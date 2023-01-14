import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid'


const TodoForm = ({addTodo}) => {

    const style = {
        background: 'rgb(240,240,240)',
        color :'black'
    }

    const [title, setTitle]= useState('')
    const onTitleChange = event => {
        setTitle(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        addTodo({
            id: uuidv4(),
            title
        })
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder='Enter a new todo...'
                onChange={onTitleChange}
                value={title}
                required
            />
            <input type="submit" value='Add' style={style} />
      </form>
  )
}

export default TodoForm