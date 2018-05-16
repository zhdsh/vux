export default {
	state: {
		userName: "zhangsan",
		userPass: "123456"
	},
	actions: {
		changeName: (state, preload) => {
			state.commit("", preload);
		}
	},
	mutations: {
		mutateName: (state, payload) => {
			state.userName = payload;
		}
	},
	getters: {
		getName: (state) => {
			return state.userName;
		}
	}
}
