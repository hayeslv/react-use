import React, {useState, useMemo} from 'react';
import Some from './components/Some';

function sum(a, b) {
  const begin = Date.now()
  while(1) {
    if(Date.now() - begin > 3000) {
      break
    }
  }

  console.log("函数执行了")
  return a+b
}

export default function App() {
  const [count, setCount] = useState(1)

  // let a = 123
  // let b = 456

  // if(count % 10 === 0) {
  //   a += count
  // }

  // const result = useMemo(() => {
  //   return sum(a, b)
  // }, [a, b])

  const someEle = useMemo(() => {
    return <Some a={10} b={22} />
  }, [])

  return (
    <div>
      <h1>App</h1>
      {someEle}
      {/* <h2>{result}</h2> */}
      <h3>{count}</h3>
      <button onClick={() => setCount(preState => preState + 1)}>点位</button>
    </div>
  );
}
