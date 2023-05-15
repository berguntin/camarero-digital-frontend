import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import CartView from '../views/CartView'
import AppCategories from '@/components/products/CategoryProductsComponent'
import MenuView from '@/views/MenuView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/products/:category',
    name: 'products',
    component: AppCategories, 
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
