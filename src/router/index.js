import Vue from 'vue'
import Router from 'vue-router'


//vue的全局的插件或工具往往需要利用Vue.use去注册一下
Vue.use(Router)


import Home from '../components/pages/Home/Home.vue'
import Special from '../components/pages/Special/Special.vue'
import Classify from '../components/pages/Classify/Classify.vue'
import Buycar from '../components/pages/Buycar/Buycar.vue'
import Mine from '../components/pages/Mine/Mine.vue'
import NotFound from '../components/pages/NotFound/NotFound.vue'
import SearchKey from '../components/pages/Search/SearchKey.vue'
import Search from '../components/pages/Search/Search.vue'
import LoginRegister from '../components/pages/LoginRegister/LoginRegister.vue'
import Detail from '../components/pages/Detail/Detail.vue'


//创建路由实例，传入配置项，并把路由暴露出去
export default new Router({

  mode: 'history',//这条不写默认为hash模式

  //路由表，设置路由切换的规则
  routes: [
    {
      path: '/',//当浏览器的地址为'/'
      name: 'home',//给路由起的名字
      component: Home//渲染的组件为Home
    },
    {
      path: '/special',
      name: 'special',
      component: Special
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/buycar/:id/:name/:img/:price/:color',
      name: 'buycar',
      component: Buycar
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/search-key',
      name: 'search-key',
      component: SearchKey
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/login-register',
      name: 'login-register',
      component: LoginRegister
    },
    {
      path: '/detail/:id/:name/:img/:price/:color',//配置detail需要接收的参数，比如说id
      name: 'detail',
      component: Detail
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    // {
    //   path: '**',
    //   //路由重定向，当乱输入不存在的页面会统一返回一个类似404的页面, **表示其他path都匹配不到的时候就能匹配到他
    //   redirect: {name: 'not-found'}
    // }
  ]
})
