
import React from 'react';
import axios from 'axios';
import CustomItem from './components/CustomItem';

export default function App() {

  const [todos, setTodos] = React.useState([]);

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
    const newTodos = { todos: [...todos.filter(todo => todo.id !== id)]}
    //to:do
    // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    // .then(res => setTodos(newTodos))
    
  }


  const elements =
    todos.map((todo, idx) => <CustomItem
      data={todo}
      markComplete={() => markComplete(todo.id)}
      deleteTodo={() => deleteTodo(todo.id)}
      key={idx}
    />)





  return (
    <div className="container">
      <div className="row">
        <input className="column column-90" type="text" placeholder="Add Todo.." />
        <a className="column column-10 button" href="#">ADD TODO</a>
      </div>
      {elements}
    </div>
  );
}


