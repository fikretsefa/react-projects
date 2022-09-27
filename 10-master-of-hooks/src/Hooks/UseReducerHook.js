import  { useRef,useEffect, useState,useReducer } from "react";


 

function UseReducerHook() {

  const countReducer = (state,action) => {
    switch(action.type){
      case 'add':
        return state + 1;
        case 'substract':
        return state - action.payload;
        default:
        return state;
    }
  }
  const [state,dispatch] = useReducer(countReducer,0);
 
  



  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => dispatch({type:"substract",payload:4})}>decrease</button>
      <button onClick={() => dispatch({type:"add"})}>increase</button>

    </div>
  );
}

export default UseReducerHook;
