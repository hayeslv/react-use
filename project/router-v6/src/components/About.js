import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Hello from './Hello';

const STU_DATA = [
  {
    id: 1,
    name: "孙悟空"
  },
  {
    id: 2,
    name: "猪八戒"
  },
  {
    id: 3,
    name: "沙和尚"
  }
]

export default function About(props) {

  return (
    <div>
      <Navigate to="/student/1" replace></Navigate>

      <h2>About</h2>
      
      {/* <Route path={`${path}/hello`}>
        <Hello />
      </Route> */}

      {/* <Routes>
        <Route path={"hello"} element={<Hello />} />
      </Routes> */}
      <Outlet />
    </div>
  );
}
