import Vue from 'vue'
import Router from 'vue-router'
import Quests from '@/components/Quests'
import Memories from '@/components/Memories'
import HyruleCompendium from '@/components/HyruleCompendium'
import Shrines from '@/components/Shrines'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/quests'
    },
    {
      path: '/quests',
      name: 'Quests',
      component: Quests
    },
    {
      path: '/memories',
      name: 'Memories',
      component: Memories
    },
    {
      path: '/hyrule-compendium',
      name: 'HyruleCompendium',
      component: HyruleCompendium
    },
    {
      path: '/shrines',
      name: 'Shrines',
      component: Shrines
    }
  ]
})
