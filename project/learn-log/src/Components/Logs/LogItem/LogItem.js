import MyDate from "./MyDate/MyDate"
import "./LogItem.css"

const Comp = () => {
  return <div className="item">
    {/* 日期 */}
    <MyDate />
    {/* 日志内容 */}
    <div className="content">
      <h2 className="desc">学习React</h2>
      <div className="time">40分钟</div>
    </div>
  </div>
}

export default Comp
