import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"

// 设置移动端的适配
document.documentElement.style.fontSize = 100 / 750 + "vw";

// 引入FontAwesome依赖
// npm i -S @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/react-fontawesome@latest

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
