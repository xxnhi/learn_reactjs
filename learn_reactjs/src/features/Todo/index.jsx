import React,{useState} from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
TodoFeature.propTypes = {
    
};

function TodoFeature (props) {
    const initTodoList = [
        {
            id: 1,
            title: 'eat',
            status: 'new',

        },
        {
            id: 2,
            title: 'code',
            status: 'completed',
        },
        {
            id: 3,
            title: 'sleep',
            status: 'new',
        }

    ];

    const [todoList, setTodoList] = useState(initTodoList);
    
    const handleTodoClick = (todo, idx) => {
        
        //clone current array to the new one
        const newTodoList = [...todoList]

        console.log(todo, idx)
        //tongle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        }
        
        //update todo list 
        setTodoList(newTodoList)
    }
    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
        );
        
}

export default TodoFeature;