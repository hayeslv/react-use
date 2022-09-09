import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>App</h1>);

let element = <h1 className='title' style={{color: "red"}}>hello</h1>
root.render(element);