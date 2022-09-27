import  { useRef,useEffect, useState,useReducer } from "react";
import Counter from '../Components/Counter';

 

function UseImperativeHandleHook() {

  const ref = useRef();
  



  return (
    <div className="App">
      
      <Counter ref={ref} />
      <button onClick={() => {ref.current.handleSubstract()}}>decrease</button>
      <button onClick={() => {ref.current.handleAdd()}}>increase</button>

    </div>
  );
}

export default UseImperativeHandleHook;
