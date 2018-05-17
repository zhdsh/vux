<template>
	<div>
		<input type="text" v-model="username" v-focus /><br />
		原始值:{{ username }}<br />
		首字母大写: {{ username | capitalize }}<br />
		全大写:{{ username | aA(true) }}<br />
		全小写:{{ username | aA(false) }}<br />
		<!--<h1 v-zds-text="username | capitalize"></h1>-->
		<!--这种写法不对，不能用于这里，只能用于v-bind-->
		<div v-bind:name="username | capitalize">div的v-bind:name会变成一个自定义属性name</div>
		<br /><br />
		{{ time | longTime }}<br />
		{{ time | shortTime }}
	</div>
</template>

<script>
import  filters from '../filters/index'
console.log(filters)
export default{
	props:[],
	data(){
		return {
			username: "",
			time: "2018/05/16 15:39:18"
		}
	},
	methods:{
		
	},
	filters: filters, //组件内注册过滤器
	
}
</script>

<style scoped>

</style>