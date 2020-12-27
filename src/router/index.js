import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Home =() => import('../views/home/Home')
const Bat =()=>import('../views/bat/Bat')
const Profile=()=>import('../views/profile/Profile')
const Category =()=>import('../views/category/Category')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/bat',
    name: 'Bat',
    component:Bat
  },
  {
    path: '/category',
    name: 'Category',
    component:Category
  },
  {
    path: '/profile',
    name: 'Profile',
    component:Profile
  }

]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router
