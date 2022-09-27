import  { useState } from "react";
import useFetchAPI from "./Hooks/UseFetchAPI";

function App() {

  const {data,loading,error} = useFetchAPI('https://jsonplaceholder.typicode.com/users');
  
  if(error) return <p>Error!</p>
  if(loading) return <p>Loading..</p>
  
  return (
    <div className="App">
      <ul>
        {data?.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
