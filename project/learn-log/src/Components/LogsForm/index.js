import { useState } from "react"
import Card from "../UI/Card"
import "./index.css"

const LogsForm = (props) => {
  // const [date, setDate] = useState("")
  // const [desc, setDesc] = useState("")
  // const [time, setTime] = useState("")

  const [formData, setFormData] = useState({
    date: "",
    desc: "",
    time: ""
  })

  

  const dateChangeHandler = (e) => {
    // setDate(e.target.value)
    setFormData({
      ...formData,
      date: e.target.value
    })
  }
  const descChangeHandler = (e) => {
    // setDesc(e.target.value)
    setFormData({
      ...formData,
      desc: e.target.value
    })
  }
  const timeChangeHandler = (e) => {
    // setTime(e.target.value)
    setFormData({
      ...formData,
      time: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newLog = {
      date: new Date(formData.date),
      desc: formData.desc,
      time: +formData.time,
    }


    // 清空旧数据
    // setDate("")
    // setDesc("")
    // setTime("")

    setFormData({
      date: "",
      desc: "",
      time: ""
    })

    props.onSaveLog(newLog)

  }

  return (
    <Card className="logs-form">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input id="date" type="date" value={formData.date} onChange={dateChangeHandler} />
        </div>
        <div className="form-item">
          <label htmlFor="desc">内容</label>
          <input id="desc" type="text" value={formData.desc} onChange={descChangeHandler} />
        </div>
        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input id="time" type="number" value={formData.time} onChange={timeChangeHandler} />
        </div>
        <div className="form-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  )
}

export default LogsForm
