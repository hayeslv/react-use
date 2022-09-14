import MyDate from "./MyDate/MyDate"
import "./LogItem.css"

const Comp = (props) => {
  return <div className="item">
    {/* 日期 */}
    <MyDate date={props.date} />
    {/* 日志内容 */}
    <div className="content">
      <h2 className="desc">{props.desc}</h2>
      <div className="time">{props.time}分钟</div>
    </div>
  </div>
}

export default Comp
