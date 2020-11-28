

import React, { useState } from 'react'

// Components
import TodoForm from './TodoForm'


function TodoList() {

    const [ todos, setTodos ] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    }

    return (
        <div>
            <h2> Cual es el plan para hoy? </h2>

            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default TodoList
