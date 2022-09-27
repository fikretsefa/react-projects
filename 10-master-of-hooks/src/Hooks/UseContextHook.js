import  { useRef,useEffect, useState, useContext } from "react";
import { HookDemo } from "../Context";


 

function UseContextHook() {

  const {count,setCount} = useContext(HookDemo); 
 
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
      <button onClick={handleSubstract}>decrease</button>
      <button onClick={handleAdd}>increase</button>

    </div>
  );
}

export default UseContextHook;
