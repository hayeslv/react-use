// 实现最简单的 react 和 react-dom

import React from './react';
import ReactDom from './react-dom';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>App</h1>);

const element = <h1 className='title' style={{ color: 'red' }}>hello</h1>;
// root.render(element);

console.log(element);
// 把虚拟DOM变为真正的DOM，添加到root这个真实的容器中
ReactDom.render(element, document.getElementById('root'));
