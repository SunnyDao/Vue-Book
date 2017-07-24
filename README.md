# Vue API示例
```js
vue({
    //节点
    el,
    data,
    template,
    created,
    watch,

    //实例可用 自定义指令
    directives,

    //实例可用 过滤器
    filters,

    //实例可用 组件
    components,

    //方法事件处理器
    methods,

    //计算属性
    computed,
    
    firebase
})
```

```js
Vue.component('name', {
  //父组件传递的数据  
  props: ['size', 'myMessage'],
  //对象，类型检测
  props: {}
})
```

# vueapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

