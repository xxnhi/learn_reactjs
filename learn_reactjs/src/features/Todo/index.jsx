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
    const [filterStatus, setFilterStatus] = useState('all');


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

    const handleShowAllClick = () => { 
        setFilterStatus('all');
    }
    
    const handleShowCompletedClick = () => {
        setFilterStatus('completed');

    }

    const handleShowNewClick = () => {
        setFilterStatus('new');

    }

    const renderTodoList = todoList.filter (todo => filterStatus === 'all' || filterStatus === todo.status)
    //console.log(renderTodoList)
    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick}> Show All</button>
                <button onClick={handleShowCompletedClick}> Show Completed</button>
                <button onClick={handleShowNewClick}> Show New</button>

            </div>

        </div>
        );
        
}

export default TodoFeature;