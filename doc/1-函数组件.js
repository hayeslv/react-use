import React from 'react';
import ReactDom from 'react-dom';

function FunctionComponent(props) {
  return <h1 className='title' style={{ color: 'red' }}>{ props.name }</h1>;
}

// 参数被babel后会变成一个props： { name: "hayes", age: 18 }
const element = <FunctionComponent name="hayes" age={18} />;

ReactDom.render(element, document.getElementById('root'));
