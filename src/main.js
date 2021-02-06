import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios({
  url:'http://152.136.185.210:7878/api/m5/home/multidata'
}).then(res=>{
  console.log(res);
})
// axios.all([
//   axios(),
//   axios()
// ]).then(res=>{

// })