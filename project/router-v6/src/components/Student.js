import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMatch } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const STU_DATA = [
  { id: 1, name: "孙悟空" },
  { id: 2, name: "猪八戒" },
  { id: 3, name: "沙和尚" },
]

export default function Student() {
  const { id } = useParams()
  const stu = STU_DATA.find(v => v.id === +id)

  const match = useMatch("/student/:id")
  console.log(match)

  const nav = useNavigate()
  console.log(nav)

  return (
    <div>
      <h2>{id} --- {stu.name}</h2>
    </div>
  )
}
