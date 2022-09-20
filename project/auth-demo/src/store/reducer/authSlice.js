import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: () => {
    const token = localStorage.getItem("token")

    if(!token) {
      return {
        isLogged: false,
        token: "",
        user: null,
        expirationTime: 0 // 登录状态失效时间
      }
    }

    return {
      isLogged: true,
      token,
      user: JSON.parse(localStorage.getItem("user")),
      expirationTime: +localStorage.getItem("expirationTime")
    }

    
  },
  reducers: {
    login(state, action) {
      state.isLogged = true
      state.token = action.payload.token
      state.user = action.payload.user

      // 将数据同时存储到本地存储中
      localStorage.setItem("token", state.token)
      localStorage.setItem("user", JSON.stringify(state.user))

      // 设置登录的有效时间
      const currentTime = Date.now()
      const timeout = 1000 * 60 * 60 * 24 * 7 // 一周
      // const timeout = 7000
      state.expirationTime = currentTime + timeout // 设置失效日期
      localStorage.setItem("expirationTime", state.expirationTime)
    },
    logout(state, action) {
      state.isLogged = false
      state.token = null
      state.user = null
      
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      localStorage.removeItem("expirationTime")
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice