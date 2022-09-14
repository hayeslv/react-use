// 日志容器
import LogItem from "./LogItem/LogItem"
import "./Logs.css"

const Logs = () => {
  


  const data = [
    { id: "001", date: new Date(2021, 1, 20, 18, 30), desc: "学习React", time: 30 },
    { id: "002", date: new Date(2022, 2, 21, 18, 30), desc: "学习Vue", time: 40 },
    { id: "003", date: new Date(2023, 3, 22, 18, 30), desc: "学习js", time: 50 },
  ]

  const logItemDate = data.map((item) => <LogItem key={item.id} {...item}></LogItem>)

 

  return <div className="logs">
    {
      logItemDate
    }
  </div>
}

export default Logs
