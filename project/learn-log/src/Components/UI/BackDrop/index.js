import ReactDOM from "react-dom"
import "./index.css"

// 获取backdrop的根元素
const backdropRoot = document.getElementById("backdrop-root")

// 使用传送门：ReactDOM.createPortal

const BackDrop = (props) => {
  return ReactDOM.createPortal(
    <div className="backDrop">
      {props.children}
    </div>,
    backdropRoot
  )
}

export default BackDrop
