import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseStateHook from './Hooks/UseStateHook';
import UseEffectHook from './Hooks/UseEffectHook';
import UseMemoHook from './Hooks/UseMemoHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseStateHook /> */}
    {/* <UseEffectHook/> */}
    <UseMemoHook/>
  </React.StrictMode>
);

