import React, { useContext } from 'react';
import classes from './Bar.module.css';
import CartContext from '../../../../store/cart-context';

export default function Bar() {
  const ctx = useContext(CartContext);

  return (
    <div className={classes.Bar}>
      <div className={classes.TotalPrice}>{ctx.totalPrice}</div>
      <button className={classes.Button}>去支付</button>
    </div>
  );
}
