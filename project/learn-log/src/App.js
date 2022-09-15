import ClassComp from "./Components/ClassComp"
import Logs from "./Components/Logs/Logs"
import LogsForm from "./Components/LogsForm"
import Ref from "./Components/Ref"
import UseState from "./Components/UseState"

import "./App.css"
import { useState } from "react"

export default function App() {
  const [logsData, setLogData] = useState([
    { id: "001", date: new Date(2021, 1, 20, 18, 30), desc: "学习React", time: 30 },
    { id: "002", date: new Date(2022, 2, 21, 18, 30), desc: "学习Vue", time: 40 },
    { id: "003", date: new Date(2023, 3, 22, 18, 30), desc: "学习js", time: 50 },
  ])

  // 将LogsForm中的数据传递给App组件
  const saveLogHandler = (newLog) => {
    newLog.id = Date.now() + ''
    // logsData.push(newLog)
    setLogData([newLog, ...logsData])

  }

  return <div className="app">
    {/* <Ref /> */}
    <LogsForm onSaveLog={saveLogHandler} />
    <Logs data={logsData} />
    {/* <UseState /> */}
    {/* <ClassComp /> */}
  </div>
}