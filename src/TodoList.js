import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todoList, onDelete}) =>{
    return(
        <div className='todoItemsBox'>
        <u style={headingList}>Todo Items</u>
        {todoList.map((todoItem)=>
        <TodoItem key={Math.floor(Math.random()*1000) +1 } todoItem={todoItem} onDelete={onDelete}/>)}
        </div>
    );
}

const headingList = {
    textDecoration:'none',
    fontSize: '1.2em',
    marginLeft: '1.2rem'
}
export default TodoList;