import axios from 'axios'
import Vue from 'vue';
import Qs from 'qs'

export const dev = true;



import {stringify} from 'qs'
// axios 配置
axios.defaults.timeout = 8000;
let baseURL = 'http://api.prguanjia.com';
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.log('请求404')
          break;
        case 500:
          console.log('请求500')
          break;
      }
    }
    console.log(error);
    return Promise.reject({code: '-100', message: '网络异常请稍后再试！'})
  }
);
// 请求时的拦截
axios.interceptors.request.use(function (config) {
  // 发送请求之前做一些处理
  return config;
}, function (error) {
  // 当请求异常时做一些处理
  return Promise.reject(error);
});


// 封装请求
function fetch(url, options, hideProgress) {

  // 显示
  if (!hideProgress) {
    Vue.$vux.loading.show({
      text: 'Loading'
    });
  }

  console.log(options ?  options.params : ' no params ');

  var opt = options || {};
  return new Promise((resolve, reject) => {

    axios({
      method: opt.type || 'get',
      url: url.includes('http')? url:'http://ti.prguanjia.com/'+url,
      // url: 'http://api.prguanjia.com/'+url,
      params: opt.type !=='post'? (opt.params) : {},
      // 判断是否有自定义头部，以对参数进行序列化。不定义头部，默认对参数序列化为查询字符串。
      // data: (opt.headers ? opt.data : stringify(opt.data)) || {},
      data: opt.params || {},
      responseType: opt.dataType || 'json',
      // 设置默认请求头
      headers: opt.headers || {'Content-Type': 'application/x-www-form-urlencoded'},
      // proxy: {
      //   host: 'api.prguanjia.com',
      //   port: 80
      // },
      transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
      }]
    })
      .then(response => {
        resolve(response.data)

        Vue.$vux.loading.showing=false;

        // if (response.data.code === 0) {
        // } else if (response.data.code === '000') {
        //   resolve(response.data)
        // } else {
        //   reject(response.data)
        // }
        // 隐藏
        Vue.$vux.loading.hide()

      })
      .catch(error => {
        Vue.$vux.loading.showing=false;
        console.log(error)
        reject(error)
        // 隐藏
        Vue.$vux.loading.hide()
      })
  })
}

export default fetch;
