import { useRef } from "react"

// React中的钩子函数只能用于函数组件或自定义钩子
// 钩子函数只能直接在函数组件中调用（不能嵌套在其他函数中）

// 当你需要一个对象不会因为组件的重新渲染而改变时，就可以使用useRef()

// react中获取元素dom对象
const Ref = () => {

  const h1Ref = useRef(); // 创建一个容器

  const handleClick = () => {
    h1Ref.current.innerText = "哈哈哈"
  }

  return <div>
    <h1 id="header" ref={h1Ref}>标题</h1>
    <button onClick={handleClick}>button</button>
  </div>
}

export default Ref
