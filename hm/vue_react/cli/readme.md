# VUE + REACT CLI 命令行

- vue-cli  command line
  - 比较复杂的大型项目，不是简单的页面开发
    web app，而非page
  - npm init vite
    vite 快速构建前端项目，前端基建工具（工程化的核心套件）
    npm init 初始化项目 将初始化交给vite 这个工程化巨佬
    - 标准项目模板
      - 没必要每次都搞

    - 项目结构
      - package.json
        依赖
        - vue 3^ 开发和上线了都要
        - vite 开发阶段才用，上线后不需要（前端基建）vite 是包工头

    - 工程的不同生命周期
      - dev 开发阶段
      - test 测试
      - build 上线
      - online 运营维护

    - npm run dev vite
      - http协议 5173 index.html
       - 首页 website
       - 挂载点 #app
       - src/main.js 入口文件

      - src/main.js
        - src 开发目录
          开发的主战场
        - main.js 入口文件
          createApp.mount('#app')
        - App.vue
          .vue  专属后缀
          - 三段式
            - template 模板
            - script 逻辑
             响应式
             事件
            - css
        -  .vue 太好
        -  组件就是 > html的 页面构建模块
           组件是现在前端的开发新单元 （比html大）
           组件 = 由一个逻辑单元的html构成 + css + js （汉堡包，vue）

        - 现代前端拥抱组件思维， vue前端组件库
        - 组件按功能划分
        - 组件 = html(一堆) + css(一堆) + js(一堆)
        - .vue 三段式组合这个组件
        - 轮播图 功能属性凸显 经典组件
        - 前端的开发单位是组件，不是页面（页面可能会重复）
          不能以html为单位？ 单个功能弱小
        - 从工程化角度理解组件
          - 按功能块划分，好安排工作
          - 组件可以复用（.vue） import
          - 好维护
        - 组件以标签的方式嵌入页面
        - 可读性非常好