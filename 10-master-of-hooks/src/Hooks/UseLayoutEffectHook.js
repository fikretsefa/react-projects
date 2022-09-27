import  { useStates,useLayoutEffect } from "react";

function UseLayoutEffectHook() {



  useLayoutEffect(() => {
    console.log("Hello")
 },[]);

  return (
    <div className="App">
    </div>
  );
}

export default UseLayoutEffectHook;
