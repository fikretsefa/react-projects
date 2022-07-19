import  { useState,useMemo } from "react";

function UseMemoHook() {

  const [count,setCount] = useState({num:1,id:"abcd",});

  const handleChange = () =>  {
    return count.num * 2;
  };
  useMemo(() => {},[]);

  const handleAdd = () => 
  {   
    setCount((prev) => {
     return{
      ...prev,
      num: prev.num + 1,
     };
    });
  };
  const handleSubstract = () => {      
    setCount((prev) => {
    return{
     ...prev,
     num: prev.num - 1,
    };
   });
 };



  return (
    <div className="App">
      <h1>{count.num}</h1>
      <h6>{count.id}</h6>
      
      <button onClick={handleSubstract}>decrease</button>
      <button onClick={handleAdd}>increase</button>

      <p>{handleChange()}</p>
    </div>
  );
}

export default UseMemoHook;
