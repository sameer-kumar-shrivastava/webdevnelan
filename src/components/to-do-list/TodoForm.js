import React from 'react';

const TodoForm =({input, setInput, todos, setTodos}) =>{

    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onFormSubmit = (event)  =>{
        event.preventDefault();
    }
    return(<form onSubmit={onForm}>
        <input type="text" placeholder="Enter a Todo..." className='task-input' value={input} required onChange={onInputChange} />
        <button className='button-add' type="submit">
            Add
        </button>
    </form>);
}

export default TodoForm;