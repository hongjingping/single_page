import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homePage'
import Two from '@/components/two'
import Three from '@/components/three'
import Four from '@/components/four'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/two',
      name: 'Two',
      component: Two
    },
    {
      path: '/three',
      name: 'Three',
      component: Three
    },
    {
      path: '/four',
      name: 'Four',
      component: Four
    }
  ]
})
