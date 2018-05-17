//过滤器
//Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。
//过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。
//过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：
//<!-- 在双花括号中 -->
//{{ message | capitalize }}
//
//<!-- 在 `v-bind` 中 -->
//<div v-bind:id="rawId | formatId"></div>

//过滤器可以串联：
//{{ message | filterA | filterB }}

//过滤器是 JavaScript 函数，因此可以接收参数：
//{{ message | filterA('arg1', arg2) }}
//这里，filterA 被定义为接收三个参数的过滤器函数。
//其中 message 的值作为第一个参数，普通字符串 'arg1' 作为第二个参数，表达式 arg2 的值作为第三个参数。

//可以在一个组件的选项中定义本地的过滤器：
//也可以在创建 Vue 实例之前全局定义过滤器：

const filters = {
	//首字母大写
	capitalize: function(value) {
		if (!value){
			return '';
		} 
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	},
	//大小写(两个参数)
	aA: function(value, flag){	//flag为true时，全大写，否则全小写
		if (!value){
			return '';
		}
		if(flag === true){
			return value.toUpperCase();
		}else{
			return value.toLowerCase();
		}
	},
	longTime: function(value){
		if (!value){
			return '';
		}
		return value;
	},
	shortTime: function(value){
		if (!value){
			return '';
		}
		return value.split(" ")[0];
//		return value.slice(0,10);
	}
}

export default filters