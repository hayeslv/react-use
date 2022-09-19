import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <ul>
        <li>
          {/* <Link to="/">主页</Link> */}
          <NavLink exact to="/">主页</NavLink>
        </li>
        <li>
          {/* <Link to="/about">关于</Link> */}
          <NavLink exact to="/about">关于</NavLink>
        </li>
      </ul>
    </div>
  );
}
