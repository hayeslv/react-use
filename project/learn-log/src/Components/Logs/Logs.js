// 日志容器
import Card from "../UI/Card"
import LogItem from "./LogItem/LogItem"
import "./Logs.css"

const Logs = (props) => {
  
  const logItemDate = props.data.map((item) => <LogItem key={item.id} {...item}></LogItem>)

  return <Card className="logs">
    {
      logItemDate
    }
  </Card>
}

export default Logs
