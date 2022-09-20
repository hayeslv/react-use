import React, {useImperativeHandle, useRef} from 'react'

const Some = React.forwardRef((props, ref) => {
  const inputRef = useRef()

  const clickHandler = () => {

  }

  // 
  useImperativeHandle(
    ref,
    () => { // 回调函数的返回值，会成为 ref
      return {
        changeInputValue(value) {
          inputRef.current.value = value
        }
      }
    },
  )

  return (
    <div>
      <h2>Some</h2>
      <input ref={inputRef} type="text" />
      {/* <button onClick={clickHandler}>Some Btn</button> */}
    </div>
  )
})

export default Some
