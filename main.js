import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$request = async function(opts) {
	uni.showLoading({
		title: '加载中...',
		mask: true
	})
	let baseURL = "https://api-hmugo-web.itheima.net/api/public/v1"
	let res = await uni.request({
		url: baseURL + opts.url
	})
	uni.hideLoading()
	return res.data
}
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif