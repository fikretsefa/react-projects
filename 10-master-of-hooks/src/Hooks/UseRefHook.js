import  { useRef,useEffect, useState } from "react";


 

function UseRefHook() {

  const [count,setCount] = useState({num:1,id:"abcd",});
  const [rendered,setRendered] = useState(1);
  const renderRef = useRef(0);
  
  useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

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
      <h1>Ref : {renderRef.current}</h1>

    </div>
  );
}

export default UseRefHook;
