import React from 'react'
import classes from "./Confirm.module.css"
import BackDrop from "../BackDrop/BackDrop"

export default function Confirm(props) {
  return (
    <BackDrop className={classes.ConfirmOuter}>
      <div className={classes.Confirm}>
        <p className={classes.ConfirmText}>{props.confirmText}</p>
        <div>
          <button className={classes.Cancel} onClick={(e) => {props.onCancel(e)}}>取消</button>
          <button className={classes.Ok} onClick={(e) => {props.onOk(e)}}>确认</button>
        </div>
      </div>
    </BackDrop>
  )
}
