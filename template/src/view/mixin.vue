<template>
	<div>
		mixin
	</div>
</template>

<script>
import solid from '../mixin/index'
//import * as solid from '../mixin/index'
//console.log(mixin)
//console.log(solid,111)
export default{
	props:[],
	data(){
		return {
			
		}
	},
	//mixins: [mixin],
	methods:{
		
	},
	mounted(){
		//this.sayHello();
	},
	created(){
		console.log("组件内部的created输出，注意位置");
	}
}
</script>

<style scoped>

</style>