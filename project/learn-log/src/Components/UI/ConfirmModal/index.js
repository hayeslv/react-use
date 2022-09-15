import Card from "../Card"
import BackDrop from "../BackDrop"
import "./index.css"


const ConfirmModal = props => {

  return <BackDrop>
    <Card className="confirmModal">
      <div className="confirmText">
        <p>{props.confirmText || "提示"}</p>
      </div>
      <div className="confirmButton">
        <button className="okButton" onClick={props.onOk}>确认</button>
        <button onClick={props.onCancel}>取消</button>
      </div>
    </Card>
  </BackDrop>
}

export default ConfirmModal