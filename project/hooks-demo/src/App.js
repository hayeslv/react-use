import { isPending } from '@reduxjs/toolkit';
import React, {useState, useMemo, useRef, useEffect, useLayoutEffect, useInsertionEffect, useDeferredValue, startTransition, useTransition} from 'react';
import Some from './components/Some';
import useMyHook from './hooks/useMyHook';



export default function App() {
  console.log("组件重新渲染了~~~")
  const [count, setCount] = useState(1)

  // useDeferredValue 需要一个 state 作为参数，会为该useDeferredValue创建一个延迟值
  // 当设置了延迟值后，每次state修改时都会触发两次重新渲染
  // 这两次执行对于其他的部分没有区别，但是延迟值两次执行的值是不同的
  // 第一次执行，延迟值是state的旧值，第二次执行，延迟值是state的新值
  const deferredCount = useDeferredValue(count)
  console.log(count, deferredCount)

  startTransition(() => {
    setCount(2)
  })

  const [isPending, startTransition] =  useTransition()

  // useMyHook()

  return (
    <div>
      <h1>App</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(prevState => prevState + 1)}>点我</button>
    </div>
  );
}
