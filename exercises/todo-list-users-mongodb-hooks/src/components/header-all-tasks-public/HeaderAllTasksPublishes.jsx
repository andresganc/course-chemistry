
import React, { Fragment, useState } from 'react'

// Components
import FormAdd from '../forms-tasks/FormAdd'
import TaskPrueba from '../task/TaskPrueba';



function HeaderAllTasksPublishes() {

    const [todos, setTodos] = useState([]);

    const addTask = todo => {
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);
    }


    return (
        <Fragment>
            <h2> Header tareas publicas </h2>
            <FormAdd onSubmit={addTask} />
            <TaskPrueba todos={todos} />
        </Fragment>
    )
}

export default HeaderAllTasksPublishes
