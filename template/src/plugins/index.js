//插件通常会为 Vue 添加全局功能。插件的范围没有限制——一般有下面几种：

//添加全局方法或者属性，如: vue-custom-element
//添加全局资源：指令/过滤器/过渡等，如 vue-touch
//通过全局 mixin 方法添加一些组件选项，如: vue-router
//添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
//一个库，提供自己的 API，同时提供上面提到的一个或多个功能，如 vue-router

//Vue.js 的插件应当有一个公开方法 install 。
//这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：

import pluginCom from '../components/pluginCom'

var MyPlugin = {};
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function (param) {
    // 逻辑...
    if(isNaN(param)){
    	console.log(param+"不是数字,它的类型是"+ typeof param);
    }else{
    	console.log(param+"是个数字");
    }
  }

  // 2. 添加全局资源
  Vue.directive('font-size', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
      el.style.fontSize = binding.value + "px";
    }
    //...
  })

  // 3. 注入组件(这里是全局的，一般不这样做)
  Vue.mixin({
    /*created: function () {
      // 逻辑...
      console.log("组件调用了插件全局mixin中的created生命周期");
      this.hello();
    },*/
    methods: {
    	hello(){
    		console.log("插件向你打招呼了");
    	}
    },
    components: {
    	pluginCom
    }
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
    console.log("次函数的参数为",methodOptions);
  }
  
  
}

export default MyPlugin

//通过全局方法 Vue.use() 使用插件：

//// 调用 `MyPlugin.install(Vue)`
//Vue.use(MyPlugin)
//也可以传入一个选项对象：

//Vue.use(MyPlugin, { someOption: true })
//Vue.use 会自动阻止多次注册相同插件，届时只会注册一次该插件。

