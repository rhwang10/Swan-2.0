import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Welcome from '@/components/Welcome'
import Playlist from '@/components/Playlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },

    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },

    {
      path: '/playlist',
      name: 'playlist',
      component: Playlist
    }
  ]
})
