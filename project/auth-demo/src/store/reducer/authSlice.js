import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoged: false,
    token: "",
    user: null
  },
  reducers: {
    login(state, action) {
      state.isLoged = true
      state.token = action.payload.token
      state.user = action.payload.user
    },
    logout(state, action) {
      state.isLoged = false
      state.token = null
      state.user = null
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice