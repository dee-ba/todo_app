Youtube: https://www.youtube.com/watch?v=VqgTr-nd7Cg&t=391s&ab_channel=CleverProgrammer



import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out', 'go get few shopping stuff']); 
  const [input, setInput] = useState ('');
  // console.log('🔫', input);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();
    console.log('👽👽', 'Im working!!!');
    setTodos ([...todos, input]);
    setInput('');
    
  }

  return (
    <div className="App">
     
      <h1> 👋 Hello World!🚀 {1+1} </h1>
      <form>

        <input value={input} onChange = {event => setInput(event.target.value)}/>
        <button onClick={addTodo}> Add Todo </button>
     
      </form>



     <ul>
      {todos.map(todo => (
        <li>{todo}</li>

      ))}
      <li> </li>
     </ul>



    </div>
  );
}

export default App;
