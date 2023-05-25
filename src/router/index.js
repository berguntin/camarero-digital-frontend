import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '@/views/LoginView';
import CartView from '@/views/CartView';
import AppCategories from '@/components/products/CategoryProductsComponent';
import MenuView from '@/views/MenuView';
import HomeView from '@/views/HomeView';
import jwtDecode from 'jwt-decode';
import store from '@/store';
import state from '@/store/state';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView,
  },
  {
    path: '/products/:category',
    name: 'products',
    component: AppCategories, 
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    meta: {
      requiresAuth: true
    }
    
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}); 

//Verifica validez del token para entrar en rutas protegidas
router.beforeEach((to, from, next) => {
  if(to.matched.some( record => record.meta.requiresAuth)){
      const localToken = localStorage.getItem('AuthToken');
      if(localToken){
        const decodedToken = jwtDecode(localToken);
        const dateNow = Date.now() / 1000; //segundos

        if(decodedToken.exp > dateNow){
          next()
        } else {
          const error = new Error('Tu sesión ha caducado!'); 
          store.dispatch('captureError', error);
          next({name: 'login'});
        }
      }
      else{
        next({ name: 'login'});
      }
    }
  else next();
})
//Maneja cambio de tableID en cualquier punto de la navegacion
router.beforeResolve( async (to, from, next) => {
  const tableID = to.query.tableID;
  if(tableID !== undefined && tableID !== state.tableID){
    try{ 
      store.dispatch('askForToken', to.query.tableID);
      store.dispatch('clearState');
      next()
    
    }catch(error){
      next({ name: 'login'})
    }
  }
  else next();
})

export default router
