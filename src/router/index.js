import Vue from 'vue'
import Router from 'vue-router'
const WebSDK = () => import('@/components/WebSDK')
const IFrame = () => import('@/components/IFrame')
const Main = () => import('@/pages/Main')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/iframe',
      name: 'iframe',
      component: IFrame
    },
    {
      path: '/websdk',
      props: true,
      name: 'websdk',
      component: WebSDK
    },
  ]
})
