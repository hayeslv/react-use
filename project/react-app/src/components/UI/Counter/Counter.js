import React from 'react'
import classes from "./Counter.module.css"

export default function Counter(props) {
  const { amount } = props;

  return (
    <div className={classes.Counter}>
      {
        (props.amount && props.amount !== 0)
          ? <>
            <button className={classes.Sub}>
              <span>-</span>
            </button>
            <span className={classes.count}>{ amount }</span>
          </>
          : null
      }
      <button className={classes.Add}>
        <span>+</span>
      </button>
    </div>
  )
}
