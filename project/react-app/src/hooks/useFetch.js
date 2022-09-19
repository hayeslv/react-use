import { useCallback, useState } from "react";

/**
 * @export
 * @param {*} reqObj
 *  { 
 *    url: 请求地址
 *    method: 请求方式
 *    header: 请求头
 *    body: 请求体
 *  }
 * @param {*} cb 回调函数，请求发送成功后执行
 * @returns
 */
export default function useFetch(reqObj, cb){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async (body) => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(`http://localhost:1337/api${reqObj.url}`, {
        method: reqObj.method || "get",
        headers: {
          "Content-type": "application/json",
          ...(reqObj.header || {})
        },
        body: body ? JSON.stringify({ data: body}) : null
      })

      if(res.ok) {
        const data = await res.json()
        setData(data.data)
        cb && (typeof cb === "function") && cb()
      } else {
        throw new Error("数据加载失败！")
      }
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    data,
    loading,
    error,
    fetchData
  }
}