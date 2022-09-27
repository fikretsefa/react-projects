import  React,{ useState,useMemo, useCallback } from "react";

const Child = React.memo(({handleChange,setShow}) => {
  console.log("child ran!");
  return (
  <>  
    <p>{handleChange()}</p>
    <button onClick={() => setShow((prev) => !prev)}>Change</button>  
  </>
  );
});


function UseCallbackHook() {

  const [count,setCount] = useState({num:1,id:"abcd",});
  const [show,setShow] = useState(false);

  const handleChange = useCallback(() =>  {
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
      {show && <h6>{count.id}</h6>}
      
      <button onClick={handleSubstract}>decrease</button>
      <button onClick={handleAdd}>increase</button>

      <Child handleChange={handleChange} setShow={setShow}/>
    </div>
  );
}

export default UseCallbackHook;
