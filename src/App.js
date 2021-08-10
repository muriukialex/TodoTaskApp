import React from 'react';
import './App.css';
import TodoList from './TodoList';
import FormInput from './FormInput';

function App() {
  const [todo,setTodo] = React.useState('');
  const [todoDate,setTodoDate] = React.useState('');
  const [todoList,setTodoList] = React.useState([]);

  //toggle show form
  const [showForm,setShowForm] = React.useState(true);

  const handleChange = (event) =>{
    setTodo(event.target.value);
  }
  const handleDateChange = (event)=>{
    setTodoDate(event.target.value);
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    setTodoList([...todoList, {todoText: todo, date: todoDate}]);
    setTodo('');
    setTodoDate('');
  }
  const handleDelete = (itemInList) =>{
    setTodoList(todoList.filter(item =>item.todoText !== itemInList.todoText));
  }

  return (
    <div className="todoContainer">
      <h1 style={headerStyle}>To do</h1>
      
      <div className='btn-show'>
        <button className='small-container small-container-btn'
          onClick={()=>{
            setShowForm(!showForm);
          }} >{showForm ? 'Add' : 'Close' }
        </button>
      </div>

      {!showForm ? 
      <FormInput onChangeHandler={handleChange}
        onChangeDateHandler={handleDateChange}
        onSubmit={handleSubmit} todo={todo} 
        todoDate={todoDate} className='small-container'/>
      : ''
      }
      <TodoList todoList={todoList} className='small-container' onDelete={handleDelete}/> 
    </div>
  );
}

const headerStyle = {
  'fontWeight': 400,
  'textAlign': 'center'
}
export default App;
