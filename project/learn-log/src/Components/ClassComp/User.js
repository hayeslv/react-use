import React, { Component } from 'react'

export default class User extends Component {
  state = {
    counter: 0,
    test: "哈哈",
    obj: { name: "孙悟空", age: 18 }, 
  }

  divRef = React.createRef()

  addCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })

    console.log(this.divRef.current);
  }

  handleObj = () => {
    // 不是直接存在state中的内容，会丢失
    // this.setState({
    //   obj: { name: "沙和尚" }
    // })

    // 解决方法
    this.setState({
      obj: { ...this.state.obj, name: "沙和尚" }
    })
  }

  render() {
    return (
      <div ref={this.divRef}>
        <h1>{this.state.counter}---{this.state.test}</h1>
        <h2 onClick={this.handleObj}>{this.state.obj.name}---{this.state.obj.age}</h2>
        <button onClick={this.addCounter}>+</button>
        <ul>
          <li>姓名：{this.props.name}</li>
          <li>性别：{this.props.gender}</li>
          <li>年龄：{this.props.age}</li>
        </ul>
      </div>
    )
  }
}
