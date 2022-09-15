import React, { useContext } from 'react'
import iconImg from "../../asset/bag.png"
import classes from "./Cart.module.css"
import CartContext from "../../store/cart-context"

export default function Cart() {
  const ctx = useContext(CartContext)

  return (
    <div className={classes.Cart}>
      <div className={classes.Icon}>
        <img src={iconImg} alt="" />
        {
          ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>  
        }
      </div>
      
      {
        ctx.totalPrice === 0
          ? <p className={classes.UnGoods}>未选购商品</p>
          : <p className={classes.Price}>{ctx.totalPrice}</p>
      }
      
      <button className={`${classes.Button} ${ctx.totalPrice === 0 ? classes.Disabled : ""}`}>去结算</button>
    </div>
  )
}
