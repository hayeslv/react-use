import { REACT_ELEMENT } from './constants';
import { wrapToVdom } from './utils';
import { Component } from './Component';

function createElement(type, config, children) {
  let ref; // 用来获取真实DOM元素
  let key; // 用来实现DOM-DIFF，高效进行DOM比较
  if (config) {
    delete config.__source;
    delete config.__self;
    ref = config.ref;
    delete config.ref;
    key = config.key;
    delete config.key;
  }
  const props = { ...config };
  if (arguments.length > 3) {
    // 有多个children，此处就是一个数组
    props.children = Array.prototype.slice.call(arguments, 2).map(wrapToVdom);
  } else {
    // 如果只有一个children，则是对象或字符串
    // 如果没有，则是 undefined
    props.children = wrapToVdom(children);
  }

  return {
    $$typeof: REACT_ELEMENT, // 表示这是一个虚拟DOM，也就是说这是一个React元素
    type, // 虚拟DOM元素的类型
    ref,
    key,
    props, // 属性对象：id、className、style...
  };
}

const React = {
  createElement,
  Component,
};

export default React;
