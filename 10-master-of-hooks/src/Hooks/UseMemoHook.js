import  { useState,useMemo } from "react";

function UseMemoHook() {

  const [count,setCount] = useState({num:1,id:"abcd",});

  //Fazla memory kullanan fonskiyonlar için kullanılabilir.
  // const handleChange = () =>  {
  //   for (let i = 0; i < 1000000000; i++) { 
  //     //doing lot of work
  //   }

  //   return count.num * 2;
  // };
  const handleChange = useMemo(() =>  {
      for (let i = 0; i < 1000000000; i++) { 
        //doing lot of work
      }
  
      return count.num * 2;
  },[count]);

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

      <p>{handleChange}</p>
    </div>
  );
}

export default UseMemoHook;
