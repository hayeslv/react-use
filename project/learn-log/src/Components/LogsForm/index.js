import { useState } from "react"
import Card from "../UI/Card"
import "./index.css"

const LogsForm = () => {
  const [date, setDate] = useState("")
  const [desc, setDesc] = useState("")
  const [time, setTime] = useState("")

  const dateChangeHandler = (e) => {
    // inputDate = e.target.value
    setDate(e.target.value)
  }
  const descChangeHandler = (e) => {
    // inputDesc = e.target.value;
    setDesc(e.target.value)
  }
  const timeChangeHandler = (e) => {
    // inputTime = e.target.value;
    setTime(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newLog = {
      date,
      desc,
      time,
    }

    console.log(newLog);

    setDate("")
    setDesc("")
    setTime("")

    // 清空旧数据

  }

  return (
    <Card className="logs-form">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input id="date" type="date" value={date} onChange={dateChangeHandler} />
        </div>
        <div className="form-item">
          <label htmlFor="desc">内容</label>
          <input id="desc" type="text" value={desc} onChange={descChangeHandler} />
        </div>
        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input id="time" type="number" value={time} onChange={timeChangeHandler} />
        </div>
        <div className="form-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  )
}

export default LogsForm
