// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element ui 及相关
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 生产环境productionTip
Vue.config.productionTip = false
// 使用 element ui
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 原来的 render:(h)=>(App)
  // 注册组件为import App from './App'导入的根组件
  components: { App },
  // 使用已注册的根组件
  template: '<App/>'
})
