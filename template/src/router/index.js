import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloFromVux'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/d',
      name: 'directive',
      component: function(resolve){
      	require(['../view/directive'], resolve);
      }
    },
    {
      path: '/f',
      name: 'filter',
      component: function(resolve){
      	require(['../view/filter'], resolve);
      }
    },
    {
      path: '/m',
      name: 'mixin',
      component: function(resolve){
      	require(['../view/mixin'], resolve);
      }
    },
    {
      path: '/p',
      name: 'plugin',
      component: function(resolve){
      	require(['../view/plugin'], resolve);
      }
    }
  ]
})
