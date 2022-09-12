import React from 'react';
import { Navigate, Route, Routes, NavLink } from 'react-router-dom';
import Message from './Message';
import News from './News';

export default function Home() {
  return (
    <div>
      <h2>home组件的内容</h2>
      <div>
        <ul>
          <li>
            <NavLink to="/home/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/home/message">Message</NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='news' element={<News />}></Route>
        <Route path='message/*' element={<Message />}></Route>
        <Route path="" element={<Navigate to="/home/news" />}/>
      </Routes>
    </div>
  );
}
