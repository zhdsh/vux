<template>
	<div>
		<input type="text" v-focus v-model="username" /><br />
		<!--{{username}}<br />-->
		<p v-zds-text="username" v-color="color"></p>
	</div>
</template>

<script>
	
export default{
	props:[],
	data(){
		return {
			username: "",
			color: "blue"
		}
	},
	methods:{
		
	}
}
</script>

<style scoped>

</style>