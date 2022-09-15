import MyDate from "./MyDate/MyDate"
import "./LogItem.css"
import Card from "../../UI/Card"
import ConfirmModal from "../../UI/ConfirmModal"
import { useState } from "react"

const Comp = (props) => {
  const [showConfirm, setShowConfirm] = useState(false)

  const deleteItemHandler = () => {
    // const isDel = window.confirm("该操作不可恢复，确认吗？")
    // if(isDel) {
    //   props.onDeleteLog()
    // }

    setShowConfirm(true)
  }

  const cancelHandler = () => {
    setShowConfirm(false)
  }
  const okHandler = () => {
    props.onDeleteLog()
    setShowConfirm(false)
  }


  return <Card className="item">
    {showConfirm && <ConfirmModal 
      confirmText="该操作不可恢复！请确认"
      onCancel={cancelHandler}
      onOk={okHandler}
    />}
    {/* 日期 */}
    <MyDate date={props.date} />
    {/* 日志内容 */}
    <div className="content">
      <h2 className="desc">{props.desc}</h2>
      <div className="time">{props.time}分钟</div>
    </div>
    <div>
      <div className="delete" onClick={deleteItemHandler}>x</div>
    </div>
  </Card>
}

export default Comp
