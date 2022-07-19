import  { useState,useEffect } from "react";

function UseEffectHook() {

  const [count,setCount] = useState({num:1,id:"abcd",});

  const handleAdd = () => 
  { 
    // 01:its working only one time because use this state
    // setCount(count+1);
    // setCount(count+1);
    // setCount((prev) => prev + 1);
  
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

 const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//if use [] its run one time
//  useEffect(() => {
//   setCount({
//     num:5,
//     id: "random",
//   });
//  },[count]);

 useEffect(() => {
  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  })
  console.log("i run after return")
  return () => {
    console.log("i return");
  }
 },[count]);

  return (
    <div className="App">
      <h1>{count.num}</h1>
      <h6>{count.id}</h6>
      <p>{screenWidth}</p>
      
      <button onClick={handleSubstract}>decrease</button>
      <button onClick={handleAdd}>increase</button>
    </div>
  );
}

export default UseEffectHook;
