import React from './react';
import ReactDom from './react-dom';

class ClassComponent extends React.Component {
  render() {
    return <h1 className='title' style={{ color: 'red' }}>1</h1>;
  }
}

// 参数被babel后会变成一个props： { name: "hayes", age: 18 }
const element = <ClassComponent name="hayes" age={18} />;

ReactDom.render(element, document.getElementById('root'));
