// // 使用RTK来构建store
// import { configureStore } from "@reduxjs/toolkit"
// import { schoolReducer } from "./schoolSlice"
// import { stuReducer } from "./stuSlice"

// // 创建store
// const store = configureStore({
//   reducer: {
//     student: stuReducer,
//     school: schoolReducer
//   }
// })

// export default store


import { configureStore } from "@reduxjs/toolkit"
import studentApi from "./studentApi"

const store = configureStore({
  reducer: {
    [studentApi.reducerPath]: studentApi.reducer
  },
  // 让缓存生效
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(studentApi.middleware)
  }
})

export default store