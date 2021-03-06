// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Welcome from './components/Welcome'
import Playlist from './components/Playlist'
import About from './components/About'
import Search from './components/Search'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
{path: '/', component: Welcome},
{path: '/playlist', component: Playlist},
{path: '/about', component: About},
{path: '/search', component: Search}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
