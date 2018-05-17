import Vue from 'vue'

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus();
  }
})
//上面这种写法，不需要导出，在main.js中直接引入就可以用了

//如果想注册局部指令，组件中也接受一个 directives 的选项：
	//directives: {
		//focus: {
		//  // 指令的定义
		//  inserted: function (el) {
		//    el.focus()
		//  }
		//}
	//}
const directives = {
	zdsText: {	//使用的时候需要写成v-zds-text
	  // 指令的定义
	  update: function (el, binding, vnode, oldVnode) {
//	  	console.log(binding.name, ...arguments);
	  	el.innerText = binding.value || "默认值";
	  }
	},
	color: {
		bind: function (el, binding, vnode, oldVnode) {
		  	el.style.color = binding.value || "red";
		}
	}
}
/*module.export = {
	directives
}*/
export {
	directives as default
}
//export default directives

//然后你可以在模板中任何元素上使用新的 v-focus 属性，如下：
//<input v-focus>

//钩子函数
//一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

	//bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
	//inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
	//update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
		//指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 。
	//componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
	//unbind：只调用一次，指令与元素解绑时调用。


//钩子函数参数
//指令钩子函数会被传入以下参数：

	//el：指令所绑定的元素，可以用来直接操作 DOM 。
	//binding：一个对象，包含以下属性：
		//name：指令名，不包括 v- 前缀。
		//value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
		//oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
		//expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
		//arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
		//modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
	//vnode：Vue 编译生成的虚拟节点。
	//oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

//除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。