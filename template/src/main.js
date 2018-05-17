// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index'
import store from './store/index'
import directives from './directives/autoFocus'
import myPlugin from './plugins'
Vue.use(myPlugin);

Object.keys(directives).forEach((curVal,index,arr)=>{
//	console.log(curVal,index,arr);
	Vue.directive(curVal,directives[curVal]);
})


FastClick.attach(document.body);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
//directives:{...directives},
//directives:directives,
  render: h => h(App)
}).$mount('#app-box')
