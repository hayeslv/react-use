import { useState } from "react";


const UseState = () => {
  const [counter, setCounter] = useState(1)

  const add = () => {
    setTimeout(() => {
      setCounter(prevCounter => prevCounter + 1)
    }, 1000);
  }
  
  const less = () => {
    setCounter(counter-1)
  }

  return <div>
    {counter}
    <button onClick={less}>-</button>
    <button onClick={add}>+</button>
  </div>
}

export default UseState
