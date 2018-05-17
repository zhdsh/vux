<template>
	<div>
		<input type="text" v-model="username" v-focus /><br />
		
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
