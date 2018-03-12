import Vue from 'vue'
import Router from 'vue-router'
import NextPassages from '@/components/NextPassages'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'next-passages',
      component: NextPassages
    }
  ]
})
