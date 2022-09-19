import React from 'react'
import "./store/index"
import { useSelector, useDispatch } from "react-redux"
import { setName as setStuName } from "./store/stuSlice"

export default function App1() {
  // const student = useSelector(state => state.student)
  // const school = useSelector(state => state.school)
  // 或者使用如下方式
  const { student, school } = useSelector(state => state)
  // 获取派发器对象
  const dispatch = useDispatch()
  // 获取action的构建器
  

  const setNameHandler = () => {
    dispatch(setStuName("沙和尚"))
  }

  return (
    <div>
      <p>
        {student.name} ---
        {student.age} ---
        {student.gender} ---
        {student.address}
      </p>
      <button onClick={setNameHandler}>修改name</button>

      <hr />

      <p>
        {school.name} ---
        {school.address} 
      </p>
    </div>
  )
}
