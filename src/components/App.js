import React, { useState } from 'react';
import TodoList from './TodoList';
import '../App.css'; // Asume que tienes estilos básicos aquí

const App = () => {
  const [todos, setTodos] = useState([]); // crea un array de todos
  const [task, setTask] = useState(""); // crea el string - se crea vacio 

  const addTodo = event => { // metodo para crear una nueva tarea
    event.preventDefault();
    if (task.trim() !== "") { // valida que exista informacion al dar clic en add task
      setTodos([...todos, { id: Date.now(), task, completed: false }]);   // agrega a la lista la tarea, 
      setTask(""); //limpia el valor del input 
    }
  };

  const toggleComplete = id => { // parametro id 
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo // valido que id con id del todo 
      )
    );
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>My To-Do</h1>
      <div className="App">
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
