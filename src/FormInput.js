import React from 'react';

const FormInput = ({todo,todoDate,onChangeHandler,onChangeDateHandler, onSubmit}) =>{
    return(
        <>
          <form onSubmit={onSubmit} className='form-container'>
            <label htmlFor='todoText'>To do</label>
            <input id='todoText' type='text' value={todo} onChange={onChangeHandler} placeholder='Exercise' required/><br/>
            <label htmlFor='todoDate'>When </label>
            <input id='todoDate' type='text' value={todoDate} placeholder='Monday 9:00am' onChange={onChangeDateHandler}/>
            <input id='submit-btn' type='submit' value='Add todo' /><br/>
        </form>
        </>
    );
}

export default FormInput;