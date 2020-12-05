
import { type } from 'os';
import React, { Fragment, useState } from 'react';

// Styles
//import './App.css';

// Generamos un type para React.FormEvent<HTMLFormElement> asi no ponemos un texto tan largo
type FormElement = React.FormEvent<HTMLFormElement>

function App(): JSX.Element {
  
  const [task, setTask] = useState('')

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    console.log('Enviando')
  }

  return (
    <div className="App">
      <Fragment>
        <h2> Todo list fazt </h2>
        <form action="" onSubmit={handleSubmit} >
          {/* <input type="text" onChange={e => console.log(e.target.value)} /> */}
          <input type="text" onChange={e => setTask(e.target.value) } />
          <button>
            Guardar
          </button>
        </form>
      </Fragment>
      

    </div>
  );
}

export default App;
