// 这里的导入会自动帮我们生成钩子
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

// 创建Api对象
const studentApi = createApi({
  reducerPath: 'studentApi', // Api的标识，不能和其他的Api或Reducer重复
  // 指定查询的基础信息，发送请求的使用工具
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api/',
    // 用来统一设置请求头
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if(token) {
        headers.set("Authorization", `Bearer ${token}`)
      }

      return headers
    }
  }),
  tagTypes: ['student'], // 用来指定Api中的标签类型
  // pendpoints用来指定Api中的各种功能，需要一个对象作为返回值
  endpoints(build) { // build是请求的构建器，通过build来设置请求的相关信息
    return {
      getStudents: build.query({
        query() {
          // 用来指定请求的子路径
          return 'students';
        },
        providesTags: ['student'], // 只要满足其中一个标签失效，就会重新加载数据
      }),
      // getStudentById: build.query(),
      delStudent: build.mutation({
        query(id) {
          return {
            url: `students/${id}`,
            method: 'delete',
          };
        },
      }),
      addStudent: build.mutation({
        query(stu) {
          return {
            url: 'students',
            method: 'post',
            body: { data: stu.attributes },
          };
        },
        invalidatesTags: ['student'], // 使标签失效：当我们调用addStudent去添加学生的时候，它会自动让“带student标签”的数据失效
      }),
      updateStudent: build.mutation({
        query(stu) {
          return {
            url: `students/${stu.id}`,
            method: 'put',
            body: { data: stu.attributes },
          };
        },
      }),
    };
  },
});

export const {
  useGetStudentsQuery,
  useAddStudentMutation,
  useUpdateStudentMutation,
} = studentApi;

export default studentApi;
