import  { useImperativeHandle, forwardRef,useState } from "react";

const Counter = forwardRef((props,ref) => {

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

 useImperativeHandle(ref,() => ({handleAdd,handleSubstract}));

  return (
    <div className="App">
      <h1>{count.num}</h1>
    </div>
  );
  });

export default Counter;
