// 使用RTK来构建store
import { configureStore } from "@reduxjs/toolkit"
import { schoolReducer } from "./schoolSlice"
import { stuReducer } from "./stuSlice"

// 创建store
const store = configureStore({
  reducer: {
    student: stuReducer,
    school: schoolReducer
  }
})

export default store