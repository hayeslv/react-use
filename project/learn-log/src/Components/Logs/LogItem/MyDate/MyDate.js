import "./MyDate.css"

const Comp = (props) => {
  const { date } = props

  const month = date.toLocaleString("zh-CN", { month: "long" })
  const day = date.getDate()

  return <div className="date">
  <div className="month">
    {month}
  </div>
  <div className="day">
    {day}
  </div>
</div>
}

export default Comp
