
const filters = {
	capitalize: function(value) {
		if (!value){
			return '';
		} 
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	},
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
	}
}

export default filters
