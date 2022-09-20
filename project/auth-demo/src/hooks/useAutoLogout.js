import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/reducer/authSlice";

const useAutoLogout = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // 用来处理登录状态
  useEffect(() => {
    const timeout = auth.expirationTime - Date.now()

    if(timeout < 6000) {
      dispatch(logout())
      return
    }

    const timer = setTimeout(() => {
      dispatch(logout())
    }, timeout);

    return () => {
      clearTimeout(timer)
    }
  }, [auth]);
}

export default useAutoLogout