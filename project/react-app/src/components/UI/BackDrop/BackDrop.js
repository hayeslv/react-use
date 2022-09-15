import React from 'react'
import ReactDOM from 'react-dom';
import classes from './BackDrop.module.css';

const backdropRoot = document.getElementById("backdrop-root")

export default function BackDrop(props) {
  return ReactDOM.createPortal(<div className={`${classes.BackDrop} ${props.className}`}>
    {props.children}
  </div>, backdropRoot)
}
