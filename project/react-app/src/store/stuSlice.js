import { createSlice } from "@reduxjs/toolkit"

const stuSlice = createSlice({
  name: "stu", // 用来自动生成action中的type
  // state的初始值（当前切片的state）
  initialState: {
    name: "孙悟空",
    age: 18,
    gender: "男",
    address: "花果山"
  },
  // 指定state的各种操作
  reducers: {
    setName(state, action) {
      // 可以通过不同的方法来指定对state的不同操作
      // 这里的state是一个代理对象，可以直接修改
      state.name = action.payload // 不用复制其他的内容
    },
    setAge(state, action) {
      state.age = action.payload
    }
  }
})

export const { setName, setAge } = stuSlice.actions
export const { reducer: stuReducer } = stuSlice