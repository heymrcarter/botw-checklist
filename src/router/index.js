import Vue from 'vue'
import Router from 'vue-router'
import Quests from '@/components/Quests'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quests',
      component: Quests
    }
  ]
})
