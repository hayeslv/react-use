// 日志容器
import Card from "../UI/Card"
import LogItem from "./LogItem/LogItem"
import "./Logs.css"

const Logs = (props) => {
  
  let logItemData = props.data.map((item, index) => 
  <LogItem 
    onDeleteLog={() => props.onDeleteLog(index)}
    key={item.id}
    {...item}
  ></LogItem>)

  if(logItemData.length === 0) {
    logItemData = <p className="no-logs">没有找到日志！</p>
  }

  return <Card className="logs">
    {
      logItemData 
    }
  </Card>
}

export default Logs
