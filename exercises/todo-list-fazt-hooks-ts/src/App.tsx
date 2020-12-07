
import React, { useState, useRef } from "react";

// Styles
// import './App.css';
import "bootswatch/dist/litera/bootstrap.min.css";

// Generamos un type para React.FormEvent<HTMLFormElement> asi no ponemos un texto tan largo
type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);     // Referencia para el input

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();

    addTask(newTask);
    setNewTask("");

    // Hacer que vuelva a cojer el foco despues de agregar una tarea
    taskInput.current?.focus();

    //console.log(`Tareas anteriores: ${tasks}`)
    console.log("Tareas anteriores: ", tasks);
    console.log(`Nueva tarea: ${newTask}`);
  };

  // Agregar tarea
  const addTask = (name: string): void => {
    //const newTasks: ITask[] = [...tasks, {name: name, done: false} ]        // Se puede usar name: name o mejor name solo
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  // Cambiar estado de tarea ( Hecha / No hecha ) ( False / True )
  const toggleDoneTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  }

  // Eliminar tarea
  const removeTask = (i: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
    console.log('Tarea eliminada: ', i)
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form action="" onSubmit={handleSubmit}>
                {/* <input type="text" onChange={e => console.log(e.target.value)} /> */}
                <h3> Todo list fazt </h3>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                  ref={taskInput}
                  autoFocus
                />
                <button className='btn btn-succes btn-block mt-2'> Agregar </button>
              </form>
            </div>
          </div>
          { tasks.map((t: ITask, i: number) => (
            <div className="card card-body mt-2" key={i}>
              <h5 style={{ textDecoration: t.done ? 'line-through' : '' }} > {t.name} </h5>
              <div>
                <button className="btn btn-secondary" onClick={() => toggleDoneTask(i)}> { t.done ? '✔' : '⮾' } </button>
                <button className='btn btn-danger' onClick={() => removeTask(i)} > 🗑 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
