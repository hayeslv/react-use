// 路由
import React from 'react';
import { Navigate, Routes, NavLink, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='link-list'>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/home">Home</NavLink>
        </div>
        <div className="body">
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/home/*' element={<Home />} />
            {/* react-router v5版本使用方式 */}
            {/* <Redirect to="/home" /> */}
            {/* v6版本：使用Navigate */}
            <Route path='/' element={<Navigate to="/about" replace />}></Route>

          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
