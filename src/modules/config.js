// 全局配置文件

// 引入vue
import Vue from 'vue'

//swiper css 
import 'swiper/dist/css/swiper.min.css'

//全局通用样式
import '../stylesheets/main.scss'

//rem
import computed_rem from './rem' 
//执行rem函数
computed_rem()

//顶部
import './conmon'

//axios
import axios from 'axios'
Vue.prototype.$http = axios

//UITitle
import './UITitle'

//bottom
import './bottom'


Vue.config.productionTip = false