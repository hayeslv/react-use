import { useGetStudentsQuery } from "./store/studentApi"

export default function App1() {
  // 调用Api查询数据
  const { data, isSuccess } = useGetStudentsQuery()

  return (
    <div>
      { isSuccess && data.data.map(v => <p key={v.id}>
        {v.attributes.name} --- 
        {v.attributes.age} --- 
        {v.attributes.gender} --- 
        {v.attributes.address} --- 
      </p>) }
    </div>
  )
}
