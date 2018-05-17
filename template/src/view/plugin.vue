<template>
	<div>
		<plugin-com>slot预留内容</plugin-com>
	</div>
</template>

<script>
	export default {
		created(){
			console.log("来自组件自己的created输出",222);
			this.hello();
		}
	}
</script>

<style>
	
</style>