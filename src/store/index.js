import Vue from 'vue'

import Vuex from 'vuex'

// vue的工具都需要use一下才能启用
Vue.use(Vuex)

//引进store的四个部分
// import state from './state.js'
// import mutations from './mutations.js'
// import actions from './actions.js'
// import getters from './getters.js'

// 引进分模块后的store
import divide from './divide'

//vuex里面有一个叫store的构造器
const store = new Vuex.Store ({
    // state,//state中保存的就是store需要管理的全局的状态
    // mutations,//mutations里的方法可以更改state参数，里面只能写同步操作
    // actions,//actions可以进行异步操作，操作的是mutations去更改state，自己不能直接更改
    // getters
    modules: {
        divide
    }
}) 

export default store 