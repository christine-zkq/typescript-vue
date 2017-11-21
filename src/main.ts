import Vue from 'vue'
// 导入 *.vue 文件的时候,需要写上.vue 后缀, TypeScript 默认只识别 *.ts 文件，不识别 *.vue 文件
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const init = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
