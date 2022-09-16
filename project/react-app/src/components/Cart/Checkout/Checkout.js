import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import ReactDOM from "react-dom"
import classes from './Checkout.module.css';

const checkoutRoot = document.getElementById("checkout-root")

export default function Checkout(props) {
  return ReactDOM.createPortal(<div className={classes.Checkout}>
    <div className={classes.Close}>
      <FontAwesomeIcon icon={faXmark} onClick={() => props.onHide()} />
    </div>
  </div>, checkoutRoot)
}
