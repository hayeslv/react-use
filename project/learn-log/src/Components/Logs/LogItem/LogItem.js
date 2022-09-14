import MyDate from "./MyDate/MyDate"
import "./LogItem.css"
import Card from "../../UI/Card"

const Comp = (props) => {
  return <Card className="item">
    {/* 日期 */}
    <MyDate date={props.date} />
    {/* 日志内容 */}
    <div className="content">
      <h2 className="desc">{props.desc}</h2>
      <div className="time">{props.time}分钟</div>
    </div>
  </Card>
}

export default Comp
