import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
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
  const { path } = useRouteMatch()

  return (
    <div>
      <h2>About</h2>
      
      <Route path={`${path}/hello`}>
        <Hello />
      </Route>
    </div>
  );
}
