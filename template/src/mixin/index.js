const mixin = {
	methods: {
		sayHello(){
//			window.alert("hello, from mixin!");
			console.log("hello, from mixin!");
		}
	},
	created(){
		//this.sayHello();
		console.log("来自mixin的created输出");
	}
}
/*const mixin2 = {
	methods: {
		hello(){
//			window.alert("hello, from mixin!");
			console.log("hello, from mixin!");
		}
	},
	created(){
		this.hello();
	}
}*/
export default mixin
//export { mixin as default}
//module.exports = {mixin,mixin2}

//混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。
	//混入对象可以包含任意组件选项。
	//当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。

//当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合。
//比如，数据对象在内部会进行浅合并 (一层属性深度)，在和组件的数据发生冲突时以组件数据优先。

//同名钩子函数将混合为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。

//值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象。
//两个对象键名冲突时，取组件对象的键值对。

//也可以全局注册混入对象。注意使用！ 一旦使用全局混入对象，将会影响到 所有 之后创建的 Vue 实例。
//使用恰当时，可以为自定义对象注入处理逻辑。

