import React from 'react'
import classes from "./Counter.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Counter(props) {
  const { amount } = props;

  return (
    <div className={classes.Counter}>
      {
        (props.amount && props.amount !== 0)
          ? <>
            <button className={classes.Sub}>
            <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className={classes.count}>{ amount }</span>
          </>
          : null
      }
      <button className={classes.Add}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}
