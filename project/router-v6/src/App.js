import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Hello from './components/Hello';

export default function App() {
  return (
    <div>
      <Menu />
      <Route exact path="/" component={Home} />
      {/* <Route path="/about/:id" component={About} /> */}
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}
