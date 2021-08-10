import React from 'react';
import {FaTimes} from 'react-icons/fa';

const TodoItem = ({todoItem,onDelete}) =>{
    return(
        <>
        <div className='todo-background'>
        <div>{todoItem.todoText} <br/> {todoItem.date}</div>
        <FaTimes id='times-icon' onClick={()=>onDelete(todoItem)}/>
        </div>
        </>
    );
}

export default TodoItem; 