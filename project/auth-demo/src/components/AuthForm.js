import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { useLoginMutation, useRegisterMutation } from '../store/api/authApi'
import { login } from '../store/reducer/authSlice'

export default function AuthForm() {
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [regFn, { error: regError }] = useRegisterMutation()
  const [loginFn, { error: loginError }] = useLoginMutation()
  const dispatch = useDispatch()
  // 获取Navigate
  const navigate = useNavigate()


  const formItemChange = (type, value) => {
    setForm({
      ...form,
      [type]: value
    })
  }

  const submitHandler = e => {
    e.preventDefault()
    

    if(isLoginForm) {
      loginFn({ identifier: form.username, password: form.password }).then(res => {
        if(!res.error) {
          // 登录成功后，需要向系统中添加一个标识，标记用户的登录状态
          dispatch(login(
            { token: res.data.jwt, user: res.data.user }
          ))

          navigate("/", { replace: true })
        }
      })
    } else {
      regFn(form).then(res => {
        if(!res.error) {
          // 注册成功
          setIsLoginForm(true)
        }
      })
    }
  }

  const jubpHandler = e => {
    e.preventDefault()
    setIsLoginForm(prevState => !prevState)
  }

  return (
    <div>
      <p style={{color: "red"}}>
        { regError && regError.data.error.message }
        { loginError && "用户名或密码错误" }
      </p>
      <h2>{ isLoginForm ? "登录" : "注册" }</h2>
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" placeholder="用户名" value={form.username} onChange={(e) => formItemChange("username", e.target.value)} />
        </div>
        {
          !isLoginForm && 
          <div>
            <input type="email" placeholder="电子邮件" value={form.email} onChange={(e) => formItemChange("email", e.target.value)} />
          </div>
        }
        <div>
          <input type="password" placeholder="密码" value={form.password} onChange={(e) => formItemChange("password", e.target.value)} />
        </div>
        <div>
          <button>登录</button>
          <a href='#' onClick={jubpHandler}>{ isLoginForm ? "点击注册" : "点击登录" }</a>
        </div>
      </form>
    </div>
  )
}
