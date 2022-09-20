import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">主页</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "yellow" } : null
            }}
            to="/student/2"
          >学生</NavLink>
        </li>
      </ul>
    </div>
  )
}
