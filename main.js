import Vue from 'vue'
import App from './App'
import http from './utils/https.js'
Vue.prototype.request = http
//引入vuex
//把vuex定义成全局组件
import store from './store'
Vue.prototype.$store = store


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
