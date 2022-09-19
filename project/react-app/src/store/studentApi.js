// 这里的导入会自动帮我们生成钩子
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

// 创建Api对象
const studentApi = createApi({
  reducerPath: "studentApi", // Api的标识，不能和其他的Api或Reducer重复
  // 指定查询的基础信息，发送请求的使用工具
  baseQuery:  fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
  }), 
  // pendpoints用来指定Api中的各种功能，需要一个对象作为返回值
  endpoints(build) { // build是请求的构建器，通过build来设置请求的相关信息
    return {
      getStudents: build.query({
        query() {
          // 用来指定请求的子路径
          return "students"
        }
      }),
      // getStudentById: build.query(),
      // updateStudent: build.mutation()
    }
  }
})

export const {
  useGetStudentsQuery
} = studentApi

export default studentApi



