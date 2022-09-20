import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Student from './components/Student';
import Hello from './components/Hello';

export default function App() {
  return (
    <div>
      <h1>App</h1>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path='hello' element={<Hello />}></Route>
        </Route>
        <Route path='/student/:id' element={<Student />} />
      </Routes>
    </div>
  );
}
