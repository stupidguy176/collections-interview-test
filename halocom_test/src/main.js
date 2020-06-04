import Vue from 'vue'
import App from './App.vue'

import { createRouter } from './router'

import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueLodash from 'vue-lodash'
import lodash from 'lodash'

import * as filters from './util/filters'

Vue.config.productionTip = false

Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const router = createRouter()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
