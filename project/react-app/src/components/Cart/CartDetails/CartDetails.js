import React, { useContext } from 'react'
import BackDrop from '../../UI/BackDrop/BackDrop'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from "./CartDetails.module.css"
import CartContext from '../../../store/cart-context'
import Meal from "../../Meals/Meal/Meal"

export default function CartDetails() {
  const ctx = useContext(CartContext)

  return (
    <BackDrop>
      <div 
        className={classes.CartDetails}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={classes.Header}>
          <h2 className={classes.Title}>餐品详情</h2>
          <div className={classes.Clear} >
            <FontAwesomeIcon icon={faTrash} />
            <span>清空购物车</span>
          </div>
        </header>
        <div className={classes.MealList}>
          {
            ctx.items.map(item => (
              <Meal noDesc key={item.id} meal={item} />
            ))
          }
        </div>
      </div>
    </BackDrop>
  )
}
