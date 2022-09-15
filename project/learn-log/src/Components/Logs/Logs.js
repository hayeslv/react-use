// 日志容器
import { useState } from "react"
import Card from "../UI/Card"
import LogFilter from "./LogFilter/LogFilter"
import LogItem from "./LogItem/LogItem"
import "./Logs.css"

const Logs = (props) => {
  // 存储年份
  const [year, setYear] = useState(2022)

  let filterData = props.data.filter(item => item.date.getFullYear() === year)
  
  const changeYearHandler = (year) => {
    setYear(year)
  }
  
  let logItemData = filterData.map(
    (item, index) => <LogItem
      onDeleteLog={() => props.onDeleteLog(item.id)}
      key={item.id}
      {...item}
    ></LogItem>
  )

  if(logItemData.length === 0) {
    logItemData = <p className="no-logs">没有找到日志！</p>
  }

  return <Card className="logs">
    <LogFilter year={year} onYearChange={changeYearHandler} />
    { logItemData  }
  </Card>
}

export default Logs
