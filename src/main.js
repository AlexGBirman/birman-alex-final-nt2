import Vue from 'vue'
import App from './App.vue'

/* Bootstrap */
import './bootstrap'

/*vue-form */
import './form' 
import {router} from './router'

/* axios */
import './axios'

/* vue-router */
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app') //Inyecta el app en la vista
