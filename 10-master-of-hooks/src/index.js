import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseStateHook from './Hooks/UseStateHook';
import UseEffectHook from './Hooks/UseEffectHook';
import UseMemoHook from './Hooks/UseMemoHook';
import UseCallbackHook from './Hooks/UseCallbackHook';
import UseRefHook from './Hooks/UseRefHook';
import UseContextHook from './Hooks/UseContextHook';
import UseReducerHook from './Hooks/UseReducerHook';
import UseImperativeHandleHook from './Hooks/UseImperativeHandleHook';
import UseLayoutEffectHook from './Hooks/UseLayoutEffectHook';
import Context from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <UseStateHook /> */}
    {/* <UseEffectHook/> */}
    {/* <UseMemoHook/> */}
    {/* <UseCallbackHook/> */}
    {/* <UseRefHook/> */}
    {/* <UseReducerHook/> */}
    {/* <UseImperativeHandleHook/> */}
    {/* <UseLayoutEffectHook/> */}
  </React.StrictMode>
  // <React.StrictMode>
  //   <Context>
  //     <UseContextHook/>
  //   </Context>
  // </React.StrictMode>
);

