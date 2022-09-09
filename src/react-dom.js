/* eslint-disable no-prototype-builtins */
import { REACT_TEXT } from './constants';

/**
 * 需要把虚拟DOM转换成真实DOM，并且插入容器中
 *
 * @param {*} vdom 虚拟DOM
 * @param {*} container 容器
 */
function render(vdom, container) {
  mount(vdom, container);
}
function mount(vdom, container) {
  const newDOM = createDOM(vdom);
  container.appendChild(newDOM);
}

function createDOM(vdom) {
  const { type, props } = vdom;
  let dom;
  if (type === REACT_TEXT) { // 文本
    dom = document.createTextNode(props);
  } else {
    dom = document.createElement(type);
  }

  if (props) {
    // 更新属性 DOM、老属性对象、新属性对象
    updateProps(dom, {}, props);
    // 更新children
    if (typeof props.children === 'object' && props.children.type) {
      // 说明只有一个children
      mount(props.children, dom);
    } else if (Array.isArray(props.children)) {
      // 协调子节点
      reconcileChildren(props.children, dom);
    }
  }

  return dom;
}

function reconcileChildren(children, parentDom) {
  for (let i = 0; i < children.length; i++) {
    mount(children[i], parentDom);
  }
}

// 更新属性
function updateProps(dom, oldProps = {}, newProps = {}) {
  for (const key in newProps) {
    if (key === 'children') continue; // 这里不处理儿子
    if (key === 'style') {
      const styleObj = newProps[key];
      // 更新dom的style
      for (const attr in styleObj) {
        dom.style[attr] = styleObj[attr];
      }
    } else {
      // 虚拟DOM的属性一般来说刚好和dom的属性是相同的，都是驼峰命名：例如className
      dom[key] = newProps[key];
    }
  }
  // 遍历完新的，再遍历老的
  for (const key in oldProps) {
    if (!newProps.hasOwnProperty(key)) { // 这个key在新属性上没有，则需要删除
      dom[key] = null;
    }
  }
}

const ReactDOM = {
  render,
};

export default ReactDOM;
