# 星球大战

- <!DOCTYPE html>
 html5 版本申明头
- *
 css 通配符，所有元素
  margin 0 padding 0 所有元素初始化一致
  由于有不同的浏览器厂商，默认值不一样
  需要在页面样式开始之前，做一个样式reset 让任何浏览器访问，我们的页面都是一张白纸
  在所有浏览器上体验一致 

  * 性能不太好，所以我们宁愿列出来所有的标签

- 居中
 - 绝对定位 position: absolute;
  - 百分比相对于父元素
 - transform 变基属性
  - translate 移动
    x   左移  负 右移 正
    y   上移  负 下移 正
  