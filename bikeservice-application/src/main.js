import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage'
import AdminLogin from './components/AdminLogin'
import AdminPage from './components/AdminPage'
import UserLogin from './components/UserLogin'
import CreateAccount from './components/CreateAccount'
import axios from 'axios'

Vue.use(VueRouter)

axios.defaults.baseURL = "https://bike-service-apllication-default-rtdb.firebaseio.com/"

Vue.config.productionTip = false

const routes = [
  {path:'/',component:HomePage},
  {path:'/adminLogin',component:AdminLogin},
  {path:'/adminPage',component:AdminPage},
  {path:'/userLogin',component:UserLogin},
  {path:'/createAccount',component:CreateAccount},
  
]

export const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
