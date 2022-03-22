
import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import CustomItem from './components/CustomItem';

export default function App() {

  const [todos, setTodos] = React.useState([]);
  const [inputNewTodo, setInputNewTodo] = React.useState("");

  const fetchTodos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    setTodos(res.data);
  }

  React.useEffect(() => {
    fetchTodos();
    console.log(new Date, "useEffect", todos)
  }, [])


  const markComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodos)
    
  }

  const deleteTodo = (id) => {  
    const newTodos =  [...todos.filter(todo => todo.id !== id)]
    setTodos(newTodos)    
  }


  const addTodo = () => {  
    const newTodo =  {
      userId: 1,
      id: uuidv4(),
      title: inputNewTodo,
      completed: false
    };
    const newTodos =  [...todos, newTodo]
    setTodos(newTodos)   
    setInputNewTodo(""); 
  }

  const elements =
    todos.map((todo, idx) => 
    <CustomItem
      data={todo}
      markComplete={() => markComplete(todo.id)}
      deleteTodo={() => deleteTodo(todo.id)}
      key={idx}
    />)





  return (
    <div className="container">
      <div className="row">
        <input className="column column-90" type="text" placeholder="Add Todo.." value={inputNewTodo} onChange={(e) => setInputNewTodo(e.target.value)} />
        <a className="column column-10 button" onClick={addTodo}>ADD TODO</a>
      </div>
      {elements}
    </div>
  );
}


