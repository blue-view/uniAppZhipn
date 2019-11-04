import Vue from 'vue'
import Vuex from 'vuex'
import user from'./user.js'
Vue.use(Vuex)

// home使用了命名空间
const store = new Vuex.Store({
    modules:{
		user 
    }
})
export default store