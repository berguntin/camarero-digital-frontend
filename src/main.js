import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//Font Awesome config and imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false

/** 
 * Directiva personalizada
 * 
 * Permite capturar el click fuera del elemento para desencadenar una accion
 */
Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
