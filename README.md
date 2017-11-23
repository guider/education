# education

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

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




Can't find variable: SockJS vue项目

用的vue-cli(webpack-simple模板)，在开发环境运行（npm run dev），一直都没有问题，突然在ios的safari中调试，出现报错：
Can't find variable: SockJS
这是为什么呢？
原来这是webpack(我的版本：3.6.0)的报错，webpack的热加载是采用websocket来通知浏览器实现的， SockJS是一个必须的库。
这个问题属于意外吧，googel的话有很多方式来解决。最简单：
将webpack.config.js中的：

1
devtool: '#eval-source-map'
改为：

1
devtool:'inline-source-map'
